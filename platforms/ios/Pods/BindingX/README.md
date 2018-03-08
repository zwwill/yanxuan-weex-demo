
![BindingX_250.png](https://img.alicdn.com/tfs/TB1ZG58bb1YBuNjSszeXXablFXa-400-400.png "")

# BindingX

![image | left](https://img.shields.io/badge/PRs-welcome-brightgreen.svg "")
![image | left](https://img.shields.io/badge/license-Apache--2.0-brightgreen.svg "")

* [Read Documentation](https://alibaba.github.io/bindingx/guide/introduce)
* [中文](https://github.com/alibaba/bindingx/blob/master/README_cn.md)

A new interaction way based on `weex` & `react native` & `html5` .

It provides a way called `expression binding` for handling complex user interaction with views at 60 FPS in React Native and weex :tada: :tada: :tada: .

# Description

The async nature of the js-native bridge in react native and weex incurs an inherent performance penalty. This traditionally prevents JavaScript code from running at high framerates.

We exploreed and implemented a completely new approach to solve the problem. It's main idea is translate the user interaction into expression, and transfer those expressions into native environment. When events occurs (events such as user gesture), all computing task is running on the native side, NO redundant js-bridge calls any more. [Read More](https://alibaba.github.io/bindingx/guide/introduce)

# Glance

<div align="center">
    <img src="https://gw.alicdn.com/tfs/TB1fES5bhGYBuNjy0FnXXX5lpXa-320-563.gif" width = "200" height = "350"/>
    <img src="https://gw.alicdn.com/tfs/TB1hOaKbbGYBuNjy0FoXXciBFXa-320-563.gif" width = "200" height = "350"/>
    <img src="https://gw.alicdn.com/tfs/TB1LCmUbkyWBuNjy0FpXXassXXa-320-563.gif" width = "200" height = "350"/>
    <img src="https://gw.alicdn.com/tfs/TB1FRGZbeuSBuNjy1XcXXcYjFXa-320-563.gif" width = "200" height = "350"/>
</div>

# Feature

* Complex but fluid user interaction
* Powerful expression parsing engine
* Plenty of easing functions


# Installation

### Weex

*Prerequisites*: integrate [weex sdk](https://github.com/apache/incubator-weex) to your application.

##### Android

We provide two ways to integrate bindingx plugin.

 1. manual integration

    * add dependencies in your application's build.gradle

        ```
        implementation 'com.alibaba.android:bindingx-core:1.0.1'
        implementation 'com.alibaba.android:bindingx_weex_plugin:1.0.1'
        ```

    * register bindingx plugin in code. (`Application#onCreate`, for example)

        ```
        BindingX.register()
        ```

 2. use weex plugin loader

    * add dependencies in your application's build.gradle

      ```
      implementation 'com.alibaba.android:bindingx-core:1.0.1'
      implementation 'com.alibaba.android:bindingx_weex_plugin:1.0.1'
      implementation 'org.weex.plugin:plugin-loader:1.0.0'
      ```

    * register bindingx plugin use plugin loader.

      ```
      WeexPluginContainer.loadAll(getApplicationContext());
      ```

#### iOS
carry on

### React Native

we will upload React Native bindingx plugin to npm as soon as possible, then you can use `react-native add` command to install. But for now, you should compile our plugin using source code.

# Who is using

| taobao | tmall | youku | fliggy |
| :--- | :--- | :--- | :--- |
| ![Taobao](https://img.alicdn.com/tfs/TB1N.thdzuhSKJjSspjXXci8VXa-256-256.png_60x60.jpg "") | ![tmall](https://img.alicdn.com/tps/TB15a7wOFXXXXcgXVXXXXXXXXXX-256-256.png_60x60.jpg "") | ![youku](https://img.alicdn.com/tfs/TB1jjyxhwoQMeJjy1XaXXcSsFXa-256-256.png_60x60.jpg "") | ![fliggy](https://img.alicdn.com/tfs/TB11rPqRXXXXXc_apXXXXXXXXXX-256-256.png_60x60.jpg "") |


## Contributing
* Any PR is welcome
* Dingding chat group.


![Snip20180115_20.png | left | 229x229](https://gw.alipayobjects.com/zos/skylark/fcc2b92e-06c2-4d8f-88ff-5cfb983735bf/2018/png/dfae0a43-4ecb-4f62-a5fb-d3f092cad66a.png "")

## License
```
Copyright 2018 Alibaba Group

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
