---
# This is the icon of the page
icon: chrome
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Global settings

### Hide files

Match files hidden by regular expressions(`javascript`). If you don't understand, don't fill in them randomly. Wrong regular expressions will cause the front-end page to crash. One per line. By default, there is an example expression that hides README.md in all directories.

It's not really hiding. It still exists in the list returned by the api, it just doesn't show up in the frontend list. So if you want to really hide, add a [meta](../guide/advanced/meta.md) record instead.

### Package download

Whether to enable package download, default is true.

### Customize head

Any content you want which are automatically placed at the beginning of the head of the web page

### Customize body

Any content you want which are automatically placed at the end of the body of the web page

### Link expiration

The expiration time of the direct link, in hours. If it equals 0, it will not expire. Default is 0.
::: warning
Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.
:::

### Privacy regs

What you don't want to show in the error message, One regular expression (in `Golang`) per line. The matched content will be replaced with * of the corresponding length.

### Ocr api

Used to identify verification codes. You can deploy yourself: https://hub.docker.com/r/xhofe/ddddocr_server. The default ocr api is deployed on the [koyeb](https://app.koyeb.com/)(No availability guarantee), which is not recommended to use in production environment.


### Sign all

Add signatures to the direct link of all files (whether with password or not)