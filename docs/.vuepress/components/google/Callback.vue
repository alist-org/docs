<script lang="ts" setup>
import { NAlert, NSpace, NSpin, NInput, NButton } from 'naive-ui';
import { ref } from 'vue';

const url = new URL(window.location.href);
const code = url.searchParams.get("code");
const client = url.searchParams.get("state");
const error = url.searchParams.get("error");
const error_description = url.searchParams.get("error_description");
const [client_id, client_secret, redirect_uri] = atob(client as string).split("::");

interface Token {
  // token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  error: string;
  error_description: string;
}

const token = ref<Token>();

const getToken = async () => {
  const params = new URLSearchParams();
  params.append("client_id", client_id);
  params.append("client_secret", client_secret);
  params.append("code", code!);
  params.append("grant_type", "authorization_code");
  params.append("redirect_uri", redirect_uri);
  fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res);
      token.value = res;
    });
};

if (code && !error) {
  getToken();
}

function getAlbumID() {
  window.open(`/tool/google/album?access_token=${token.value?.access_token}`, "_blank");
}

</script>

<template>
  <NAlert :title="error || 'Error'" type="error" v-if="!code || error">
    {{ error_description }}
  </NAlert>
  <NSpace vertical size="large" v-else>
    <p><b>client_id: </b>{{ client_id }}</p>
    <p><b>client_secret: </b>{{ client_secret }}</p>
    <p><b>redirect_uri: </b>{{ redirect_uri }}</p>
    <NAlert :title="token?.error" type="error" v-if="token?.error || token?.error_description">
      {{ token.error_description }}
    </NAlert>
    <NSpace vertical>
      <b>refresh_token:</b>
      <NSpin v-if="!token" />
      <NInput v-if="token?.refresh_token" type="textarea" autosize readonly :value="token.refresh_token" />
      <NAlert v-else-if="token?.access_token" title="Web client" type="warning">
        The refresh_token is only returned once if you use a web client.
      </NAlert>
      <NButton v-if="token?.access_token" @click="getAlbumID" block type="primary">Get Album ID</NButton>
    </NSpace>
  </NSpace>
</template>

<style scoped>
p {
  margin: 0;
  font-size: large;
}
</style>