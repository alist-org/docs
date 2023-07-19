import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme(
  {
    hostname: "https://alist.nn.ci",
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },

    author: {
      name: "Andy Hsu",
      url: "https://i.nn.ci",
    },

    iconAssets: "iconfont",

    logo: "/logo.svg",

    repo: "alist-org/docs",

    docsDir: "docs",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    locales: {
      "/": {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        footer: `<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
      <script src="/adb.js" type="text/javascript"></script>
      `,

        displayFooter: true,
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        footer: `<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
      <script src="/adb.js" type="text/javascript"></script>`,

        displayFooter: true,
      },
    },

    // encrypt: {
    //   config: {
    //     "/guide/encrypt.html": ["1234"],
    //     "/zh/guide/encrypt.html": ["1234"],
    //   },
    // },

    plugins: {
      autoCatalog: {
        frontmatter: () => ({
          toc: false,
        }),
      },
      // blog: {
      //   autoExcerpt: true,
      // },

      // If you don't need comment feature, you can remove following option
      // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
      // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
      comment: {
        /**
         * Using Giscus
         */
        provider: "Giscus",
        repo: "alist-org/docs",
        repoId: "R_kgDOHmaM-A",
        category: "Announcements",
        categoryId: "DIC_kwDOHmaM-M4CRRXl",

        /**
         * Using Twikoo
         */
        // provider: "Twikoo",
        // envId: "https://twikoo.ccknbc.vercel.app",

        /**
         * Using Waline
         */
        // provider: "Waline",
        // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      },

      mdEnhance: {
        // enableAll: true,
        // presentation: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
        container: true,
        checkLinks: {
          status: "dev",
        },
        tabs: true,
        tasklist: true,
        gfm: true,
        flowchart: true,
        mark: true,
        mermaid: true,
        sub: true,
        sup: true,
        align: true,
        include: true,
        card: true,
      },
      components: {
        components: ["ArtPlayer", "BiliBili", "Badge"],
        // 临时弹窗
        rootComponents: {
          notice: [
            {
              path: "/",
              title: 'Kind tips',
              content: '<span style="color:rgb(255, 0, 0);font-weight:bold;">Please check the reminder content carefully</span></br></br>1.The new version of AList version greater than v3.22.1 adds single sign-on to automatically register as an AList account, click to view the <a href="/guide/advanced/sso.html#sso-automatically-registers-as-an-alist-account">detailed description</a></br>2.<a href="/guide/drivers/139.html">139Cloud</a>和<a href="/guide/drivers/189.html">189Cloud</a>For details of changes, please view the document by yourself, respectively</br>3.v3.20.1version Breaking Changes <a href="https://github.com/alist-org/alist/discussions/4702">View detailed description</a>, go to <a href="/config/configuration.html#scheme">Configure documentation page</a></br>4.123 Cloud disk anti-leeching problem <a href="/guide/drivers/123.html#usage-issues">Click to view</a></span>',
              actions: [
                // {
                //   text: "Aliyun open",
                //   link: "/guide/drivers/aliyundrive_open",
                //   type: "primary",
                // },
                // {
                //   text: "GitHub",
                //   link: "https://github.com/alist-org/alist/discussions/4572",
                //   type: "primary",
                // },
                // {
                //   text: "Config",
                //   link: "/config/configuration",
                //   type: "primary",
                // },
              ],
              showOnce: true,
            },
            {
              path: "/zh",
              title: '温馨提示',
              content: '<span style="color:rgb(255, 0, 0);font-weight:bold;">请仔细查看弹窗提示内容</span></br></br>1.AList版本大于v3.22.1,新版本新增单点登录自动注册为AList账户，点击查看<a href="/zh/guide/advanced/sso.html#单点登录自动注册为alist帐号">详细说明</a></br>2.<a href="/zh/guide/drivers/139.html">移动云盘</a>和<a href="/zh/guide/drivers/189.html">天翼云</a>分别有改动详情请自行查看文档</br>3.v3.20.1的版本破坏性更新<a href="https://github.com/alist-org/alist/discussions/4702">查看详细说明</a>，前往<a href="/zh/config/configuration.html#scheme">配置文档页面</a></br>4.123云盘防盗链问题<a href="/zh/guide/drivers/123.html#使用问题">点击查看</a></span>',
              actions: [
                // {
                //   text: "阿里云open",
                //   link: "/zh/guide/drivers/aliyundrive_open",
                //   type: "primary",
                // },
                // {
                //   text: "GitHub",
                //   link: "https://github.com/alist-org/alist/discussions/4572",
                //   type: "primary",
                // },
                // {
                //   text: "配置",
                //   link: "/zh/config/configuration",
                //   type: "primary",
                // },
              ],
              showOnce: true,
            },
          ],
        },
      },
    },
  },
  {
    check: true,
    compact: true,
    custom: true,
    debug: false,
  }
);
