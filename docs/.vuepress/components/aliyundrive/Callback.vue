<script lang="ts" setup>
import { NAlert, NSpace, NSpin, NInput } from "naive-ui"
import { ref } from "vue"
import { api } from "../api"

const url = new URL(window.location.href)
const code = url.searchParams.get("code")
const error = url.searchParams.get("error")
const error_description = url.searchParams.get("error_description")
const state = url.searchParams.get("state") || "Ojo="
const [client_id, client_secret] = window.atob(state).split("::")

interface Token {
  token_type: string
  access_token: string
  expires_in: number
  refresh_token: string
  error: string
}

const token = ref<Token>()

const getToken = async () => {
  const resp = await fetch(api() + `/alist/ali_open/code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: code,
      grant_type: "authorization_code",
      client_id: client_id,
      client_secret: client_secret,
    }),
  })
  const res: Token = await resp.json()
  token.value = res
}

if (code && !error) {
  getToken()
}
</script>

<template>
  <NAlert :title="error || 'Error'" type="error" v-if="!code || error">
    {{ error_description }}
  </NAlert>
  <NSpace vertical size="large" v-else>
    <NAlert
      :title="token?.error"
      type="error"
      v-if="token?.error || token?.error"
    >
      {{ token.error }}
    </NAlert>
    <NSpace vertical>
      <b>refresh_token:</b>
      <NSpin v-if="!token" />
      <NInput
        v-else
        type="textarea"
        autosize
        readonly
        :value="token.refresh_token"
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
