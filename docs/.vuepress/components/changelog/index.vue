<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { ref } from 'vue';
import { Releases, Release } from './types'
import Version from './version.vue'

const core = ref<Releases>();
const web = ref<Map<string, Release>>();

async function fetchCore() {
  const resp = await fetch('https://api.github.com/repos/alist-org/alist/releases')
  core.value = await resp.json()
}
async function fetchWeb() {
  const resp = await fetch('https://api.github.com/repos/alist-org/alist-web/releases')
  const releases = await resp.json()
  web.value = new Map(releases.map((release: Release) => [`v${release.tag_name}`, release]))
}

await Promise.all([fetchCore(), fetchWeb()])

</script>
<template>
  <NSpace vertical size="large">
    <Version v-for="(c, i) in core" :core="c" :web="web?.get(c.tag_name)" :latest="i === 0" />
  </NSpace>
</template>