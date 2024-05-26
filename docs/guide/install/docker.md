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

# Use Docker

See the log output for the admin's info:

#### Lower than v3.25.0

```bash
docker exec -it alist ./alist admin
```

#### Higher than v3.25.0

Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**

```bash
# Randomly generate a password
docker exec -it alist ./alist admin random
# Manually set a password, `NEW_PASSWORD` refers to the password you need to set
docker exec -it alist ./alist admin set NEW_PASSWORD
```

### **Release version**

#### **docker-cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
```

#### **docker-compose**

```bash
mkdir /etc/alist
cd /etc/alist
wget https://alist.nn.ci/docker-compose.yml
docker-compose up -d
```

**Alternatively, you can manually create a `docker-compose.yml` file with the following content.**

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
After the service runs, the default time zone for the container is UTC time zone. If you want to specify the time zone for the container to run, you can achieve this by passing this variable:`-e "TZ=Asia/Shanghai"`。

### **Offline download with aria2**

If you want to use aria2 to offline download, we recommend you to use this [image](https://hub.docker.com/r/xhofe/alist-aria2), which carries a pre-installed aria2.

### **Dev version**
Just for amd64/arm64. Not recommended, this may can't work properly.

#### **docker-cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:main
```

#### **docker-compose**

```yaml
version: '3.3'
services:
    alist:
        image: 'xhofe/alist:main'
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

### **Specify version**
See https://hub.docker.com/r/xhofe/alist for details

### **Docker-ffmpeg**

- https://github.com/alist-org/alist/pull/6054

I'm not sure if the method of **docker-compose** is correct. If it's not correct, you can give us feedback.

::: tabs#Docker-ffmpeg

@tab latest

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

@tab main

**docker-cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:main-ffmpeg
```

**docker-compose**

```bash
version: '3.3'
services:
    alist:
        image: 'xhofe/alist:main-ffmpeg'
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

### **User / Group Identifiers**

When using volumes (`-v` flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user `PUID` and group `PGID`.

Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic.

In this instance `PUID=1000` and `PGID=1000`, to find yours use `id user` as below:

```bash
  $ id username
    uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)
```

### **Additional notes about the offline download feature**

If the image is not pulled using the '''docker pull --platform''' parameter, docker may pull the 32-bit image on the 64-bit operating system, which may cause the offline download function to be unavailable even under normal configuration.

When an error occurs, you will see a similar error log in Alist's log file.

```ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://pic.rmb.bdstatic.com/bjh/34ee946f7a74435a167ca4351d723374.png to [/ftp](/)]```

Solution, if the CPU architecture is 64-bit, try to manually pull the 64-bit docker image, rebuild the container, and try again.

If the CPU architecture is 32-bit, there is currently no solution available.



### **How to update Docker installation?**

::: details docker-cli update
1. docker ps -a #View the container (find the ID of the Alist container)
2. docker stop ID #Stop Alist running, otherwise it cannot be deleted (this time the ID of the Alist container is d429749a6e69, it is different for each installation)
3. docker rm ID #Delete the Alist container (the data is still there as long as you don't delete it manually)
4. docker pull xhofe/alist:latest
5. [Enter the installation command and click to view](#docker-cli)
6. The update is complete, go and have a look.. It's that simple

**There is a missing step in the picture, it is step 4 in the tutorial....remember to execute**
![docker](/img/faq/updocker.png)
:::

:::details docker-compose update
1. docker-compose pull

2. docker-compose up -d

:::

Q: My version is v3.x.x and I cannot upgrade to the latest version. `docker pull xhofe/alist:latest` does not work to pull the latest version. After changing to docker-compose, it is still version 3.x.x

A: The reason is that your docker has set up a mirror, and the latest version cannot be updated from the mirror, so modify /etc/docker/daemon.json and delete "registry-mirrors": ["mirror accelerator address"]

- If deletion doesn’t work, you can consider replacing it with a `mirror acceleration address`
- Or simple and rude: when downloading, replace `xhofe/alist:latest` with `xhofe/alist:v3.16.3` (specify the version, the latest when writing the tutorial is 3.16.3)