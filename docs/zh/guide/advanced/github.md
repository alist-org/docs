---
# This is the icon of the page
icon: people
# This control sidebar order
order: 9
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

# GitHub登录

### Github client id

客户端ID

### Github client secrets

秘钥ID



打开 **https://github.com/settings/developers**  点击  **`New OAuth App`**

### Register OAuth 填写说明


- Application name
  - 随便写想叫什么叫什么
-  ==**Homepage URL**== 
  - 主页网址地址
    - 可以使用http https都可以
- Application description
  - 随便写
- ==**Authorization callback URL**==
  - 回调URL地址
  - **https://你的域名/api/auth/github_callback**
    - 可以使用http https都可以



填写完毕后记得获取一下 **Client secrets**，然后填写到Alist后台。



### 完整填写参考示意图

![github](/img/advanced/github.png)