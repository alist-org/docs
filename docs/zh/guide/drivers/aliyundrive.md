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

# 阿里云盘/分享

:::tip

由于阿里云盘 referer 的限制，必须使用移动端 token。 使用桌面 Web 令牌将导致无法下载和预览。
当然，如果你在本地使用或者带宽足够大，你也可以开启代理，让桌面 Web 的 `refresh token` 正常工作。

:::

## 刷新令牌

按照这个 [issue](https://github.com/Xhofe/alist/issues/88) 在手机上捕获/查找日志 (/data/media/0/Android/data/com.alicloud.databox/ 文件/日志/跟踪/）。 或者您可以点击：

<script setup lang="ts">
import { ref } from "vue";
const btnText = ref("获取 Token");
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
  btnText.value = '等待...';
  state.value = 1;
  const resp = await fetch("https://api.nn.ci/alist/ali/qr");
  const res = await resp.json();
  console.log(res)
  btnText.value='使用阿里云盘 APP 扫描然后点击'
  state.value = 2;
  ckData.value = JSON.stringify({
    ck: res.content.data.ck,
    t: res.content.data.t.toString(),
  });
  src.value = `https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(res.content.data.codeContent)}`
}
const getToken = async ()=>{
  state.value = 3;
  btnText.value = '等待...';
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
    btnText.value = '使用阿里云盘 App 扫描然后点击'
    alert('Status:' + qrCodeStatus);
    return
  }
  const bizData = JSON.parse(atob(bizExt));
  token.value = bizData.pds_login_result.refreshToken;
  btnText.value = '获取 Token 成功'
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

## Root folder file_id

打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串

如 https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940

这个文件夹的 file_id 即为 `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`：

![file_id](/img/drivers/aliyundrive.png)

## 秒传

上传的时候校验hash，如果云端有，直接生成文件，不消耗流量

## 内部上传

如果你部署 Alist 的服务器是阿里云北京地区ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。


## 阿里云盘分享

主要填写 **[刷新令牌](#刷新令牌)，分享ID**

- **根文件夹ID**(默认root根目录)，想写就写不想写就是默认根目录

- 分享密码有就写没有就不写

![alist](/img/drivers/aliyun/aliyun.png)
