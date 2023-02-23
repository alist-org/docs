<script lang="ts" setup>
import { NAlert, NSpace, NSpin, NInput } from 'naive-ui';
import { ref } from 'vue';

const client_id = "a78d5a69054042fa936f6c77f9a0ae8b";
const client_secret = "9c119bbb04b346d2a52aa64401936b2b";
const callback_uri = "https://alist.nn.ci/tool/yandex/callback";

const url = new URL(window.location.href);
const code = url.searchParams.get("code");
const error = url.searchParams.get("error");
const error_description = url.searchParams.get("error_description");

interface Token {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  error: string;
  error_description: string;
}

const token = ref<Token>();

const getToken = async () => {
  const form = new URLSearchParams();
  form.append("grant_type", "authorization_code");
  form.append("client_id", client_id);
  form.append("client_secret", client_secret);
  form.append("code", code || "");
  const resp = await fetch("https://oauth.yandex.com/token", {
    method: "POST",
    body: form,
  });
  const res: Token = await resp.json();
  token.value = res;
};

if (code && !error) {
  getToken();
}

</script>

<template>
  <NAlert :title="error || 'Error'" type="error" v-if="!code ||  error">
    {{ error_description }}
  </NAlert>
  <NSpace vertical size="large" v-else>
    <p><b>client_id: </b>{{ client_id }}</p>
    <p><b>client_secret: </b>{{ client_secret }}</p>
    <p><b>redirect_uri: </b>{{ callback_uri }}</p>
    <NAlert :title="token?.error" type="error" v-if="token?.error || token?.error_description">
      {{ token.error_description }}
    </NAlert>
    <NSpace vertical>
      <b>refresh_token:</b>
      <NSpin v-if="!token" />
      <NInput v-else type="textarea" autosize readonly :value="token.refresh_token" />
    </NSpace>
  </NSpace>
</template>

<style scoped>
p {
  margin: 0;
  font-size: large;
}
</style>