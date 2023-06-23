<script lang="ts" setup>
import { NAlert, NInput, NSpace, NSpin } from "naive-ui";
import { reactive } from "vue";
import { api } from "../api";

const redirect_uri = `${location.origin}/tool/dropbox/callback`;

const url = new URL(window.location.href);
const code = url.searchParams.get("code");
const client = url.searchParams.get("state");
const error = url.searchParams.get("error");
const error_description = url.searchParams.get("error_description");

const [client_id, client_secret] = atob(client as string).split("::");

const data = reactive({
  refreshToken: "",
  accessToken: "",
  error1: "",
  errorMessage1: "",
});

const getToken = () => {
  fetch(`${api()}/alist/dropbox/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      client_id,
      client_secret,
      grant_type: "authorization_code",
      redirect_uri: redirect_uri,
    }),
  })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res);
      if (res.error) {
        data.error1 = res.error;
        data.errorMessage1 = res.error_description;
        return;
      }
      data.refreshToken = res.refresh_token;
      data.accessToken = res.access_token;
    });
};

if (code && client && !error) {
  getToken();
}
</script>

<template>
  <NAlert
    :title="error || 'Error'"
    type="error"
    v-if="!code || !client || error"
  >
    {{ error_description }}
  </NAlert>
  <NSpace v-else vertical size="large">
    <p><b>client_id: </b>{{ client_id }}</p>
    <p><b>client_secret: </b>{{ client_secret }}</p>
    <p><b>redirect_uri: </b>{{ redirect_uri }}</p>
    <NAlert
      :title="data.error1"
      type="error"
      v-if="data.error1 || data.errorMessage1"
    >
      {{ data.errorMessage1 }}
    </NAlert>
    <NSpace vertical>
      <b>refresh_token:</b>
      <NSpin v-if="!data.refreshToken && !data.errorMessage1" />
      <NInput
        v-else
        type="textarea"
        autosize
        readonly
        :value="data.refreshToken"
      />
    </NSpace>
  </NSpace>
</template>

<style scoped>
p {
  margin: 0;
  font-size: large;
}
</style>
