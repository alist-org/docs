---
# This is the icon of the page
icon: set
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



### **Password**
Password required to access this path



### **Write**
Allow guest to make directory, new file and upload files.



### **Hide**
The objects to hide of this path, One regular expression (in `Golang`) per line.



### **Readme**
The Readme to render while enter this path, support markdown content or markdown link.



### **Apply to sub folder**
Apply this meta to sub folder of specific path



## :warning: Tips

> Regarding hidden, users without permissions can search for hidden folders/files, solutions

:white_check_mark: If you want to hide the folder in a folder, create a new Yuan information alone, and select the folder we want to hide,，Hidden if you want to hide everything, write directly`.*`

:x: You cannot directly fill in the meta information of the root directory `/`, and then fill in the folder we want to hide, the error case [View details](https://github.com/alist-org/alist/issues/4494)

![](/img/advanced/hide-tips.png)
