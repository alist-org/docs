---
# This is the icon of the page
icon: iconfont icon-speed
# This control sidebar order
order: 7
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

# Load balancing

It is required that the file structures in the two storages are exactly the same, and the program will automatically poll all storages for download/request.

Different network disks can be used, but the file directories must be consistent.

- If the network disk mounted on the main display is inconsistent with the directory tree of the network disk mounted on the load and an error is returned after modifying the network disk mounted on the main display, you can solve it by yourself to keep the directory files of the network disk on the load consistent.

![](/img/advanced/balance.png)

The first is marked with a red box. It is the main mount, which is displayed on the front page. The remaining nine are the first load balancing on the first one.

### **how to use​**

One storage can be added normally, and the other storage can be added with the mount path of `the first storage mount path + .balance + any other content`.
E.g:

- Storage 1: test
- Storage 2: test.balance1
- Storage 3: test.balance2
- Storage 4: test.balance3
- ...
- Storage n: test.balancen
