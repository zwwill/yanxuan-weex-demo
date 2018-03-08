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

#include <math.h>
#import "EBNativeFunction.h"

@interface EBJSMath: NSObject

+ (EBNativeFunction *)sin;
+ (EBNativeFunction *)cos;
+ (EBNativeFunction *)tan;
+ (EBNativeFunction *)asin;
+ (EBNativeFunction *)acos;
+ (EBNativeFunction *)atan;
+ (EBNativeFunction *)atan2;

+ (EBNativeFunction *)pow;
+ (EBNativeFunction *)exp;
+ (EBNativeFunction *)log;
+ (EBNativeFunction *)sqrt;
+ (EBNativeFunction *)cbrt;

+ (EBNativeFunction *)floor;
+ (EBNativeFunction *)ceil;
+ (EBNativeFunction *)round;

+ (EBNativeFunction *)max;
+ (EBNativeFunction *)min;
+ (EBNativeFunction *)abs;
+ (EBNativeFunction *)sign;

@end
