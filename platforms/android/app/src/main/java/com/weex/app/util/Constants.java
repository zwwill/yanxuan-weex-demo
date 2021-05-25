package com.weex.app.util;

public class Constants {

//  public static final String BUNDLE_URL = "http://t.cn?_wx_tpl=http://h5.waptest.taobao.com/app/weextc031/build/TC__Home.js";
  public static final String BUNDLE_URL = "http://t.cn?_wx_tpl=http://g.tbcdn.cn/weex/weex-tc/0.1.0/build/TC__Home.js";
  public static final String TEST_BUNDLE_URL = BUNDLE_URL;
  public static final String WEEX_SAMPLES_KEY = "?weex-samples";
  public static final String WEEX_TPL_KEY = "_wx_tpl";
  public static final String PARAM_BUNDLE_URL = "bundleUrl";


  //hot refresh
  public static final int HOT_REFRESH_CONNECT = 0x111;
  public static final int HOT_REFRESH_DISCONNECT = HOT_REFRESH_CONNECT + 1;
  public static final int HOT_REFRESH_REFRESH = HOT_REFRESH_DISCONNECT + 1;
  public static final int HOT_REFRESH_CONNECT_ERROR = HOT_REFRESH_REFRESH + 1;

  public static final String ACTION_OPEN_URL = "com.alibaba.weex.protocol.openurl";
}
