import{_ as r,r as d,o as t,c as l,b as n,e,a as s,w as i,f as o}from"./app-6aa7731f.js";const c={},u=n("h1",{id:"反向代理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#反向代理","aria-hidden":"true"},"#"),e(" 反向代理")],-1),p=o(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> <strong>nginx</strong></h2><p>在网站配置文件的 server 字段中添加</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location / {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="宝塔设置反向代理简单示范" tabindex="-1"><a class="header-anchor" href="#宝塔设置反向代理简单示范" aria-hidden="true">#</a> <strong>宝塔设置反向代理简单示范</strong></h2><p>首先新建一个站点，<strong>Alist启动程序</strong> 在不在这个站点文件夹内都无所谓，然后照着下图添加即可。</p><ul><li><mark>还有就是如果你要用宝塔开启 <strong>SSL(HTTPS)</strong>， 你需要在反向代理之前添加不然无法开启SSL</mark></li><li>如果你已经添加了反向代理，可以先停止 <strong>(图片里面哪个开启代理按钮关了它就行)</strong> ,开启了SSL再把反向代理打开即可</li></ul><p><img src="https://alist-doc.nn.ci/assets/images/BT-Proxy-5913c3786afba1417362c71f0af73ea9.png" alt="BT"></p>`,16);function v(m,h){const a=d("RouterLink");return t(),l("div",null,[u,n("p",null,[e("程序默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。如果你使用反向代理，建议你设置"),s(a,{to:"/zh/config/configuration.html#site_url"},{default:i(()=>[e("site_url")]),_:1}),e("，以帮助alist更好的工作。")]),n("blockquote",null,[n("p",null,[e("如果你想使用子目录，参考"),s(a,{to:"/zh/faq/howto.html#%E5%A6%82%E4%BD%95%E5%AF%B9%E5%AD%90%E7%9B%AE%E5%BD%95%E8%BF%9B%E8%A1%8C%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"},{default:i(()=>[e("这里")]),_:1})])]),p])}const b=r(c,[["render",v],["__file","reverse-proxy.html.vue"]]);export{b as default};
