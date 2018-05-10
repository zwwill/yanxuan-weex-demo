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

#import "EBJSEase.h"

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunsequenced"

double easeInQuad(double t,double b,double c,double d) {
    return c*(t/=d)*t + b;
}

double easeOutQuad(double t,double b,double c,double d) {
    return -c *(t/=d)*(t-2) + b;
}

double easeInOutQuad(double t,double b,double c,double d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
}

double easeInCubic(double t,double b,double c,double d) {
    return c*(t/=d)*t*t + b;
}

double easeOutCubic(double t,double b,double c,double d) {
    return c*((t=t/d-1)*t*t + 1) + b;
}

double easeInOutCubic(double t,double b,double c,double d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
}

double easeInQuart(double t,double b,double c,double d) {
    return c*(t/=d)*t*t*t + b;
}

double easeOutQuart(double t,double b,double c,double d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
}

double easeInOutQuart(double t,double b,double c,double d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
}

double easeInQuint(double t,double b,double c,double d) {
    return c*(t/=d)*t*t*t*t + b;
}

double easeOutQuint(double t,double b,double c,double d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
}

double easeInOutQuint(double t,double b,double c,double d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
}

double easeInSine(double t,double b,double c,double d) {
    return -c * cos(t/d * (M_PI/2)) + c + b;
}

double easeOutSine(double t,double b,double c,double d) {
    return c * sin(t/d * (M_PI/2)) + b;
}

double easeInOutSine(double t,double b,double c,double d) {
    return -c/2 * (cos(M_PI*t/d) - 1) + b;
}

double easeInExpo(double t,double b,double c,double d) {
    return (t==0) ? b : c * pow(2, 10 * (t/d - 1)) + b;
}

double easeOutExpo(double t,double b,double c,double d) {
    return (t==d) ? b+c : c * (-pow(2, -10 * t/d) + 1) + b;
}

double easeInOutExpo(double t,double b,double c,double d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * pow(2, 10 * (t - 1)) + b;
    return c/2 * (-pow(2, -10 * --t) + 2) + b;
}

double easeInCirc(double t,double b,double c,double d) {
    return -c * (sqrt(1 - (t/=d)*t) - 1) + b;
}

double easeOutCirc(double t,double b,double c,double d) {
    return c * sqrt(1 - (t=t/d-1)*t) + b;
}

double easeInOutCirc(double t,double b,double c,double d) {
    if ((t/=d/2) < 1) return -c/2 * (sqrt(1 - t*t) - 1) + b;
    return c/2 * (sqrt(1 - (t-=2)*t) + 1) + b;
}

double easeInElastic(double t,double b,double c,double d) {
    double s=1.70158;double p=0;double a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < fabs(c)) { a=c; s=p/4; }
    else s = p/(2*M_PI) * asin (c/a);
    return -(a*pow(2,10*(t-=1)) * sin( (t*d-s)*(2*M_PI)/p )) + b;
}

double easeOutElastic(double t,double b,double c,double d) {
    double s=1.70158;double p=0;double a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < fabs(c)) { a=c; s=p/4; }
    else s = p/(2*M_PI) * asin (c/a);
    return a*pow(2,-10*t) * sin( (t*d-s)*(2*M_PI)/p ) + c + b;
}

double easeInOutElastic(double t,double b,double c,double d) {
    double s=1.70158;double p=0;double a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < fabs(c)) { a=c; s=p/4; }
    else s = p/(2*M_PI) * asin (c/a);
    if (t < 1) return -.5*(a*pow(2,10*(t-=1)) * sin( (t*d-s)*(2*M_PI)/p )) + b;
    return a*pow(2,-10*(t-=1)) * sin( (t*d-s)*(2*M_PI)/p )*.5 + c + b;
}

double easeInBack(double t,double b,double c,double d) {
    double s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
}

double easeOutBack(double t,double b,double c,double d) {
    double s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}

double easeInOutBack(double t,double b,double c,double d) {
    double s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
}

double easeOutBounce(double t,double b,double c,double d) {
    if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
}

double easeInBounce(double t,double b,double c,double d) {
    return c - easeOutBounce(d-t, 0, c, d) + b;
}

double easeInOutBounce(double t,double b,double c,double d) {
    if (t < d/2) return easeInBounce(t*2, 0, c, d) * .5 + b;
    return easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
}

double linear(double t,double b,double c,double d) {
    return c*t/d + b;
}

double curveX(double t,double x1,double x2){
    double v = 1 - t;
    return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
}

double curveY(double t,double y1,double y2){
    double v = 1 - t;
    return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
}

double derivativeCurveX (double t, double x1, double x2) {
    double v = 1 - t;
    return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
};

double bezier(double x1,double y1,double x2,double y2,double epsilon,double t){
    double x = t,t0, t1, t2, xx, d2, i;
    
    // First try a few iterations of Newton's method -- normally very fast.
    for (t2 = x, i = 0; i < 8; i++) {
        xx = curveX(t2,x1,x2) - x;
        if (fabs(xx) < epsilon) return curveY(t2,y1,y2);
        d2 = derivativeCurveX(t2,x1,x2);
        if (fabs(d2) < 1e-6) break;
        t2 = t2 - xx / d2;
    }
    t0 = 0;
    t1 = 1;
    t2 = x;
    if (t2 < t0) return curveY(t0,y1,y2);
    if (t2 > t1) return curveY(t1,y1,y2);
    
    // Fallback to the bisection method for reliability.
    while (t0 < t1) {
        xx = curveX(t2,x1,x2);
        if (fabs(xx - x) < epsilon) return curveY(t2,y1,y2);
        if (x > xx) t0 = t2;
        else t1 = t2;
        t2 = (t1 - t0) * .5 + t0;
    }
    // Failure
    return curveY(t2,y1,y2);
}


#pragma clang diagnostic pop

#define WX_EASE(expression) \
return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){\
double t = [arguments[0] doubleValue];\
double b = [arguments[1] doubleValue];\
double c = [arguments[2] doubleValue];\
double d = [arguments[3] doubleValue];\
t = MIN(t, d);\
return [[NSNumber alloc] initWithDouble:expression(t,b,c,d)];\
}];

#define WX_EASE_NATIVEFUNCTION(expression) +(EBNativeFunction *)expression{WX_EASE(expression)}

@implementation EBJSEase

+(EBNativeFunction *)easeInQuad{WX_EASE(easeInQuad)}
+(EBNativeFunction *)easeOutQuad{WX_EASE(easeOutQuad)}
+(EBNativeFunction *)easeInOutQuad{WX_EASE(easeInOutQuad)}
+(EBNativeFunction *)easeInCubic{WX_EASE(easeInCubic)}
+(EBNativeFunction *)easeOutCubic{WX_EASE(easeOutCubic)}
+(EBNativeFunction *)easeInOutCubic{WX_EASE(easeInOutCubic)}
+(EBNativeFunction *)easeInQuart{WX_EASE(easeInQuart)}
+(EBNativeFunction *)easeOutQuart{WX_EASE(easeOutQuart)}
+(EBNativeFunction *)easeInOutQuart{WX_EASE(easeInOutQuart)}
+(EBNativeFunction *)easeInQuint{WX_EASE(easeInQuint)}
+(EBNativeFunction *)easeOutQuint{WX_EASE(easeOutQuint)}
+(EBNativeFunction *)easeInOutQuint{WX_EASE(easeInOutQuint)}
+(EBNativeFunction *)easeInSine{WX_EASE(easeInSine)}
+(EBNativeFunction *)easeOutSine{WX_EASE(easeOutSine)}
+(EBNativeFunction *)easeInOutSine{WX_EASE(easeInOutSine)}
+(EBNativeFunction *)easeInExpo{WX_EASE(easeInExpo)}
+(EBNativeFunction *)easeOutExpo{WX_EASE(easeOutExpo)}
+(EBNativeFunction *)easeInOutExpo{WX_EASE(easeInOutExpo)}
+(EBNativeFunction *)easeInCirc{WX_EASE(easeInCirc)}
+(EBNativeFunction *)easeOutCirc{WX_EASE(easeOutCirc)}
+(EBNativeFunction *)easeInOutCirc{WX_EASE(easeInOutCirc)}
+(EBNativeFunction *)easeInElastic{WX_EASE(easeInElastic)}
+(EBNativeFunction *)easeOutElastic{WX_EASE(easeOutElastic)}
+(EBNativeFunction *)easeInOutElastic{WX_EASE(easeInOutElastic)}
+(EBNativeFunction *)easeInBack{WX_EASE(easeInBack)}
+(EBNativeFunction *)easeOutBack{WX_EASE(easeOutBack)}
+(EBNativeFunction *)easeInOutBack{WX_EASE(easeInOutBack)}
+(EBNativeFunction *)easeInBounce{WX_EASE(easeInBounce)}
+(EBNativeFunction *)easeOutBounce{WX_EASE(easeOutBounce)}
+(EBNativeFunction *)easeInOutBounce{WX_EASE(easeInOutBounce)}
+(EBNativeFunction *)linear{WX_EASE(linear)}
+(EBNativeFunction *)cubicBezier
{
    return [[EBNativeFunction alloc] initWithBody:^(NSArray *arguments){
        double t = [arguments[0] doubleValue];
        double b = [arguments[1] doubleValue];
        double c = [arguments[2] doubleValue];
        double d = [arguments[3] doubleValue];
        double p0 = [arguments[4] doubleValue];
        double p1 = [arguments[5] doubleValue];
        double p2 = [arguments[6] doubleValue];
        double p3 = [arguments[7] doubleValue];
        t = MIN(t, d);
        t = t/d;
        double epsilon = (1000 / 60 / d) / 4;
        double result = b + bezier(p0, p1, p2, p3, epsilon, t)*c;
        return [[NSNumber alloc] initWithDouble:result];
    }];
}


@end
