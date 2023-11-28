---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: iconfont icon-code
# This control sidebar order
order: 9
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

# 从源码运行

:::danger

此步骤仅适用于需要自行修改源代码的用户。 不明白的请跳过。

:::

## **环境准备**

首先，你需要一个有`git`，`nodejs`，`pnpm`，`golang>=1.20`，`gcc`的环境

## **构建前端**

使用 `git clone --recurse-submodules https://github.com/alist-org/alist-web.git` 克隆前端 ，执行 `pnpm install && pnpm build` 得到 dist 目录下的目标文件

## **构建后端**

克隆 https://github.com/alist-org/alist ，将上一步的 `dist` 目录复制到项目下的 `public` 目录下，然后执行：

```bash
appName="alist"
builtAt="$(date +'%F %T %z')"
goVersion=$(go version | sed 's/go version //')
gitAuthor=$(git show -s --format='format:%aN <%ae>' HEAD)
gitCommit=$(git log --pretty=format:"%h" -1)
version=$(git describe --long --tags --dirty --always)
webVersion=$(wget -qO- -t1 -T2 "https://api.github.com/repos/alist-org/alist-web/releases/latest" | grep "tag_name" | head -n 1 | awk -F ":" '{print $2}' | sed 's/\"//g;s/,//g;s/ //g')
ldflags="\
-w -s \
-X 'github.com/alist-org/alist/v3/internal/conf.BuiltAt=$builtAt' \
-X 'github.com/alist-org/alist/v3/internal/conf.GoVersion=$goVersion' \
-X 'github.com/alist-org/alist/v3/internal/conf.GitAuthor=$gitAuthor' \
-X 'github.com/alist-org/alist/v3/internal/conf.GitCommit=$gitCommit' \
-X 'github.com/alist-org/alist/v3/internal/conf.Version=$version' \
-X 'github.com/alist-org/alist/v3/internal/conf.WebVersion=$webVersion' \
"
go build -ldflags="$ldflags" .
```







::: details 你可能需要的编译教程视频

Windows版本：**https://www.bilibili.com/video/BV1Xr4y1z723**
（虽然是V2版的，但是跟V3版本一样的..）

Linux版本：**https://www.bilibili.com/video/BV1GW4y1s742**

番外编译文档：**https://www.yuque.com/anwenya/alist/glqlhu**

::: 
