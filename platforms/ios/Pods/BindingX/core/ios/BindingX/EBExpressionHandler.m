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

#import "EBExpressionHandler.h"
#import "EBExpressionGesture.h"
#import "EBExpressionScroller.h"
#import "EBExpression.h"
#import "EBExpressionProperty.h"
#import "EBExpressionExecutor.h"
#import "EBExpressionScope.h"
#import "EBExpressionTiming.h"
#import "EBExpressionOrientation.h"
#import "EBUtility.h"

@interface EBExpressionHandler ()

@end

@implementation EBExpressionHandler

- (instancetype)initWithExpressionType:(WXExpressionType)exprType
                                source:(id)source {
    if (self = [super init]) {
        self.source = source;
        self.exprType = exprType;
    }
    return self;
}

- (void)updateTargetExpression:(NSMapTable<id, NSDictionary *> *)expressionMap
                       options:(NSDictionary *)options
                exitExpression:(NSDictionary *)exitExpression
                      callback:(EBKeepAliveCallback)callback {
    self.expressionMap = expressionMap;
    self.exitExpression = exitExpression;
    self.callback = callback;
    self.options = options;
}

- (void)removeExpressionBinding {
    self.expressionMap = nil;
}

+ (WXExpressionType)stringToExprType:(NSString *)typeStr {
    if ([@"pan" isEqualToString:typeStr]) {
        return WXExpressionTypePan;
    } else if ([@"scroll" isEqualToString:typeStr]) {
        return WXExpressionTypeScroll;
    } else if ([@"timing" isEqualToString:typeStr]) {
        return WXExpressionTypeTiming;
    } else if ([@"orientation" isEqualToString:typeStr]) {
        return WXExpressionTypeOrientation;
    }
    return WXExpressionTypeUndefined;
}

+ (EBExpressionHandler *)handlerWithExpressionType:(WXExpressionType)exprType
                                            source:(id)source {
    switch (exprType) {
        case WXExpressionTypePan:
            return [[EBExpressionGesture alloc] initWithExpressionType:exprType source:source];
        case WXExpressionTypeScroll:
            return [[EBExpressionScroller alloc] initWithExpressionType:exprType source:source];
        case WXExpressionTypeTiming:
            return [[EBExpressionTiming alloc] initWithExpressionType:exprType source:source];
        case WXExpressionTypeOrientation:
            return [[EBExpressionOrientation alloc] initWithExpressionType:exprType source:source];
        default:
            return [EBExpressionHandler new];
    }
}

- (BOOL)executeExpression:(NSDictionary *)scope {
    return [EBExpressionExecutor executeExpression:_expressionMap exitExpression:_exitExpression scope:scope];
}

- (NSMutableDictionary *)generalScope {
    return [EBExpressionScope generalScope];
}

@end

