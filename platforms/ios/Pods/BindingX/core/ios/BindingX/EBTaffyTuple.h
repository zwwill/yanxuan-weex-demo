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

#define PT_1(a) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, nil]
#define PT_2(a,b) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, nil]
#define PT_3(a,b,c) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, nil]
#define PT_4(a,b,c,d) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, (__strong id*)&d, nil]
#define PT_5(a,b,c,d,e) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, (__strong id*)&d, (__strong id*)&e, nil]
#define PT_6(a,b,c,d,e,f) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, (__strong id*)&d, (__strong id*)&e, (__strong id*)&f, nil]
#define PT_7(a,b,c,d,e,f,g) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, (__strong id*)&d, (__strong id*)&e, (__strong id*)&f, (__strong id*)&g, nil]
#define PT_8(a,b,c,d,e,f,g,h) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, (__strong id*)&d, (__strong id*)&e, (__strong id*)&f, (__strong id*)&g, (__strong id*)&h, nil]
#define PT_9(a,b,c,d,e,f,g,h,i) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, (__strong id*)&d, (__strong id*)&e, (__strong id*)&f, (__strong id*)&g, (__strong id*)&h, (__strong id*)&i, nil]
#define PT_10(a,b,c,d,e,f,g,h,i,j) [[EBTaffyTuple alloc] initWithValues:(__strong id*)&a, (__strong id*)&b, (__strong id*)&c, (__strong id*)&d, (__strong id*)&e, (__strong id*)&f, (__strong id*)&g, (__strong id*)&h, (__strong id*)&i, (__strong id*)&j, nil]

#define GET_PT_MACRO(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, NAME, ...) NAME
#define _(...) GET_PT_MACRO(__VA_ARGS__, PT_10, PT_9, PT_8, PT_7, PT_6, PT_5, PT_4, PT_3, PT_2, PT_1)(__VA_ARGS__)

@protocol EBTaffyUnpacker <NSObject>

- (void)wxtf_unpack:(NSEnumerator *)enumerator;

@end

@protocol EBTaffyPacker <NSObject>

- (NSEnumerator *)wxtf_pack;

@end

@interface EBTaffyTuple : NSObject

- (instancetype)initWithValues:(__strong id*)arg, ...;

- (void)unpackFrom:(id <EBTaffyPacker>)packer;

@end
