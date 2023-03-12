---
# This is the icon of the page
icon: state
# This control sidebar order
order: 11
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

# 百度网盘分享链接

挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。

## 配置

浏览目录需设置分享surl和pwd，下载还需设置BDUSS。
surl即为分享地址`pan.baidu.com/s/`后`?`前部分，pwd填4位提取码，无提取码留空。
BDUSS由cookie中提取，[参考教程](https://blog.imwcr.cn/2022/11/24/%e5%a6%82%e4%bd%95%e6%8a%93%e5%8c%85%e8%8e%b7%e5%8f%96%e7%99%be%e5%ba%a6%e7%bd%91%e7%9b%98%e7%bd%91%e9%a1%b5%e7%89%88%e5%ae%8c%e6%95%b4-cookie/)。

## 开发

接口来自[github.com/yuantuo666/baiduwp-php](https://github.com/yuantuo666/baiduwp-php)项目，非官方api。
当前仅移植目录浏览和普通下载功能，欢迎继续开发。
因缺失官方文档，不排除存在一些兼容问题，可至github反馈，建议提供复现链接以供调试。
不能突破速度限制，请合理使用。
