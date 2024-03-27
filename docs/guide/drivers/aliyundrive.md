---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 4
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Aliyundrive/share

:::warning

This driver is not recommended for use, because it is not stable and may be blocked at any time and we will remove it in a future version.
We recommend using the official driver [Aliyundrive Open](./aliyundrive_open.md).

:::

:::tip

Due to the limitation of the referrer of Aliyundrive, the mobile token must be used. Using the desktop web token will result in failure to download and preview.
Of course, you can also turn on the proxy so that `refresh token` of desktop web can work if you use it locally or if the bandwidth is large enough.

:::

### **Refresh token**

Follow to this [issue](https://github.com/Xhofe/alist/issues/88) Capture/find the log on the mobile phone (`/data/media/0/Android/data/com.alicloud.databox/files/logs/trace/`). Or you can click:

<script setup lang="ts">
import { ref } from "vue";
import { api } from "@Api"
const btnText = ref("Get Token");
// 0 -> Initial
// 1 -> Wait qr
// 2 -> Wait Scan
// 3 -> Getting Token
// 4 -> Success
const state = ref(0);
const src= ref('')
const token = ref('')
const ckData = ref('')
const getQr = async ()=>{
  btnText.value = 'Waiting...';
  state.value = 1;
  const resp = await fetch(`${api()}/alist/ali/qr`);
  const res = await resp.json();
  console.log(res)
  btnText.value='Use AliyunDrive APP To Scan Then Click this Button again'
  state.value = 2;
  ckData.value = JSON.stringify({
    ck: res.content.data.ck,
    t: res.content.data.t.toString(),
  });
  src.value = `${api()}/qr/?size=400&text=${encodeURIComponent(res.content.data.codeContent)}`
}
const getToken = async ()=>{
  state.value = 3;
  btnText.value = 'Waiting...';
  const resp = await fetch(`${api()}/alist/ali/ck`,{
    method: 'POST',
    headers:{
      "Content-Type": "application/json",
    },
    body: ckData.value
  });
  const res = await resp.json();
  const {content:{data:{qrCodeStatus,loginResult,bizExt}}} = res;
  if(loginResult !== "success"){
    state.value = 2;
    btnText.value = 'Use AliyunDrive APP To Scan Then Click'
    alert('Status:' + qrCodeStatus);
    return
  }
  const bizData = JSON.parse(atob(bizExt));
  token.value = bizData.pds_login_result.refreshToken;
  btnText.value = 'Get Token Success'
  state.value = 4;
  console.log(res)
}
const onClick = async ()=>{
  if(state.value===0){
    getQr()
  }
  if(state.value===2){
    getToken()
  }
}
</script>

<button :disabled="state === 3 || state === 1"
style="outline:none;padding:12px;background:#70c6be;border:none;border-radius:8px;cursor:pointer;font-size:20px;"
@click="onClick">
{{ btnText }}
</button>

<div v-show="src" style="margin:4px">
 <img :src="src"/>
</div>

<div v-show="token" >

:::info Token: {{ token }}
:::

</div>

_API is hosted on replit.com_

### **Root folder file_id**

Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940, which is `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`:

![file_id](/img/drivers/aliyundrive.png)

### **Second pass**

Check the hash when uploading. If there is one in the cloud, directly generate the file without consuming traffic

### **Internal upload**

If the server you deploy Alist on is Aliyun ECS for Beijing area, turn on this switch to improve the upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise you will have problems with inability to upload.

<br/>

## **Aliyundrive Share Url**

It is no longer available, and the shared storage method will no longer be developed and maintained in the future. At the same time, the token obtained by [**AliyundriveOpen**](./aliyundrive_open.md) cannot be used in the Alibaba Cloud Disk shared mount storage.

<br/>

### **The default download method used**

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
