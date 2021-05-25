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

#import "EBExpressionScope.h"
#import "EBJSMath.h"
#import "EBJSTransform.h"
#import "EBJSEase.h"
#import "EBJSEvaluate.h"
#import <math.h>

@implementation EBExpressionScope

+ (NSMutableDictionary *)sharedScope {
    static NSMutableDictionary *sharedScope = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedScope = [[NSMutableDictionary alloc] init];
        
        [sharedScope setValue:@(M_PI) forKey:@"PI"];
        [sharedScope setValue:@(M_E) forKey:@"E"];
        
        [sharedScope setValue:EBJSMath.sin forKey:@"sin"];
        [sharedScope setValue:EBJSMath.cos forKey:@"cos"];
        [sharedScope setValue:EBJSMath.tan forKey:@"tan"];
        [sharedScope setValue:EBJSMath.asin forKey:@"asin"];
        [sharedScope setValue:EBJSMath.acos forKey:@"acos"];
        [sharedScope setValue:EBJSMath.atan forKey:@"atan"];
        [sharedScope setValue:EBJSMath.atan2 forKey:@"atan2"];
        
        [sharedScope setValue:EBJSMath.max forKey:@"max"];
        [sharedScope setValue:EBJSMath.min forKey:@"min"];
        [sharedScope setValue:EBJSMath.abs forKey:@"abs"];
        [sharedScope setValue:EBJSMath.sign forKey:@"sign"];
        
        [sharedScope setValue:EBJSMath.floor forKey:@"floor"];
        [sharedScope setValue:EBJSMath.ceil forKey:@"ceil"];
        [sharedScope setValue:EBJSMath.round forKey:@"round"];
        
        [sharedScope setValue:EBJSMath.pow forKey:@"pow"];
        [sharedScope setValue:EBJSMath.exp forKey:@"exp"];
        [sharedScope setValue:EBJSMath.log forKey:@"log"];
        [sharedScope setValue:EBJSMath.sqrt forKey:@"sqrt"];
        [sharedScope setValue:EBJSMath.cbrt forKey:@"cbrt"];

        [sharedScope setValue:EBJSTransform.asArray forKey:@"asArray"];
        [sharedScope setValue:EBJSTransform.asArray forKey:@"rgb"];
        [sharedScope setValue:EBJSTransform.asArray forKey:@"rgba"];
        [sharedScope setValue:EBJSTransform.translate forKey:@"translate"];
        [sharedScope setValue:EBJSTransform.scale forKey:@"scale"];
        [sharedScope setValue:EBJSTransform.matrix forKey:@"matrix"];
        
        [sharedScope setValue:EBJSEvaluate.evaluateColor forKey:@"evaluateColor"];
        
        [sharedScope setValue:EBJSEase.easeInQuad forKey:@"easeInQuad"];
        [sharedScope setValue:EBJSEase.easeOutQuad forKey:@"easeOutQuad"];
        [sharedScope setValue:EBJSEase.easeInOutQuad forKey:@"easeInOutQuad"];
        [sharedScope setValue:EBJSEase.easeInCubic forKey:@"easeInCubic"];
        [sharedScope setValue:EBJSEase.easeOutCubic forKey:@"easeOutCubic"];
        [sharedScope setValue:EBJSEase.easeInOutCubic forKey:@"easeInOutCubic"];
        [sharedScope setValue:EBJSEase.easeInQuart forKey:@"easeInQuart"];
        [sharedScope setValue:EBJSEase.easeOutQuart forKey:@"easeOutQuart"];
        [sharedScope setValue:EBJSEase.easeInOutQuart forKey:@"easeInOutQuart"];
        [sharedScope setValue:EBJSEase.easeInQuint forKey:@"easeInQuint"];
        [sharedScope setValue:EBJSEase.easeOutQuint forKey:@"easeOutQuint"];
        [sharedScope setValue:EBJSEase.easeInOutQuint forKey:@"easeInOutQuint"];
        [sharedScope setValue:EBJSEase.easeInSine forKey:@"easeInSine"];
        [sharedScope setValue:EBJSEase.easeOutSine forKey:@"easeOutSine"];
        [sharedScope setValue:EBJSEase.easeInOutSine forKey:@"easeInOutSine"];
        [sharedScope setValue:EBJSEase.easeInExpo forKey:@"easeInExpo"];
        [sharedScope setValue:EBJSEase.easeOutExpo forKey:@"easeOutExpo"];
        [sharedScope setValue:EBJSEase.easeInOutExpo forKey:@"easeInOutExpo"];
        [sharedScope setValue:EBJSEase.easeInCirc forKey:@"easeInCirc"];
        [sharedScope setValue:EBJSEase.easeOutCirc forKey:@"easeOutCirc"];
        [sharedScope setValue:EBJSEase.easeInOutCirc forKey:@"easeInOutCirc"];
        [sharedScope setValue:EBJSEase.easeInElastic forKey:@"easeInElastic"];
        [sharedScope setValue:EBJSEase.easeOutElastic forKey:@"easeOutElastic"];
        [sharedScope setValue:EBJSEase.easeInOutElastic forKey:@"easeInOutElastic"];
        [sharedScope setValue:EBJSEase.easeInBack forKey:@"easeInBack"];
        [sharedScope setValue:EBJSEase.easeOutBack forKey:@"easeOutBack"];
        [sharedScope setValue:EBJSEase.easeInOutBack forKey:@"easeInOutBack"];
        [sharedScope setValue:EBJSEase.easeInBounce forKey:@"easeInBounce"];
        [sharedScope setValue:EBJSEase.easeOutBounce forKey:@"easeOutBounce"];
        [sharedScope setValue:EBJSEase.easeInOutBounce forKey:@"easeInOutBounce"];
        [sharedScope setValue:EBJSEase.linear forKey:@"linear"];
        [sharedScope setValue:EBJSEase.cubicBezier forKey:@"cubicBezier"];
    });
    
    return sharedScope;
}

+ (NSMutableDictionary *)generalScope {
    return [[EBExpressionScope sharedScope] mutableCopy];
}

@end
