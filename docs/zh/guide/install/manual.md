---
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
# 手动安装

### 获取Alist
打开[AList Release](https://github.com/Xhofe/alist/releases)下载待部署系统对应的文件。 最新版的前端已经和后端打包好了，不用再下载前端文件了。

### 运行

:::tabs#os
@tab linux
```bash
# 解压下载的文件，得到可执行文件：
tar -zxvf alist-xxxx.tar.gz
# 授予程序执行权限：
chmod +x alist
# 运行程序
./alist server
# 获得管理员信息
./alist admin
```
@tab macos
```bash
# 解压下载的文件，得到可执行文件：
tar -zxvf alist-xxxx.tar.gz
# 授予程序执行权限：
chmod +x alist
# 运行程序
./alist server
# 获得管理员信息
./alist admin
```
@tab windows
```bash
# 解压下载的文件，得到可执行文件：
unzip alist-xxxx.tar.gz
# 运行程序
./alist.exe server
# 获得管理员信息
./alist.exe admin
```
:::

*xxxx指的是不同系统/架构对应的名称，一般Linux-x86/64为alist-linux-amd64。 如果你的glibc版本太低，建议下载musl版本*

当你看到`start server@0.0.0.0:5244`的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。 程序默认监听 5244 端口。 现在打开`http://ip:5244`可以看到登录页面，webdav请看[WebDav](../webdav.md)。

### Daemon
`vim /usr/lib/systemd/system/alist.service` 添加如下内容，其中path_alist为alist所在的路径
```ini
[Unit]
Description=alist
After=network.target
 
[Service]
Type=simple
WorkingDirectory=path_alist
ExecStart=path_alist/alist-xxxx server
Restart=on-failure
 
[Install]
WantedBy=multi-user.target
```
然后`systemctl daemon-reload`，现在你可以使用这些命令来管理程序：
- Start: `systemctl start alist`
- Shut down: `systemctl stop alist`
- Self-start: `systemctl enable alist`
- Status: `systemctl status alist`
- Restart: `systemctl restart alist`