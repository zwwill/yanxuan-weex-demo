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
#import <UIKit/UIKit.h>

@interface EBExpressionProperty : NSObject

@property (nonatomic, assign) BOOL isTransformChanged;
@property (nonatomic, assign) BOOL isTranslateChanged;
@property (nonatomic, assign) BOOL isRotateChanged;
@property (nonatomic, assign) BOOL isScaleChagned;

@property (nonatomic, assign) CGFloat tx;
@property (nonatomic, assign) CGFloat ty;
@property (nonatomic, assign) CGFloat sx;
@property (nonatomic, assign) CGFloat sy;
@property (nonatomic, assign) CGFloat angle;

@property (nonatomic, assign) BOOL isLeftChanged;
@property (nonatomic, assign) BOOL isTopChanged;
@property (nonatomic, assign) BOOL isWidthChanged;
@property (nonatomic, assign) BOOL isHeightChanged;

@property (nonatomic, assign) CGFloat left;
@property (nonatomic, assign) CGFloat top;
@property (nonatomic, assign) CGFloat width;
@property (nonatomic, assign) CGFloat height;

@property (nonatomic, assign) BOOL isBackgroundColorChanged;
@property (nonatomic, strong) NSObject *backgroundColor;

// color only for text
@property (nonatomic, assign) BOOL isColorChanged;
@property (nonatomic, strong) NSObject *color;

@property (nonatomic, assign) BOOL isAlphaChanged;
@property (nonatomic, assign) CGFloat alpha;

@property (nonatomic, assign) BOOL isContentOffsetXChanged;
@property (nonatomic, assign) BOOL isContentOffsetYChanged;
@property (nonatomic, assign) CGFloat contentOffsetX;
@property (nonatomic, assign) CGFloat contentOffsetY;

@property (nonatomic, assign) BOOL isRotateXChanged;
@property (nonatomic, assign) BOOL isRotateYChanged;
@property (nonatomic, assign) BOOL isPerspectiveChanged;
@property (nonatomic, assign) BOOL isTransformOriginChanged;
@property (nonatomic, assign) CGFloat rotateX;
@property (nonatomic, assign) CGFloat rotateY;
@property (nonatomic, assign) CGFloat perspective;
@property (nonatomic, strong) NSString *transformOrigin;

// border radius
@property (nonatomic, assign) CGFloat brTL;
@property (nonatomic, assign) BOOL isBRTLChanged;
@property (nonatomic, assign) CGFloat brTR;
@property (nonatomic, assign) BOOL isBRTRChanged;
@property (nonatomic, assign) CGFloat brBR;
@property (nonatomic, assign) BOOL isBRBRChanged;
@property (nonatomic, assign) CGFloat brBL;
@property (nonatomic, assign) BOOL isBRBLChanged;
@property (nonatomic, assign) CGFloat br;
@property (nonatomic, assign) BOOL isBRChanged;

@end
