---
# This is the icon of the page
icon: state
# This control sidebar order
order: 32
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
# Alist V2/V3



![alist](/img/drivers/alist/alist.png)



### Driver

First of all, you need to know whether the other party is V2 or V3.



### Link

Alist link you want to mount



### root directory path

- The pathname of the directory to be added, if not filled, it defaults to the root directory, such as:
   - [https://alist.nn.ci](https://alist.nn.ci/) -> `/`
   - https://alist.nn.ci/a -> `/a`
   - https://alist.nn.ci/a/b -> `/a/b`



### password

(The password option **is not required**, explain to those who need it)

The password refers to the meta information password

The Alist path you want to mount has a meta information password set

- example 1:
   - The path you mount is `/a`
   - Then you need to know what the other party’s `/a` path password is set to see the file, otherwise it will be blank after entering
- Example 2:
   - The path you mount is `/`
   - But the root directory `/` of the other party has no password set, but other individual folders such as Ali, Baidu, 123 have set passwords, so you can fill in these but only one password.
     - If the passwords of the three folders mentioned above are set differently, then you can only enter the folder with this password in the one you fill in, and you will not be able to enter without this password. You should understand.



### Access Token

(The access token option **is not required**, explain to those who need it)

(This is for the other party to give you, generally no one will hand over their token to outsiders)

- How to get V2: Go to the V2 document to view --> **https://alist-doc.nn.ci/docs/driver/alist#token**
- How to get V3: Background --> Settings --> Others --> **`Token`**



### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
