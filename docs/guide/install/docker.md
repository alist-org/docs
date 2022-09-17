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

# Use Docker

See the log output for the admin's info:
```bash
docker exec -it alist ./alist admin
```

### Release version
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

### Dev version
Just for amd64/arm64. Not recommended, this may can't work properly. 
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:main
```

### Specify version
See https://hub.docker.com/r/xhofe/alist for details