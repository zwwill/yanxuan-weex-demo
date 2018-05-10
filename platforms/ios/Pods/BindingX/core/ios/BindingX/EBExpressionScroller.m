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

#import "EBExpressionScroller.h"
#import "EBExpressionScope.h"
#import "EBExpression.h"
#import "EBExpressionProperty.h"
#import "EBExpressionExecutor.h"
#import "EBUtility.h"

@interface EBExpressionScroller () <UIScrollViewDelegate>

@property (nonatomic, assign) CGPoint lastOffset;
@property (nonatomic, assign) CGPoint lastDOffset;
@property (nonatomic, assign) CGPoint turnOffset;
@property (nonatomic, assign) BOOL turnChange;

@end

@implementation EBExpressionScroller

- (instancetype)initWithExpressionType:(WXExpressionType)exprType
                                source:(id)source {
    if (self = [super initWithExpressionType:exprType source:source]) {
        [self initScroller];
    }
    return self;
}

- (void)updateTargetExpression:(NSMapTable<id,NSDictionary *> *)expressionMap
                       options:(NSDictionary *)options
                exitExpression:(NSDictionary *)exitExpression
                      callback:(EBKeepAliveCallback)callback {
    [super updateTargetExpression:expressionMap
                          options:options
                   exitExpression:exitExpression
                         callback:callback];
    
    [self initScroller];
}

- (void)initScroller {
    [EBUtility addScrollDelegate:self source:self.source];
}

- (void)removeExpressionBinding {
    [EBUtility removeScrollDelegate:self source:self.source];
    
    if ([NSThread isMainThread]) {
        [self fireStateChangedEvent:@"end"];
    }
}

#pragma mark - UIScrollViewDelegate
- (void)scrollViewDidScroll:(UIScrollView *)scrollView {
    @try {
        _turnChange = false;
        NSDictionary *scope = [self setUpScope:scrollView];
        
        __block __weak typeof(self) welf = self;
        [EBUtility performBlockOnBridgeThread:^{
            if (self.turnChange) {
                [welf fireTurnEvent:scope];
                return;
            }
            BOOL exit = ![welf executeExpression:scope];
            if (exit) {
                [welf fireStateChangedEvent:@"exit"];
                return;
            }
        }];
    } @catch (NSException *exception) {
        NSLog(@"%@",exception);
    }
}

- (void)scrollViewWillBeginDragging:(UIScrollView *)scrollView {
    [self fireStateChangedEvent:@"start"];
}

- (NSDictionary *)setUpScope:(UIScrollView *)sender {
    NSMutableDictionary *scope = [self generalScope];
    CGFloat factor = [EBUtility factor];
    
    CGPoint offset = sender.contentOffset;
    CGPoint dOffset = CGPointMake(offset.x - _lastOffset.x, offset.y - _lastOffset.y);
    
    if ( (dOffset.x>0 && _lastDOffset.x<0) || (dOffset.x<0 && _lastDOffset.x>0) ) {
        _turnOffset.x = _lastOffset.x;
        _turnChange = true;
    }
    if ( (dOffset.y>0 && _lastDOffset.y<0) || (dOffset.y<0 && _lastDOffset.y>0) ) {
        _turnOffset.y = _lastOffset.y;
        _turnChange = true;
    }
    
    [scope setValue:@(offset.x / factor) forKey:@"x"];
    [scope setValue:@(offset.y / factor) forKey:@"y"];
    [scope setValue:@(dOffset.x / factor) forKey:@"dx"];
    [scope setValue:@(dOffset.y / factor) forKey:@"dy"];
    [scope setValue:@((offset.x - _turnOffset.x) / factor) forKey:@"tdx"];
    [scope setValue:@((offset.y - _turnOffset.y) / factor) forKey:@"tdy"];
    _lastOffset = offset;
    _lastDOffset = dOffset;
    
    return [scope copy];
}

- (void)fireStateChangedEvent:(NSString *)state {
    CGFloat factor = [EBUtility factor];
    NSDictionary *result = @{@"x": @(_lastOffset.x / factor),
                             @"y": @(_lastOffset.y / factor),
                             @"state": state};
    
    if (self.callback) {
        self.callback(self.source, result, YES);
    }
}

- (void)fireTurnEvent:(NSDictionary* )scope {
    NSDictionary *result = @{
                             @"x": scope[@"x"],
                             @"y": scope[@"y"],
                             @"dx": scope[@"dx"],
                             @"dy": scope[@"dy"],
                             @"tdx": scope[@"tdx"],
                             @"tdy": scope[@"tdy"],
                             @"state": @"turn"
                             };
    if (self.callback) {
        self.callback(self.source, result, YES);
    }
}

@end
