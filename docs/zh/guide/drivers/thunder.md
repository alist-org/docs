---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 17
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "本地代理"
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 迅雷云盘

:::tip
小白请直接使用 Thunder 不要使用 ThunderExpert

ThunderExpert 主要提供更自由的设置,实现更多登录方式
:::

## **迅雷**

### **用户名**

即用于登陆的手机号,邮箱,用户名(有概率无法登录,需要尝试)

- 需要携带 `+86` 区号，例如 +8613722223333 这样填写

### **密码**

即用于登陆的密码



### **CaptchaToken**

在登录或上传是可能出现 need verify: {url},请访问错误中的链接完成验证得到 CaptchaToken（验证码）

![xunlei](/img/drivers/xunlei/x1.png)

填写好挂载目录 ID 账号 密码后保存，右上角会出现一大坨(没法复制)，

我们回到添加账号这里来复制 从 Https 开始复制到结束到一个新窗口进行获取验证码参数(CaptchaToken)

看下图添加

![xunlei](/img/drivers/xunlei/x2.png)

### **默认使用的下载方式**


```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[本机代理]:::someclass==默认===>a2[用户设备]
    classDef someclass fill:#f96
    b1[代理URL]-.备选.->a2[用户设备]
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```

## **迅雷专家版**

:::tip
迅雷如果需要下载必须指定 UserAgent(同下 DownUserAgent)
或使用本程序中的代理功能进行中转。
:::

### **登录类型**

选择 User 时填用户名和密码

- 用户名需要携带 `+86` 区号，例如 +8613722223333 这样填写

选择 RefreshToken 时只需填写 `RefreshToken`

### **签名类型**

选择 Algorithms 时需填写 `Algorithms`(比较难获取,需要逆向)

选择 CaptchaSign 时只需填写 `CaptchaSign` 和 `Timestamp`

```
//签名算法
str = ClientID + ClientVersion + PackageName + DeviceID + Timestamp
for (Algorithm in Algorithms) {
    str = md5(str + Algorithm)
}
CaptchaSign = "1." + str
```

登录类型(Login type) 和 签名类型(Sign type) 推荐选择选项

![xunlei](/img/drivers/xunlei/x3.png)

### **DeviceID**

通过 MD5 计算的值，用于判断登录的设备

### **ClientID, ClientSecret, ClientVersion, PackageName**

与签名有关，根据实际情况填写

### **UserAgent**

API 请求使用的 UserAgent，设置错误可能无法访问或限速

### **DownUserAgent**

下载时用到的 User Agent，如果设置错误会无法下载(开启代理会使用) 固定参数：

`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36`

## **关键数据获取流程**

通过网络分析工具(抓包工具)获取迅雷请求数据

打开迅雷并登录账号（下图使用的是 PC 客户端来操作的，Web 端也可以）

请求 https://xluser-ssl.xunlei.com/v1/shield/captcha/init 中包含
CaptchaSign、Timestamp、DeviceID、ClientID、ClientVersion、PackageName、User-Agent

注：获取好两张图信息后再慢慢的从抓到的两条数据内挑选数据填进去

登录迅雷 打开抓包工具后，这时候可能，不能立马获取到 `v1/shield/captcha/init` 的信息，

迅雷 PC 客户端 和抓包工具不要关闭，等待即可，**5 分钟左右** 就会自动刷新

就会看到如下图的参数 照着获取填写即可(看不清的话可以右键复制图片链接到浏览器新开个窗口打开)

看到 `v1/shield/captcha/init` 抓取到后 请**立刻马上不要耽误一秒钟** 把迅雷在右下角任务栏的迅雷右键点击退出，彻底退出 然后重新打开 获取到**图二**

![xunlei](/img/drivers/xunlei/x4.png)

重启迅雷会刷新 token

请求 https://xluser-ssl.xunlei.com/v1/auth/token 中包含 RefreshToken（请使用返回的值）、ClientSecret（web 端不存在）

![xunlei](/img/drivers/xunlei/x5.png)

图一包含 **7 条** 参数 | 图一包含 **2 条** 参数 | 一条固定参数(Down UserAgent) ，十条参数 和 3 个选项 以及一个挂载路径，写好保存即可，保存前记得检查喔~~

### **ThunderExpert 完整的参数填演示图**

![xunlei](/img/drivers/xunlei/x6.png)

### **默认使用的下载方式**

```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
