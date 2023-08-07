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

### **Install**

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```

### **update**

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update
```

### **Uninstall**

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall
```

### **Custom path**

The default installation is in `/opt/alist`. To customize the installation path, add the installation path as the second parameter, which must be an absolute path (if the path ends in alist, install directly to the given path, otherwise it will be installed in the given path alist Directory), such as installing to `/root`:

```bash
# Install
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install /root
# update
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall /root
```



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
