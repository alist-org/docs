---
# This is the icon of the page
icon: chrome
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 全局设置

## 隐藏文件

匹配被正则表达式（`javascript`）隐藏的文件。不明白的不要乱填。错误的正则表达式会导致前端页面崩溃。每行一个。默认情况下，有一个示例表达式将 README.md 从所有目录中隐藏。

并不是真的在隐藏。它仍然存在于 api 返回的列表中，只是没有出现在前端列表中。因此，如果您想真正隐藏，请添加[元信息](../guide/advanced/meta.md)。

## 打包下载

是否开启文件打包下载，默认为 true。

## 自定义头部

在此处设置的任何内容都会自动放置在网页头部的开头

## 自定义body

在此处设置的任何内容都会自动放置在网页正文的末尾

## 链接过期时间

直接链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。

::: warning
只有加了密码的路径的直链才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的。
:::

## 隐私正则表达式

不想在错误消息中显示的内容，每行一个正则表达式（在 `Golang` 中）。匹配的内容将被替换为对应长度的*。

## ocr api

用于识别验证码。你可以自己部署：https://hub.docker.com/r/xhofe/ddddocr_server 默认的 ocr api 部署在 [koyeb](https://app.koyeb.com/) 上（无可用性保证），不建议在生产环境中使用。

### 签名所有

向所有文件的直接链接添加签名(无论是否有密码)