---
# This is the icon of the page
icon: state
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Common

### Mount Path

Unique identifier, that is the location you want to mount to, if you want to mount to the root directory, it is `/`

### Order

When there are multiple accounts, it is used for sorting, The smaller the more forward

### Remark

Anything you want to fill in, which is just for reminding you what this storage is

### Cache Expiration
Cache time of directory structure.

### Web proxy

Whether the web preview,download and the direct link go through the transfer. If you open this, recommended you set [site_url](../../config/configuration.md#site_url) so that alist can works fine.

### Webdav policy

- 302 redirect: redirect to the real link
- use proxy URL: redirect to proxy URL
- native proxy: return data directly through local transit(best compatibility)

### Download proxy URL

When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.Two proxy methods are provided:

:::tabs
@tab cloudflare workers
You can use `cloudflare workers` for proxy, just fill in the `cloudflare workers` address here.
The workers code can be found at https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js. in:

- ADDRESS: your Alist address, The protocol header must be added, and cannot be followed by /. Such as `https://pan.nn.ci`;
- TOKEN: you can get in `Other settings` in your Alist manage page.

@tab Universal Binary
You can also use another machine for proxying, download the program at https://github.com/alist-org/alist-proxy/releases

`./alist-proxy -help` to see how to use it.

:::

You can even develop your own proxy program, the general steps are:

- When downloading, it will request `PROXY_URL/path?sign=sign_value`
- Verify sign in the proxy program, the calculation method of sign is:

```js
const to_sign = `${path}:${expireTimeStamp}`
const _sign = safeBase64(hmac_sha256(to_sign, TOKEN));
const sign = `${_sign}:${expireTimeStamp}`
```

The `TOKEN` is the [token](../../config/other.md#token) of admin user.

- After verifying the sign is correct, requesting `HOST/api/fs/link`, you can get the URL of the file and the request header to be carried
- Use the information to request and return

### Sort related
- Sort by: Sort by what
- Sort direction: Whether the sort direction is ascending or descedning
:::info
Some drives use their own sorting method, which may be different.
:::

### Extract folder

- Extract to front: put all folders to the front when sorting
- Extract to back: put all folders to the back when sorting
