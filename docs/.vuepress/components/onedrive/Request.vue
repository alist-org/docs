<script lang="ts" setup>
import { NInput, NSelect, NButton, NSpace } from 'naive-ui'
import { reactive, watch } from 'vue';

const zones = {
  global: [
    "https://login.microsoftonline.com", //请求code与请求access_token
    "https://graph.microsoft.com", //获取站点ID
    "https://portal.azure.com", //管理后台 创建应用
    "Global",
    "https://www.office.com/", //创建Sharepoint
    "0a2991a3-1674-4334-8561-671cc7349960", // client_id
    "uw67Q~TCMqdJyH35hlcHHclv~mhNOGx.jfPFm", // client_secret
  ],
  cn: [
    "https://login.chinacloudapi.cn",
    "https://microsoftgraph.chinacloudapi.cn",
    "https://portal.azure.cn",
    "21vianet(世纪互联)",
    "https://portal.partner.microsoftonline.cn/Home",
    "50ff485b-3bdc-4bd5-92a1-75b178187673",
    "6v426lmVYKGM.bkuFu24-EqJAr_~~5_HKL",
  ],
  de: [
    "https://login.microsoftonline.de",
    "https://graph.microsoft.de",
    "https://portal.microsoftazure.de",
    "Azure Germany",
  ],
  us: [
    "https://login.microsoftonline.us",
    "https://graph.microsoft.us",
    "https://portal.azure.us",
    "Azure US GOV",
  ],
};
const data = reactive({
  zone: "global",
  client_id: "",
  client_secret: ""
})

data.client_id = zones[data.zone][5]
data.client_secret = zones[data.zone][6]

watch(() => data.zone, (val) => {
  data.client_id = zones[val][5] || ""
  data.client_secret = zones[val][6] || ""
})

const createClient = () => {
  window.open(zones[data.zone][2] + '/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade', "_blank")
}

const getToken = () => {
  const url = new URL(
    `${(zones as any)[data.zone][0]}/common/oauth2/v2.0/authorize`
  );
  url.searchParams.set("client_id", data.client_id);
  url.searchParams.set("response_type", "code");
  url.searchParams.set(
    "redirect_uri",
    "https://alist.nn.ci/tool/onedrive/callback"
  );
  url.searchParams.set(
    "scope",
    "offline_access files.readwrite.all"
  );
  url.searchParams.set(
    "state",
    window.btoa(`${data.client_id}::${data.client_secret}::${data.zone}`)
  );
  window.open(url.toString(), "_self");
}
</script>

<template>
  <NSpace vertical size="large">
    <h4>zone</h4>
    <NSelect v-model:value="data.zone" size="large" :options="Object.keys(zones).map(zone => {
      return {
        label: zones[zone][3],
        value: zone
      }
    })" />
    <h4>client_id</h4>
    <NInput size="large" v-model:value="data.client_id" />
    <h4>client_secret</h4>
    <NInput size="large" v-model:value="data.client_secret" />
    <NSpace justify="center">
      <NButton size="large" secondary @click="createClient">Create client</NButton>
      <NButton size="large" type="primary" @click="getToken">Get Refresh Token</NButton>
    </NSpace>
  </NSpace>
</template>

<style scoped>
h4 {
  margin: 0;
}
</style>