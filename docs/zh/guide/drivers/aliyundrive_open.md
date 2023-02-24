---
# This is the icon of the page
icon: state
# This control sidebar order
order: 3
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

# 阿里云盘Open

:::tip

阿里云盘open，使用的是官方授权API开发。

:::

## 刷新令牌

前往：**https://alist.nn.ci/tool/aliyundrive/request**

#### 获取示意图

以下两种方式都可以获得 **refresh_token**

:::tabs#alitoken

@tab Go to login

![token](/img/drivers/aliyun/token1.png)

@tab Scan QrCoden

![token](/img/drivers/aliyun/token2.png)

:::



## Root folder file_id

打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串

如 https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940

这个文件夹的 file_id 即为 `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`

![file_id](/img/drivers/aliyundrive.png)



### Client id，Client secret

正常用户不需要填写为空即可，如果自己申请了官方授权也可以使用自己的进行填写，为空时默认使用AList提供的。
