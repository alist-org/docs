<script lang="ts" setup>
import Markdown from '../Markdown.vue'
import { Release } from './types';
import { NCollapseItem, NCard, NTag, NCollapse, NSpace, NH1, NDropdown, NButton } from 'naive-ui'
const props = defineProps<{
  core: Release
  web?: Release
  latest?: boolean
}>()
const reactions = {
  '+1': '👍',
  '-1': '👎',
  laugh: '😄',
  hooray: '🎉',
  confused: '😕',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}
const options = props.core.assets.map(asset => {
  return {
    label: asset.name,
    key: asset.browser_download_url
  }
})

function handleSelect(url: string) {
  window.open(url, "_blank")
}
</script>

<template>
  <NCard>
    <NSpace vertical size="large">
      <NSpace size="large" justify="space-between" align="baseline">
        <NH1>{{ core.name }}</NH1>
        <NTag v-if="latest" type="info">latest</NTag>
      </NSpace>
      <Markdown :markdown="props.core.body" />
      <NCollapse v-if="props.web">
        <NCollapseItem title="Web">
          <Markdown :markdown="props.web.body" />
        </NCollapseItem>
      </NCollapse>
      <NSpace>
        <template v-for="(reaction, name) in reactions">
          <NTag style="cursor: pointer;" :bordered="false" round v-if="core.reactions[name]">
            {{ reaction }} {{ core.reactions[name] }}
          </NTag>
        </template>
      </NSpace>
    </NSpace>
  </NCard>
</template>