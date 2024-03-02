import{J as o,K as A,M as P,a4 as te,P as le,Q as ne,d as v,q as ae,R as D,S as de,g as V,T as I,W as se,m as k,bj as ie,ay as ce,h as S,o as p,F as _,w as n,a,u as r,bk as ue,N as M,e as g,I as $,au as E,c as H,G as be,H as he,b5 as pe,b6 as ve,b as C,_ as G,r as me}from"./app-lTpd54PE.js";import{N as B}from"./Input-ljaU3Q-J.js";import{N as ge}from"./Button-_UU5_cUj.js";import{N as L}from"./Alert-UXbCOpyS.js";import"./browser-aIiX8vzZ.js";const fe=o([A("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),P("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),P("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),P("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),P("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),te("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),le(A("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),ne(A("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),_e=Object.assign(Object.assign({},D.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),ke=v({name:"Table",props:_e,setup(d){const{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:c}=ae(d),m=D("Table","-table",fe,ie,d,s),f=de("Table",c,s),u=V(()=>{const{size:h}=d,{self:{borderColor:R,tdColor:i,tdColorModal:e,tdColorPopover:y,thColor:z,thColorModal:T,thColorPopover:N,thTextColor:w,tdTextColor:t,borderRadius:U,thFontWeight:K,lineHeight:W,borderColorModal:q,borderColorPopover:J,tdColorStriped:Q,tdColorStripedModal:X,tdColorStripedPopover:Y,[I("fontSize",h)]:Z,[I("tdPadding",h)]:ee,[I("thPadding",h)]:oe},common:{cubicBezierEaseInOut:re}}=m.value;return{"--n-bezier":re,"--n-td-color":i,"--n-td-color-modal":e,"--n-td-color-popover":y,"--n-td-text-color":t,"--n-border-color":R,"--n-border-color-modal":q,"--n-border-color-popover":J,"--n-border-radius":U,"--n-font-size":Z,"--n-th-color":z,"--n-th-color-modal":T,"--n-th-color-popover":N,"--n-th-font-weight":K,"--n-th-text-color":w,"--n-line-height":W,"--n-td-padding":ee,"--n-th-padding":oe,"--n-td-color-striped":Q,"--n-td-color-striped-modal":X,"--n-td-color-striped-popover":Y}}),b=l?se("table",V(()=>d.size[0]),u,d):void 0;return{rtlEnabled:f,mergedClsPrefix:s,cssVars:l?void 0:u,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var d;const{mergedClsPrefix:s}=this;return(d=this.onRender)===null||d===void 0||d.call(this),k("table",{class:[`${s}-table`,this.themeClass,{[`${s}-table--rtl`]:this.rtlEnabled,[`${s}-table--bottom-bordered`]:this.bottomBordered,[`${s}-table--bordered`]:this.bordered,[`${s}-table--single-line`]:this.singleLine,[`${s}-table--single-column`]:this.singleColumn,[`${s}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),j=v({name:"Th",render(){return k("th",null,this.$slots)}}),F=v({name:"Tr",render(){return k("tr",null,this.$slots)}}),O=v({name:"Td",render(){return k("td",null,this.$slots)}}),Ce=v({name:"Thead",render(){return k("thead",null,this.$slots)}}),xe=v({name:"Tbody",render(){return k("tbody",null,this.$slots)}}),x=d=>(pe("data-v-14b6ef64"),d=d(),ve(),d),ye=x(()=>C("h4",null,"client_id",-1)),ze=x(()=>C("h4",null,"client_secret",-1)),Te=x(()=>C("h4",null,"refresh_token",-1)),Ne=x(()=>C("h4",null,"access_token",-1)),we=x(()=>C("h4",null,"Albums",-1)),Pe=v({__name:"Album",setup(d){const s=new URL(window.location.href),l=ce({client_id:"",client_secret:"",access_token:s.searchParams.get("access_token")||"",refresh_token:""}),c=S("access_token"),m=S(),f=S();let u=S([]);const b=async()=>{const i=new URLSearchParams;i.append("client_id",l.client_id),i.append("client_secret",l.client_secret),i.append("grant_type","refresh_token"),i.append("refresh_token",l.refresh_token),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i}).then(e=>e.json()).then(e=>{console.log(e),m.value=e,(typeof e.error>"u"||!e.error)&&(l.access_token=e.access_token,typeof e.access_token<"u"&&e.access_token&&h(null))})},h=async i=>{i==null&&(i=""),fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${i}&pageSize=50`,{method:"GET",headers:{Authorization:`Bearer ${l.access_token}`}}).then(e=>e.json()).then(e=>{console.log(e),f.value=e,(typeof e.error>"u"||!e.error)&&(u.value=u.value.concat(e.albums),console.log(u),typeof e.nextPageToken<"u"&&e.nextPageToken&&h(e.nextPageToken))})};l.access_token&&h(null);function R(){u.value=[],c.value=="refresh_token"?b():h(null)}return(i,e)=>(p(),_(r(M),{vertical:"",size:"large"},{default:n(()=>{var y,z,T,N,w;return[a(r(ue),{value:c.value,"onUpdate:value":e[0]||(e[0]=t=>c.value=t),size:"large",options:[{label:"Access token",value:"access_token"},{label:"Client & Refresh token",value:"refresh_token"}]},null,8,["value"]),c.value=="refresh_token"?(p(),_(r(M),{key:0,vertical:"",size:"large"},{default:n(()=>[ye,a(r(B),{size:"large",value:l.client_id,"onUpdate:value":e[1]||(e[1]=t=>l.client_id=t)},null,8,["value"]),ze,a(r(B),{size:"large",value:l.client_secret,"onUpdate:value":e[2]||(e[2]=t=>l.client_secret=t)},null,8,["value"]),Te,a(r(B),{size:"large",value:l.refresh_token,"onUpdate:value":e[3]||(e[3]=t=>l.refresh_token=t)},null,8,["value"])]),_:1})):(p(),_(r(M),{key:1,vertical:"",size:"large"},{default:n(()=>[Ne,a(r(B),{size:"large",value:l.access_token,"onUpdate:value":e[4]||(e[4]=t=>l.access_token=t)},null,8,["value"])]),_:1})),a(r(ge),{size:"large",type:"primary",block:"",onClick:R},{default:n(()=>[g("Fetch Album")]),_:1}),(y=m.value)!=null&&y.error||(z=m.value)!=null&&z.error_description?(p(),_(r(L),{key:2,title:(T=m.value)==null?void 0:T.error,type:"error"},{default:n(()=>{var t;return[g($((t=m.value)==null?void 0:t.error_description),1)]}),_:1},8,["title"])):E("v-if",!0),(N=f.value)!=null&&N.error?(p(),_(r(L),{key:3,title:(w=f.value)==null?void 0:w.error.status,type:"error"},{default:n(()=>{var t;return[g($((t=f.value)==null?void 0:t.error.message),1)]}),_:1},8,["title"])):E("v-if",!0),we,a(r(ke),{size:"large"},{default:n(()=>[a(r(Ce),null,{default:n(()=>[a(r(F),null,{default:n(()=>[a(r(j),null,{default:n(()=>[g("Album Title")]),_:1}),a(r(j),null,{default:n(()=>[g("Album ID")]),_:1})]),_:1})]),_:1}),a(r(xe),null,{default:n(()=>[(p(!0),H(he,null,be(r(u),(t,U)=>(p(),_(r(F),null,{default:n(()=>[a(r(O),null,{default:n(()=>[g($(t.title),1)]),_:2},1024),a(r(O),null,{default:n(()=>[g($(t.id),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1}))}}),Se=G(Pe,[["__scopeId","data-v-14b6ef64"],["__file","Album.vue"]]),$e=v({__name:"album.html",setup(d){return(s,l)=>{const c=me("NaiveClient");return p(),H("div",null,[a(c,null,{default:n(()=>[a(r(Se))]),_:1})])}}}),Ue=G($e,[["__file","album.html.vue"]]);export{Ue as default};
