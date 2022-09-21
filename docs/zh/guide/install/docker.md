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

### 发行版本
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

### 开发版本

仅适用于 amd64/arm64。 不推荐，这可能无法正常工作。
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:main
```

### 指定版本
有关详细信息，请参阅 https://hub.docker.com/r/xhofe/alist
