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

### Additional notes about the offline download feature

If the image is not pulled using the '''docker pull --platform''' parameter, docker may pull the 32-bit image on the 64-bit operating system, which may cause the offline download function to be unavailable even under normal configuration.

When an error occurs, you will see a similar error log in Alist's log file.

```ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://pic.rmb.bdstatic.com/bjh/34ee946f7a74435a167ca4351d723374.png to [/ftp](/)]```

Solution, if the CPU architecture is 64-bit, try to manually pull the 64-bit docker image, rebuild the container, and try again.

If the CPU architecture is 32-bit, there is currently no solution available.
