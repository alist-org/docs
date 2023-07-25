import{_ as o,r as d,o as u,c as h,b as e,e as n,a as i,w as t,f as p}from"./app-2bc94762.js";const v={},g=e("h1",{id:"地址树",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#地址树","aria-hidden":"true"},"#"),n(" 地址树")],-1),_={class:"hint-container tip"},j=e("p",{class:"hint-container-title"},"提示",-1),f=e("strong",null,[e("code",null,"地址树-UrlTree")],-1),x={href:"https://github.com/alist-org/alist/issues/3268",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"用法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用法","aria-hidden":"true"},"#"),n(),e("strong",null,"用法")],-1),T=e("p",null,"具体的用法大概讲解一下，建议将下面不同用法都看看越往后越进阶玩法",-1),A=e("p",null,"别看写的看起来很难很啰嗦实际上自己操作一下秒懂。",-1),M=e("h5",{id:"输入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#输入","aria-hidden":"true"},"#"),n(" 输入")],-1),D=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("h5",{id:"输出",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#输出","aria-hidden":"true"},"#"),n(" 输出")],-1),B=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`│ aff9c9c8817d943d6857a73188958d45.jpeg
│ README_cn.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=e("p",null,null,-1),k=e("sup",null,"第一个代码示例",-1),R=e("sup",null,"第二个代码示例",-1),y=e("h5",{id:"输入-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#输入-1","aria-hidden":"true"},"#"),n(" 输入")],-1),C=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
folder:
  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
folder:
  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
http://pic.rmb.bdstatic.com/bjh/a66923e9bfefd03c2998ee998d3b55e7.jpeg
folde2r:
  http://pic.rmb.bdstatic.com/bjh/e919290bf3b8396817d369cedf33b8cd.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/CONTRIBUTING.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("h5",{id:"输出-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#输出-1","aria-hidden":"true"},"#"),n(" 输出")],-1),K=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`│  aff9c9c8817d943d6857a73188958d45.jpeg
└─folder
        aff9c9c8817d943d6857a73188958d45.jpeg
        README_cn.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`│  	aff9c9c8817d943d6857a73188958d45.jpeg
├─folder
│      aff9c9c8817d943d6857a73188958d45.jpeg
│      README_cn.md
│
├─	a66923e9bfefd03c2998ee998d3b55e7.jpeg
│
└─folder2
        CONTRIBUTING.md
        e919290bf3b8396817d369cedf33b8cd.jpeg
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("p",null,"开头要空两个空格~",-1),V=e("p",null,null,-1),J=e("p",null,[n("格式："),e("code",null,"新命名的名字.后缀:文件大小:链接.后缀")],-1),z=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
新名称2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F=e("p",null,"文件大小不用写也是可以重新命名的",-1),O=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
新名称2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=e("p",null,null,-1),S=e("ul",null,[e("li",null,"第一层目录文件夹不需要空格，但是第一层目录里面的文件需要空两个空格")],-1),X=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`folder:
  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("ul",null,[e("li",null,[n("如果你写好第一层了还想在第一个文件夹里面再套一个那就在这个文件夹下面套一层，写法如下，很简单 "),e("ul",null,[e("li",null,"目录进行空两格，文件加两个空格就是四个，如果继续想往下套一层继续加2个空格即可")])])],-1),q=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`folder11:
  http://pic.rmb.bdstatic.com/bjh/111.jpeg
  folder111:
    http://pic.rmb.bdstatic.com/bjh/111.jpeg
    folder1111:
      http://pic.rmb.bdstatic.com/bjh/111.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/222.jpeg
folder22:
  http://pic.rmb.bdstatic.com/bjh/222.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/2223.jpeg
folder33:
  http://pic.rmb.bdstatic.com/bjh/333.jpeg
  folder333:
    http://pic.rmb.bdstatic.com/bjh/333.jpeg
    folder3333:
      http://pic.rmb.bdstatic.com/bjh/333.jpeg
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("ul",null,[e("li",null,[n("不建议的写法，像 "),e("strong",null,[e("code",null,"2.jpeg，5.jpeg")]),n(" 这样写法，建议想往那一层文件夹就去那一层文件夹增加链接按照格式，不要这样下面这样写")])],-1),H=e("h5",{id:"错误写法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#错误写法","aria-hidden":"true"},"#"),n(" 错误写法")],-1),W=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`folder22:
  http://pic.rmb.bdstatic.com/bjh/222.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/2222.jpeg
      folder22222:
        http://pic.rmb.bdstatic.com/bjh/2222.jpeg
        folder222222:
          http://pic.rmb.bdstatic.com/bjh/2222.jpeg
    http://pic.rmb.bdstatic.com/bjh/2.jpeg
        http://pic.rmb.bdstatic.com/bjh/5.jpeg
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Q=e("h5",{id:"正确写法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#正确写法","aria-hidden":"true"},"#"),n(" 正确写法")],-1),$=e("p",null,[n("像 "),e("strong",null,[e("code",null,"2.jpeg，5.jpeg")]),n(" 这样文件添加时候，添加到对应的目录里面去，分别对应的是 "),e("code",null,"folder222 和 folder22222"),n(" 两个文件夹")],-1),ee=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`folder22:
  http://pic.rmb.bdstatic.com/bjh/222.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    http://pic.rmb.bdstatic.com/bjh/2.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/2222.jpeg
      folder22222:
        http://pic.rmb.bdstatic.com/bjh/2222.jpeg
        http://pic.rmb.bdstatic.com/bjh/5.jpeg
        folder222222:
          http://pic.rmb.bdstatic.com/bjh/2222.jpeg
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ne=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`https://jsd.nn.ci/gh/alist-org/alist/README.md
文档:
  Readme.md:https://pic.rmb.bdstatic.com/bjh/说明.md
  Doc:
    文档.doc:https://pic.rmb.bdstatic.com/bjh/测试文档.doc
  pdf:
    pdf2.pdf:https://pic.rmb.bdstatic.com/bjh/测试.pdf
  Excel:
    表格3.xlsx:https://pic.rmb.bdstatic.com/bjh/测试表格.xlsx 
视频:
  https://pic.rmb.bdstatic.com/bjh/222.jpeg
  电视剧:
    https://pic.rmb.bdstatic.com/bjh/222.pm4
  电影:
    https://pic.rmb.bdstatic.com/bjh/222.flv
音乐:
  https://pic.rmb.bdstatic.com/bjh/222.jpeg
  古典:
    https://pic.rmb.bdstatic.com/bjh/222.mp3
  轻音乐:
    https://pic.rmb.bdstatic.com/bjh/222.flac
    https://pic.rmb.bdstatic.com/bjh/222.wav
软件:
  https://pic.rmb.bdstatic.com/bjh/222.jpeg
  PJ:
    xx软件.exe:252525:https://pic.rmb.bdstatic.com/bjh/222.exe
    xx安装包.zip:259555:https://pic.rmb.bdstatic.com/bjh/222.zip
  IPA:
    GPT.ipa:https://pic.rmb.bdstatic.com/bjh/222.ipa
  APK:
    P图.apk:https://pic.rmb.bdstatic.com/bjh/222.apk
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ie=e("p",null,null,-1),se=p('<h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> <strong>提示</strong></h2><ol><li>如果你点击下载发现没有跳转到下载而是预览，这是因为是根据你原本链接来决定的,例如你原本的链接就是下载他就会跳转到下载</li><li>如果你一个文件夹内有相同的文件，会合并只显示一个，默认使用预览查看下载的是你靠上(前)也就是顶部的文件 <ul><li>Tips:请勿同时在一个目录内新建两个同名的文件/夹哦~就像你在资源管理器新建两个一样的文件/夹 都会提醒你不能重复</li></ul></li><li>如果你在添加时在同级目录下写了两个相同的文件夹名字，会合并成一个文件夹但是合并后靠后(下)的文件夹的文件不会显示，但是可以通过浏览器地址栏访问（参考上一条的提示）</li><li>排序默认是按照你填写从上到下依次排序的和 <code>alist-别名</code>的一样</li></ol><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',3);function te(le,ae){const r=d("ExternalLinkIcon"),s=d("Badge"),b=d("Tabs"),m=d("Mermaid");return u(),h("div",null,[g,e("div",_,[j,e("p",null,[f,n(" 是什么? 是用来挂载单个文件链接的，详情可以查看 "),e("strong",null,[n("→→→"),e("a",x,[n("原需求说明"),i(r)]),n("←←←")])])]),E,T,A,i(b,{id:"17",data:[{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"}],"tab-id":"UrlTree"},{tab0:t(({title:l,value:a,isActive:c})=>[i(s,{text:"1",type:"info",vertical:"middle"}),n("最简单的用法，直接写链接即可"),M,D,N,B,U]),tab1:t(({title:l,value:a,isActive:c})=>[i(s,{text:"2",type:"info",vertical:"middle"}),n("有文件的同时，也可以创建文件夹"),k,n("，也可以创建多个文件夹"),R,y,C,I,w,K,Z,L,V]),tab2:t(({title:l,value:a,isActive:c})=>[i(s,{text:"3",type:"info",vertical:"middle"}),n("可以将文件资源二次命名，实际上下载的还是原来的，并且可以填写文件大小"),J,z,F,O,P]),tab3:t(({title:l,value:a,isActive:c})=>[i(s,{text:"4",type:"info",vertical:"middle"}),n("多个层级目录套娃玩法"),S,X,Y,q,G,H,W,Q,$,ee]),tab4:t(({title:l,value:a,isActive:c})=>[i(s,{text:"5",type:"info",vertical:"middle"}),n("全部整合起来的举例用法，有常规的，有分类，有重命名，有标注文件大小"),ne,ie]),_:1}),se,i(m,{id:"mermaid-157",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCoqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9ZuBNWelmZuam4KN8HY2BjVBJOCCoi20qT0osSCDIXMlFRDhWiFWLBooiGYSs1LgXKjjQ2MYq2srIrzc1OTcxKLi22BoAbi2ZpEo2igb591bH+xbt/TJe0QI8CqXFLTFOBaYC6zNIMoMIx+NmfNszm7nuxe/HxCW6yuHlDvy4ZOPV07rAYmGUZDVIYG+RBUnJyTmZwNCkwlPT39lKLMstSiYv3k/Nzc/Dy9jJLcHOXy1KSUxDLd52unPZ+6VAlJTxIZepKJ1gMAZ1jb4A=="})])}const de=o(v,[["render",te],["__file","UrlTree.html.vue"]]);export{de as default};
