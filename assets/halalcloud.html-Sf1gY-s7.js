import{_ as d,a as r,b as s}from"./halalcloud_url-3NTksHAO.js";import{_ as x,r as a,o as c,c as i,b as e,e as o,a as l,f as p}from"./app-FuauEmco.js";const h={},u=e("h1",{id:"_6盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6盘","aria-hidden":"true"},"#"),o(" 6盘")],-1),f=e("code",null,"6盘（halalcloud）",-1),_={href:"https://2dland.cn/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://drive.2dland.cn",target:"_blank",rel:"noopener noreferrer"},g={href:"https://2dland.yuque.com/r/organizations/homepage",target:"_blank",rel:"noopener noreferrer"},m=p('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于<code>6盘（halalcloud）</code>采用的 <code>IPFS</code>协议存储，因此块大小被限制在<code>1MB</code>，于是<strong>只能使用<code>本机代理</code>进行下载</strong>，且单线程速度较慢，<strong>使用时请尽量使用多线程下载，提升速度</strong></p></div><br><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> <strong>根文件夹ID</strong></h2><p>顶部地址栏路径，根文件夹是：<code>/</code></p><p>子文件夹：<code>/A文件夹/C文件夹/C文件夹</code></p><br><h2 id="添写示例" tabindex="-1"><a class="header-anchor" href="#添写示例" aria-hidden="true">#</a> <strong>添写示例</strong></h2><p>初次添加6盘 (halalcloud) 驱动，<code>Refresh token</code>可以留空，此时右上角会弹出红色错误通知</p><p>返回存储页面，点击刷新按钮，之前添加的驱动 <code style="font-weight:bold;color:red;">Click Here</code>区域会变成可点击模式，点击后进行点击跳转到 6盘 (halalcloud) 官网进行登录</p><p><img src="'+d+'" alt=""></p><p><img src="'+r+'" alt=""></p><p>登录成功，<strong>离开后会自动关闭网页</strong>，请及时复制顶部地址栏中的<code>RefreshToken</code>字段参数链接</p><ul><li><p>或者复制到其它位置再进行获取链接中<code>RefreshToken</code>字段</p></li><li><p>复制到其它位置后会自动进行UrlEncode编码，具体以<code>RefreshToken</code>字段是 <code>&quot;rt__</code>开头的，以<code>&quot;</code><sup>（&quot;编码后是%22）</sup>结尾的字符串</p><ul><li>可以参考下面提取示例或者借用工具</li></ul></li></ul><br><p>链接中<span style="font-weight:bold;color:blue;">蓝色</span>字段是我们需要的<code>RefreshToken</code></p><div style="border:3px solid red;padding:10px;"><ul><li>地址栏复制链接获取<code>RefreshToken</code>：</li><br><ul><br><li style="font-weight:bold;">解码前：</li><ul><li>https%3A%2F%2Fstatic.2dland.cn%2Fuser%2Flanding%2F%3Ftype%3Doauth2-response%26payload%3D%7B%22scope%22%3A%22openid%20profile%20email%20phone%22%2C%22<span style="font-weight:bold;color:#ff00c6;">refreshToken</span>%22%3A<span style="font-weight:bold;color:red;">%22</span><span style="font-weight:bold;color:blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight:bold;color:red;">%22</span>%2C%22state%22%3A%2210xxxx4d3-4cxa-4xx8-axxb-1xxxf3%22%2C%22callback%22%3A%22at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8%22%7D</li></ul><br><li style="font-weight:bold;">解码后：</li><ul><li>https://static.2dland.cn/user/landing/?type=oauth2-response&amp;payload={&quot;scope&quot;:&quot;openid profile email phone&quot;,&quot;<span style="font-weight:bold;color:#ff00c6;">refreshToken</span>&quot;:<span style="font-weight:bold;color:red;">&quot;</span><span style="font-weight:bold;color:blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight:bold;color:red;">&quot;</span>,&quot;state&quot;:&quot;10xxxx4d3-4cxa-4xx8-axxb-1xxxf3&quot;,&quot;callback&quot;:&quot;at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8&quot;}</li></ul><br><li style="font-weight:bold;">如果实在看不出来可以借助工具进行解码：<a href="https://tool.chinaz.com/tools/urlencode.aspx">https://tool.chinaz.com/tools/urlencode.aspx</a></li></ul></ul><img src="'+s+'"></div><br><h2 id="其它参数" tabindex="-1"><a class="header-anchor" href="#其它参数" aria-hidden="true">#</a> <strong>其它参数</strong></h2><ul><li><p><code>Upload thread</code>：上传线程（默认为 3 ， 范围1-32）</p></li><li><p><code>App id</code>：<code>应用ID</code> （默认已给出，无需填写）</p></li><li><p><code>App version</code>：<code>应用版本</code>（默认已给出，无需填写）</p></li><li><p><code>App secret</code>：<code>应用密钥</code>（默认已给出，无需填写）</p></li></ul><br><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',21);function q(k,y){const t=a("ExternalLinkIcon"),n=a("Mermaid");return c(),i("div",null,[u,e("ul",null,[e("li",null,[e("p",null,[f,o(" 官方网站："),e("a",_,[o("https://2dland.cn"),l(t)])]),e("ul",null,[e("li",null,[o("网盘登录："),e("a",b,[o("https://drive.2dland.cn"),l(t)])])])]),e("li",null,[e("p",null,[o("官方公告、文档地址："),e("a",g,[o("https://2dland.yuque.com/r/organizations/homepage"),l(t)])])])]),m,l(n,{id:"mermaid-110",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="})])}const F=x(h,[["render",q],["__file","halalcloud.html.vue"]]);export{F as default};