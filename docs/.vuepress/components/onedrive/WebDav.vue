<script lang="ts" setup>
import { NButton, NInput, NSpace } from 'naive-ui';
import { reactive } from 'vue';

const data = reactive({
  spUrl: "",
  webdavUrl: ""
})

function calWebDavURL() {
  let url = data.spUrl;
  if (url.startsWith("https://")) {
    url = url.replace("https://", "");
  }
  let ans = `https://` + url.split("/").slice(0, 3).join("/");
  if (url.includes("/sites/")) {
    data.webdavUrl = ans + `/Shared Documents`;
  } else {
    data.webdavUrl = ans + `/Documents`;
  }
}
</script>

<template>
  <NSpace vertical size="large">
    <NInput size="large" placeholder="Input Onedrive/SharePoint URL" v-model:value="data.spUrl" />
    <p>OneDrive: https://xx-my.sharepoint.xx/personal/xx_xx_xx/_layouts/15/onedrive.aspx</p>
    <p>SharePoint: https://xx.sharepoint.xx/sites/xx</p>
    <NButton block size="large" type="primary" @click="calWebDavURL">Get WebDav URL</NButton>
    <NInput size="large" type="textarea" placeholder="WebDav URL" v-model:value="data.webdavUrl" readonly />
  </NSpace>
</template>
<style scoped>
p {
  margin: 0;
}
</style>