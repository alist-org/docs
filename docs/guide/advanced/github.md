---
# This is the icon of the page
icon: github
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

::: warning
If you want to use GitHub to log in, you first need the machine you built Alist to be able to connect to GitHub before you can call and use it, otherwise you cannot use it if the link is not connected
:::

### Completely fill in the reference schematic

![github](/img/advanced/github.png)



### GitHub login Video Tutorials

<ArtPlayer
  src="https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4872400300415846&raw=true" 
  poster="/img/advanced/github-login.png"
/>

**If the video fails, you can watch it here: https://b23.tv/Fm8AkC5**