import{b as t,d as c,e as Q,h as a,j as n,k as U,l as X,u as Y,m as x,n as Z,o as ee,q as oe,r as re,s as h,t as te}from"./app-56e27fb3.js";import{r as i,c as ne}from"./resolve-slot-16e06725.js";import{c as de,h as u,j as l}from"./framework-95cb4087.js";const ae=t([c("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Q({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[c("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1; min-width: 0;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),c("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),U(c("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),X(c("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),le={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},se=Object.assign(Object.assign({},x.props),le),ge=de({name:"Card",props:se,setup(r){const f=()=>{const{onClose:o}=r;o&&ne(o)},{inlineThemeDisabled:b,mergedClsPrefixRef:e,mergedRtlRef:m}=Y(r),s=x("Card","-card",ae,re,r,e),p=Z("Card",m,e),g=u(()=>{const{size:o}=r,{self:{color:v,colorModal:z,colorTarget:C,textColor:y,titleTextColor:S,titleFontWeight:k,borderColor:$,actionColor:w,borderRadius:T,lineHeight:R,closeIconColor:_,closeIconColorHover:B,closeIconColorPressed:P,closeColorHover:E,closeColorPressed:j,closeBorderRadius:O,closeIconSize:M,closeSize:I,boxShadow:F,colorPopover:H,colorEmbedded:N,colorEmbeddedModal:V,colorEmbeddedPopover:L,[h("padding",o)]:W,[h("fontSize",o)]:q,[h("titleFontSize",o)]:A},common:{cubicBezierEaseInOut:D}}=s.value,{top:K,left:G,bottom:J}=te(W);return{"--n-bezier":D,"--n-border-radius":T,"--n-color":v,"--n-color-modal":z,"--n-color-popover":H,"--n-color-embedded":N,"--n-color-embedded-modal":V,"--n-color-embedded-popover":L,"--n-color-target":C,"--n-text-color":y,"--n-line-height":R,"--n-action-color":w,"--n-title-text-color":S,"--n-title-font-weight":k,"--n-close-icon-color":_,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":P,"--n-close-color-hover":E,"--n-close-color-pressed":j,"--n-border-color":$,"--n-box-shadow":F,"--n-padding-top":K,"--n-padding-bottom":J,"--n-padding-left":G,"--n-font-size":q,"--n-title-font-size":A,"--n-close-size":I,"--n-close-icon-size":M,"--n-close-border-radius":O}}),d=b?ee("card",u(()=>r.size[0]),g,r):void 0;return{rtlEnabled:p,mergedClsPrefix:e,mergedTheme:s,handleCloseClick:f,cssVars:b?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:r,bordered:f,hoverable:b,mergedClsPrefix:e,rtlEnabled:m,onRender:s,embedded:p,tag:g,$slots:d}=this;return s==null||s(),l(g,{class:[`${e}-card`,this.themeClass,p&&`${e}-card--embedded`,{[`${e}-card--rtl`]:m,[`${e}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${e}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${e}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${e}-card--bordered`]:f,[`${e}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(d.cover,o=>o&&l("div",{class:`${e}-card-cover`,role:"none"},o)),i(d.header,o=>o||this.title||this.closable?l("div",{class:`${e}-card-header`,style:this.headerStyle},l("div",{class:`${e}-card-header__main`,role:"heading"},o||this.title),i(d["header-extra"],v=>v&&l("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?l(oe,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(d.default,o=>o&&l("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},o)),i(d.footer,o=>o&&[l("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},o)]),i(d.action,o=>o&&l("div",{class:`${e}-card__action`,role:"none"},o)))}});export{ge as N};
