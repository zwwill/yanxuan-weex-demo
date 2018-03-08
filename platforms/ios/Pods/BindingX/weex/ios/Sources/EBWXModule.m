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

#import "EBWXModule.h"
#import <WeexSDK/WeexSDK.h>
#import "EBExpressionHandler.h"
#import <pthread/pthread.h>
#import "EBBindData.h"
#import "EBUtility+WX.h"

@interface EBWXModule ()

@property (nonatomic, strong) EBBindData *bindData;

@end

@implementation EBWXModule {
    pthread_mutex_t mutex;
    pthread_mutexattr_t mutexAttr;
}

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(prepare:))
WX_EXPORT_METHOD_SYNC(@selector(bind:callback:))
WX_EXPORT_METHOD(@selector(unbind:))
WX_EXPORT_METHOD(@selector(unbindAll))
WX_EXPORT_METHOD_SYNC(@selector(supportFeatures))
WX_EXPORT_METHOD_SYNC(@selector(getComputedStyle:))

+ (void)load
{
    [WXSDKEngine registerModule:@"binding" withClass:EBWXModule.class];
    [WXSDKEngine registerModule:@"bindingx" withClass:EBWXModule.class];
}

- (instancetype)init {
    if (self = [super init]) {
        pthread_mutexattr_init(&mutexAttr);
        pthread_mutexattr_settype(&mutexAttr, PTHREAD_MUTEX_RECURSIVE);
        pthread_mutex_init(&mutex, &mutexAttr);
        _bindData = [EBBindData new];
    }
    return self;
}

- (void)dealloc {
    [self unbindAll];
    pthread_mutex_destroy(&mutex);
    pthread_mutexattr_destroy(&mutexAttr);
}

- (void)prepare:(NSDictionary *)dictionary {
    if (!dictionary) {
        WX_LOG(WXLogFlagWarning, @"prepare params error, need json input");
        return;
    }
    
    NSString *anchor = dictionary[@"anchor"];
    NSString *eventType = dictionary[@"eventType"];
    
    if ([WXUtility isBlankString:anchor] || [WXUtility isBlankString:eventType]) {
        WX_LOG(WXLogFlagWarning, @"prepare binding params error");
        return;
    }
    
    WXExpressionType exprType = [EBExpressionHandler stringToExprType:eventType];
    if (exprType == WXExpressionTypeUndefined) {
        WX_LOG(WXLogFlagWarning, @"prepare binding eventType error");
        return;
    }
    
    __weak typeof(self) welf = self;
    WXPerformBlockOnComponentThread(^{
        // find sourceRef & targetRef
        WXComponent *sourceComponent = [weexInstance componentForRef:anchor];
        if (!sourceComponent && (exprType == WXExpressionTypePan || exprType == WXExpressionTypeScroll)) {
            WX_LOG(WXLogFlagWarning, @"prepare binding can't find component");
            return;
        }
        
        pthread_mutex_lock(&mutex);
        
        EBExpressionHandler *handler = [welf.bindData handlerForToken:anchor expressionType:exprType];
        if (!handler) {
            // create handler for key
            handler = [EBExpressionHandler handlerWithExpressionType:exprType source:sourceComponent];
            [welf.bindData putHandler:handler forToken:anchor expressionType:exprType];
        }
        
        pthread_mutex_unlock(&mutex);
    });
    
}

- (NSDictionary *)bind:(NSDictionary *)dictionary
              callback:(WXKeepAliveCallback)callback {
    
    if (!dictionary) {
        WX_LOG(WXLogFlagWarning, @"bind params error, need json input");
        return nil;
    }
    
    NSString *eventType =  dictionary[@"eventType"];
    NSArray *props = dictionary[@"props"];
    NSString *token = dictionary[@"anchor"];
    NSDictionary *exitExpression = dictionary[@"exitExpression"];
    NSDictionary *options = dictionary[@"options"];
    
    if ([WXUtility isBlankString:eventType] || !props || props.count == 0) {
        WX_LOG(WXLogFlagWarning, @"bind params error");
        callback(@{@"state":@"error",@"msg":@"bind params error"}, NO);
        return nil;
    }
    
    WXExpressionType exprType = [EBExpressionHandler stringToExprType:eventType];
    if (exprType == WXExpressionTypeUndefined) {
        WX_LOG(WXLogFlagWarning, @"bind params handler error");
        callback(@{@"state":@"error",@"msg":@"bind params handler error"}, NO);
        return nil;
    }
    
    if ([WXUtility isBlankString:token]){
        if ((exprType == WXExpressionTypePan || exprType == WXExpressionTypeScroll)) {
            WX_LOG(WXLogFlagWarning, @"bind params handler error");
            callback(@{@"state":@"error",@"msg":@"anchor cannot be blank when type is pan or scroll"}, NO);
            return nil;
        } else {
            token = [[NSUUID UUID] UUIDString];
        }
    }
    
    __weak typeof(self) welf = self;
    WXPerformBlockOnComponentThread(^{
        
        // find sourceRef & targetRef
        WXComponent *sourceComponent = nil;
        NSString *instanceId = dictionary[@"instanceId"];
        if (instanceId) {
            WXSDKInstance *instance = [WXSDKManager instanceForID:instanceId];
            sourceComponent = [instance componentForRef:token];
        } else {
            sourceComponent = [weexInstance componentForRef:token];
        }
        if (!sourceComponent && (exprType == WXExpressionTypePan || exprType == WXExpressionTypeScroll)) {
            WX_LOG(WXLogFlagWarning, @"bind can't find source component");
            callback(@{@"state":@"error",@"msg":@"bind can't find source component"}, NO);
            return;
        }
        
        NSMapTable<id, NSDictionary *> *targetExpression = [NSMapTable new];
        for (NSDictionary *targetDic in props) {
            NSString *targetRef = targetDic[@"element"];
            NSString *property = targetDic[@"property"];
            NSDictionary *expression = targetDic[@"expression"];
            NSString *instanceId = targetDic[@"instanceId"];
            
            WXComponent *targetComponent = nil;
            if (instanceId) {
                WXSDKInstance *instance = [WXSDKManager instanceForID:instanceId];
                targetComponent = [instance componentForRef:targetRef];
            } else {
                targetComponent = [weexInstance componentForRef:targetRef];
            }
            if (targetComponent) {
                
                if ([targetComponent isViewLoaded]) {
                    WXPerformBlockOnMainThread(^{
                        [targetComponent.view.layer removeAllAnimations];
                    });
                }
                
                NSMutableDictionary *propertyDic = [[targetExpression objectForKey:targetComponent] mutableCopy];
                if (!propertyDic) {
                    propertyDic = [NSMutableDictionary dictionary];
                }
                NSMutableDictionary *expDict = [NSMutableDictionary dictionary];
                expDict[@"expression"] = [EBBindData parseExpression:expression];
                
                if( targetDic[@"config"] )
                {
                    expDict[@"config"] = targetDic[@"config"];
                }
                propertyDic[property] = expDict;
                [targetExpression setObject:propertyDic forKey:targetComponent];
            }
        }
        
        // find handler for key
        pthread_mutex_lock(&mutex);
        
        EBExpressionHandler *handler = [welf.bindData handlerForToken:token expressionType:exprType];
        if (!handler) {
            // create handler for key
            handler = [EBExpressionHandler handlerWithExpressionType:exprType source:sourceComponent];
            [welf.bindData putHandler:handler forToken:token expressionType:exprType];
        }
        
        [handler updateTargetExpression:targetExpression
                                options:options
                         exitExpression:[EBBindData parseExpression:exitExpression]
                               callback:^(id  _Nonnull source, id  _Nonnull result, BOOL keepAlive) {
                                   callback(result,keepAlive);
                               }];
        
        pthread_mutex_unlock(&mutex);
    });
    return @{@"token":token};
}

- (void)unbind:(NSDictionary *)dictionary {
    
    if (!dictionary) {
        WX_LOG(WXLogFlagWarning, @"unbind params error, need json input");
        return;
    }
    NSString* token = dictionary[@"token"];
    NSString* eventType = dictionary[@"eventType"];
    
    if ([WXUtility isBlankString:token] || [WXUtility isBlankString:eventType]) {
        WX_LOG(WXLogFlagWarning, @"disableBinding params error");
        return;
    }
    
    WXExpressionType exprType = [EBExpressionHandler stringToExprType:eventType];
    if (exprType == WXExpressionTypeUndefined) {
        WX_LOG(WXLogFlagWarning, @"disableBinding params handler error");
        return;
    }
    
    pthread_mutex_lock(&mutex);
    
    EBExpressionHandler *handler = [self.bindData handlerForToken:token expressionType:exprType];
    if (!handler) {
        WX_LOG(WXLogFlagWarning, @"disableBinding can't find handler handler");
        pthread_mutex_unlock(&mutex);
        return;
    }
    
    [handler removeExpressionBinding];
    [self.bindData removeHandler:handler forToken:token expressionType:exprType];
    
    pthread_mutex_unlock(&mutex);
}

- (void)unbindAll {
    pthread_mutex_lock(&mutex);
    
    [self.bindData unbindAll];
    
    pthread_mutex_unlock(&mutex);
}

- (NSArray *)supportFeatures {
    return EBsupportFeatures;
}

- (NSDictionary *)getComputedStyle:(NSString *)sourceRef {
    if ([WXUtility isBlankString:sourceRef]) {
        WX_LOG(WXLogFlagWarning, @"getComputedStyle params error");
        return nil;
    }
    
    __block NSMutableDictionary *styles = [NSMutableDictionary new];
    
    dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
    WXPerformBlockOnComponentThread(^{
        // find sourceRef & targetRef
        WXComponent *sourceComponent = [weexInstance componentForRef:sourceRef];
        if (!sourceComponent) {
            WX_LOG(WXLogFlagWarning, @"getComputedStyle can't find source component");
            dispatch_semaphore_signal(semaphore);
            return;
        }
        WXPerformBlockSyncOnMainThread(^{
            CALayer *layer = sourceComponent.view.layer;
            styles[@"translateX"] = [EBUtility transformFactor:@"transform.translation.x" layer:layer];
            styles[@"translateY"] = [EBUtility transformFactor:@"transform.translation.y" layer:layer];
            styles[@"scaleX"] = [layer valueForKeyPath:@"transform.scale.x"];
            styles[@"scaleY"] = [layer valueForKeyPath:@"transform.scale.y"];
            styles[@"rotateX"] = [layer valueForKeyPath:@"transform.rotation.x"];
            styles[@"rotateY"] = [layer valueForKeyPath:@"transform.rotation.y"];
            styles[@"rotateZ"] = [layer valueForKeyPath:@"transform.rotation.z"];
            styles[@"opacity"] = [layer valueForKeyPath:@"opacity"];
            
            styles[@"background-color"] = [EBUtility colorAsString:layer.backgroundColor];;
            if ([sourceComponent isKindOfClass:NSClassFromString(@"WXTextComponent")]) {
                Ivar ivar = class_getInstanceVariable(NSClassFromString(@"WXTextComponent"), "_color");
                UIColor *color = (UIColor *)object_getIvar(sourceComponent, ivar);
                if (color) {
                    styles[@"color"] = [EBUtility colorAsString:color.CGColor];
                }
            }
            
            dispatch_semaphore_signal(semaphore);
        });
    });
    
    dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
    return styles;
}

@end
