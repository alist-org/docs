---
# This is the icon of the page
icon: iconfont icon-interact
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

## **获取 AList**
打开 [AList Release](https://github.com/Xhofe/alist/releases) 下载待部署系统对应的文件。最新版的前端已经和后端打包好了，不用再下载前端文件了。



xxxx 指的是不同系统/架构对应的名称，一般 Linux-x86/64 为 alist-linux-amd64

手动安装如果有如下提示：是因为[你的 GLIBC 版本太低](../../faq/why.md#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-或者-accept-function-not-implemented)，建议下载 musl 版本

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist)  
#或者
accept: function not implemented
```



当你看到 `start server@0.0.0.0:5244` 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 `http://ip:5244` 可以看到登录页面，WebDAV 请参阅 [WebDav](../webdav.md)。

<br/>



## **手动运行**

v3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

:::tabs#os
@tab Linux

```bash
# 解压下载的文件，得到可执行文件：
tar -zxvf alist-xxxx.tar.gz
# 授予程序执行权限：
chmod +x alist
# 运行程序
./alist server

# 获得管理员信息 以下两个不同版本，新版本也有随机生成和手动设置
# 低于v3.25.0版本
./alist admin

# 高于v3.25.0版本
# 随机生成一个密码
./alist admin random
# 手动设置一个密码 `NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```
@tab macOS

```bash
# 解压下载的文件，得到可执行文件：
tar -zxvf alist-xxxx.tar.gz
# 授予程序执行权限：
chmod +x alist
# 运行程序
./alist server

# 获得管理员信息 以下两个不同版本，新版本也有随机生成和手动设置
# 低于v3.25.0版本
./alist admin

#高于v3.25.0版本
# 随机生成一个密码
./alist admin random
# 手动设置一个密码 `NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```
@tab Windows

```bash
# 解压下载的文件，得到可执行文件：
unzip alist-xxxx.zip
# 运行程序
.\alist.exe server

# 获得管理员信息 以下两个不同版本，新版本也有随机生成和手动设置
# 低于v3.25.0版本
.\alist.exe admin

# 高于v3.25.0版本
# 随机生成一个密码
.\alist.exe admin random
# 手动设置一个密码 `NEW_PASSWORD`是指你需要设置的密码
.\alist.exe admin set NEW_PASSWORD
```
@tab win(scoop)

```bash
# 安装
scoop install alist
# 运行
alist server
```
:::

<br/>



## **守护进程**

:::::tabs#os
@tab Linux
使用任意方式编辑 `/usr/lib/systemd/system/alist.service` 并添加如下内容，其中 path_alist 为 AList 所在的路径

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

然后，执行 `systemctl daemon-reload` 重载配置，现在你可以使用这些命令来管理程序：

- 启动: `systemctl start alist`
- 关闭: `systemctl stop alist`
- 配置开机自启: `systemctl enable alist`
- 取消开机自启: `systemctl disable alist`
- 状态: `systemctl status alist`
- 重启: `systemctl restart alist`

守护进程不配置? [**视频教程**](https://www.bilibili.com/video/BV1rF41197Qv?t=187.0)

@tab macOS
使用任意方式编辑 `~/Library/LaunchAgents/ci.nn.alist.plist` 并添加如下内容，修改 `path_alist` 为 AList 所在的路径，`path/to/working/dir` 为 AList的工作路径

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Label</key>
        <string>ci.nn.alist</string>
        <key>KeepAlive</key>
        <true/>
        <key>ProcessType</key>
        <string>Background</string>
        <key>RunAtLoad</key>
        <true/>
        <key>WorkingDirectory</key>
        <string>path/to/working/dir</string>
        <key>ProgramArguments</key>
        <array>
            <string>path_alist/alist</string>
            <string>server</string>
        </array>
    </dict>
</plist>
```

然后，执行 `launchctl load ~/Library/LaunchAgents/ci.nn.alist.plist` 加载配置，现在你可以使用这些命令来管理程序：

- 开启: `launchctl start ~/Library/LaunchAgents/ci.nn.alist.plist`
- 关闭: `launchctl stop ~/Library/LaunchAgents/ci.nn.alist.plist`
- 卸载配置: `launchctl unload ~/Library/LaunchAgents/ci.nn.alist.plist`

@tab Windows

### **方法1**

1.  在 https://nssm.cc/download 下载最新版本的 `nssm`；
2.  在解压后的文件夹内按住 Shift 并右击空白处，选择“在此处打开 Powershell 窗口”；
3.  在弹出的窗口中输入 `.\nssm.exe install alist`；
4.  Path 选择 alist.exe 的路径，如 `D:\alist\alist.exe`，Arguments 填 `server`；
5.  Details 选项卡中可以自定义标题和描述，可以选择服务的自启动模式（自动|延迟启动|手动|禁用）；
6.  在 I/O 选项卡为 Output (stdout) 和 Output (stderr) 各自指定一个日志文件的路径，如 `D:\alist\stdout.log`，文件本身（`stdout.log`）可以不存在，但是指定的目录（`D:\alist`）必须存在；
7.  点击“Install Service”即可。

此后可以直接在服务中启动 `alist`。

### **方法2**

用  **`.VBS`** 脚本启动和停止，分别创建两个脚本 分别是  启动.vbs 和 停止.vbs

直接在和Alist启动程序同级文件夹里面双击启动即可，不用担心没有反应 直接去 浏览器访问即可


::: info 两个启动脚本

**启动.vbs**

```vbscript
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "alist.exe server",vbhide
Wscript.quit
```

**停止.vbs**

```vbscript
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "taskkill /f /im alist.exe",0
Wscript.quit
```

1. 脚本不会创建的可以自行下载：[**脚本下载**](https://www.alipan.com/s/DHPMhRtKUzY/folder/63e0961eae317bd4d4d945cda69dbb00f9837fb7)

2. 脚本不会使用的可以看看视频：[**参考视频**](https://www.bilibili.com/video/BV1DG411s7j5?t=266.2)

如何实现Windows开机自启，可以参考上面提到的脚本使用视频(第二个)

::::

:::::



:::info
对于所有平台，您可以使用以下命令来静默启动、停止和重新启动。 （v3.4.0 及更高版本）

```bash
# 携带`--force-bin-dir`参数启动服务
alist start
# 通过pid停止服务
alist stop
# 通过pid重启服务
alist restart
```

:::

<br/>



## **如何更新**

下载新版Alist，把之前的替换了即可。

<br/>



<!-- @include: script.md{89-265} -->
