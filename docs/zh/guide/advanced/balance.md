---
# This is the icon of the page
icon: iconfont icon-speed
# This control sidebar order
order: 7
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

# 负载均衡

要求两个存储中的文件结构完全相同，程序会自动轮询所有存储进行下载/请求。

可以使用不同网盘，但是文件目录要一致。

- 若修改主显示挂载的网盘后和负载挂载的网盘目录树不一致导致返回错误，自行解决进行负载网盘的目录文件保持一致。

![](/img/advanced/balance.png)

第一个带红框标记的为主挂载，也就是在前端页面显示的，后面剩下的九个就是对第一个进行负载均衡

## **如何使用​**

第一个存储可以正常添加，另外一个存储以 `第一个存储挂载路径 + .balance +任何其他内容` 为挂载路径添加。



例如：

- 存储1：test
- 存储2：test.balance1
- 存储3：test.balance2
- 存储4：test.balance3
- ...
- 存储n：test.balancen
