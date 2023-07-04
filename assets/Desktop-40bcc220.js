import{h as T,ax as pe,ay as Be,az as Ae,aA as Te,j as je,aB as Z,aC as Fe,aD as ee,K as N,a4 as ne,J as _,M as k,O as I,d as z,q as xe,a0 as Me,x as L,S as Ee,m as s,k as fe,l as H,g as x,s as oe,aE as Le,aF as He,aG as Ge,aH as Ue,A as ke,aI as te,aJ as Se,aK as ve,ah as We,H as qe,aL as Ve,aM as Je,aN as Qe,aO as Xe,aP as Ye,ak as Ze,y as O,aQ as eo,R as Ne,Y as ue,T as M,W as oo,aR as no,aS as to,aT as Pe,aU as ro,av as be,o as io,F as ao,w as Q,a as X,u as E,e as me,I as we,N as lo,aw as so,_ as uo}from"./app-82af6f7e.js";import{N as co}from"./Icon-8ff19c22.js";import{C as po}from"./ChevronRight-48c1f82c.js";import{b as fo,N as ye}from"./Button-7b51c8ea.js";import{N as ho}from"./Image-a1408207.js";function vo(e){return o=>{o?e.value=o.$el:e.value=null}}function bo(e,o,i){if(!o)return e;const r=T(e.value);let n=null;return pe(e,t=>{n!==null&&window.clearTimeout(n),t===!0?i&&!i.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function mo(e={},o){const i=Be({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,t=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(g=>{if(g!==a.key)return;const v=r[g];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}n!==void 0&&Object.keys(n).forEach(g=>{if(g!==a.key)return;const v=n[g];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},u=()=>{(o===void 0||o.value)&&(ee("keydown",document,t),ee("keyup",document,c)),o!==void 0&&pe(o,a=>{a?(ee("keydown",document,t),ee("keyup",document,c)):(Z("keydown",document,t),Z("keyup",document,c))})};return Ae()?(Te(u),je(()=>{(o===void 0||o.value)&&(Z("keydown",document,t),Z("keyup",document,c))})):u(),Fe(i)}const h="0!important",_e="-1px!important";function W(e){return k(e+"-type",[_("& +",[N("button",{},[k(e+"-type",[I("border",{borderLeftWidth:h}),I("state-border",{left:_e})])])])])}function q(e){return k(e+"-type",[_("& +",[N("button",[k(e+"-type",[I("border",{borderTopWidth:h}),I("state-border",{top:_e})])])])])}const wo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[N("button",[_("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),_("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),_("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),W("default"),k("ghost",[W("primary"),W("info"),W("success"),W("warning"),W("error")])])])]),k("vertical",{flexDirection:"column"},[N("button",[_("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),_("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),_("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),q("default"),k("ghost",[q("primary"),q("info"),q("success"),q("warning"),q("error")])])])]),yo={size:{type:String,default:void 0},vertical:Boolean},go=z({name:"ButtonGroup",props:yo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=xe(e);return Me("-button-group",wo,o),L(fo,e),{rtlEnabled:Ee("ButtonGroup",i,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Re=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),he=fe("n-dropdown-menu"),re=fe("n-dropdown"),ge=fe("n-dropdown-option");function ce(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function $e(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ie=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=H(re),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:t,activeKeyPathRef:c,animatedRef:u,mergedShowRef:a,renderLabelRef:g,renderIconRef:v,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:K,nodePropsRef:b,menuPropsRef:C}=o,R=H(ge,null),B=H(he),V=H(Se),ie=x(()=>e.tmNode.rawNode),J=x(()=>{const{value:l}=P;return ce(e.tmNode.rawNode,l)}),ae=x(()=>{const{disabled:l}=e.tmNode;return l}),de=x(()=>{if(!J.value)return!1;const{key:l,disabled:y}=e.tmNode;if(y)return!1;const{value:D}=i,{value:j}=r,{value:se}=n,{value:F}=t;return D!==null?F.includes(l):j!==null?F.includes(l)&&F[F.length-1]!==l:se!==null?F.includes(l):!1}),le=x(()=>r.value===null&&!u.value),Y=bo(de,300,le),G=x(()=>!!(R!=null&&R.enteringSubmenuRef.value)),U=T(!1);L(ge,{enteringSubmenuRef:U});function A(){U.value=!0}function d(){U.value=!1}function w(){const{parentKey:l,tmNode:y}=e;y.disabled||a.value&&(n.value=l,r.value=null,i.value=y.key)}function f(){const{tmNode:l}=e;l.disabled||a.value&&i.value!==l.key&&w()}function p(l){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=l;y&&!ve({target:y},"dropdownOption")&&!ve({target:y},"scrollbarRail")&&(i.value=null)}function $(){const{value:l}=J,{tmNode:y}=e;a.value&&!l&&!y.disabled&&(o.doSelect(y.key,y.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:g,renderIcon:v,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:C,popoverBody:V,animated:u,mergedShowSubmenu:x(()=>Y.value&&!G.value),rawNode:ie,hasSubmenu:J,pending:oe(()=>{const{value:l}=t,{key:y}=e.tmNode;return l.includes(y)}),childActive:oe(()=>{const{value:l}=c,{key:y}=e.tmNode,D=l.findIndex(j=>y===j);return D===-1?!1:D<l.length-1}),active:oe(()=>{const{value:l}=c,{key:y}=e.tmNode,D=l.findIndex(j=>y===j);return D===-1?!1:D===l.length-1}),mergedDisabled:ae,renderOption:K,nodeProps:b,handleClick:$,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:n,clsPrefix:t,siblingHasIcon:c,siblingHasSubmenu:u,renderLabel:a,renderIcon:g,renderOption:v,nodeProps:S,props:P,scrollable:K}=this;let b=null;if(n){const V=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);b=s(Ke,Object.assign({},V,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const C={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},R=S==null?void 0:S(r),B=s("div",Object.assign({class:[`${t}-dropdown-option`,R==null?void 0:R.class],"data-dropdown-option":!0},R),s("div",ke(C,P),[s("div",{class:[`${t}-dropdown-option-body__prefix`,c&&`${t}-dropdown-option-body__prefix--show-icon`]},[g?g(r):te(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,u&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(co,null,{default:()=>s(po,null)}):null)]),this.hasSubmenu?s(Le,null,{default:()=>[s(He,null,{default:()=>s("div",{class:`${t}-dropdown-offset-container`},s(Ge,{show:this.mergedShowSubmenu,placement:this.placement,to:K&&this.popoverBody||void 0,teleportDisabled:!K},{default:()=>s("div",{class:`${t}-dropdown-menu-wrapper`},i?s(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>b}):b)}))})]}):null);return v?v({node:B,option:r}):B}}),So=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=H(he),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:n,renderOptionRef:t}=H(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:n,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:n,renderLabel:t,renderOption:c}=this,{rawNode:u}=this.tmNode,a=s("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(u)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(u.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(u):te((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:a,option:u}):a}}),No=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return s(qe,null,s(So,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:t}=n;return t.show===!1?null:$e(t)?s(Re,{clsPrefix:i,key:n.key}):n.isGroup?(We("dropdown","`group` node is not allowed to be put in `group` node."),null):s(Ie,{clsPrefix:i,tmNode:n,parentKey:o,key:n.key})}))}}),Po=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),Ke=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=H(re);L(he,{showIconRef:x(()=>{const n=o.value;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:u}=t;return n?n(u):u.icon})}),hasSubmenuRef:x(()=>{const{value:n}=i;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>ce(a,n));const{rawNode:u}=t;return ce(u,n)})})});const r=T(null);return L(Ve,null),L(Je,null),L(Se,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(n=>{const{rawNode:t}=n;return t.show===!1?null:ko(t)?s(Po,{tmNode:n,key:n.key}):$e(t)?s(Re,{clsPrefix:o,key:n.key}):xo(t)?s(No,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):s(Ie,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:t.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(Xe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Qe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),_o=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ye(),N("dropdown-option",`
 position: relative;
 `,[_("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[_("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),_("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),_("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),_(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),Ro={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$o=Object.keys(Pe),Io=Object.assign(Object.assign(Object.assign({},Pe),Ro),Ne.props),Ko=z({name:"Dropdown",inheritAttrs:!1,props:Io,setup(e){const o=T(!1),i=Ze(O(e,"show"),o),r=x(()=>{const{keyField:d,childrenField:w}=e;return eo(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),n=x(()=>r.value.treeNodes),t=T(null),c=T(null),u=T(null),a=x(()=>{var d,w,f;return(f=(w=(d=t.value)!==null&&d!==void 0?d:c.value)!==null&&w!==void 0?w:u.value)!==null&&f!==void 0?f:null}),g=x(()=>r.value.getPath(a.value).keyPath),v=x(()=>r.value.getPath(e.value).keyPath),S=oe(()=>e.keyboard&&i.value);mo({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:J},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:V}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:K}=xe(e),b=Ne("Dropdown","-dropdown",_o,ro,e,P);L(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:g,activeKeyPathRef:v,animatedRef:O(e,"animated"),mergedShowRef:i,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:C,doUpdateShow:R}),pe(i,d=>{!e.animated&&!d&&B()});function C(d,w){const{onSelect:f}=e;f&&ue(f,d,w)}function R(d){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&ue(w,d),f&&ue(f,d),o.value=d}function B(){t.value=null,c.value=null,u.value=null}function V(){R(!1)}function ie(){G("left")}function J(){G("right")}function ae(){G("up")}function de(){G("down")}function le(){const d=Y();d!=null&&d.isLeaf&&i.value&&(C(d.key,d.rawNode),R(!1))}function Y(){var d;const{value:w}=r,{value:f}=a;return!w||f===null?null:(d=w.getNode(f))!==null&&d!==void 0?d:null}function G(d){const{value:w}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(w===null){const $=f();$!==null&&(p=$.key)}else{const $=Y();if($){let l;switch(d){case"down":l=$.getNext();break;case"up":l=$.getPrev();break;case"right":l=$.getChild();break;case"left":l=$.getParent();break}l&&(p=l.key)}}p!==null&&(t.value=null,c.value=p)}const U=x(()=>{const{size:d,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=b.value,{padding:$,dividerColor:l,borderRadius:y,optionOpacityDisabled:D,[M("optionIconSuffixWidth",d)]:j,[M("optionSuffixWidth",d)]:se,[M("optionIconPrefixWidth",d)]:F,[M("optionPrefixWidth",d)]:Ce,[M("fontSize",d)]:De,[M("optionHeight",d)]:Oe,[M("optionIconSize",d)]:ze}=p,m={"--n-bezier":f,"--n-font-size":De,"--n-padding":$,"--n-border-radius":y,"--n-option-height":Oe,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":F,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":j,"--n-option-icon-size":ze,"--n-divider-color":l,"--n-option-opacity-disabled":D};return w?(m["--n-color"]=p.colorInverted,m["--n-option-color-hover"]=p.optionColorHoverInverted,m["--n-option-color-active"]=p.optionColorActiveInverted,m["--n-option-text-color"]=p.optionTextColorInverted,m["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,m["--n-option-text-color-active"]=p.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,m["--n-prefix-color"]=p.prefixColorInverted,m["--n-suffix-color"]=p.suffixColorInverted,m["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(m["--n-color"]=p.color,m["--n-option-color-hover"]=p.optionColorHover,m["--n-option-color-active"]=p.optionColorActive,m["--n-option-text-color"]=p.optionTextColor,m["--n-option-text-color-hover"]=p.optionTextColorHover,m["--n-option-text-color-active"]=p.optionTextColorActive,m["--n-option-text-color-child-active"]=p.optionTextColorChildActive,m["--n-prefix-color"]=p.prefixColor,m["--n-suffix-color"]=p.suffixColor,m["--n-group-header-text-color"]=p.groupHeaderTextColor),m}),A=K?oo("dropdown",x(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:P,mergedTheme:b,tmNodes:n,mergedShow:i,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:R,cssVars:K?void 0:U,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const e=(r,n,t,c,u)=>{var a;const{mergedClsPrefix:g,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(v==null?void 0:v(void 0,this.tmNodes.map(K=>K.rawNode)))||{},P={ref:vo(n),class:[r,`${g}-dropdown`,this.themeClass],clsPrefix:g,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:u};return s(Ke,ke(this.$attrs,P,S))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(to,Object.assign({},no(this.$props,$o),i),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}}),Co=z({__name:"Desktop",async setup(e){let o,i;const r=navigator.platform.toLowerCase(),n=T("win");r.includes("win")?n.value="win":r.includes("linux")?n.value="linux":r.includes("mac")&&(n.value="mac"),console.log(n.value);const t=([o,i]=be(()=>fetch(`${so()}/proxy/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop-proxy.json`)),o=await o,i(),o),u=([o,i]=be(()=>t.json()),o=await o,i(),o).name.slice(1);let a={down:"Download"};const g=[{key:"win",label:"Windows",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64_en-US.msi`},{key:"linux",label:"Linux",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_amd64.deb`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64.dmg`},{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_aarch64.dmg`}],v=x(()=>{var b;return(b=g.find(C=>C.key===n.value))==null?void 0:b.label}),S=x(()=>g.map(b=>({...b,label:`${b.label} ${n.value===b.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(a={down:"下载"});function P(){var b;window.open((b=g.find(C=>C.key===n.value))==null?void 0:b.url,"_blank")}function K(b){n.value=b}return(b,C)=>(io(),ao(E(lo),{align:"center",vertical:"",size:"large"},{default:Q(()=>[X(E(go),{class:"down"},{default:Q(()=>[X(E(Ko),{trigger:"hover",options:S.value,onSelect:K,size:"large"},{default:Q(()=>[X(E(ye),{size:"large",type:"primary",tertiary:""},{default:Q(()=>[me("💻"+we(v.value),1)]),_:1})]),_:1},8,["options"]),X(E(ye),{size:"large",onClick:P,type:"info",secondary:""},{default:Q(()=>[me(we(E(a).down),1)]),_:1})]),_:1}),X(E(ho),{src:"/img/guide/desktop.png"})]),_:1}))}});const To=uo(Co,[["__scopeId","data-v-5c9e59bc"],["__file","Desktop.vue"]]);export{To as D};
