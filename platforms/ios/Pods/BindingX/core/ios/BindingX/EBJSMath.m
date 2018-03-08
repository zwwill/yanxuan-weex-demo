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
#import "EBJSMath.h"


@implementation EBJSMath : NSObject

+ (EBNativeFunction *)sin {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:sin([arguments[0] doubleValue])];
    }];
}

+ (EBNativeFunction *)cos {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        
        return [[NSNumber alloc] initWithDouble:cos([arguments[0] doubleValue])];
    }];
}

+ (EBNativeFunction *)tan {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:tan([arguments[0] doubleValue])];
    }];
}

+ (EBNativeFunction *)asin {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:asin([arguments[0] doubleValue])];
    }];
}

+ (EBNativeFunction *)acos {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        
        return [[NSNumber alloc] initWithDouble:acos([arguments[0] doubleValue])];
    }];
}

+ (EBNativeFunction *)atan {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:atan([arguments[0] doubleValue])];
    }];
}

+ (EBNativeFunction *)atan2 {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:atan2([arguments[0] doubleValue], [arguments[1] doubleValue])];
    }];
}
+ (EBNativeFunction *)pow {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:pow([arguments[0] doubleValue], [arguments[1] doubleValue])];
    }];
}
+ (EBNativeFunction *)exp {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:exp([arguments[0] doubleValue])];
    }];
}
+ (EBNativeFunction *)sqrt {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:sqrt([arguments[0] doubleValue])];
    }];
}
+ (EBNativeFunction *)cbrt {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:cbrt([arguments[0] doubleValue])];
    }];
}
+ (EBNativeFunction *)log {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:log([arguments[0] doubleValue])];
    }];
}
/*
+ (EBNativeFunction *)abs {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:abs([arguments[0] doubleValue])];
    }];
}
*/
+ (EBNativeFunction *)sign {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        double n = [arguments[0] doubleValue];
        return [[NSNumber alloc] initWithDouble:(n < 0) ? -1 : (n > 0) ? +1 : 0];
    }];
}
+ (EBNativeFunction *)ceil {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:ceil([arguments[0] doubleValue])];
    }];
}
+ (EBNativeFunction *)floor {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:floor([arguments[0] doubleValue])];
    }];
}
+ (EBNativeFunction *)round {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        return [[NSNumber alloc] initWithDouble:round([arguments[0] doubleValue])];
    }];
}

+ (EBNativeFunction *)max {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        if (arguments.count < 1) {
            return @(0);
        } else if (arguments.count < 2) {
            return (NSNumber *)arguments[0];
        } else {
            return @(MAX([arguments[0] doubleValue], [arguments[1] doubleValue]));
        }
    }];
}
+ (EBNativeFunction *)min {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        if (arguments.count < 1) {
            return @(0);
        } else if (arguments.count < 2) {
            return (NSNumber *)arguments[0];
        } else {
            return @(MIN([arguments[0] doubleValue], [arguments[1] doubleValue]));
        }
    }];
}

+ (EBNativeFunction *)abs {
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        if (arguments.count < 1) {
            return @(0);
        } else {
            return @(ABS([arguments[0] doubleValue]));
        }
    }];
}

@end
