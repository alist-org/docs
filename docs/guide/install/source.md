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

# Run from source

:::danger

This step is only for users who need to modify the source code by themselves. If you don't understand, please skip it.

:::

### **Environmental preparation**
First, you need to have an environment of `git`, `nodejs`, `pnpm`, `golang>=1.20`, `gcc`

### **Building the front end**
Use `git clone --recurse-submodules https://github.com/alist-org/alist-web.git` command to clone this project, execute `pnpm install && pnpm build` to get the target file in the dist directory

### **Build the backend**
Clone https://github.com/alist-org/alist for this project, copy the `dist` directory of the previous step to the `public` directory under the project, and then:
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







::: details compilation tutorial videos you may need

Windows version: **https://www.bilibili.com/video/BV1Xr4y1z723** (Although it is V2 version, it is the same as V3 version..)

Linux version: **https://www.bilibili.com/video/BV1GW4y1s742**

Fanwai compiled documents: **https://www.yuque.com/anwenya/alist/glqlhu**

:::