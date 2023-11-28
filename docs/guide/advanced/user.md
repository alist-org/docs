---
# This is the icon of the page
icon: iconfont icon-people
# This control sidebar order
order: 2
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

# User
### **Username**
Username for login
### **Password**
Password for login
:::tip
Password is invalid for guest user.

If you enter an incorrect password 6 times in a row, the current IP will be blocked for 30 minutes and you will not be able to enter your account and password to log in. However, it will not affect other IPs. It will only target IPs that entered 6 incorrect passwords.

- Restarting will immediately remove the 30-minute ban time

:::

### **Base path**
The root path that users see when he/she log in

-----

Q: **How to allow a user to see multiple folder paths?**

A: You can create a new [alias](alias.md) storage, add all the paths you need to show the user to the alias, and then point to the newly created alias storage in the user path

### **Permission**
- Can see hides: Can see the hides files and folders
- Access without password: Can access without password
- Add aria2 tasks: Can add aria2 tasks
- Mkdir or upload: Can make directory or upload files
- Rename: Can rename files and folders
- Move: Can move files and folders
- Copy: Can copy files and folders
- Delete: Can delete files and folders
- Webdav read: Can read files and folders with webdav
- Webdav manage: Can manage files and folders with webdav

## **Tips**

1. Are you worried that visitors can see all files? [**Click to see how to set it up here**](../../faq/why.md#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in)

2. **`Guest user is disabled, login please`**: In order to protect your Alist security, the guest access permission is closed, if you need guest access, open it yourself 
   - AList Manage --> users --> `guest` -->  **Disable** uncheck
3. Question about **`Copy/Upload`**

   - If you upload (including offline download and upload) large files, or upload a lot of files (hundreds or thousands), it is not recommended to use AList to operate, please go to the corresponding network disk official website to operate directly