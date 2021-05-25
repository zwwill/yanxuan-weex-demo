/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>
#import "DemoDefine.h"

@interface UIViewController (WXDemoNaviBar) <UIGestureRecognizerDelegate>

/**
 *  back button click action
 *  @param sender responder
 */
- (void)backButtonClicked:(id)sender;

- (void)setupNaviBar;

@end

