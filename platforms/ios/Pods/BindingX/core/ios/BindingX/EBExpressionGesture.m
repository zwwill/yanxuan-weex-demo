/**
 * Copyright 2018 Alibaba Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#import "EBExpressionGesture.h"
#import "EBExpressionScope.h"
#import "EBExpression.h"
#import "EBExpressionExecutor.h"
#import "EBExpressionProperty.h"
#import "EBUtility.h"

@interface EBExpressionGesture () <UIGestureRecognizerDelegate>

@property (nonatomic, weak) id<UIGestureRecognizerDelegate> tmpDelegate;
@property (nonatomic, assign) BOOL isHorizontal;
@property (nonatomic, assign) BOOL isVertical;

@end

@implementation EBExpressionGesture {
    BOOL _isMutex;
}

- (instancetype)initWithExpressionType:(WXExpressionType)exprType
                                source:(id)source {
    if (self = [super initWithExpressionType:exprType source:source]) {
         [self initGesture];
    }
    return self;
}

- (void)dealloc {
    [_gesture removeTarget:self action:nil];
    _gesture.delegate = _tmpDelegate;
}

- (void)updateTargetExpression:(NSMapTable<id, NSDictionary *> *)expressionMap
                       options:(NSDictionary *)options
                exitExpression:(NSDictionary *)exitExpression
                      callback:(EBKeepAliveCallback)callback {
    [super updateTargetExpression:expressionMap
                          options:options
                   exitExpression:exitExpression
                         callback:callback];
    
    [self initGesture];
}

#pragma mark - public methods
- (void)removeExpressionBinding {
    [super removeExpressionBinding];
    
    if (self.tmpDelegate) {
        self.gesture.delegate = self.tmpDelegate;
        [self.gesture removeTarget:self action:nil];
        self.tmpDelegate = nil;
    }
    self.gesture = nil;
}

#pragma mark - private methods
- (void)initGesture {
    if (self.exprType == WXExpressionTypePan && !self.gesture) {
        __weak typeof(self) welf = self;
        [EBUtility performBlockOnMainThread:^{
            [welf addGuestureOnMainThread];
        }];
    }
}

-(void)addGuestureOnMainThread {
    self.gesture = [EBUtility getPanGestureForComponent:self.source callback:^(BOOL isHorizontal, BOOL isVertical) {
        _isHorizontal = isHorizontal;
        _isVertical = isVertical;

        if (_isHorizontal || _isVertical) {
            _isMutex = YES;
        } else {
            _isMutex = NO;
        }
    }];
    
    if (!self.gesture) {
        UIGestureRecognizer *panGesture = [[UIPanGestureRecognizer alloc] initWithTarget:self action:@selector(handleGesture:)];
        self.gesture = panGesture;
        self.gesture.delegate = self;
        
        UIView* view = [EBUtility getViewByRef:self.source];
        [view addGestureRecognizer:self.gesture];
    }
    
    if (self.gesture.delegate && self.gesture.delegate != self) {
        _tmpDelegate = self.gesture.delegate;
    }
    
    [self.gesture removeTarget:self action:nil];
    [self.gesture addTarget:self action:@selector(handleGesture:)];
    self.gesture.delegate = self;
}

- (void)fireStateChangedEvent:(UIGestureRecognizer *)sender {
    BOOL keepAlive = ![self isGestureEnded:sender.state];
    NSMutableDictionary *result = [[self gestureMap:sender] mutableCopy];
    result[@"state"] =  [self stateToString:sender.state];
    
    if (self.callback) {
        self.callback(self.source, result, keepAlive);
    }
    
    if (!keepAlive) {
        // free resouces
        self.expressionMap = nil;
        self.callback = nil;
    }
}

- (void)fireExitEvent:(UIGestureRecognizer *)sender {
    NSMutableDictionary *result = [[self gestureMap:sender] mutableCopy];
    result[@"state"] =  @"exit";
    
    if (self.callback) {
        self.callback(self.source, result, YES);
    }
}

- (NSDictionary *)gestureMap:(UIGestureRecognizer *)sender {
    if ([sender isKindOfClass:[UIPanGestureRecognizer class]]) {
        UIPanGestureRecognizer *pan = (UIPanGestureRecognizer *)sender;
        CGPoint offset = [pan translationInView:pan.view];

        CGFloat factor = [EBUtility factor];
        return @{@"deltaX":@(offset.x/factor),@"deltaY":@(offset.y/factor)};
    }
    return [NSDictionary dictionary];
}

#pragma mark - Gesture
- (BOOL)gestureRecognizerShouldBegin:(UIGestureRecognizer *)gestureRecognizer {
    if (gestureRecognizer == self.gesture) {
        if (self.exprType == WXExpressionTypePan && [gestureRecognizer isKindOfClass:[UIPanGestureRecognizer class]]) {
            if (!_isHorizontal && !_isVertical) {
                return YES;
            }
            
            CGPoint translation = [(UIPanGestureRecognizer*)_gesture translationInView:self.source];
            if (_isHorizontal && fabs(translation.y) > fabs(translation.x)) {
                return NO;
            } else if (_isVertical && fabs(translation.x) > fabs(translation.y)) {
                return NO;
            }
        }
    }
    return YES;
}

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldRequireFailureOfGestureRecognizer:(UIGestureRecognizer *)otherGestureRecognizer {
    if (self.exprType == WXExpressionTypePan && gestureRecognizer == self.gesture) {
        
        if (otherGestureRecognizer.view && [otherGestureRecognizer.view isKindOfClass:[UIScrollView class]]) {
            UIScrollView *scroller = (UIScrollView *)otherGestureRecognizer.view;
            
            // direction
            if (_isHorizontal && scroller.contentSize.width + scroller.contentInset.left +scroller.contentInset.right > scroller.frame.size.width
                && scroller.contentSize.height + scroller.contentInset.top + scroller.contentInset.bottom <= scroller.frame.size.height) {
                return YES;
            }
            
            if (_isVertical && scroller.contentSize.height > scroller.frame.size.height
                && scroller.contentSize.width <= scroller.frame.size.height) {
                return YES;
            }
        } else if (otherGestureRecognizer.delegate && [otherGestureRecognizer.delegate isKindOfClass:[EBExpressionGesture class]]) {
            if ([self isInnerPan:(UIPanGestureRecognizer *)otherGestureRecognizer otherPan:(UIPanGestureRecognizer *)gestureRecognizer]) {
                EBExpressionGesture *exprGesture = (EBExpressionGesture *)(otherGestureRecognizer.delegate);
                
                // direction
                if (_isHorizontal && exprGesture.isHorizontal) {
                    return YES;
                }
                
                if (_isVertical && exprGesture.isVertical) {
                    return YES;
                }
            }
        } else if(self.exprType == WXExpressionTypePan && [otherGestureRecognizer isKindOfClass:[UIPanGestureRecognizer class]]){
            if ([self isInnerPan:(UIPanGestureRecognizer *)otherGestureRecognizer otherPan:(UIPanGestureRecognizer *)gestureRecognizer]) {
                return YES;
            }
        }
    }
    return NO;
}

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldBeRequiredToFailByGestureRecognizer:(UIGestureRecognizer *)otherGestureRecognizer {
    if (self.exprType == WXExpressionTypePan && gestureRecognizer == self.gesture) {
        if ([otherGestureRecognizer isKindOfClass:NSClassFromString(@"UIScrollViewPanGestureRecognizer")]) {
            if (_isMutex) {
                return YES;
            }
        } else if (otherGestureRecognizer.delegate && [otherGestureRecognizer.delegate isKindOfClass:[EBExpressionGesture class]]) {
            if ([self isInnerPan:(UIPanGestureRecognizer *)gestureRecognizer otherPan:(UIPanGestureRecognizer *)otherGestureRecognizer]) {
                if (_isMutex) {
                    return YES;
                }
            }
        }
    }
    return NO;
}

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldReceiveTouch:(UITouch *)touch {
    return YES;
}

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldRecognizeSimultaneouslyWithGestureRecognizer:(UIGestureRecognizer *)otherGestureRecognizer {
    if (self.exprType == WXExpressionTypePan && gestureRecognizer == self.gesture) {
        if ([gestureRecognizer isKindOfClass:[UIPanGestureRecognizer class]]
            && [otherGestureRecognizer isKindOfClass:[UIPanGestureRecognizer class]]) {
            if (!_isMutex) {
                return YES;
            }
            return NO;
        }
    }
    
    return YES;
}

- (BOOL)isInnerPan:(UIPanGestureRecognizer *)pan otherPan:(UIPanGestureRecognizer *)otherPan {
    UIView *otherView = otherPan.view;
    UIView *parentView = pan.view.superview;
    
    while (parentView) {
        if (parentView == otherView) {
            return YES;
        }
        parentView = parentView.superview;
    }
    return NO;
}

- (void)handleGesture:(UIGestureRecognizer *)sender {
    if (sender.state == UIGestureRecognizerStateBegan || sender.state == UIGestureRecognizerStateEnded
        || sender.state == UIGestureRecognizerStateCancelled || sender.state == UIGestureRecognizerStateFailed) {
        [self fireStateChangedEvent:sender];
    } else if (sender.state == UIGestureRecognizerStateChanged) {
        @try {
            NSDictionary *scope = [self setUpScopeForGesture:sender];
            BOOL exit = ![self executeExpression:scope];
            if (exit) {
                [self fireExitEvent:sender];
                [self removeExpressionBinding];
            }
        } @catch (NSException *exception) {
            NSLog(@"%@",exception);
        }
    }
}

- (NSDictionary *)setUpScopeForGesture:(UIGestureRecognizer *)sender {
    NSMutableDictionary *scope = [self generalScope];
    
    if ([sender isKindOfClass:[UIPanGestureRecognizer class]]) {
        UIPanGestureRecognizer *pan = (UIPanGestureRecognizer *)sender;
        CGPoint offset = [pan translationInView:pan.view];
        
        CGFloat factor = [EBUtility factor];
        
        [scope setValue:@(offset.x / factor) forKey:@"x"];
        [scope setValue:@(offset.y / factor) forKey:@"y"];
    }
    
    return [scope copy];
}
        
- (NSString *)stateToString:(UIGestureRecognizerState)state {
    switch (state) {
        case UIGestureRecognizerStateBegan:
            return @"start";
        case UIGestureRecognizerStateChanged:
            return @"move";
        case UIGestureRecognizerStateEnded:
            return @"end";
        case UIGestureRecognizerStateCancelled:
            return @"cancel";
        case UIGestureRecognizerStateFailed:
            return @"fail";
        default:
            return @"unknown";
    }
}

- (BOOL)isGestureEnded:(UIGestureRecognizerState)state {
    return state == UIGestureRecognizerStateEnded
        || state == UIGestureRecognizerStateCancelled
        || state == UIGestureRecognizerStateFailed;
}

@end
