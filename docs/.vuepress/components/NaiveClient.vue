<script lang="ts" setup>

import NaiveConfig from './NaiveConfig.vue';
import { ClientOnly } from '@vuepress/client';
import { Suspense } from 'vue'
import { NSpace, NSpin } from 'naive-ui'

</script>

<template>
  <ClientOnly>
    <NaiveConfig>
      <Suspense>
        <slot />
        <template #fallback>
          <NSpace justify="center">
            <NSpin size="large" />
          </NSpace>
        </template>
      </Suspense>
    </NaiveConfig>
  </ClientOnly>
</template>