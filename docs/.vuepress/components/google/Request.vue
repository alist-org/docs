<script lang="ts" setup>
import { NButton, NSpace, NInput, NCard, NText } from 'naive-ui';
import { reactive } from 'vue';

function createClient() {
  window.open("https://console.developers.google.com/", "_blank");
}

const rclone = {
  client_id: "202264815644.apps.googleusercontent.com",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "X4Z3ca8xfWDb1Voo-F9a7ZxJ",
  redirect_uri: 'http://127.0.0.1:53682/',
}

const alist_redirect_uri = "https://alist.nn.ci/tool/google/callback"

const data = reactive({
  client_id: "",
  client_secret: "",
  redirect_uri: "",
})

function useRClone() {
  data.client_id = rclone.client_id
  data.client_secret = rclone.client_secret
  data.redirect_uri = rclone.redirect_uri
}

function useOwn() {
  data.client_id = ""
  data.client_secret = ""
  data.redirect_uri = alist_redirect_uri
}

function goGet() {
  const url = new URL("https://accounts.google.com/o/oauth2/auth");
  url.searchParams.set("client_id", data.client_id);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", data.redirect_uri);
  url.searchParams.set(
    "scope",
    "openid profile https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/photoslibrary"
  );
  url.searchParams.set("access_type", "offline");
  url.searchParams.set("prompt", "consent");
  url.searchParams.set(
    "state",
    btoa(`${data.client_id}::${data.client_secret}::${data.redirect_uri}`)
  );
  window.open(url.toString(), "_blank");
}

</script>

<template>
  <NSpace vertical size="large">
    <NSpace justify="center">
      <NButton size="large" secondary @click="createClient">Create client</NButton>
      <NButton size="large" type="primary" @click="useRClone">Use RClone client</NButton>
      <NButton size="large" type="info" @click="useOwn">Use own client</NButton>
    </NSpace>
    <h4>client_id</h4>
    <NInput size="large" v-model:value="data.client_id" />
    <h4>client_secret</h4>
    <NInput size="large" v-model:value="data.client_secret" />
    <h4>redirect_uri</h4>
    <NInput size="large" v-model:value="data.redirect_uri" />
    <NButton size="large" type="primary" block @click="goGet">Go get</NButton>
    <NCard v-if="data.client_id === rclone.client_id" title="If you use rclone client">
      Replace <NText code>{{ rclone.redirect_uri }}</NText> with <NText code>{{ alist_redirect_uri }}</NText> after oauth.
    </NCard>
  </NSpace>
</template>

<style scoped>
h4 {
  margin: 0;
}
</style>
