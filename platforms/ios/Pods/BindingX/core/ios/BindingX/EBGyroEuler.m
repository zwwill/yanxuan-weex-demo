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

#import "EBGyroEuler.h"

#define ROTATION_ORDERS (@[@"XYZ",@"YZX",@"ZXY",@"XZY",@"YXZ",@"ZYX"])
#define DEFAULT_ORDER @"XYZ"

@implementation EBGyroEuler

+ (instancetype)eulerWithX:(double)x y:(double)y z:(double)z order:(NSString *)order {
    EBGyroEuler *euler = [[EBGyroEuler alloc] initWithX:x y:y z:z order:order];
    return euler;
}

- (instancetype)initWithX:(double)x y:(double)y z:(double)z order:(NSString *)order{
    if (self = [self init]) {
        [self setValueWithX:x y:y z:z order:order];
    }
    return self;
}

- (void)setValueWithX:(double)x y:(double)y z:(double)z order:(NSString *)order {
    self.x = x;
    self.y = y;
    self.z = z;
    self.order = [ROTATION_ORDERS containsObject:order] ? order : DEFAULT_ORDER;
}

@end
