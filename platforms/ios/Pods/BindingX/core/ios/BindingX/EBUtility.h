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

#import <Foundation/Foundation.h>
#import "EBExpressionProperty.h"

typedef void (^EBKeepAliveCallback)(_Nonnull id source ,_Nonnull id result, BOOL keepAlive);
typedef void (^EBGetPanGestureCallback)(BOOL isHorizontal, BOOL isVertical);

typedef void (^EBPerformBlock)(void);

@interface EBUtility: NSObject

+ (void)performBlockOnBridgeThread:(EBPerformBlock _Nullable )block;

+ (void)performBlockOnMainThread:(EBPerformBlock _Nonnull )block;

+ (BOOL)isBlankString:(NSString *_Nullable)string;

+ (CGFloat)factor;

+ (void)execute:(EBExpressionProperty *_Nullable)model to:(id _Nullable )target;

+ (UIPanGestureRecognizer *_Nullable)getPanGestureForComponent:(id _Nullable )source callback:(EBGetPanGestureCallback _Nonnull )callback;

+ (void)addScrollDelegate:(id<UIScrollViewDelegate> _Nullable )delegate source:(id _Nullable )source;

+ (void)removeScrollDelegate:(id<UIScrollViewDelegate> _Nullable )delegate source:(id _Nullable )source;

+ (UIView *_Nullable)getViewByRef:(id _Nullable )ref;

@end


