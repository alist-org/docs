---
# This is the icon of the page
icon: state
# This control sidebar order
order: 7
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 谷歌相册

### 根目录ID

根目录root，其他目录ID未知( ~~貌似不能挂载单独的相册~~ 还未解决[**参考**](https://github.com/alist-org/alist/discussions/3264#discussioncomment-4874536))

### 获取 client_id, client_secret

获取工具 https://alist.nn.ci/tool/google/request

如何获取自己的  `client_id(客户端ID)  client_secret(客户端秘钥)` 去看[**谷歌网盘**](./googledrive.md)哪一篇

::: tip 

提示 此应用未经 Google 验证

您获得了授权，可以使用一款目前处于测试阶段的应用。除非您了解向您发出邀请的开发者，否则请勿继续。

我们点击左侧的**继续**就行

此选项记得勾选不然会报错，下面的注意事项当中有说明

![Googlephotos](/img/drivers/google/Google-photos2.png)

:::

现在更加方便了，其实获取谷歌云盘的时候勾选了相册到时候获取到的token也可以拿来挂载相册~一举两得

记得打开 **`Photos Library API`** 哦~

- **https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513**

### 两个注意事项：

1. failed get objs: failed to list objs: Request had insufficient authentication scopes.: []
   - 是因为在获取授权的时候没有勾选 相册权限（查看上面提到的图片） `查看和整理您的Google相册媒体库中的内容,向媒体库上传内容。了解详情容` 
   
2. failed get objs: failed to list objs: Photos Library API has not been used in project 357075621397 before or it is disabled. Enable it by visiting <https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview?project=357075621397> then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []
   - 是因为没有开启 **`Photos Library API`**  谷歌相册API

### 挂载展示

![Googlephotos](/img/drivers/google/Google-photosend.png)
