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

#import <CoreMotion/CoreMotion.h>
#import "EBGyroVector3.h"
#import "EBGyroEuler.h"

@interface EBGyroQuaternion: NSObject

@property(nonatomic,assign) double x;
@property(nonatomic,assign) double y;
@property(nonatomic,assign) double z;
@property(nonatomic,assign) double w;

+ (instancetype)quaternionWithX:(double)x y:(double)y z:(double)z w:(double)w;

- (instancetype)setFromAxisAngle:(EBGyroVector3 *)axis angle:(double)angle;
- (instancetype)setFromEuler:(EBGyroEuler *)euler;
- (instancetype)multiply:(EBGyroQuaternion *)q p:(EBGyroQuaternion *)p;
- (instancetype)multiplyQuaternions:(EBGyroQuaternion *)a b:(EBGyroQuaternion *)b;

@end

