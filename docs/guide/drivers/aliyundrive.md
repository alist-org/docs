---
# This is the icon of the page
icon: state
# This control sidebar order
order: 3
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

# Aliyundrive

:::tip

Due to the limitation of the referrer of Aliyundrive, the mobile token must be used. Using the desktop web token will result in failure to download and preview.
Of course, you can also turn on the proxy so that `refresh token` of desktop web can work if you use it locally or if the bandwidth is large enough.

:::

### Refresh token

Follow to this [issue](https://github.com/Xhofe/alist/issues/88) Capture/find the log on the mobile phone (/data/media/0/Android/data/com.alicloud.databox/ files/logs/trace/). Or you can click:

<script setup lang="ts">
import { ref } from "vue";
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
  const resp = await fetch("https://api.nn.ci/alist/ali/qr");
  const res = await resp.json();
  console.log(res)
  btnText.value='Use AliyunDrive APP To Scan Then Click'
  state.value = 2;
  ckData.value = JSON.stringify({
    ck: res.content.data.ck,
    t: res.content.data.t.toString(),
  });
  src.value = `https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(res.content.data.codeContent)}`
}
const getToken = async ()=>{
  state.value = 3;
  btnText.value = 'Waiting...';
  const resp = await fetch('https://api.nn.ci/alist/ali/ck',{
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

*API is hosted on replit.com*

### Root folder file_id

Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940, which is `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`:

![file_id](/img/drivers/aliyundrive.png)
