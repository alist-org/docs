<template>
  <HopeHomePage>
    <template #center>
      <div class="hero-info-wrapper ads-container">
        <div class="wwads wwads-cn wwads-horizontal" data-id="213" style="width:100% !important"></div>
      </div>
    </template>
  </HopeHomePage>
</template>
<script setup lang="ts">
import HopeHomePage from "vuepress-theme-hope/components/HomePage";
</script>

<style scoped>
.ads-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.wwads-cn,
.wwads {
  background-color: #f4f8fa;
}

.wwads-text {
  color: #0e1011;
}

html[data-theme="dark"] .wwads-cn,
html[data-theme="dark"] .wwads {
  background-color: #272829 !important;
}

html[data-theme="dark"] .wwads-text {
  color: #9e9e9e !important;
}
</style>