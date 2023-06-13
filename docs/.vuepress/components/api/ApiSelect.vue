<script setup lang="ts">
import { NSelect } from 'naive-ui';
import { computed, ref, watch } from 'vue';
import { apis, defaultApi } from '.';
import NaiveClient from '../NaiveClient.vue';

const cur_api_name = ref(defaultApi)
const api = computed(() => apis[cur_api_name.value] as string)
watch(api, (v) => {
  localStorage.setItem("api", v)
})
const api_options = Object.entries(apis).map(([key, value]) => ({ label: `${value} (${key})`, value: key }))
</script>

<template>
  <NaiveClient>
    <NSelect v-model:value="cur_api_name" size="large" :options="api_options" style="margin-bottom: 4px;"></NSelect>
  </NaiveClient>
</template>