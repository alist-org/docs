<script lang="ts" setup>
import { NInput, NSelect, NButton, NSpace, NCheckbox } from "naive-ui";
import { ref } from "vue";

const client = ref({
  id: "76lrwrklhdn1icb",
  secret: "",
});

const useMyOwn = ref(false);

const createClient = () => {
  window.open("https://dropbox.com/developers/apps", "_blank");
};

const getToken = () => {
  const url = new URL(`https://www.dropbox.com/oauth2/authorize`);
  url.searchParams.set("client_id", client.value.id);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", `${location.origin}/tool/dropbox/callback`);
  url.searchParams.set("token_access_type", "offline");
  url.searchParams.set(
    "state",
    window.btoa(`${client.value.id}::${client.value.secret}`)
  );
  window.open(url.toString(), "_self");
};
</script>

<template>
  <NSpace vertical size="large">
    <NCheckbox v-model:checked="useMyOwn" size="large"
      >Use my own client</NCheckbox
    >
    <template v-if="useMyOwn">
      <h4>client_id</h4>
      <NInput size="large" v-model:value="client.id" />
      <h4>client_secret</h4>
      <NInput
        size="large"
        v-model:value="client.secret"
        placeholder="keep it empty if you don't have one"
      />
    </template>
    <NSpace justify="center">
      <NButton size="large" secondary @click="createClient" v-if="useMyOwn"
        >Create client</NButton
      >
      <NButton size="large" type="info" @click="getToken"
        >Get Refresh Token</NButton
      >
    </NSpace>
  </NSpace>
</template>

<style scoped>
h4 {
  margin: 0;
}
</style>
