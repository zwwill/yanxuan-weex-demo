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

#import "EBExpressionTiming.h"

@interface EBExpressionTiming ()

@property (nonatomic, strong) CADisplayLink *displayLink;
@property (nonatomic, assign) CFTimeInterval duration;

@end

@implementation EBExpressionTiming

- (instancetype)initWithExpressionType:(WXExpressionType)exprType
                                source:(id)source {
    if (self = [super initWithExpressionType:exprType source:source]) {
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(applicationWillResignActive:)
                                                     name:UIApplicationWillResignActiveNotification object:nil];
        
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(applicationDidBecomeActive:)
                                                     name:UIApplicationDidBecomeActiveNotification object:nil];
    }
    return self;
}

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)updateTargetExpression:(NSMapTable<id,NSDictionary *> *)targetExpression
         options:(NSDictionary *)options
       exitExpression:(NSDictionary *)exitExpression
             callback:(EBKeepAliveCallback)callback {
    [super updateTargetExpression:targetExpression
            options:options
          exitExpression:exitExpression
                callback:callback];
    
    [self initDisplayLink];
}

- (void)applicationWillResignActive:(NSNotification *)notification
{
    [self.displayLink setPaused:YES];
}

- (void)applicationDidBecomeActive:(NSNotification *)notification
{
    [self.displayLink setPaused:NO];
}

- (void)removeExpressionBinding {
    [super removeExpressionBinding];
    
    if (self.displayLink) {
        [self.displayLink invalidate];
        self.displayLink = nil;
    }
}

#pragma mark - Private methods
- (void)initDisplayLink {
    self.duration = 0;
    
    self.displayLink = [CADisplayLink displayLinkWithTarget:self selector:@selector(handleDisplay)];
    [self.displayLink addToRunLoop:[NSRunLoop mainRunLoop] forMode:NSRunLoopCommonModes];
    [self.displayLink setPaused:NO];
    
    [self fireStateChangedEvent:@"start"];
}

- (void)handleDisplay {
    @try {
        NSDictionary *scope = [self setUpScope];
        BOOL exit = ![self executeExpression:scope];
        if (exit) {
            [self.displayLink invalidate];
            self.displayLink = nil;
            [self fireStateChangedEvent:@"exit"];
        }
    } @catch (NSException *exception) {
        NSLog(@"%@",exception);
    }
}

- (NSDictionary *)setUpScope {
    NSMutableDictionary *scope = [self generalScope];
    
    self.duration += (self.displayLink.duration * 1000);
    [scope setValue:@(self.duration) forKey:@"t"];
    
    return [scope copy];
}

- (void)fireStateChangedEvent:(NSString *)state {
    NSDictionary *result = @{@"t": @(_duration),
                             @"state": state};
    
    if (self.callback) {
        self.callback(self.source, result, YES);
    }
}

@end
