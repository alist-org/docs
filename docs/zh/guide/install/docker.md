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

**docker-cli**

```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
```

**docker-compose**
```yaml
version: '3.3'
services:
    alist:
        restart: always
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        container_name: alist
        image: 'xhofe/alist:latest'
```

## 开发版本

仅适用于 amd64/arm64。不推荐，这可能无法正常工作。

**docker-cli**

```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:main
```

**docker-compose**
```yaml
version: '3.3'
services:
    alist:
        restart: always
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        container_name: alist
        image: 'xhofe/alist:main'
```

## 指定版本

有关详细信息，请参阅 https://hub.docker.com/r/xhofe/alist

### 用户/组标识符

当使用卷（`-v` 标志）权限问题时，主机操作系统和容器之间可能会出现权限问题，我们通过允许您指定用户 `PUID` 和组 `PGID` 来避免此问题。

确保主机上的任何卷目录都归您指定的同一用户所有，任何权限问题都会像魔术一样消失。

在这种情况下，`PUID=1000` 和 `PGID=1000`，要找到你的使用 `id user`，如下所示：

```bash
  $ id username
    uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)
```

## 有关离线下载功能的额外说明

若没有使用```docker pull --platform```参数拉取镜像时，docker可能会在64位操作系统上拉取32位镜像,这将可能导致离线下载功能即使在正常配置情况下也无法使用。

当发生错误时,您会在Alist的日志文件中看到类似错误日志。

```ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://pic.rmb.bdstatic.com/bjh/34ee946f7a74435a167ca4351d723374.png to [/ftp](/)]```

解决方法,如果是CPU架构是64位，尝试手动拉取64位docker镜像,重新构建容器，再次尝试。

如果是CPU架构是32位，目前尚无可用方案。

## Docker安装怎么更新?
::: details 点击查看

1. docker ps -a #查看容器(找Alist容器的ID)

2. docker stop ID #停止Alist运行,不然无法删除(这次Alist容器的ID是d429749a6e69，每一次安装都不一样自己看)

3. docker rm ID #删除Alist容器(数据还在只要你不手动删除)

4. [输入安装命令](https://alist.nn.ci/zh/guide/install/docker.html#发行版本)

5. 更新好了 去看看吧..就这么简单

![Docker update](https://pic.rmb.bdstatic.com/bjh/2f638b30b8978f6d1d122b563787883e.png)

:::