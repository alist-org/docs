---
# This is the title of the article
title: How to
# This is the icon of the page
icon: study
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### How to add password for a file/folder?

Add a [meta](../guide/advanced/meta.md) record.

### How to reverse proxy with sub directory?

An example of using nginx to reverse proxy to https://nn.ci/alist:
- Normal installation
- Set [Api url](../config/site.md#api-url) to `https://nn.ci/alist`, [Base path](../config/site.md#base-path) to `alist` and click save button
- Add a reverse proxy record in nginx
```nginx
location /alist/ {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Range $http_range;
	  proxy_set_header If-Range $http_if_range;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5244/;
    # the max size of file to upload
    client_max_body_size 20000m;
}
```

### How to get password if i forget it?

If you are the owner of the site, you can get the admin's info by run `./alist admin` in the terminal.
Otherwise you can ask the owner to reset the password.

### How to modify the listening port​

Refer to [config](../config/configuration.md#port)

### How to upgrade

Except for the incompatible version marked in the changelog, you can directly replace the binary file to upgrade.

For docker user, just remove the old container and pull the new image then run it.

### How to allow guest to upload files

Add a [meta](../guide/advanced/meta.md) record, and open `write` field.

### How to remove `powered_by Alist` at the bottom?​

According to our open source license:
Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. **Copyright and license notices must be preserved.** Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.


### When adding a 189Cloud storage: the device ID does not exist, and a secondary device verification is required​

It may be that the risk detection system has been triggered. Please changing the password, then, add it again.

### TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers?

For network problems such as these, please troubleshoot and solve them yourself.Don't create any issues for this.
