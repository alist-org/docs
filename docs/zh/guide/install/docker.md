---
# This is the icon of the page
icon: iconfont icon-geometry
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

## **查看管理员信息：**

#### **低于v3.25.0版本**

```bash
docker exec -it alist ./alist admin
```


#### **高于v3.25.0版本**

3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

```bash
# 随机生成一个密码
docker exec -it alist ./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
docker exec -it alist ./alist admin set NEW_PASSWORD
```

## **发行版本**

##### **docker-cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
```

##### **docker-compose**

```yaml
version: '3.3'
services:
    alist:
        image: 'xhofe/alist:latest'
        container_name: alist
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        restart: unless-stopped
```

服务运行之后，容器默认的时区为UTC时区，如果你想指定容器运行的时区，则可以通过传递此变量来实现：`-e "TZ=Asia/Shanghai"`。

### **使用 aria2 离线下载**

如果你想使用aria2离线下载，我们推荐你使用这个[image](https://hub.docker.com/r/xhofe/alist-aria2)，它预装了aria2。

### **开发版本**

仅适用于 amd64/arm64。不推荐，这可能无法正常工作。

##### **docker-cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:beta
```

##### **docker-compose**

```bash
#创建一个目录
mkdir /etc/alist
#进入该目录
cd /etc/alist
#下载docker-compose.yml文件
wget https://alist.nn.ci/docker-compose.yml
#运行容器
docker-compose up -d
```

**你也可以自行创建一个包含以下内容的`docker-compose.yml`文件**

```yaml
version: '3.3'
services:
    alist:
        image: 'xhofe/alist:beta'
        container_name: alist
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        restart: unless-stopped
```

### **指定版本**

有关详细信息，请参阅 https://hub.docker.com/r/xhofe/alist

### **内置 ffmpeg 版镜像**

在任何镜像 tag 后添加 `-ffmpeg` 即可切换到带有开箱即用的 ffmpeg 环境版本镜像

如果缩略图功能仍无法使用，请确认:

+ 使用的是本地存储
+ 切换到网格视图
+ 本地存储的缩略图开关开启
+ 本地存储的缩略图缓存文件夹配置路径正确，例如 `data/thumbnail`

::: tabs#Docker-ffmpeg

@tab 正式版

**docker-cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest-ffmpeg
```

**docker-compose**

```bash
version: '3.3'
services:
    alist:
        image: 'xhofe/alist:latest-ffmpeg'
        container_name: alist
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        restart: unless-stopped
```

@tab 测试版

**docker-cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:beta-ffmpeg
```

**docker-compose**

```bash
version: '3.3'
services:
    alist:
        image: 'xhofe/alist:beta-ffmpeg'
        container_name: alist
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        restart: unless-stopped
```

:::

### **用户/组标识符**

当使用卷（`-v` 标志）权限问题时，主机操作系统和容器之间可能会出现权限问题，我们通过允许您指定用户 `PUID` 和组 `PGID` 来避免此问题。

确保主机上的任何卷目录都归您指定的同一用户所有，任何权限问题都会像魔术一样消失。

在这种情况下，`PUID=1000` 和 `PGID=1000`，要找到你的使用 `id user`，如下所示：

```bash
  $ id username
    uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)
```

### **手动编译 Docker 镜像**

安装 docker，克隆仓库后进入仓库根目录，无需其他准备

::: tabs#Docker-build

@tab basic

```bash
docker build -t xhofe/alist:latest .
```

@tab with ffmpeg

```bash
docker build -t xhofe/alist:latest-ffmpeg --build-arg INSTALL_FFMPEG=true .
```

:::

## **有关离线下载功能的额外说明**

若没有使用```docker pull --platform```参数拉取镜像时，docker可能会在64位操作系统上拉取32位镜像,这将可能导致离线下载功能即使在正常配置情况下也无法使用。

当发生错误时,您会在Alist的日志文件中看到类似错误日志。

```ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://pic.rmb.bdstatic.com/bjh/34ee946f7a74435a167ca4351d723374.png to [/ftp](/)]```

解决方法,如果是CPU架构是64位，尝试手动拉取64位docker镜像,重新构建容器，再次尝试。

如果是CPU架构是32位，目前尚无可用方案。

## **Docker安装怎么更新?**
::: details docker-cli 更新


1. docker ps -a #查看容器(找Alist容器的ID)

2. docker stop ID #停止Alist运行,不然无法删除(这次Alist容器的ID是d429749a6e69，每一次安装都不一样自己看)

3. docker rm ID #删除Alist容器(数据还在只要你不手动删除)

4. docker pull xhofe/alist:latest

5. [输入安装命令点击查看](#docker-cli)

6. 更新好了 去看看吧..就这么简单

**图片中丢了一步，是教程中的第四步....记得执行**
![docker](/img/faq/updocker.png)

:::

:::details docker-compose 更新
1. docker-compose pull
2. docker-compose up -d

:::

Q：我的版本是v3.x.x 怎么也升级不到最新版 `docker pull xhofe/alist:latest`拉取最新不行 改成docker-compose安装还是3.x.x版本

A：原因是你的docker设置了镜像，从镜像更新不到最新版本，改一下/etc/docker/daemon.json，删除"registry-mirrors": ["镜像加速器地址"]

- 删除若不行，可以考虑更换一个`镜像加速地址`
- 或者简单粗暴：下载时将`xhofe/alist:latest` 替换为`xhofe/alist:v3.16.3`（指定版本，写教程时最新的是3.16.3）