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

#import "EBUtility+WX.h"
#import <WeexSDK/WeexSDK.h>

@implementation EBUtility (WX)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wobjc-protocol-method-implementation"

+ (void)performBlockOnBridgeThread:(EBPerformBlock)block
{
    WXPerformBlockOnBridgeThread(^{
        block();
    });
}

+ (void)performBlockOnMainThread:(EBPerformBlock)block
{
    WXPerformBlockOnMainThread(^{
        block();
    });
}

+ (void)execute:(EBExpressionProperty *)model to:(id)target
{
    WXComponent *component = (WXComponent *)target;
    NSMutableDictionary *styles = [NSMutableDictionary dictionary];
    
    if (model.isTransformChanged) {
        NSString *transform = @"";
        if (model.isTranslateChanged) {
            transform = [NSString stringWithFormat:@"translate(%f,%f) ", model.tx, model.ty];
        }
        if (model.isRotateChanged) {
            transform = [transform stringByAppendingFormat:@"rotate(%fdeg) ", model.angle];
        }
        if (model.isScaleChagned) {
            transform = [transform stringByAppendingFormat:@"scale(%f, %f) ", model.sx, model.sy];
        }
        if (model.isRotateXChanged) {
            transform = [transform stringByAppendingFormat:@"rotatex(%fdeg) ", model.rotateX];
        }
        if (model.isRotateYChanged) {
            transform = [transform stringByAppendingFormat:@"rotatey(%fdeg) ", model.rotateY];
        }
        if (model.isPerspectiveChanged) {
            transform = [transform stringByAppendingFormat:@"perspective(%f) ", model.perspective];
        }
        styles[@"transform"] = transform;
    }
    if (model.isTransformOriginChanged) {
        styles[@"transformOrigin"] = model.transformOrigin;
    }
    if (model.isLeftChanged) {
        styles[@"left"] = @(model.left);
    }
    if (model.isTopChanged) {
        styles[@"top"] = @(model.top);
    }
    if (model.isWidthChanged) {
        styles[@"width"] = @(model.width);
    }
    if (model.isHeightChanged) {
        styles[@"height"] = @(model.height);
    }
    if (model.isBackgroundColorChanged) {
        styles[@"backgroundColor"] = [self makeColor:model.backgroundColor];
    }
    if (model.isColorChanged) {
        styles[@"color"] = [self makeColor:model.color];
    }
    if (model.isAlphaChanged) {
        styles[@"opacity"] = @(model.alpha);
    }
    if (model.isBRChanged) {
        styles[@"borderTopLeftRadius"] = @(model.br);
        styles[@"borderTopRightRadius"] = @(model.br);
        styles[@"borderBottomRightRadius"] = @(model.br);
        styles[@"borderBottomLeftRadius"] = @(model.br);
    }
    if (model.isBRTLChanged) {
        styles[@"borderTopLeftRadius"] = @(model.brTL);
    }
    if (model.isBRTRChanged) {
        styles[@"borderTopRightRadius"] = @(model.brTR);
    }
    if (model.isBRBRChanged) {
        styles[@"borderBottomRightRadius"] = @(model.brBR);
    }
    if (model.isBRBLChanged) {
        styles[@"borderBottomLeftRadius"] = @(model.brBL);
    }
    
    if (styles.count > 0) {
        WXComponent* component = nil;
        if ([target isKindOfClass:WXComponent.class]) {
            component = (WXComponent *)target;
        } else {
            return;
        }
        
        WXSDKInstance *weexInstance = component.weexInstance;
        if (!weexInstance) {
            return;
        }
        SEL componentSel = NSSelectorFromString(@"componentManager");
        typedef WXComponentManager *(*send_type)(id, SEL);
        send_type methodInstance = (send_type)[WXSDKInstance instanceMethodForSelector:componentSel];
        if (methodInstance) {
            WXComponentManager *componentManager = methodInstance(weexInstance, componentSel);
            if (componentManager) {
                if (styles.count > 0){
                    WXPerformBlockOnMainThread(^{
                        [componentManager handleStyleOnMainThread:[styles copy] forComponent:target isUpdateStyles:YES];
                        if ([component isKindOfClass:NSClassFromString(@"WXTextComponent")] && model.color) {
                            [component setNeedsDisplay];
                        }
                    });
                }
            }
        }
    }
    
    if ((model.isContentOffsetXChanged || model.isContentOffsetYChanged) && [component conformsToProtocol:@protocol(WXScrollerProtocol)]) {
        id<WXScrollerProtocol> scroller = (id<WXScrollerProtocol>)target;
        CGFloat offsetX = (model.isContentOffsetXChanged ? model.contentOffsetX : scroller.contentOffset.x);
        CGFloat offsetY = (model.isContentOffsetYChanged ? model.contentOffsetY : scroller.contentOffset.y);
        offsetX = MIN(offsetX, scroller.contentSize.width-component.view.frame.size.width);
        offsetX = MAX(0, offsetX);
        offsetY = MIN(offsetY, scroller.contentSize.height-component.view.frame.size.height);
        offsetY = MAX(0, offsetY);
        [scroller setContentOffset:CGPointMake(offsetX, offsetY) animated:NO];
    }
}

+ (CGFloat)factor
{
    return [WXUtility defaultPixelScaleFactor];
}

+ (UIPanGestureRecognizer *_Nullable)getPanGestureForSource:(id _Nullable )source callback:(EBGetPanGestureCallback)callback
{
    WXComponent *component = (WXComponent *)source;
    Ivar ivarPan = class_getInstanceVariable([component class], "_panGesture");
    id panObj = object_getIvar(component, ivarPan);
    
    if (!panObj || ![panObj isKindOfClass:[UIPanGestureRecognizer class]]) {
        SEL selector = NSSelectorFromString(@"addPanGesture");
        if ([component respondsToSelector:selector]) {
            [component performSelector:selector onThread:[NSThread mainThread] withObject:nil waitUntilDone:YES];
        }
        
        ivarPan = class_getInstanceVariable([component class], "_panGesture");
        panObj = object_getIvar(component, ivarPan);
    }
    
    if (panObj && [panObj isKindOfClass:[UIPanGestureRecognizer class]]) {
        callback(
                 [component.events containsObject:@"horizontalpan"],
                 [component.events containsObject:@"verticalpan"]
                 );
        return (UIPanGestureRecognizer *)panObj;
    }
    return nil;
}

+ (void)addScrollDelegate:(id<UIScrollViewDelegate>)delegate source:(id)source
{
    [source addScrollDelegate:delegate];
}

+ (void)removeScrollDelegate:(id<UIScrollViewDelegate>)delegate source:(id)source
{
    [source removeScrollDelegate:delegate];
}

+ (NSString *)makeColor:(NSObject *)result {
    NSNumber *r, *g, *b, *a = @(1);
    NSArray *colorArray = (NSArray *)result;
    if ([colorArray isKindOfClass:NSArray.class] && colorArray.count >= 3) {
        r = colorArray[0];
        g = colorArray[1];
        b = colorArray[2];
        if (colorArray.count > 3) {
            a = colorArray[3];
        }
    }
    return [NSString stringWithFormat:@"rgba(%d,%d,%d,%lf)", [r intValue],[g intValue],[b intValue],[a doubleValue]];
}

+ (NSNumber *)transformFactor:(NSString *)key layer:(CALayer* )layer {
    CGFloat factor = [WXUtility defaultPixelScaleFactor];
    id value = [layer valueForKeyPath:key];
    if(value){
        return [NSNumber numberWithDouble:([value doubleValue] / factor)];
    }
    return nil;
}

+ (NSString *)colorAsString:(CGColorRef)cgColor {
    const CGFloat *components = CGColorGetComponents(cgColor);
    return [NSString stringWithFormat:@"rgba(%d,%d,%d,%f)", (int)(components[0]*255), (int)(components[1]*255), (int)(components[2]*255), components[3]];
}

+ (UIView *)getViewByRef:(id)ref {
    if ([ref isKindOfClass:WXComponent.class]) {
        WXComponent* component = (WXComponent *)ref;
        return component.view;
    }
    return nil;
}

#pragma clang diagnostic pop
@end
