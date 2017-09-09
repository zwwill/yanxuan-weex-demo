# WEEX开发严选App

![](https://github.com/zwwill/yanxuan-weex-demo/raw/master/banner.png)

> 以下是运行demo的简要步骤
> 关于此Demo的进一步介绍，可以阅读此文[网易严选App感受WEEX开发](https://segmentfault.com/a/1190000011027225)

# 运行
## 安装依赖包

```
$ npm install
```

## 运行web

web工程打包
``` 
$ npm run build 
```
构建web工程 & 启动服务
```
$ npm run dev & npm run serve 
```

## 运行ios
ios打包需要开发者帐号，如果不是付费用户就只能通过xcode调试的方式安装在自己的关联手机上（就是手机需要使用此帐号登录）或者虚拟机调试。
以下是无开发者付费帐号的执行方法
安装ios框架
``` 
$ weexpack platform add ios
```
执行打包命令
```
$ weex build ios
```
此步骤只为了打包，并不用完全执行，详介请见[https://segmentfault.com/a/1190000010984857](https://segmentfault.com/a/1190000010984857#articleHeader14)

接下来使用xcode安装调试

## 运行android
安装android框架
``` 
$ weexpack platform add android
```
执行运行指令
```
$ weex run android
```
