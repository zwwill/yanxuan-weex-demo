//
//  WeexConfigParser.h
//  WeexDemo
//
//  Created by yangshengtao on 16/11/15.
//  Copyright © 2016年 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface WeexPluginConfigParser : NSObject <NSXMLParserDelegate>
{
    NSString* featureName;
}

@property (nonatomic, readonly, strong) NSMutableDictionary* pluginsDict;
@property (nonatomic, readonly, strong) NSMutableDictionary* settings;
@property (nonatomic, readonly, strong) NSMutableArray* pluginNames;

@end
