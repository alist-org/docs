<script lang="ts" setup>
import { NButton, NCard, NGrid, NGridItem, NH1, NIcon, NSpace, NText } from "naive-ui";
import Check from './icon/Check.vue'
const data = {
  pricing: [
    {
      title: "Open Source",
      price: "Free",
      features: [
        "All platforms supported",
        "All features supported",
        "More than 30 drivers",
        "No ads",
        "No restrictions",
        "..."
      ],
      btns: [{
        text: 'Download',
        link: 'https://github.com/alist-org/alist/releases'
      },
      {
        text: "Sponsor",
        link: "/guide/sponsor.html",
        secondary: false,
        type: "success"
      }
      ]
    },
    {
      title: 'Technical Support',
      price: 'Pay as you go',
      features: [
        'All Open Source features',
        'In view of the specific case analysis',
        'Assist in deployment and debugging',
        'Secondary development according to specific requirements',
        '...'
      ],
      btns: [
        {
          text: 'Contact',
          link: 'mailto:i@nn.ci'
        }
      ]
    }
  ],
};

function openLink(link: string) {
  window.open(link, "_blank");
}

</script>
<template>
  <NGrid cols="1 700:2" x-gap="8" y-gap="8">
    <NGridItem v-for="item in data.pricing">
      <NCard class="card" :title="item.title" hoverable>
        <NH1>{{ item.price }}</NH1>
        <NSpace vertical size="large" class="list">
          <NSpace v-for="feature in item.features" :key="feature" :wrap="false" align="center">
            <NIcon style="display: inherit;" color="#1ba0d8" :component="Check" size="20" />
            <NText style="font-size: medium;">{{ feature }}</NText>
          </NSpace>
        </NSpace>
        <template #action>
          <NSpace size="large" class="space">
            <NButton v-for="btn in item.btns" :key="btn.link" :secondary="btn.secondary" size="large"
              :type="btn.type as any ?? 'info'" block @click="openLink(btn.link)">
              {{ btn.text }}</NButton>
          </NSpace>
        </template>
      </NCard>
    </NGridItem>
  </NGrid>
</template>

<style scoped>
.list {
  min-height: 300px;
}

.space>>>div {
  flex-grow: 1;
}
</style>