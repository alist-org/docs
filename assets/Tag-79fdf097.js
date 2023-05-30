import{I as ne,K as l,L as g,$ as m,H as z,d as ae,h as le,n as te,P as T,t as se,x as ie,Q as de,g as R,R as n,T as he,l as b,V as ge,j as be,al as ve}from"./app-39ee1ab2.js";import{c as P}from"./color-to-class-b0332f36.js";import{r as I,c as ue}from"./resolve-slot-04492281.js";const ke={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ce=ne("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),g("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l("icon, avatar",[l("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[m("disabled",[z("&:hover","background-color: var(--n-color-hover-checkable);",[m("checked","color: var(--n-text-color-hover-checkable);")]),z("&:active","background-color: var(--n-color-pressed-checkable);",[m("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[m("disabled",[z("&:hover","background-color: var(--n-color-checked-hover);"),z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),fe=Object.assign(Object.assign(Object.assign({},T.props),ke),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),pe=be("n-tag"),ye=ae({name:"Tag",props:fe,setup(c){const i=le(null),{mergedBorderedRef:o,mergedClsPrefixRef:v,inlineThemeDisabled:u,mergedRtlRef:y}=te(c),C=T("Tag","-tag",Ce,ve,c,v);se(pe,{roundRef:ie(c,"round")});function k(e){if(!c.disabled&&c.checkable){const{checked:r,onCheckedChange:h,onUpdateChecked:t,"onUpdate:checked":s}=c;t&&t(!r),s&&s(!r),h&&h(!r)}}function f(e){if(c.triggerClickOnClose||e.stopPropagation(),!c.disabled){const{onClose:r}=c;r&&ue(r,e)}}const p={setTextContent(e){const{value:r}=i;r&&(r.textContent=e)}},x=de("Tag",y,v),a=R(()=>{const{type:e,size:r,color:{color:h,textColor:t}={}}=c,{common:{cubicBezierEaseInOut:s},self:{padding:_,closeMargin:M,closeMarginRtl:w,borderRadius:S,opacityDisabled:j,textColorCheckable:H,textColorHoverCheckable:O,textColorPressedCheckable:F,textColorChecked:N,colorCheckable:E,colorHoverCheckable:U,colorPressedCheckable:K,colorChecked:V,colorCheckedHover:D,colorCheckedPressed:L,closeBorderRadius:W,fontWeightStrong:A,[n("colorBordered",e)]:Q,[n("closeSize",r)]:q,[n("closeIconSize",r)]:G,[n("fontSize",r)]:J,[n("height",r)]:B,[n("color",e)]:X,[n("textColor",e)]:Y,[n("border",e)]:Z,[n("closeIconColor",e)]:$,[n("closeIconColorHover",e)]:ee,[n("closeIconColorPressed",e)]:oe,[n("closeColorHover",e)]:re,[n("closeColorPressed",e)]:ce}}=C.value;return{"--n-font-weight-strong":A,"--n-avatar-size-override":`calc(${B} - 8px)`,"--n-bezier":s,"--n-border-radius":S,"--n-border":Z,"--n-close-icon-size":G,"--n-close-color-pressed":ce,"--n-close-color-hover":re,"--n-close-border-radius":W,"--n-close-icon-color":$,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":$,"--n-close-margin":M,"--n-close-margin-rtl":w,"--n-close-size":q,"--n-color":h||(o.value?Q:X),"--n-color-checkable":E,"--n-color-checked":V,"--n-color-checked-hover":D,"--n-color-checked-pressed":L,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":K,"--n-font-size":J,"--n-height":B,"--n-opacity-disabled":j,"--n-padding":_,"--n-text-color":t||Y,"--n-text-color-checkable":H,"--n-text-color-checked":N,"--n-text-color-hover-checkable":O,"--n-text-color-pressed-checkable":F}}),d=u?he("tag",R(()=>{let e="";const{type:r,size:h,color:{color:t,textColor:s}={}}=c;return e+=r[0],e+=h[0],t&&(e+=`a${P(t)}`),s&&(e+=`b${P(s)}`),o.value&&(e+="c"),e}),a,c):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:x,mergedClsPrefix:v,contentRef:i,mergedBordered:o,handleClick:k,handleCloseClick:f,cssVars:u?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var c,i;const{mergedClsPrefix:o,rtlEnabled:v,closable:u,color:{borderColor:y}={},round:C,onRender:k,$slots:f}=this;k==null||k();const p=I(f.avatar,a=>a&&b("div",{class:`${o}-tag__avatar`},a)),x=I(f.icon,a=>a&&b("div",{class:`${o}-tag__icon`},a));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:v,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:C,[`${o}-tag--avatar`]:p,[`${o}-tag--icon`]:x,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||p,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(c=this.$slots).default)===null||i===void 0?void 0:i.call(c)),!this.checkable&&u?b(ge,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:C,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:y}}):null)}});export{ye as N};
