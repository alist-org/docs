---
# This is the title of the article
title: How to
# This is the icon of the page
icon: study
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Config
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### How to add password for a file/folder?

Add a [meta](../guide/advanced/meta.md) record.

### How to get password if i forget it?

If you are the owner of the site, you can get the password by run `./alist password` in the terminal.
Otherwise you can ask the owner to reset the password.

### How to modify the listening port​

Refer to [config](../config/configuration.md#port)

### How to update

Except for the incompatible version marked in the changelog, you can directly replace the binary file to update.
For docker user, just remove the old container and pull the new image then run it.

### How to allow guest to upload files

Add a [meta](../guide/advanced/meta.md) record, and open `write` field.

### How to remove `powered_by` at the bottom?​

Please respect the developer's labor, thank you. If you really want to remove it, you can use customize css to hide it.


### When adding a 189Cloud storage: the device ID does not exist, and a secondary device verification is required​

It may be that the prevention and control has been triggered. After changing the password, add it again.

