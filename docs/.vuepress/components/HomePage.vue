<template>
  <HopeHomePage>
    <template #top>
      <ClientOnly>
        <HomeAds />
      </ClientOnly>
    </template>
  </HopeHomePage>
</template>
<script setup lang="ts">
import HopeHomePage from "vuepress-theme-hope/components/HomePage";
import HomeAds from "./HomeAds.vue";
import { ClientOnly } from "@vuepress/client";

</script>