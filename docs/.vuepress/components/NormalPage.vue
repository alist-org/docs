<template>
  <NormalPage>
    <template #contentBefore>
      <div class="theme-hope-content ads-container">
        <div class="wwads-cn wwads-horizontal" data-id="213" style="width:100% !important"></div>
      </div>
    </template>
  </NormalPage>
</template>
<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage";
</script>

<style>
.ads-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

html[data-theme="dark"] .wwads-cn {
  background-color: #272829 !important;
}

html[data-theme="dark"] .wwads-text {
  color: #9e9e9e !important;
}
</style>