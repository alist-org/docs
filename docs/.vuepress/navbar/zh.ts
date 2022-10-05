import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  // "/zh/",
  { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  { text: "配置", icon: "config", link: "/zh/config/" },
  { text: "常见问题", icon: "question", link: "/zh/faq/" },
  {
    text: "社区",
    icon: "community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/alist-org/alist/discussions",
      },
      { text: "Telegram", link: "https://t.me/alist_chat" },
      { text: "Discord", link: "https://discord.gg/F4ymsH4xv2" },
    ],
  },
  {
    text: "版本",
    icon: "branch",
    children: [{ text: "V2", link: "https://alist-doc.nn.ci" }],
  },
  {
    text: "Github",
    icon: "github",
    link: "https://github.com/alist-org/alist",
  },
]);
