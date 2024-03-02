---
# This is the icon of the page
icon: iconfont icon-set
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

# Meta
The configuration in the meta information is only valid for `Guest`, if you want to have the corresponding permissions for the newly created ordinary users, please go to `User`-->`User Account` to modify the relative permissions

### **Path**

The path for this meta to take effect

<br/>



### **Password**
Password required to access this path

- Meta information password will not take effect when accessed using `WebDav`

<br/>



### **Write**
Allow guest to make directory, new file and upload files.

<br/>



### **Hide**
The objects to hide of this path, One regular expression (in `Golang`) per line

- Meta information hiding can take effect when accessed using `WebDav`

<br/>



### **Readme**
The Readme to render while enter this path, support markdown content or markdown link.

- Show at bottom of list

- The automatically rendered file name is: **`readme.md`**

<br/>



## **Header**

(new in v3.29.0) The Readme to render while enter this path, support markdown content or markdown link.

- Show at top of list
- The automatically rendered file name is: **`top.md`**
  - Files can not be displayed in the list, for example `readme.md` is not displayed in the list
  - Backstage --> Settings --> Global --> Hidden files --> Add newline `/\/top.md/i`

<br/>



### **Apply to sub folder**
Apply this meta to sub folder of specific path

<br/>





## :warning: Tips

> Regarding hidden, users without permissions can search for hidden folders/files, solutions

:white_check_mark: If you want to hide the folder in a folder, create a new Yuan information alone, and select the folder we want to hide,，Hidden if you want to hide everything, write directly`.*`

:x: You cannot directly fill in the meta information of the root directory `/`, and then fill in the folder we want to hide, the error case [View details](https://github.com/alist-org/alist/issues/4494)

![](/img/advanced/hide-tips.png)
