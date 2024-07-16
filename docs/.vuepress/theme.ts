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

    // iconAssets: "iconfont",
    iconAssets: [
      "iconfont",
      "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",
      "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
    ],

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
        demo:true,
        // card: true,
      },
      components: {
        components: ["ArtPlayer", "BiliBili", "Badge","VPCard","Replit"],
        // 临时弹窗
        rootComponents: {
          notice: [
            {
              path: "/",
              title: 'Kind tips',
              content: '<i class="fa-solid fa-light-emergency-on fa-bounce" style="color: #ff0000;"></i>&nbsp;<span style="color:rgb(255, 0, 0);font-weight:bold;">Please check the reminder content carefully</span><br/><br/>1.<span style="color:blue; font-weight:bold;">The new version v3.25.0 has updated the new password method, and the acquisition method has also been changed. For details, please refer to the documentation page of your own installation method</span><br/>2.v3.25.1 Aliyun_open can choose to mount the backup disk or resource library by itself, for details <a href="/guide/drivers/aliyundrive_open.html#drive-type">Click to view for details</a><br/>3.The new version of AList version greater than v3.22.1 adds single sign-on to automatically register as an AList account, click to view the <a href="/guide/advanced/sso.html#sso-automatically-registers-as-an-alist-account">detailed description</a><br/>4.<a href="/guide/drivers/139.html">139Cloud</a>and<a href="/guide/drivers/189.html">189Cloud</a>For details of changes, please view the document by yourself, respectively<br/>5.v3.20.1version Breaking Changes <a href="https://github.com/alist-org/alist/discussions/4702">View detailed description</a>, go to <a href="/config/configuration.html#scheme">Configure documentation page</a><br/>6. AList v3.30.0 will no longer support Win7/Server2008 because Go does not support it. <a href="https://github.com/golang/go/issues/64622">Click to view detailed instructions</a> .<br/>7.After adding the cloud disk, please configure [anti-theft/meta information] and other measures in time to prevent the account from being [frozen/disabled] due to malicious [access/sharing] by [crawlers/others].</span></span>',
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
              content: '<i class="fa-solid fa-light-emergency-on fa-bounce" style="color: #ff0000;"></i>&nbsp;<span style="color:rgb(255, 0, 0);font-weight:bold;">请仔细查看弹窗提示内容</span><br/><br/>1.<span style="color:blue; font-weight:bold;">v3.25.1新版更新了新的密码方式,获取方式也进行了更改，详细说明请看自己安装方式的文档页面内</span><br/>2.v3.25.1阿里云盘open可以自行选择挂载备份盘或者资源库，详情<a href="/zh/guide/drivers/aliyundrive_open.html#云盘类型">详情点击查看</a><br/>3.AList版本大于v3.22.1,新版本新增单点登录自动注册为AList账户，点击查看<a href="/zh/guide/advanced/sso.html#单点登录自动注册为alist帐号">详细说明</a><br/>4.<a href="/zh/guide/drivers/139.html">移动云盘</a>和<a href="/zh/guide/drivers/189.html">天翼云</a>分别有改动详情请自行查看文档<br/>5.v3.20.1的版本破坏性更新<a href="https://github.com/alist-org/alist/discussions/4702">查看详细说明</a>，前往<a href="/zh/config/configuration.html#scheme">配置文档页面</a><br/>6.AList v3.30.0版本开始将不再支持Win7/Server2008，因为Go不支持了,<a href="https://github.com/golang/go/issues/64622">点击查看详细说明</a>.<br/><span style="color:rgb(255, 0, 0);font-weight:bold;">7.添加云盘后请及时配置[防盗/元信息]等措施，防止被[爬虫/其他人]恶意[访问/分享]导致帐号被[冻结/禁用].</span></span>',
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
