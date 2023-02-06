---
# This is the icon of the page
icon: state
# This control sidebar order
order: 35
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
# Alist V2/V3



![alist](/img/drivers/alist/alist.png)



### 驱动

首先你要知道对方的到底是V2还是V3



### 链接

你要挂载的Alist链接



### 根目录路径

- 要添加的目录的pathname，不填默认为根目录，如：
  - [https://alist.nn.ci](https://alist.nn.ci/) -> `/`
  - https://alist.nn.ci/a -> `/a`
  - https://alist.nn.ci/a/b -> `/a/b`



### 密码

（密码选项**不是必填**，给有需要的人说明）

密码指的是元信息密码

你要挂载的Alist路径有设置元信息密码

- 例1：
  - 你挂载的路径是 `/a`
  - 那么你要知道对方这个 `/a` 路径密码设置的是什么才能看到文件，不然进去后是空白
- 例2：
  - 你挂载的路径是 `/`
  - 但是对方根目录 `/`，没设置密码，但是其他的个别文件夹 比如 阿里,百度,123 这几个设置了密码，那么你可以填写这些的不过只能写一个密码.
    - 如果上面提到的三个文件夹密码设置的不一样那么你填写的一个只能进其中是这个密码的文件夹，不是这个密码的就进不去了，应该都明白了.



### 访问令牌

（访问令牌选项**不是必填**，给有需要的人说明）

（这是让对方给你的，一般没有人会交出自己的token给外人）

- V2获取方式：前往V2文档进行查看 --> **https://alist-doc.nn.ci/docs/driver/alist#token**
- V3获取方式：后台 --> 设置 --> 其他 --> **`令牌`**





