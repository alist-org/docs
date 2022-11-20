---
# This is the icon of the page
icon: geometry
# This control sidebar order
order: 5
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

# 使用 Docker

查看管理员信息：

```bash
docker exec -it alist ./alist admin
```

## 发行版本

```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

## 开发版本

仅适用于 amd64/arm64。不推荐，这可能无法正常工作。

```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:main
```

## 指定版本

有关详细信息，请参阅 https://hub.docker.com/r/xhofe/alist

## 有关离线下载功能的额外说明

若没有使用```docker pull --platform```参数拉取镜像时，docker可能会在64位操作系统上拉取32位镜像,这将可能导致离线下载功能即使在正常配置情况下也无法使用。

当发生错误时,您会在Alist的日志文件中看到类似错误日志。

```ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://pic.rmb.bdstatic.com/bjh/34ee946f7a74435a167ca4351d723374.png to [/ftp](/)]```

解决方法,如果是CPU架构是64位，尝试手动拉取64位docker镜像,重新构建容器，再次尝试。

如果是CPU架构是32位，目前尚无可用方案。
