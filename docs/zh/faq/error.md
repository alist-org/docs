---
# This is the title of the article
title: AList错误码整合
# This is the icon of the page
icon: iconfont icon-question
# This control sidebar order
order: 4
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
  - error code
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

## 这个是什么？

这个是收集一些`AList`使用期间的一些错误码，然后如何解决（网络问题或者网盘更改API以及其它一些问题可能会无法当时解决需要人为去干预）

<br/>

-----

<Badge text="Q" type="warning" vertical="middle" />：阿里云盘open出现 **TooManyRequests** 、**Too Many Requests**

<br/>

<Badge text="A" type="info" vertical="middle" />：[**点我查看详细说明**](../guide/drivers/aliyundrive_open.md)

-----

<Badge text="Q" type="warning" vertical="middle" />：阿里云盘open出现 **ExceedCapacityForbidden** 

<br/>

<Badge text="A" type="info" vertical="middle" />：[**点我查看详细说明**](../guide/drivers/aliyundrive_open.md#四、)

-----

<Badge text="Q" type="warning" vertical="middle" />：Token is expired（**出现在登录AList账号时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：是指你`AList`登录有效期到了默认是`48`小时，可以在修改`config.json`配置文件中

- 如果你登录的时候提示登录成功然后又显示这个提示，检查你是否使用了CDN加速等给AList进行了缓存导致的

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.

<br/>

<Badge text="A" type="info" vertical="middle" />：一般是在添加`驱动`的时候刷新令牌(token)不对，更换正确的替换了即可解决。

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld

<br/>

<Badge text="A" type="info" vertical="middle" />：一般指的是`驱动`已经弃用，例如阿里云盘，更换成[**阿里云盘open**](../guide/drivers/aliyundrive_open.md)即可,其他的暂时未知，其他的暂时没有

-----

<Badge text="Q" type="warning" vertical="middle" />：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable

<br/>

<Badge text="A" type="info" vertical="middle" />：遇到这些问题一般都是网络问题导致的，自行排查然后解决。

- 如果是添加`阿里云盘open`时候遇到：TLS handshake timeout （[点击我查看如何解决](./why.md#添加阿里云盘-分享-时提示-提示post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout)）

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path （**出现在挂载驱动时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：要挂载到的路径，它是唯一的，不能重复

-----

<Badge text="Q" type="warning" vertical="middle" />：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag（**出现在挂载驱动时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：挂载路径是必填选项，填写一下

-----

<Badge text="Q" type="warning" vertical="middle" />：UNIQUE constraint failed: x_meta.path（**出现在添加元信息时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：添加元信息时路径只能有一个，不可以重复

-----

<Badge text="Q" type="warning" vertical="middle" />：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag（**出现在添加元信息时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：添加元信息时，路径是必须要填写的

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed load storage: failed init storage: the site does not allow mounted

<br/>

<Badge text="A" type="info" vertical="middle" />：对方的`AList`站点不允许挂载，[**查看详细说明**](../guide/drivers/Alist%20V2%20V3.md#链接)

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（**PikPak/分享**）

<br/>

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: terabox is not yet available in this are（**Terabox**）

<br/>

<Badge text="A" type="info" vertical="middle" />：国内不支持访问，如果你是在本地搭建的可以查看一下这个[**参考方案**](https://anwen-anyi.github.io/index/07-wenti.html#_41-alist如何-使用-吃到-代理-proxy)

- 例如 Google、Mega、Terabox 等这些需要代理才能访问的都可以通过这样的方法使用

-----

<Badge text="Q" type="warning" vertical="middle" />：Search not available（**出现在构建索引时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：`搜索索引`选项没有选择，无法构建使用，不知道选择哪个搜索索引好?[**点我查看**](../guide/advanced/search.md#不同搜索索引之间的差异)

-----

<Badge text="Q" type="warning" vertical="middle" />：only chinese and english, numbers and underscores are supported, and the length is no more than 50（**出现在一刻相册文件改名时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：一刻相册文件夹改名时最大50长度

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（**添加阿里云盘open**）

<br/>

<Badge text="A" type="info" vertical="middle" />：添加阿里云盘open存储时，`根文件夹ID`错误上述最后哪个ID就是错误的ID去获取正确的替换即可

-----

<Badge text="Q" type="warning" vertical="middle" />：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

<br/>

<Badge text="A" type="info" vertical="middle" />：你的油猴答题插件冲突了，关闭了即可[**详情查看点击查看**](https://github.com/alist-org/alist/discussions/2399)

-----

<Badge text="Q" type="warning" vertical="middle" />：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

<br/>

<Badge text="A" type="info" vertical="middle" />：连续登录输入6次密码错误就会锁定，重启AList即可重置。

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed get storage: please add a storage first. （**添加离线下载内容时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：添加离线下载文件时，你需要进入你想把离线下载的文件下载到哪个云盘然后就进入哪个`文件夹`，而不是在首页添加 [**完整使用说明**](../guide/advanced/offline-download.md)

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Unable to retrieve user's mysite URL（**添加onedrive_app时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：新建的 `OneDrive`用户账号不是实时生效，会延时生效等待几小时后试试看 [**案例**](https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892)

-----

<Badge text="Q" type="warning" vertical="middle" />：failed to start: listen tcp 0.0.0.0:5244: bind: address already in use （**启动AList程序时**）

<br/>

<Badge text="A" type="info" vertical="middle" />：5244端口号已经被使用，排查是否被占用(一般来说你已经启动了一个5244端口的AList导致的)，或者修改AList启动的端口号,[**如何修改**](../config/configuration.md#port)

-----

<Badge text="Q" type="warning" vertical="middle" />：**[AList上传文件时提示](why.md#为什么我在上传文件时得到-http-413-错误)**：Request failed with status code 413

<br/>

<Badge text="A" type="info" vertical="middle" />：Nginx配置的文件大小所限制，修改Nginx的`client_max_body_size`就可以，如果你是宝塔搭建的去宝塔页面修改[示例](https://blog.csdn.net/u012514495/article/details/127981183)

-----

<Badge text="Q" type="warning" vertical="middle" />：**failed get objs: failed to list objs: query fail [61008]**

<br/>

<Badge text="A" type="info" vertical="middle" />：可能是因为某些驱动不支持修改文件排序导致的，取消文件排序试试看

-----


暂时就这些，如果还有可以留言，或者按照格式添加（为了统一直观）

