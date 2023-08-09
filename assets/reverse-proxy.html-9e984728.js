import{_ as d,a as o,b as l,c,d as p}from"./bt_reverse_proxy-566937a9.js";import{_ as h,r,o as u,c as _,b as a,e,a as n,w as t,f as m}from"./app-bb4558e9.js";const v={},b=a("h1",{id:"反向代理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#反向代理","aria-hidden":"true"},"#"),e(" 反向代理")],-1),g={class:"hint-container tip"},x=a("p",{class:"hint-container-title"},"反向代理非标准端口或启用https不能播放视频?",-1),f={href:"https://github.com/alist-org/alist/issues/726",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/alist-org/alist/issues/1159",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/alist-org/alist/issues/2429",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/alist-org/alist/issues/3644",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/alist-org/alist/issues/4181",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/alist-org/alist/issues/4719",target:"_blank",rel:"noopener noreferrer"},S=m(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> <strong>nginx</strong></h2><p>在网站配置文件的 server 字段中添加</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location / {
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header Range $http_range;
	proxy_set_header If-Range $http_if_range;
  proxy_redirect off;
  proxy_pass http://127.0.0.1:5244;
  # the max size of file to upload
  client_max_body_size 20000m;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用宝塔面板，请务必删除以下默认配置</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>- location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md
- location ~ .\\*\\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\\*\\.(js|css)?$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache" aria-hidden="true">#</a> <strong>Apache</strong></h2><p>在 VirtualHost 字段下添加配置项 ProxyPass，如：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VirtualHost</span> <span class="token attr-name"><span class="token namespace">*:</span>80</span><span class="token punctuation">&gt;</span></span>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass &quot;/&quot; &quot;http://127.0.0.1:5244/&quot; nocanon
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VirtualHost</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy" aria-hidden="true">#</a> <strong>Caddy</strong></h2><p>在 Caddyfile 文件下添加 reverse_proxy，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:80 {
  reverse_proxy 127.0.0.1:5244
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果部署在 443 端口正常使用的服务器上且使用域名进行访问，建议使用这种配置让 Caddy 自动申请证书：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>example.com {
  reverse_proxy 127.0.0.1:5244
}

将 \`example.com\` 替换为你自己解析后的域名。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="宝塔设置反向代理示范" tabindex="-1"><a class="header-anchor" href="#宝塔设置反向代理示范" aria-hidden="true">#</a> <strong>宝塔设置反向代理示范</strong></h2><h4 id="_1-登录宝塔面板-添加站点" tabindex="-1"><a class="header-anchor" href="#_1-登录宝塔面板-添加站点" aria-hidden="true">#</a> 1.登录宝塔面板，添加站点；</h4><p><img src="`+d+'" alt="bt_new_website"></p><h4 id="_2-修改站点设置" tabindex="-1"><a class="header-anchor" href="#_2-修改站点设置" aria-hidden="true">#</a> 2.修改站点设置；</h4><p><img src="'+o+'" alt="bt_new_website_01"></p><h4 id="_3-删除面板默认代码" tabindex="-1"><a class="header-anchor" href="#_3-删除面板默认代码" aria-hidden="true">#</a> 3.删除面板默认代码；</h4><p><img src="'+l+'" alt="bt_delete_default_config_01"></p><p><img src="'+c+'" alt="bt_delete_default_config_02"></p><h4 id="_4-添加反向代理" tabindex="-1"><a class="header-anchor" href="#_4-添加反向代理" aria-hidden="true">#</a> 4.添加反向代理；</h4><p><img src="'+p+'" alt="bt_reverse_proxy"></p><blockquote><p>如需申请<code>SSL</code>证书，可先在<code>SSL</code>选项中申请证书，然后在设置反向代理。或者设置反向代理之后，关闭反向代理功能，申请<code>SSL</code>证书后再次开启代理。</p></blockquote>',23);function A(q,L){const i=r("RouterLink"),s=r("ExternalLinkIcon");return u(),_("div",null,[b,a("p",null,[e("程序默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。如果你使用反向代理，建议你设置"),n(i,{to:"/zh/config/configuration.html#site_url"},{default:t(()=>[e("site_url")]),_:1}),e("，以帮助alist更好的工作。")]),a("blockquote",null,[a("p",null,[e("如果你想使用子目录，参考"),n(i,{to:"/zh/faq/howto.html#%E5%A6%82%E4%BD%95%E5%AF%B9%E5%AD%90%E7%9B%AE%E5%BD%95%E8%BF%9B%E8%A1%8C%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"},{default:t(()=>[e("这里")]),_:1})])]),a("div",g,[x,a("p",null,[e("你需要通过正确的Host头,请参考 "),a("a",f,[e("#726"),n(s)]),e(),a("a",k,[e("#1159"),n(s)]),e(),a("a",y,[e("#2429"),n(s)]),e(),a("a",E,[e("#3644"),n(s)]),e(),a("a",w,[e("#4181"),n(s)]),e(),a("a",B,[e("#4719"),n(s)])])]),S])}const D=h(v,[["render",A],["__file","reverse-proxy.html.vue"]]);export{D as default};
