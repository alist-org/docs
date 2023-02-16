<script lang="ts" setup>

import NaiveConfig from './NaiveConfig.vue';
import { ClientOnly } from '@vuepress/client';

</script>

<template>
  <ClientOnly>
    <NaiveConfig>
      <slot />
    </NaiveConfig>
  </ClientOnly>
</template>