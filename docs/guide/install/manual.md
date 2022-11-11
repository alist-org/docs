---
# This is the title of the article
title: Manual installation
# This is the icon of the page
icon: interact
# This control sidebar order
order: 3
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

### Get Alist
Open [AList Release](https://github.com/Xhofe/alist/releases) to download the files corresponding to the system to be deployed. The latest version of the front-end has been packaged with the back-end, so there is no need to download the front-end files again.

### Running

:::tabs#os
@tab linux
```bash
# Unzip the downloaded file to get the executable file:
tar -zxvf alist-xxxx.tar.gz
# Grant program execution permissions:
chmod +x alist
# Run the program
./alist server
# Get admin's info
./alist admin
```
@tab macos
```bash
# Unzip the downloaded file to get the executable file:
tar -zxvf alist-xxxx.tar.gz
# Grant program execution permissions:
chmod +x alist
# Run the program
./alist server
# Get admin's info
./alist admin
```
@tab windows
```bash
# Unzip the downloaded file to get the executable file:
unzip alist-xxxx.zip
# Run the program
.\alist.exe server
# Get admin's info
.\alist.exe admin
```
@tab win(scoop)
```bash
# Install
scoop install alist
# Run
alist server
```
:::

*The xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is alist-linux-amd64. If your glibc version is too low, it is recommended to download the musl version*

When you see the output of `start server @ 0.0.0.0:5244` and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open `http://ip:5244` You can see the login page, please see [WebDav](../webdav.md) for webdav.

:::info
For all platform, you can use follow command to silent start, stop and restart. (v3.4.0 and later)

```bash
# start server with `--force-bin-dir`
alist start
# stop server by pid
alist stop
# restart server by pid
alist restart
```
:::

### Daemon(Linux)

`vim /usr/lib/systemd/system/alist.service` add the following content, where path_alist is the path where alist is located
```ini
[Unit]
Description=alist
After=network.target
 
[Service]
Type=simple
WorkingDirectory=path_alist
ExecStart=path_alist/alist server
Restart=on-failure
 
[Install]
WantedBy=multi-user.target
```
Then `systemctl daemon-reload`, now you can use these commands to manage the program:
- Start: `systemctl start alist`
- Shut down: `systemctl stop alist`
- Self-start: `systemctl enable alist`
- Status: `systemctl status alist`
- Restart: `systemctl restart alist`