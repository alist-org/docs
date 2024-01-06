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
        type: "error"
      }
      ]
    },
    {
      title: 'AList Desktop',
      price: '＄9.99',
      features: [
        'All Open Source features',
        'Use a nice UI to manage the Alist program instead of the command line, and easily view logs',
        'Mount all storages as a local disk',
        'The native start with system',
        'Automatically check for updates',
        'Quick view administrator information',
        'System Tray, close the window running background does not quit',
        '...'
      ],
      btns: [
        {
          text: 'Download',
          link: 'https://github.com/alist-org/desktop-release/releases',
        },
        {
          text: 'Buy',
          link: 'https://store.nn.ci/checkout/buy/51dca247-20df-4991-8104-54ca534bcc82',
          type: 'success'
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
          type: "error"
        }]
      },
      {
        title: 'AList桌面版',
        price: '￥50',
        features: [
          '所有开源功能',
          '使用好看的UI管理AList程序而不是命令行，方便的查看日志',
          '将所有存储挂载为本地磁盘',
          '原生的开机自启',
          '自动检查更新',
          '快捷查看管理员信息',
          '系统托盘，关闭窗口后台运行不退出',
          '...'
        ],
        btns: [
          {
            text: '下载',
            link: 'https://github.com/alist-org/desktop-release/releases',
          },
          {
            text: '购买',
            link: 'https://r.nn.ci/ad',
            type: 'success'
          }
        ]
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
  min-height: 334px;
}

.space>>>div {
  flex-grow: 1;
}
</style>