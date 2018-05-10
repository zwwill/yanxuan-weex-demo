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

#import "EBGyroVector3.h"

@implementation EBGyroVector3

+ (instancetype)vectorWithX:(double)x y:(double)y z:(double)z {
    EBGyroVector3 *vector3 = [[EBGyroVector3 alloc] initWithX:x y:y z:z];
    return vector3;
}

- (instancetype)initWithX:(double)x y:(double)y z:(double)z {
    if (self = [self init]) {
        self.x = x;
        self.y = y;
        self.z = z;
    }
    return self;
}

- (instancetype)applyQuaternionW:(double)qw x:(double)qx y:(double)qy z:(double)qz {
    double x = self.x, y = self.y, z = self.z;
    
    // calculate quat * vector
    
    double ix = qw * x + qy * z - qz * y;
    double iy = qw * y + qz * x - qx * z;
    double iz = qw * z + qx * y - qy * x;
    double iw = -qx * x - qy * y - qz * z;
    
    // calculate result * inverse quat
    
    self.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    self.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    self.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    
    return  self;
}

@end
