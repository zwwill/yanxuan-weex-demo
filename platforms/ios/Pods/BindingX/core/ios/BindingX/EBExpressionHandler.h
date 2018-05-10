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
#import "EBUtility.h"

typedef NS_ENUM(NSInteger, WXExpressionType) {
    WXExpressionTypeUndefined = -1,
    WXExpressionTypePan,
    WXExpressionTypeScroll,
    WXExpressionTypeTiming,
    WXExpressionTypeOrientation
};

@interface EBExpressionHandler : NSObject

@property (nonatomic, assign) WXExpressionType exprType;
@property (nonatomic, weak) id source;

@property (nonatomic, copy) NSDictionary *exitExpression;
@property (nonatomic, copy) EBKeepAliveCallback callback;
@property (nonatomic, strong) NSMapTable<id, NSDictionary *> *expressionMap;
@property (nonatomic, strong) NSDictionary *options;

- (instancetype)initWithExpressionType:(WXExpressionType)exprType
                                source:(id)source;

- (void)updateTargetExpression:(NSMapTable<id, NSDictionary *> *)expressionMap
                       options:(NSDictionary *)options
                exitExpression:(NSDictionary *)exitExpression
                      callback:(EBKeepAliveCallback)callback;

- (void)removeExpressionBinding;

+ (WXExpressionType)stringToExprType:(NSString *)typeStr;

+ (EBExpressionHandler *)handlerWithExpressionType:(WXExpressionType)exprType
                                            source:(id)source;

- (BOOL)executeExpression:(NSDictionary *)scope;

- (NSMutableDictionary *)generalScope;

@end

