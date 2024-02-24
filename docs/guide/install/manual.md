---
# This is the title of the article
title: Manual installation
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

## **Get Alist**
Open [AList Release](https://github.com/Xhofe/alist/releases) to download the files corresponding to the system to be deployed. The latest version of the front-end has been packaged with the back-end, so there is no need to download the front-end files again.



The xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is alist-linux-amd64. 

If there is a prompt as follows：It is because [your GLIBC version is too low](../../faq/why.md#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-or-accept-function-not-implemented), it is recommended to download the musl version

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist)  
# or
accept: function not implemented
```



When you see the output of `start server @ 0.0.0.0:5244` and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open `http://ip:5244` You can see the login page, please see [WebDav](../webdav.md) for webdav.

## **Running**

Versions above v3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**

:::tabs#os
@tab linux

```bash
# Unzip the downloaded file to get the executable file:
tar -zxvf alist-xxxx.tar.gz
# Grant program execution permissions:
chmod +x alist
# Run the program
./alist server

# Obtain administrator information The following two different versions, the new version also has random generation and manual settings
# Versions lower than v3.25.0
./alist admin

# higher than v3.25.0 version
# Randomly generate a password
./alist admin random
# Manually set a password `NEW_PASSWORD` refers to the password you need to set
./alist admin set NEW_PASSWORD
```
@tab macOS
```bash
# Unzip the downloaded file to get the executable file:
tar -zxvf alist-xxxx.tar.gz
# Grant program execution permissions:
chmod +x alist
# Run the program
./alist server

# Obtain administrator information The following two different versions, the new version also has random generation and manual settings
# Versions lower than v3.25.0
./alist admin

# higher than v3.25.0 version
# Randomly generate a password
./alist admin random
# Manually set a password `NEW_PASSWORD` refers to the password you need to set
./alist admin set NEW_PASSWORD
```
@tab Windows
```bash
# Unzip the downloaded file to get the executable file:
unzip alist-xxxx.zip
# Run the program
.\alist.exe server

# Obtain administrator information The following two different versions, the new version also has random generation and manual settings
# Versions lower than v3.25.0
.\alist.exe admin

# higher than v3.25.0 version
# Randomly generate a password
.\alist.exe admin random
# Manually set a password `NEW_PASSWORD` refers to the password you need to set
.\alist.exe admin set NEW_PASSWORD
```
@tab win(scoop)
```bash
# Install
scoop install alist
# Run
alist server
```
:::

## **Daemon**

:::::tabs#os
@tab linux
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
- Cancel Self-start: `systemctl disable alist`
- Status: `systemctl status alist`
- Restart: `systemctl restart alist`

Daemon will not use? [**Video Tutorial**](https://www.bilibili.com/video/BV1rF41197Qv?t=187.0)

@tab macOS
Edit `~/Library/LaunchAgents/ci.nn.alist.plist` in any way and add the following content, modify `path_alist` to be the path where AList is located, and `path/to/working/dir` to be the working path of AList

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

Then, execute `launchctl load ~/Library/LaunchAgents/ci.nn.alist.plist` to load the configuration, now you can use these commands to manage the program:

- Start: `launchctl start ~/Library/LaunchAgents/ci.nn.alist.plist`
- Close: `launchctl stop ~/Library/LaunchAgents/ci.nn.alist.plist`
- Unload configuration: `launchctl unload ~/Library/LaunchAgents/ci.nn.alist.plist`

@tab Windows

### **method one**

1.  Download the newest `nssm` from https://nssm.cc/download.
2.  Unzip the archive and go to the diretory of `nssm.exe`.
3.  Hold Shift and right click on the blank space, then release and press S or select "powershell here", you should now see a blue window named "Windows PowerShell".
4.  Type `.\nssm.exe install alist`.
5.  Select the path of `alist.exe` for "Path", e.g. `D:\alist\alist.exe`; type `server` for "Argument".
6.  You can custom "Display Name", "Description" and "Startup Type" in "Details" tab.
7.  Go to "I/O" tab and select a file for both "Output (stdout)" and "Output (stderr)", e.g. `D:\alist\stdout.log`. The file itself (`stdout.log`) may not exist, but the folder (`D:\alist`) must exist.
8.  Click on "Install Service".

You can now start the service from services.msc or task manager.

### **method two**

Use **`.VBS`** script to start and stop, create two scripts respectively start.vbs and stop.vbs

Just double-click to start it in the folder at the same level as the Alist startup program, don't worry about no response, just go to the browser to access it

::: info Two startup scripts

**start.vbs**

```vbscript
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "alist.exe server",vbhide
Wscript.quit
```

**stop.vbs**

```vbscript
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "taskkill /f /im alist.exe",0
Wscript.quit
```

1. If the script will not be created, you can download it yourself: [**Script Download**](https://www.alipan.com/s/DHPMhRtKUzY/folder/63e0961eae317bd4d4d945cda69dbb00f9837fb7)

2. If the script will not be used, you can watch the video: [**reference video**](https://www.bilibili.com/video/BV1DG411s7j5?t=266.2)

How to realize Windows startup automatically, you can refer to the script mentioned above to use the video (second).

::::

:::::



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


## **How to update**

Download the new version of Alist and replace the previous one.

<!-- @include: script.md{87-265} -->