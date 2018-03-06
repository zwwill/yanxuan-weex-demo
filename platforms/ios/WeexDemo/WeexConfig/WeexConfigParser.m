//
//  WeexConfigParser.m
//  WeexDemo
//
//  Created by yangshengtao on 16/11/15.
//  Copyright © 2016年 taobao. All rights reserved.
//

#import "WeexConfigParser.h"
@interface WeexConfigParser ()

@property (nonatomic, readwrite, strong) NSMutableDictionary* pluginsDict;
@property (nonatomic, readwrite, strong) NSMutableDictionary* settings;
@property (nonatomic, readwrite, strong) NSMutableArray* pluginNames;

@end

@implementation WeexConfigParser

@synthesize pluginsDict, settings, pluginNames;
- (id)init
{
    self = [super init];
    if (self != nil) {
        self.pluginsDict = [[NSMutableDictionary alloc] initWithCapacity:30];
        self.settings = [[NSMutableDictionary alloc] initWithCapacity:30];
        self.pluginNames = [[NSMutableArray alloc] initWithCapacity:8];
        featureName = nil;
    }
    return self;
}

- (void)parser:(NSXMLParser*)parser didStartElement:(NSString*)elementName namespaceURI:(NSString*)namespaceURI qualifiedName:(NSString*)qualifiedName attributes:(NSDictionary*)attributeDict
{
    if ([elementName isEqualToString:@"preference"]) {
        settings[[attributeDict[@"name"] lowercaseString]] = attributeDict[@"value"];
    } else if ([elementName isEqualToString:@"feature"]) { // store feature name to use with correct parameter set
        featureName = [attributeDict[@"name"] lowercaseString];
        pluginsDict[@"name"] = featureName;
    } else if ((featureName != nil) && [elementName isEqualToString:@"param"]) {
        NSString* paramName = [attributeDict[@"name"] lowercaseString];
        id value = attributeDict[@"value"];
        pluginsDict[paramName] = value;
    }
}

- (void)parser:(NSXMLParser*)parser didEndElement:(NSString*)elementName namespaceURI:(NSString*)namespaceURI qualifiedName:(NSString*)qualifiedName
{
    if ([elementName isEqualToString:@"feature"]) { // no longer handling a feature so release
        NSDictionary *dic = [NSDictionary dictionaryWithDictionary:pluginsDict];
        [self.pluginNames addObject:dic];
        featureName = nil;
        [pluginsDict removeAllObjects];
    }
}

- (void)parser:(NSXMLParser*)parser parseErrorOccurred:(NSError*)parseError
{
    NSAssert(NO, @"config.xml parse error line %ld col %ld", (long)[parser lineNumber], (long)[parser columnNumber]);
}


@end
