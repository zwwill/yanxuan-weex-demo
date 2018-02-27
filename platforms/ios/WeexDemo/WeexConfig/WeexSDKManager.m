//
//  WeexSDKManager.m
//  WeexDemo
//
//  Created by yangshengtao on 16/11/14.
//  Copyright © 2016年 taobao. All rights reserved.
//

#import "WeexSDKManager.h"
#import "DemoDefine.h"
#import "WeexBundleUrlLoder.h"
#import <WeexSDK/WeexSDK.h>
#import "WXDemoViewController.h"
#import "WeexPluginManager.h"
#import "WXImgLoaderDefaultImpl.h"

@implementation WeexSDKManager

+ (void)setup;
{
    NSURL *url = nil;
#if DEBUG
    //If you are debugging in device , please change the host to current IP of your computer.
    WeexBundleUrlLoder *loader = [WeexBundleUrlLoder new];
    url = [loader jsBundleURL];
    if (!url) {
        url = [NSURL URLWithString:BUNDLE_URL];
    }
#else
    url = [NSURL URLWithString:BUNDLE_URL];
#endif
    
#ifdef UITEST
    url = [NSURL URLWithString:UITEST_HOME_URL];
#endif
    
    [self initWeexSDK];
    [WeexPluginManager registerWeexPlugin];
    [self loadCustomContainWithScannerWithUrl:url];
}

+ (void)initWeexSDK
{
    [WXAppConfiguration setAppGroup:@"AliApp"];
    [WXAppConfiguration setAppName:@"WeexDemo"];
    [WXAppConfiguration setAppVersion:@"1.8.3"];
    [WXAppConfiguration setExternalUserAgent:@"ExternalUA"];
    
    [WXSDKEngine initSDKEnvironment];
    
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    
#ifdef DEBUG
    [WXLog setLogLevel:WXLogLevelLog];
#endif
}

+ (void)loadCustomContainWithScannerWithUrl:(NSURL *)url
{
    UIViewController *demo = [[WXDemoViewController alloc] init];
    ((WXDemoViewController *)demo).url = url;
    [[UIApplication sharedApplication] delegate].window.rootViewController = [[WXRootViewController alloc] initWithRootViewController:demo];
}

@end
