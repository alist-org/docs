---
# This is the icon of the page
icon: iconfont icon-token
# This control sidebar order
order: 5
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 2FA

要启用双因素身份验证，需要在手机上安装支持 TOTP 的验证器，例如 [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)，[Microsoft Authenticator](https://support.microsoft.com/zh-cn/account-billing/%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85microsoft-authenticator%E5%BA%94%E7%94%A8-351498fc-850a-45da-b7b6-27e523b8702a)

然后登录 AList 管理并进入“个人资料”页面，点击“启用 2FA”按钮，用你的 2FA 应用扫描二维码，输入你的 2FA 应用生成的代码。

最后，单击“验证”按钮启用 2FA。

- 每个用户都可以设置不同的"2FA"验证，如何解除看下面的方法

<br/>

## **如何解除2FA验证：**

一、(≥ v3.15.0)

>如果你非Admin账号的2FA忘记了，可以告诉管理员帮你清除掉
>
>进入后台 --> 用户，点击 "取消两步验证" 即可
>
>若admin账号的2FA丢失，请看第二步如何清除2FA

二、

>如何进入Alist所在的文件夹
>
>   1. **Windows**：进入到Alist所在的文件夹输入：**alist.exe cancel2fa**
>  2. **Linux**	   ：也一样进入Alist所在的文件夹输入，**./alist cancel2fa**
>  3. **docker**	：docker直接输入 **docker exec -it alist ./alist cancel2fa**
>
> **以上输入删除后发现还有重启即可~**

三、(>3.30.0)

>进入后台用户页面，可以看到 `取消两步验证` 的选项，取消后如果还有可以选择重新启动一下AList
>
>- 需要使用新版本，如果没有 `取消两步验证` 的选项，说明你需要更新版本