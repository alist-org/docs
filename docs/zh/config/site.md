---
# This is the icon of the page
icon: tab
# This control sidebar order
order: 3
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

# 网站设置

### 版本

`alist` 的版本，只读。

### 接口地址

你的`alist`的地址，比如`https://pan.nn.ci`。这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能会失效，比如缩略图`LocalStorage`。

### 基本路径

默认`/`，如果你想反向代理子目录（详见[带有子目录的反向代理](../faq/howto.md#how-to-reverse-proxy-with-sub-directory)），需要设置该字段为`alist`，比如`https://pan.nn.ci/alist`，同时需要设置`Api url`为`https://pan.nn.ci/alist`。

### 网站标题

`alist` 的标题，例如 `Alist`。

### 公告

`alist`的公告，如`### Hello\nWelcome to use Alist`。我们建议您在内容前添加标题，例如`### Hello`，以免内容被`Close Button`覆盖。

### 分页类型

- 全部：一次显示所有文件。
- 分页：在页面底部显示一个“分页器”。
- 加载更多：在页面底部显示“加载更多”按钮。
- 自动加载更多：滚动到页面底部时自动加载更多文件。

### 默认每页文件数量

`alist` 的默认每页文件数量，当 `Pagination type` 没有被设置为 `All` 时生效，例如 `20`。
