<script lang="ts" setup>
import { NAlert, NButton, NCard, NInput, NSpace, NSpin } from 'naive-ui';
import { reactive } from 'vue';

const url = new URL(window.location.href);
const code = url.searchParams.get("code");
const client = url.searchParams.get("state");
const error = url.searchParams.get("error");
const error_description = url.searchParams.get("error_description");

const data = reactive({
  refreshToken: "",
  accessToken: "",
  errorMessage: "",
  siteUrl: "",
  siteId: "",
  gettingSiteId: false,
})

const getToken = () => {
  fetch("https://api.nn.ci/alist/onedrive/get_refresh_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      client,
    }),
  })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res);
      if (res.error) {
        data.errorMessage = res.error_description;
        return;
      }
      data.refreshToken = res.refresh_token;
      data.accessToken = res.access_token;
    });
}

if (code && client && !error) {
  getToken()
}
const [client_id, client_secret, zone] = atob(client as string).split("::");

const getSiteId = () => {
  data.gettingSiteId = true;
  fetch("/api/onedrive/get_site_id.ts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      site_url: data.siteUrl,
      access_token: data.accessToken,
      zone,
    }),
  })
    .then((resp) => {
      data.gettingSiteId = false;
      return resp.json()
    })
    .then((res) => {
      if (res.error) {
        data.errorMessage = res.error.message;
        return;
      }
      data.siteId = res.id;
    });
}


</script>

<template>
  <NAlert :title="error || 'Error'" type="error" v-if="!code || !client || error">
    {{ error_description }}
  </NAlert>
  <NSpace v-else vertical size="large">
    <p><b>client_id: </b>{{ client_id }}</p>
    <p><b>client_secret: </b>{{ client_secret }}</p>
    <p><b>zone: </b>{{ zone }}</p>
    <p><b>redirect_uri: </b>https://alist.nn.ci/tool/onedrive/callback</p>
    <NAlert title="Error" type="error" v-if="data.errorMessage">
      {{ data.errorMessage }}
    </NAlert>
    <NSpin v-if="!data.refreshToken" />
    <p v-else><b>refresh_token: </b>{{ data.refreshToken }}</p>
    <NSpace vertical size="large" v-if="data.accessToken">
      <h3>Get sharepoint site ID</h3>
      <NInput placeholder="input site url (https://xx.sharepoint.xx/sites/xx)" size="large" />
      <NButton type="primary" size="large" @click="getSiteId">Get SiteID</NButton>
      <NSpin v-if="data.gettingSiteId" />
      <p v-else-if="data.siteId"><b>site_id: </b>{{ data.siteId }}</p>
    </NSpace>
  </NSpace>
</template>

<style>
p {
  margin: 0;
  font-size: large;
}
</style>