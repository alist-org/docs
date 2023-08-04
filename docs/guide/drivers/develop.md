---
# This is the icon of the page
icon: iconfont icon-code
# This control sidebar order
order: 99
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - Develop
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Contribute new storage driver

Duplicate `drivers/template` to expand the new storage. Please read [CONTRIBUTING](https://github.com/Xhofe/alist/blob/main/CONTRIBUTING.md) for details.

The design of the driver part of alist is easy to expand, no need to modify other files, just create a new package under the back-end project drivers package and reference this package in the `all.go` file.