---
# This is the title of the article
title: One-click Script
# This is the icon of the page
icon: script
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

### Install

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```

### update

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update
```

### Uninstall

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall
```

### Custom path

The default installation is in `/opt/alist`. To customize the installation path, add the installation path as the second parameter, which must be an absolute path (if the path ends in alist, install directly to the given path, otherwise it will be installed in the given path alist Directory), such as installing to `/root`:

```bash
# Install
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install /root
# update
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall /root
```
