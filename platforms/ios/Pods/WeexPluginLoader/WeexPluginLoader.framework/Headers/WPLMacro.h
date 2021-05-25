//
//  WeexPluginMacro.h
//  Pods
//
//  Created by 齐山 on 17/3/10.
//
//

#ifndef __WEEX_PLUGIN_MACRO_H__
#define __WEEX_PLUGIN_MACRO_H__


#define WeexPluginDATA __attribute((used, section("__DATA,WeexPlugin")))

#define WX_PLUGIN_NAME_SEPARATOR(module,jsname,classname,separator) module#separator#jsname#separator#classname

#define WX_PLUGIN_NAME(module,jsname,classname) WX_PLUGIN_NAME_SEPARATOR(module,jsname,classname,&)

#define WX_PlUGIN_EXPORT_MODULE_DATA(jsname,classname) \
char const * k##classname##Configuration WeexPluginDATA = WX_PLUGIN_NAME("module",jsname,classname);

#define  WX_PlUGIN_EXPORT_COMPONENT_DATA(jsname,classname)\
char const * k##classname##Configuration WeexPluginDATA = WX_PLUGIN_NAME("component",jsname,classname);

#define WX_PlUGIN_EXPORT_HANDLER_DATA(jsimpl,jsprotocolname)\
char const * k##jsimpl##jsprotocolname##Configuration WeexPluginDATA = WX_PLUGIN_NAME("protocol",jsimpl,jsprotocolname);

#endif
