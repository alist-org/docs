---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: script
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Install
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 一键脚本

仅适用于 Linux amd64/arm64 平台。

## 安装

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```

## 更新

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update
```

## 卸载

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall
```

## 自定义路径

默认安装在 `/opt/alist` 中。 自定义安装路径，将安装路径作为第二个参数添加，必须是绝对路径（如果路径以 alist 结尾，则直接安装到给定路径，否则会安装在给定路径 alist 目录下），如 安装到 `/root`：

```bash
# Install
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install /root
# update
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall /root
```
