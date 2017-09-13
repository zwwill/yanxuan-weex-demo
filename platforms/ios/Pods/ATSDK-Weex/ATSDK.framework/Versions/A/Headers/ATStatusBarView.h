//
//  ATStatusBarView.h
//  AT
//
//  Created by ZhuBicheng on 16/4/7.
//  Copyright © 2016年 当扈. All rights reserved.
//

#import <UIKit/UIKit.h>
@class ATStatusBarView;


@protocol ATStatusBarViewProtocol <NSObject>

- (void)setTexts:(NSArray *)texts;

@end

@interface ATStatusBarView : UIView<ATStatusBarViewProtocol>

- (void)clear;

@end
