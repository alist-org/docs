import{h as F,ax as ve,ay as Ae,az as Te,aA as Fe,j as je,aB as Z,aC as Me,aD as ee,K as _,a4 as ne,J as R,M as S,O as I,d as A,q as ke,a0 as Ee,x as W,S as Le,m as s,k as be,l as G,g as k,s as oe,aE as He,aF as We,aG as Ge,aH as Ue,A as Se,aI as te,aJ as Ne,aK as we,ah as qe,H as Ve,aL as Je,aM as Xe,aN as Qe,aO as Ye,aP as Ze,ak as eo,y as B,aQ as oo,R as _e,Y as ue,T as E,W as no,aR as to,aS as ro,aT as Pe,aU as io,av as ye,o as ao,F as lo,w as L,a as H,u as O,e as ce,I as pe,N as ge,_ as so}from"./app-c9_5mz9m.js";import{b as uo,N as fe}from"./Button-I-YV1TUU.js";import{N as co}from"./Icon-W7W9IB04.js";import{C as po}from"./ChevronRight-lmntJgGY.js";import{N as fo}from"./Image-r1VEbj32.js";function ho(e){return o=>{o?e.value=o.$el:e.value=null}}function vo(e,o,t){if(!o)return e;const r=F(e.value);let i=null;return ve(e,n=>{i!==null&&window.clearTimeout(i),n===!0?t&&!t.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function bo(e={},o){const t=Ae({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,n=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==a.key)return;const v=r[y];if(typeof v=="function")v(a);else{const{stop:N=!1,prevent:P=!1}=v;N&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},u=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(y=>{if(y!==a.key)return;const v=i[y];if(typeof v=="function")v(a);else{const{stop:N=!1,prevent:P=!1}=v;N&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=()=>{(o===void 0||o.value)&&(ee("keydown",document,n),ee("keyup",document,u)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,n),ee("keyup",document,u)):(Z("keydown",document,n),Z("keyup",document,u))})};return Te()?(Fe(c),je(()=>{(o===void 0||o.value)&&(Z("keydown",document,n),Z("keyup",document,u))})):c(),Me(t)}const h="0!important",Re="-1px!important";function V(e){return S(e+"-type",[R("& +",[_("button",{},[S(e+"-type",[I("border",{borderLeftWidth:h}),I("state-border",{left:Re})])])])])}function J(e){return S(e+"-type",[R("& +",[_("button",[S(e+"-type",[I("border",{borderTopWidth:h}),I("state-border",{top:Re})])])])])}const mo=_("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[_("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),V("default"),S("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),S("vertical",{flexDirection:"column"},[_("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),J("default"),S("ghost",[J("primary"),J("info"),J("success"),J("warning"),J("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=A({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=ke(e);return Ee("-button-group",mo,o),W(uo,e),{rtlEnabled:Le("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),$e=A({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),me=be("n-dropdown-menu"),re=be("n-dropdown"),xe=be("n-dropdown-option");function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function go(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function xo(e){return e.type==="render"}const Ke=A({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=G(re),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:n,activeKeyPathRef:u,animatedRef:c,mergedShowRef:a,renderLabelRef:y,renderIconRef:v,labelFieldRef:N,childrenFieldRef:P,renderOptionRef:K,nodePropsRef:C,menuPropsRef:x}=o,g=G(xe,null),D=G(me),X=G(Ne),ie=k(()=>e.tmNode.rawNode),Q=k(()=>{const{value:d}=P;return he(e.tmNode.rawNode,d)}),ae=k(()=>{const{disabled:d}=e.tmNode;return d}),le=k(()=>{if(!Q.value)return!1;const{key:d,disabled:w}=e.tmNode;if(w)return!1;const{value:z}=t,{value:j}=r,{value:se}=i,{value:M}=n;return z!==null?M.includes(d):j!==null?M.includes(d)&&M[M.length-1]!==d:se!==null?M.includes(d):!1}),de=k(()=>r.value===null&&!c.value),Y=vo(le,300,de),U=k(()=>!!(g!=null&&g.enteringSubmenuRef.value)),q=F(!1);W(xe,{enteringSubmenuRef:q});function T(){q.value=!0}function l(){q.value=!1}function m(){const{parentKey:d,tmNode:w}=e;w.disabled||a.value&&(i.value=d,r.value=null,t.value=w.key)}function f(){const{tmNode:d}=e;d.disabled||a.value&&t.value!==d.key&&m()}function p(d){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:w}=d;w&&!we({target:w},"dropdownOption")&&!we({target:w},"scrollbarRail")&&(t.value=null)}function $(){const{value:d}=Q,{tmNode:w}=e;a.value&&!d&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:N,renderLabel:y,renderIcon:v,siblingHasIcon:D.showIconRef,siblingHasSubmenu:D.hasSubmenuRef,menuProps:x,popoverBody:X,animated:c,mergedShowSubmenu:k(()=>Y.value&&!U.value),rawNode:ie,hasSubmenu:Q,pending:oe(()=>{const{value:d}=n,{key:w}=e.tmNode;return d.includes(w)}),childActive:oe(()=>{const{value:d}=u,{key:w}=e.tmNode,z=d.findIndex(j=>w===j);return z===-1?!1:z<d.length-1}),active:oe(()=>{const{value:d}=u,{key:w}=e.tmNode,z=d.findIndex(j=>w===j);return z===-1?!1:z===d.length-1}),mergedDisabled:ae,renderOption:K,nodeProps:C,handleClick:$,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:n,siblingHasIcon:u,siblingHasSubmenu:c,renderLabel:a,renderIcon:y,renderOption:v,nodeProps:N,props:P,scrollable:K}=this;let C=null;if(i){const X=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);C=s(Ce,Object.assign({},X,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const x={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=N==null?void 0:N(r),D=s("div",Object.assign({class:[`${n}-dropdown-option`,g==null?void 0:g.class],"data-dropdown-option":!0},g),s("div",Se(x,P),[s("div",{class:[`${n}-dropdown-option-body__prefix`,u&&`${n}-dropdown-option-body__prefix--show-icon`]},[y?y(r):te(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,c&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(co,null,{default:()=>s(po,null)}):null)]),this.hasSubmenu?s(He,null,{default:()=>[s(We,null,{default:()=>s("div",{class:`${n}-dropdown-offset-container`},s(Ge,{show:this.mergedShowSubmenu,placement:this.placement,to:K&&this.popoverBody||void 0,teleportDisabled:!K},{default:()=>s("div",{class:`${n}-dropdown-menu-wrapper`},t?s(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return v?v({node:D,option:r}):D}}),ko=A({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=G(me),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:i,renderOptionRef:n}=G(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:i,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:n,renderOption:u}=this,{rawNode:c}=this.tmNode,a=s("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(c)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:a,option:c}):a}}),So=A({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return s(Ve,null,s(ko,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Ie(n)?s($e,{clsPrefix:t,key:i.key}):i.isGroup?(qe("dropdown","`group` node is not allowed to be put in `group` node."),null):s(Ke,{clsPrefix:t,tmNode:i,parentKey:o,key:i.key})}))}}),No=A({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),Ce=A({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=G(re);W(me,{showIconRef:k(()=>{const i=o.value;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:c}=n;return i?i(c):c.icon})}),hasSubmenuRef:k(()=>{const{value:i}=t;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:a})=>he(a,i));const{rawNode:c}=n;return he(c,i)})})});const r=F(null);return W(Je,null),W(Xe,null),W(Ne,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(i=>{const{rawNode:n}=i;return n.show===!1?null:xo(n)?s(No,{tmNode:i,key:i.key}):Ie(n)?s($e,{clsPrefix:o,key:i.key}):go(n)?s(So,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):s(Ke,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:n.props,scrollable:t})});return s("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?s(Ye,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Qe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),_o=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ze(),_("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[S("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),S("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),S("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),S("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[S("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[S("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
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
 `,[S("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),S("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Pe),$o=Object.assign(Object.assign(Object.assign({},Pe),Po),_e.props),Io=A({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=F(!1),t=eo(B(e,"show"),o),r=k(()=>{const{keyField:l,childrenField:m}=e;return oo(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),i=k(()=>r.value.treeNodes),n=F(null),u=F(null),c=F(null),a=k(()=>{var l,m,f;return(f=(m=(l=n.value)!==null&&l!==void 0?l:u.value)!==null&&m!==void 0?m:c.value)!==null&&f!==void 0?f:null}),y=k(()=>r.value.getPath(a.value).keyPath),v=k(()=>r.value.getPath(e.value).keyPath),N=oe(()=>e.keyboard&&t.value);bo({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:Q},ArrowDown:{prevent:!0,handler:le},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:de},Escape:X}},N);const{mergedClsPrefixRef:P,inlineThemeDisabled:K}=ke(e),C=_e("Dropdown","-dropdown",_o,io,e,P);W(re,{labelFieldRef:B(e,"labelField"),childrenFieldRef:B(e,"childrenField"),renderLabelRef:B(e,"renderLabel"),renderIconRef:B(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:u,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:y,activeKeyPathRef:v,animatedRef:B(e,"animated"),mergedShowRef:t,nodePropsRef:B(e,"nodeProps"),renderOptionRef:B(e,"renderOption"),menuPropsRef:B(e,"menuProps"),doSelect:x,doUpdateShow:g}),ve(t,l=>{!e.animated&&!l&&D()});function x(l,m){const{onSelect:f}=e;f&&ue(f,l,m)}function g(l){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&ue(m,l),f&&ue(f,l),o.value=l}function D(){n.value=null,u.value=null,c.value=null}function X(){g(!1)}function ie(){U("left")}function Q(){U("right")}function ae(){U("up")}function le(){U("down")}function de(){const l=Y();l!=null&&l.isLeaf&&t.value&&(x(l.key,l.rawNode),g(!1))}function Y(){var l;const{value:m}=r,{value:f}=a;return!m||f===null?null:(l=m.getNode(f))!==null&&l!==void 0?l:null}function U(l){const{value:m}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(m===null){const $=f();$!==null&&(p=$.key)}else{const $=Y();if($){let d;switch(l){case"down":d=$.getNext();break;case"up":d=$.getPrev();break;case"right":d=$.getChild();break;case"left":d=$.getParent();break}d&&(p=d.key)}}p!==null&&(n.value=null,u.value=p)}const q=k(()=>{const{size:l,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=C.value,{padding:$,dividerColor:d,borderRadius:w,optionOpacityDisabled:z,[E("optionIconSuffixWidth",l)]:j,[E("optionSuffixWidth",l)]:se,[E("optionIconPrefixWidth",l)]:M,[E("optionPrefixWidth",l)]:De,[E("fontSize",l)]:Oe,[E("optionHeight",l)]:ze,[E("optionIconSize",l)]:Be}=p,b={"--n-bezier":f,"--n-font-size":Oe,"--n-padding":$,"--n-border-radius":w,"--n-option-height":ze,"--n-option-prefix-width":De,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":j,"--n-option-icon-size":Be,"--n-divider-color":d,"--n-option-opacity-disabled":z};return m?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),T=K?no("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:P,mergedTheme:C,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&D()},doUpdateShow:g,cssVars:K?void 0:q,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,i,n,u,c)=>{var a;const{mergedClsPrefix:y,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const N=(v==null?void 0:v(void 0,this.tmNodes.map(K=>K.rawNode)))||{},P={ref:ho(i),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:c};return s(Ce,Se(this.$attrs,P,N))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(ro,Object.assign({},to(this.$props,Ro),t),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}}),Ko="https://mirror.ghproxy.com/",Co=A({__name:"Desktop",async setup(e){let o,t;const r=([o,t]=ye(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),o=await o,t(),o),n=([o,t]=ye(()=>r.json()),o=await o,t(),o).version,u=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_x64_en-US.msi`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_amd64.deb`}],c=navigator.platform.toLowerCase(),a=F("win_x64");c.includes("win")?a.value="win_x64":c.includes("linux")?a.value="linux":c.includes("mac")&&(a.value="mac_arm64"),console.log(a.value);let y={down:"Download",website:"Website"};const v=k(()=>{var x;return(x=u.find(g=>g.key===a.value))==null?void 0:x.label}),N=k(()=>u.map(x=>({...x,label:`${x.label} ${a.value===x.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(y={down:"下载",website:"官网"});function P(){var g;const x=(g=u.find(D=>D.key===a.value))==null?void 0:g.url;window.open(`${Ko}${x}`,"_blank")}function K(x){a.value=x}function C(){window.open("https://ad.nn.ci/","_blank")}return(x,g)=>(ao(),lo(O(ge),{align:"center",vertical:"",size:"large"},{default:L(()=>[H(O(ge),{class:"btn"},{default:L(()=>[H(O(fe),{size:"large",type:"info",onClick:C,tertiary:""},{default:L(()=>[ce(pe(O(y).website),1)]),_:1}),H(O(yo),null,{default:L(()=>[H(O(Io),{trigger:"hover",options:N.value,onSelect:K,size:"large"},{default:L(()=>[H(O(fe),{size:"large",type:"primary",tertiary:""},{default:L(()=>[ce("💻"+pe(v.value),1)]),_:1})]),_:1},8,["options"]),H(O(fe),{size:"large",onClick:P,type:"info",secondary:""},{default:L(()=>[ce(pe(O(y).down),1)]),_:1})]),_:1})]),_:1}),H(O(fo),{src:"/img/guide/desktop.png"})]),_:1}))}}),To=so(Co,[["__scopeId","data-v-24d451d9"],["__file","Desktop.vue"]]);export{To as D};
