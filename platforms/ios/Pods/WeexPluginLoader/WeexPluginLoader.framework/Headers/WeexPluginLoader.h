//
//  WeexPlugin.h
//  WeexPluginDemo
//
//  Created by 齐山 on 17/3/7.
//  Copyright © 2017年 taobao. All rights reserved.
//


#import "WPLMacro.h"
#import "WPLRegister.h"

#ifndef __WEEX_PLUGIN_H__
#define __WEEX_PLUGIN_H__

/**
 * this macro is used to auto regester moudule.
 *  example: WX_PlUGIN_EXPORT_MODULE(test,WXTestModule)
 **/
#define WX_PlUGIN_EXPORT_MODULE(jsname,classname) WX_PlUGIN_EXPORT_MODULE_DATA(jsname,classname)

/**
 *  this macro is used to auto regester component.
 *  example:WX_PlUGIN_EXPORT_COMPONENT(test,WXTestCompnonent)
 **/
#define WX_PlUGIN_EXPORT_COMPONENT(jsname,classname) WX_PlUGIN_EXPORT_COMPONENT_DATA(jsname,classname)

/**
 *  this macro is used to auto regester handler.
 *  example:WX_PlUGIN_EXPORT_HANDLER(WXImgLoaderDefaultImpl,WXImgLoaderProtocol)
 **/
#define WX_PlUGIN_EXPORT_HANDLER(jsimpl,jsprotocolname) WX_PlUGIN_EXPORT_HANDLER_DATA(jsimpl,jsprotocolname)

#endif
