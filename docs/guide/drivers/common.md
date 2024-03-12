---
# This is the icon of the page
icon: iconfont icon-state
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

### **Mount Path**

Unique identifier, that is the location you want to mount to, if you want to mount to the root directory, it is `/`

### **Order**

When there are multiple accounts, it is used for sorting, The smaller the more forward

### **Remark**

Anything you want to fill in, which is just for reminding you what this storage is

## **Enable signing**

Sign and encrypt files (no password required), only valid for this driver, if other signatures are not enabled and `signature all` and `meta-information encryption` are not set, others will not be signed

Usage scenario: I don't want to enable all signatures, and I don't want to set metadata encryption. I just want to sign and encrypt a certain driver to prevent it from being scanned.

Scope of influence: `Settings-->Global-->Signature All` > `Metainformation Directory Encryption` > `Single Driver Signature`

### **Cache Expiration**

Cache time of directory structure.

### **Web proxy**

Whether the web preview,download and the direct link go through the transfer. If you open this, recommended you set [site_url](../../config/configuration.md#site_url) so that alist can works fine.

-----

- Web proxy Strategies ：It is a strategy when using the webpage. The default is a local agent. If you fill in the proxy URL and enable the web agent to use the proxy URL
- Webdav policy Strategies：It is an option to use the webdav function
  - If there are 302 options default to 302, if there is no 302 option default to the local agent, if you want to use the agent URL, please fill in and manually switch to the proxy URL strategy

The two are different configurations

### **Webdav policy**

- 302 redirect: redirect to the real link
- use proxy URL: redirect to proxy URL
- native proxy: return data directly through local transit(best compatibility)

-----

- 302 redirect：Although it does not consume traffic, it is not recommended to share and use it.
- use proxy URL：It will consume the traffic of the agent URL
- native proxy：The traffic of the construction of Alist device will consume

### **Description of three modes**
```flow
1=>start: cloud disk
2=>end: you
  
1(right)->2
```

```flow
11=>start: cloud disk
22=>operation: download proxy URL:>#download-proxy-url
33=>end: you
 
11(right)->22(right)->33
```

```flow
11=>start: cloud disk
22=>operation: server local transfer
33=>end: you
 
11(right)->22(right)->33
```

### Download proxy URL

When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.Two proxy methods are provided:

::::tabs
@tab cloudflare workers
You can use `cloudflare workers` for proxy, just fill in the `cloudflare workers` address here.
The workers code can be found at https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js. in:

- ADDRESS: your Alist address, The protocol header must be added, and cannot be followed by /. Such as `https://pan.nn.ci`;
- TOKEN: you can get in `Other settings` in your Alist manage page.

:warning: Cloudflare Workers free CDN only supports (regardless of domestic or foreign) **http80 port** and **https443 port**, from group friend test

- When mounting the configuration in the Alist background, fill in the **download proxy URL** at the end of the link without `/`

If you do n’t understand [**Disassembled for details**](https://anwen-anyi.github.io/index/11-durl.html)

@tab Universal Binary
You can also use another machine for proxying, download the program at https://github.com/alist-org/alist-proxy/releases

`./alist-proxy -help` to see how to use it.

If you don’t understand, there are detailed [**video tutorial**](https://www.bilibili.com/video/BV17N411S7fg/)

::::

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
