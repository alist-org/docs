---
# This is the icon of the page
icon: people
# This control sidebar order
order: 9
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

# GitHub Login
### Github client id

client ID

### Github client secrets

secrets ID



Open **https://github.com/settings/developers** Click **`New OAuth App`**

### Register OAuth Instructions

- Application name
     - Write whatever you want to call it

-  ==**Homepage URL**== 
  - home URL address
    - Both **http** and **https** can be used

- Application description
   - write whatever you want
-  ==**Authorization callback URL**== 
   - Callback URL address
   - **https://your_domain/api/auth/github_callback**
     - Both **http** and **https** can be used



Remember to get **Client secrets** after filling it out, and then fill it in the Alist background.



### Completely fill in the reference schematic

![github](/img/advanced/github.png)