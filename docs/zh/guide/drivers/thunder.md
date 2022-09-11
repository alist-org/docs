---
# This is the icon of the page
icon: state
# This control sidebar order
order: 30
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

# 迅雷云盘

:::tip
小白请直接使用XunLei不要使用XunLeiExpert

XunLeiExpert主要提供更自由的设置,实现更多登录方式
:::
## XunLei

### 用户名
即用于登陆的手机号,邮箱,用户名(有概率无法登录,需要尝试)

### 密码
即用于登陆的密码

### CaptchaToken
在登录或上传是可能出现need verify: {url},请访问错误中的链接完成验证得到CaptchaToken


## XunLeiExpert

:::tip
迅雷如果需要下载必须指定UserAgent(同下DownUserAgent)
或使用本程序中的代理功能进行中转。
:::

### 登录类型
选择User时只需要填用户名和密码

选择RefreshToken时只需填写RefreshToken

### 签名类型
选择Algorithms时只需填写Algorithms(比较难获取,需要逆向)

选择CaptchaSign时只需填写CaptchaSign和Timestamp


```
//签名算法
str = ClientID + ClientVersion + PackageName + DeviceID + Timestamp
for (Algorithm in Algorithms) {
    str = md5(str + Algorithm)
}
CaptchaSign = "1." + str
```


### DeviceID
通过md5计算的值，用于判断登录的设备

### ClientID、ClientSecret、ClientVersion、PackageName   

与签名有关，根据实际情况填写

### UserAgent
API请求使用的UserAgent，设置错误可能无法访问或限速

### DownUserAgent
下载时用到的UserAgent，如果设置错误会无法下载(开启代理会使用)

## 关键数据获取流程
通过网络分析工具获取迅雷请求数据

打开迅雷并登录账号

请求 https://xluser-ssl.xunlei.com/v1/shield/captcha/init 中包含
CaptchaSign、Timestamp、DeviceID、ClientID、ClientVersion、PackageName

重启迅雷会刷新token

请求 https://xluser-ssl.xunlei.com/v1/auth/token 中包含RefreshToken（请使用返回的值）、ClientSecret（web端不存在）