//
//  ATPluginProtocol.h
//  AT
//
//  Created by ZhuBicheng on 16/2/23.
//  Copyright © 2016年 当扈. All rights reserved.
//

#ifndef ATPluginProtocol_h
#define ATPluginProtocol_h

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>

@protocol ATPluginProtocol <NSObject>

//=================
//=   生命周期     =
//=================

- (void)pluginDidLoadWithArgs:(NSArray *)args;

- (void)pluginWillOpenInContainer:(UIViewController *)container withArg:(NSArray *)args;

- (void)pluginWillClose;

- (void)pluginDidUnload;

//=================
//=    环境设置    =
//=================


- (CGRect)wantReactArea;


@optional

//=================
//=    扩展设置    =
//=================

+ (NSString *)pluginVersion;

- (void)tapStatusBarItemIndex:(NSInteger)index;

- (CGRect)wantIgnoreArea;

@end

#endif /* ATPluginProtocol_h */
