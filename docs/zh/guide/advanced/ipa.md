---
# This is the icon of the page
icon: mini-app
# This control sidebar order
order: 8
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# IPA安装

直接上传ipa文件即可。

但是对于ios>=16 ， 你需要将ipa文件命名为：`原文件名@bundle-identifier.ipa`，即需要在原来的基础上加入`@bundle-identifier`，其中的`bundle-identifier`即IPA包中Info.plist的`CFBundleIdentifier`。比如：

- aszs@rn.notes.best.ipa