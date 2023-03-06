<script lang="ts" setup>
import { NButton, NCard, NGrid, NGridItem, NH1, NIcon, NSpace, NText } from "naive-ui";
import Check from './icon/Check.vue'
let data = {
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

if (location.pathname.startsWith("/zh/")) {
  data = {
    pricing: [
      {
        title: "开源",
        price: "免费",
        features: [
          "支持所有平台",
          "支持所有功能",
          "支持超过30种驱动",
          "无广告",
          "没有限制",
          "..."
        ],
        btns: [{
          text: '下载',
          link: 'https://github.com/alist-org/alist/releases',
        }, {
          text: "赞助",
          link: "/zh/guide/sponsor.html",
          secondary: false,
          type: "success"
        }]
      },
      {
        title: '技术支持',
        price: '按需付费',
        features: [
          '所有开源功能',
          '针对具体案例分析解答',
          '协助部署和调试',
          '根据具体需求进行二次开发',
          '...'
        ],
        btns: [{
          text: '联系',
          link: 'mailto:i@nn.ci'
        }]
      }
    ],
  };
}

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