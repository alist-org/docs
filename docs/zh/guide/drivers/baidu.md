---
# This is the icon of the page
icon: state
# This control sidebar order
order: 18
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

# 百度网盘

:::tip

由于百度网盘 API 的限制，下载大于 20M 左右的文件需要携带 header："User-Agent":"pan.baidu.com"，所以下载大于 20M 的文件时，需要设置请求头，例如使用 curl：

```bash
curl -L -X GET 'YOUR_LINK' -H 'User-Agent:pan.baidu.com'
```

或者使用本程序中的代理功能进行传输。

:::

## 刷新令牌

[点击这里](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1) 来获取刷新令牌。

## 根文件夹路径

要挂载的根文件夹，默认为`/`，与本地存储相同。

## Download API

- official: 官方接口，很稳定，但是文件比较大，需要修改UA，速度慢
- crack: 非官方接口，无需修改UA且部分文件可能不限速，但是**可能**会不稳定
  -  ==crack: 非官方接口== 似乎已经和谐了？[**详情自行点击查看常见问题说明**](../../faq/why.md#百度云盘非官方下载报错出现-hit-black-userlist-hit-illeage-dlna)

::: details 可能对你有帮助

实在不会的可以看看一个Web网页端的例子： **https://www.bilibili.com/video/BV1UA4y1X7J8**

前提是需要有会员哦，有会员改完 `UA` 才会有用（选择官方和302），只能帮你到这里了

如果不改UA，可以开启 ==Web代理==，缺点是需要你搭建Alist的机器中转，也就是说你需要大宽带帮你中转

![alist](/img/drivers/baidu/bdUA.png)

:::

