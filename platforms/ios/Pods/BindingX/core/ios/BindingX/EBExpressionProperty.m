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

#import "EBExpressionProperty.h"

@implementation EBExpressionProperty

- (instancetype)init {
    if (self = [super init]) {
        _sx = 1;
        _sy = 1;
    }
    return self;
}

#pragma mark - Setters
- (void)setTx:(CGFloat)tx {
    _tx = tx;
    _isTranslateChanged = YES;
    _isTransformChanged = YES;
}

- (void)setTy:(CGFloat)ty {
    _ty = ty;
    _isTranslateChanged = YES;
    _isTransformChanged = YES;
}

- (void)setSx:(CGFloat)sx {
    _sx = sx;
    _isScaleChagned = YES;
    _isTransformChanged = YES;
}

- (void)setSy:(CGFloat)sy {
    _sy = sy;
    _isScaleChagned = YES;
    _isTransformChanged = YES;
}

- (void)setAngle:(CGFloat)angle {
    _angle = angle;
    _isRotateChanged = YES;
    _isTransformChanged = YES;
}

- (void)setLeft:(CGFloat)left {
    _left = left;
    _isLeftChanged = YES;
}

- (void)setTop:(CGFloat)top {
    _top = top;
    _isTopChanged = YES;
}

- (void)setWidth:(CGFloat)width {
    _width = width;
    _isWidthChanged = YES;
}

- (void)setHeight:(CGFloat)height {
    _height = height;
    _isHeightChanged = YES;
}

- (void)setBackgroundColor:(NSString *)backgroundColor {
    _backgroundColor = backgroundColor;
    _isBackgroundColorChanged = YES;
}

- (void)setColor:(NSString *)color {
    _color = color;
    _isColorChanged = YES;
}

- (void)setAlpha:(CGFloat)alpha {
    _alpha = alpha > 0 ? alpha : 0;
    _isAlphaChanged = YES;
}

- (void)setContentOffsetX:(CGFloat)contentOffsetX {
    _contentOffsetX = contentOffsetX;
    _isContentOffsetXChanged = YES;
}

- (void)setContentOffsetY:(CGFloat)contentOffsetY {
    _contentOffsetY = contentOffsetY;
    _isContentOffsetYChanged = YES;
}

- (void)setPerspective:(CGFloat)perspective{
    _perspective = perspective;
    _isPerspectiveChanged = YES;
    _isTransformChanged = YES;
}

- (void)setRotateX:(CGFloat)rotateX{
    _rotateX = rotateX;
    _isRotateXChanged = YES;
    _isTransformChanged = YES;
}

- (void)setRotateY:(CGFloat)rotateY{
    _rotateY = rotateY;
    _isRotateYChanged = YES;
    _isTransformChanged = YES;
}

- (void)setTransformOrigin:(NSString *)transformOrigin{
    _transformOrigin = transformOrigin;
    _isTransformOriginChanged = YES;
}

- (void)setBrTL:(CGFloat)brTL {
    _brTL = brTL;
    _isBRTLChanged = YES;
}

- (void)setBrTR:(CGFloat)brTR {
    _brTR = brTR;
    _isBRTRChanged = YES;
}

- (void)setBrBR:(CGFloat)brBR {
    _brBR = brBR;
    _isBRBRChanged = YES;
}

- (void)setBrBL:(CGFloat)brBL {
    _brBL = brBL;
    _isBRBLChanged = YES;
}

- (void)setBr:(CGFloat)br {
    _br = br;
    _isBRChanged = YES;
}

@end
