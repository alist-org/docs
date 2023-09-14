import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AList Documents",
  description:
    "📄 Documentation for alist v3: http://github.com/alist-org/alist",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  locales: {
    root: {
      label: 'English',
      lang: "en"
    },
    zh: {
      label: '简体中文',
      lang: "zh-CN"
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/alist-org/alist" },
    ],
  },
});
