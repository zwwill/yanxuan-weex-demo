English | [简体中文](README.zh-CN.md)

# :art: High quality Weex Demo

![](https://github.com/zwwill/yanxuan-weex-demo/raw/master/banner.png)

> The following is a brief step to run the demo
> further introduction，you can read this [网易严选App感受WEEX开发](https://github.com/zwwill/blog/issues/3)


# Try

open [Weex Playground](http://weex.apache.org/cn/playground.html) , Scan the qrcode below

![](https://github.com/zwwill/yanxuan-weex-demo/raw/master/erHome.png)

（no optimizing separately for android）

# Run

## install

```
$ npm install
```

## run web

building web pro

```
$ npm run build 
```

building web pro & running service

```
$ npm run dev & npm run serve 
```

## run ios

ios packaging requires developer accounts, f not, you can only install it on your own connected iphone through xcode debugging, or virtual machine。

The following is the implementation of the non-developer account

install ios platform

``` 
$ weexpack platform add ios
```

build weex bundles

```
$ weex build ios
```

This step is only for packaging, not fully executed, cancel before you enter the bundle id。

further info [https://segmentfault.com/a/1190000010984857](https://segmentfault.com/a/1190000010984857#articleHeader14)

next, use xcode to debug, refer to the native debug step.

（Using XCode to open file `platforms/ios/WeexDemo.xcworkspace`, simple configurate, then run or debug）

