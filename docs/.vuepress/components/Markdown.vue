<template>
  <div class="text-formatted" v-html="renderedMarkdown" />
</template>

<script lang="ts" setup>
import markdownIt from 'markdown-it';

const props = defineProps<{
  markdown: string;
}>();
let md = new markdownIt({ html: true });
let renderedMarkdown = md.render(props.markdown);
</script>