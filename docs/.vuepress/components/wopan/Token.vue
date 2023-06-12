<script setup lang="ts">
import { NInput, NSpace, NButton, NAlert, NTag } from 'naive-ui'
import { reactive, ref } from 'vue';
const input = reactive({
  phone: '',
  password: '',
  verify_code: ''
})

const err1 = ref()
const err2 = ref()

const token = ref()

async function getVerifyCode() {
  const res = await fetch('https://api.nn.ci/alist/wopan/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
  })
  const data = await res.json()
  if (data.error) {
    err1.value = data.error
    return
  }
}
async function getToken() {
  const res = await fetch('https://api.nn.ci/alist/wopan/verify_code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
  })
  const data = await res.json()
  if (data.error) {
    err2.value = data.error
    return
  }
  token.value = data
}
</script>



<template>
  <NSpace size="large" vertical>

    <NInput size="large" placeholder="Phone number" v-model:value="input.phone"></NInput>
    <NInput size="large" placeholder="Password" v-model:value="input.password" type="password"></NInput>
    <NButton type="primary" size="large" block @click="getVerifyCode">Get Verify Code</NButton>
    <NAlert title="Error" type="error" v-if="err1">
      {{ err1 }}
    </NAlert>
    <NInput size="large" placeholder="Verify code" v-model:value="input.verify_code"></NInput>
    <NButton type="primary" size="large" block @click="getToken">Get Token</NButton>
    <NAlert title="Error" type="error" v-if="err2">
      {{ err2 }}
    </NAlert>
    <template v-if="token">
      <div>refresh_token: <NTag :bordered="false" type="info">{{ token.refresh_token }}</NTag>
      </div>
      <div>access_token: <NTag :bordered="false" type="info">{{ token.access_token }}</NTag>
      </div>
    </template>

  </NSpace>
</template>