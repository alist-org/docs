---
# This is the title of the article
title: One-click Script
# This is the icon of the page
icon: iconfont icon-script
# This control sidebar order
order: 1
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

Only for Linux-x86_64/arm64 platform.

::: tabs

@tab Latest
**Install**
```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```

**Update**
```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update
```

**Uninstall**
```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall
```

@tab Beta
**Install**
```bash
curl -fsSL "https://alist.nn.ci/beta.sh" | bash -s install
```

**Update**
```bash
curl -fsSL "https://alist.nn.ci/beta.sh" | bash -s update
```

**Uninstall**
```bash
curl -fsSL "https://alist.nn.ci/beta.sh" | bash -s uninstall
```

:::

### **Custom path**

The default installation is in `/opt/alist`. To customize the installation path, add the installation path as the second parameter, which must be an absolute path (if the path ends in alist, install directly to the given path, otherwise it will be installed in the given path alist Directory), such as installing to `/root`:

:::tabs

@tab Latest
```bash
# Install
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install /root
# update
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall /root
```

@tab Beta
```bash
# Install
curl -fsSL "https://alist.nn.ci/beta.sh" | bash -s install /root
# update
curl -fsSL "https://alist.nn.ci/beta.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alist.nn.ci/beta.sh" | bash -s uninstall /root
```

:::

- Start: `systemctl start alist`
- Shut down: `systemctl stop alist`
- Status: `systemctl status alist`
- Restart: `systemctl restart alist`



## **Get Password**

You need to enter the directory folder where the script installs AList and execute the following command

#### Lower than v3.25.0

```bash
./alist admin
```


#### Higher than v3.25.0

Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**

```bash
# Randomly generate a password
./alist admin random
# Manually set a password, `NEW_PASSWORD` refers to the password you need to set
./alist admin set NEW_PASSWORD
```



## **What should I do if it keeps loading?**

I mounted some network disks but they cannot be used. I restarted AList and found that I could not enter. The web page prompts: `Failed to obtain settings: Please wait, storage is loading`. What should I do?

1. Wait a few minutes
2. Stop the failed/unstartable storage by using the command



:::tabs#stop
@tab Linux

If you stop by command ==You must first enter the folder where your AList is located and enter the command==

If we don’t know which storage is causing the problem, we can list all storages through the command

```bash
./alist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f alist]# ./alist storage list
INFO[2023-11-23 17:54:10] reading config file: data/config.json
INFO[2023-11-23 17:54:10] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:10] init logrus...
INFO[2023-11-23 17:54:10] Found 2 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     S3                /R2                             true    │
│ 2     UrlTree           /233                            true    │
└─────────────────────────────────────────────────────────────────┘
```

After entering the query command, we will enter another mode and cannot operate. If there are too many added storages, you can use the ↑ and ↓ keys on the keyboard to scroll down. After you find it, you can press `Ctrl+C` to exit.

For example, because the storage `233` cannot be loaded, we enter the command to stop it, and then restart AList.

```bash
./alist storage disable /233
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f alist]# ./alist storage disable /233
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/233] have been disabled
```



@tab Windows

If you stop by command ==You must first enter the folder where your AList is located and enter the command==

If we don’t know which storage is causing the problem, we can list all storages through the command

```bash
alist.exe storage list
```

```bash{1}
C:\Users\admin\Desktop\alist>alist.exe storage list
INFO[2023-11-23 18:36:23] reading config file: data\config.json
INFO[2023-11-23 18:36:23] load config from env with prefix: ALIST_
INFO[2023-11-23 18:36:23] init logrus...
INFO[2023-11-23 18:36:23] Found 13 storages
┌──────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled  │
│──────────────────────────────────────────────────────────────────│
│ 1     AliyundriveOpen   /open                           true     │
│ 9     Local             /code                           true     │
│ 10    AList V3          /ceshi                          true     │
└──────────────────────────────────────────────────────────────────┘
```

After entering the query command, we will enter another mode and cannot operate. If there are too many added storages, you can use the ↑ and ↓ keys on the keyboard to scroll down. After you find it, you can press `Ctrl+C` to exit.

For example, because the storage `open` cannot be loaded, we enter the command to stop it, and then restart AList.

```bash
alist.exe storage disable /open
```

```bash{1,5}
C:\Users\admin\Desktop\alist>alist.exe storage disable /open
INFO[2023-11-23 18:41:43] reading config file: data\config.json
INFO[2023-11-23 18:41:43] load config from env with prefix: ALIST_
INFO[2023-11-23 18:41:43] init logrus...
INFO[2023-11-23 18:41:43] Storage with mount path [/open] have been disabled
```



@tab Mac

If you stop by command ==You must first enter the folder where your AList is located and enter the command==

Since I don’t have a Mac device at the moment, I can’t provide specific examples, but the commands are the same and you can refer to Linux and Windows.

If we don’t know which storage is causing the problem, we can list all storages through the command

List storage:

```bash
alist storage list
```

Stop storage:

```bash
alist storage disable /Path
```



@tab Docker

The `Docker` here currently only provides the default version installed using the document command. ==If you build multiple Docker versions of AList, you need to modify individual parameters~==

If we don’t know which storage is causing the problem, we can list all storages through the command

```bash
docker exec -it alist ./alist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f alist]# docker exec -it alist ./alist storage list
INFO[2023-11-23 11:50:08] reading config file: data/config.json
INFO[2023-11-23 11:50:08] load config from env with prefix: ALIST_
INFO[2023-11-23 11:50:08] init logrus...
INFO[2023-11-23 11:50:08] Found 8 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     PikPakShare       /pikpak                         true    │
│ 2     OnedriveAPP       /utena_onedrive                 true    │
│ 3     OnedriveAPP       /adelev_onedrive                true    │
│ 4     OnedriveAPP       /megan_onedrive                 true    │
│ 5     OnedriveAPP       /patti_onedrive                 true    │
└─────────────────────────────────────────────────────────────────┘
```

After entering the query command, we will enter another mode and cannot operate. If there are too many added storages, you can use the ↑ and ↓ keys on the keyboard to scroll down. After you find it, you can press `Ctrl+C` to exit.

For example, because the storage `pikpak` cannot be loaded, we enter the command to stop it, and then restart AList.

```bash
docker exec -it alist ./alist storage disable /pikpak
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f alist]# docker exec -it alist ./alist storage disable /pikpak
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/pikpak] have been disabled
```

@tab Other

Basically they are the same commands, only the prefix files are different, and the commands remain the same.

List storage:

```bash
alist storage list
```

Stop storage:

```bash
alist storage disable /path
```



:::