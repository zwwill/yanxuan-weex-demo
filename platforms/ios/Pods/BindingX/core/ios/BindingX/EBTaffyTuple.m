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

#import "EBTaffyTuple.h"

@implementation EBTaffyTuple {
    __strong id *_a;
    __strong id *_b;
    __strong id *_c;
    __strong id *_d;
    __strong id *_e;
    __strong id *_f;
    __strong id *_g;
    __strong id *_h;
    __strong id *_i;
    __strong id *_j;
}

- (instancetype)initWithValues:(__strong id*)arg, ... {
    if (self = [super init]) {
        va_list paramList;
        va_start(paramList, arg);
        
        int index = 0;
        while (arg) {
            switch (index) {
                case 0:
                    _a = arg;
                    break;
                case 1:
                    _b = arg;
                    break;
                case 2:
                    _c = arg;
                    break;
                case 3:
                    _d = arg;
                    break;
                case 4:
                    _e = arg;
                    break;
                case 5:
                    _f = arg;
                    break;
                case 6:
                    _g = arg;
                    break;
                case 7:
                    _h = arg;
                    break;
                case 8:
                    _i = arg;
                    break;
                case 9:
                    _j = arg;
                    break;
                default:
                    break;
            }
            
            arg = va_arg(paramList, __strong id *);
            index++;
        }
        va_end(paramList);
    }
    return self;
}

#pragma mark - WXTaffyUnpacker
- (void)wxtf_unpack:(NSEnumerator *)enumerator {
    NSObject *next = nil;
    int i = 0;
    while ((next = enumerator.nextObject) != nil) {
        switch (i) {
            case 0:
                if (_a) {
                    *_a = next;
                }
                break;
            case 1:
                if (_b) {
                    *_b = next;
                }
                break;
            case 2:
                if (_c) {
                    *_c = next;
                }
                break;
            case 3:
                if (_d) {
                    *_d = next;
                }
                break;
            case 4:
                if (_e) {
                    *_e = next;
                }
                break;
            case 5:
                if (_f) {
                    *_f = next;
                }
                break;
            case 6:
                if (_g) {
                    *_g = next;
                }
                break;
            case 7:
                if (_h) {
                    *_h = next;
                }
                break;
            case 8:
                if (_i) {
                    *_i = next;
                }
                break;
            case 9:
                if (_j) {
                    *_j = next;
                }
                break;
            default:
                break;
        }
        i++;
    }
}

#pragma mark - public methods
- (void)unpackFrom:(id<EBTaffyPacker>)packer {
    [self wxtf_unpack:[packer wxtf_pack]];
}

@end
