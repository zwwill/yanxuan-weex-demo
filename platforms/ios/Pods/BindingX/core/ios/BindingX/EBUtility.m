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

#import "EBUtility.h"

@implementation EBUtility

+ (void)performBlockOnBridgeThread:(EBPerformBlock)block {
    block();
}

+ (void)performBlockOnMainThread:(EBPerformBlock)block {
    block();
}

+ (BOOL)isBlankString:(NSString *)string {
    
    if (string == nil || string == NULL || [string isKindOfClass:[NSNull class]]) {
        return true;
    }
    if (![string isKindOfClass:[NSString class]]) {
        NSLog(@"%@ is not a string", string);
        return true;
    }
    if ([[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]] length] == 0) {
        return true;
    }
    
    return false;
}

+ (CGFloat)factor
{
    return 1;
}

+ (void)execute:(EBExpressionProperty *)model to:(id)target
{
    
}

+ (UIPanGestureRecognizer *_Nullable)getPanGestureForSource:(id _Nullable )source callback:(EBGetPanGestureCallback _Nonnull )callback
{
    return nil;
}

+ (void)addScrollDelegate:(id<UIScrollViewDelegate> _Nullable )delegate source:(id _Nullable )source
{
    
}

+ (void)removeScrollDelegate:(id<UIScrollViewDelegate> _Nullable )delegate source:(id _Nullable )source
{
    
}

+ (UIView *_Nullable)getViewByRef:(id _Nullable )ref
{
    return nil;
}

@end
