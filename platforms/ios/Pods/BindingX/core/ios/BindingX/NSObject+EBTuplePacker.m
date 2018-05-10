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

#import "NSObject+EBTuplePacker.h"
#import <UIKit/UIKit.h>

@implementation NSObject (EBTuplePacker)

#pragma mark - WXTaffyPacker
- (NSEnumerator *)wxtf_pack {
    if ([self isKindOfClass:[NSNumber class]] || [self isKindOfClass:[NSString class]]) {
        return [@[self] objectEnumerator];
    } else if ([self isKindOfClass:[NSArray class]]) {
        return [(NSArray *)self objectEnumerator];
    }
    return nil;
}

@end
