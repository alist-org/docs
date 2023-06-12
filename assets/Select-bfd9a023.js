import{d as re,aD as mt,s as ke,aG as Yt,aH as Xt,g as k,h as T,q as Le,bj as nt,p as Ee,l as r,z as Zt,X as lt,aa as Jt,i as wt,I as _,L as N,H as le,n as yt,P as he,bk as Qt,k as rt,R as ue,T as He,ai as xt,aI as en,ar as Ce,aq as Ct,K as ne,$ as ot,x as Q,bl as tn,am as Se,S as Ze,t as st,a5 as nn,bm as on,aA as ln,F as rn,a9 as an,ay as sn,af as dn,v as un,bn as cn}from"./app-d4cce820.js";import{e as St,g as De,i as at,f as Rt,h as fn,N as hn,u as it,V as vn,a as gn,b as bn,j as dt}from"./Popover-32a55ac4.js";import{u as ut}from"./use-merged-state-e9630f09.js";import{a as pn,h as Ve,c as mn}from"./create-657dc0dd.js";import{u as Ft,N as wn,W as yn,g as xn}from"./Scrollbar-8af227a2.js";import{V as ct,r as ft,u as Cn}from"./browser-c2be0643.js";import{a as Sn}from"./Input-8542eb46.js";import{N as Je}from"./Tag-b667605b.js";import{r as Rn,d as Fn,c as ae}from"./resolve-slot-cacdf84e.js";import{b as Tn}from"./utils-6a8462c7.js";function On(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Qe(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}const zn=new WeakSet;function Mn(e){zn.add(e)}function ht(e){return e&-e}class kn{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let d=0;d<n+1;++d)l[d]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:d}=this;for(n+=1;n<=l;)d[n]+=o,n+=ht(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:d}=this;if(n>d)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*l;for(;n>0;)c+=o[n],n-=ht(n);return c}getBound(n){let o=0,l=this.l;for(;l>o;){const d=Math.floor((o+l)/2),c=this.sum(d);if(c>n){l=d;continue}else if(c<n){if(o===d)return this.sum(o+1)<=n?o+1:d;o=d}else return d}return o}}let Ne;function Pn(){return Ne===void 0&&("matchMedia"in window?Ne=window.matchMedia("(pointer:coarse)").matches:Ne=!1),Ne}let et;function vt(){return et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et}const In=De(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[De("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[De("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Bn=re({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=mt();In.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:St,ssr:n}),ke(()=>{const{defaultScrollIndex:h,defaultScrollKey:v}=e;h!=null?p({index:h}):v!=null&&p({key:v})});let o=!1,l=!1;Yt(()=>{if(o=!1,!l){l=!0;return}p({top:S.value,left:m})}),Xt(()=>{o=!0,l||(l=!0)});const d=k(()=>{const h=new Map,{keyField:v}=e;return e.items.forEach((I,W)=>{h.set(I[v],W)}),h}),c=T(null),b=T(void 0),a=new Map,R=k(()=>{const{items:h,itemSize:v,keyField:I}=e,W=new kn(h.length,v);return h.forEach((H,V)=>{const A=H[I],j=a.get(A);j!==void 0&&W.add(V,j)}),W}),w=T(0);let m=0;const S=T(0),O=Le(()=>Math.max(R.value.getBound(S.value-nt(e.paddingTop))-1,0)),$=k(()=>{const{value:h}=b;if(h===void 0)return[];const{items:v,itemSize:I}=e,W=O.value,H=Math.min(W+Math.ceil(h/I+1),v.length-1),V=[];for(let A=W;A<=H;++A)V.push(v[A]);return V}),p=(h,v)=>{if(typeof h=="number"){y(h,v,"auto");return}const{left:I,top:W,index:H,key:V,position:A,behavior:j,debounce:i=!0}=h;if(I!==void 0||W!==void 0)y(I,W,j);else if(H!==void 0)C(H,j,i);else if(V!==void 0){const f=d.value.get(V);f!==void 0&&C(f,j,i)}else A==="bottom"?y(0,Number.MAX_SAFE_INTEGER,j):A==="top"&&y(0,0,j)};let F,L=null;function C(h,v,I){const{value:W}=R,H=W.sum(h)+nt(e.paddingTop);if(!I)c.value.scrollTo({left:0,top:H,behavior:v});else{F=h,L!==null&&window.clearTimeout(L),L=window.setTimeout(()=>{F=void 0,L=null},16);const{scrollTop:V,offsetHeight:A}=c.value;if(H>V){const j=W.get(h);H+j<=V+A||c.value.scrollTo({left:0,top:H+j-A,behavior:v})}else c.value.scrollTo({left:0,top:H,behavior:v})}}function y(h,v,I){c.value.scrollTo({left:h,top:v,behavior:I})}function U(h,v){var I,W,H;if(o||e.ignoreItemResize||ee(v.target))return;const{value:V}=R,A=d.value.get(h),j=V.get(A),i=(H=(W=(I=v.borderBoxSize)===null||I===void 0?void 0:I[0])===null||W===void 0?void 0:W.blockSize)!==null&&H!==void 0?H:v.contentRect.height;if(i===j)return;i-e.itemSize===0?a.delete(h):a.set(h,i-e.itemSize);const E=i-j;if(E===0)return;V.add(A,E);const Z=c.value;if(Z!=null){if(F===void 0){const se=V.sum(A);Z.scrollTop>se&&Z.scrollBy(0,E)}else if(A<F)Z.scrollBy(0,E);else if(A===F){const se=V.sum(A);i+se>Z.scrollTop+Z.offsetHeight&&Z.scrollBy(0,E)}ie()}w.value++}const Y=!Pn();let q=!1;function D(h){var v;(v=e.onScroll)===null||v===void 0||v.call(e,h),(!Y||!q)&&ie()}function G(h){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,h),Y){const I=c.value;if(I!=null){if(h.deltaX===0&&(I.scrollTop===0&&h.deltaY<=0||I.scrollTop+I.offsetHeight>=I.scrollHeight&&h.deltaY>=0))return;h.preventDefault(),I.scrollTop+=h.deltaY/vt(),I.scrollLeft+=h.deltaX/vt(),ie(),q=!0,Tn(()=>{q=!1})}}}function J(h){if(o||ee(h.target)||h.contentRect.height===b.value)return;b.value=h.contentRect.height;const{onResize:v}=e;v!==void 0&&v(h)}function ie(){const{value:h}=c;h!=null&&(S.value=h.scrollTop,m=h.scrollLeft)}function ee(h){let v=h;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:b,listStyle:{overflow:"auto"},keyToIndex:d,itemsStyle:k(()=>{const{itemResizable:h}=e,v=Ee(R.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",height:h?"":v,minHeight:h?v:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:k(()=>(w.value,{transform:`translateY(${Ee(R.value.sum(O.value))})`})),viewportItems:$,listElRef:c,itemsElRef:T(null),scrollTo:p,handleListResize:J,handleListScroll:D,handleListWheel:G,handleItemResize:U}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return r(ct,{onResize:this.handleListResize},{default:()=>{var d,c;return r("div",Zt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(b=>{const a=b[n],R=o.get(a),w=this.$slots.default({item:b,index:R})[0];return e?r(ct,{key:a,onResize:m=>this.handleItemResize(a,m)},{default:()=>w}):(w.key=a,w)})})]):(c=(d=this.$slots).empty)===null||c===void 0?void 0:c.call(d)])}})}}),be="v-hidden",_n=De("[v-hidden]",{display:"none!important"}),gt=re({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=T(null),l=T(null);function d(){const{value:b}=o,{getCounter:a,getTail:R}=e;let w;if(a!==void 0?w=a():w=l.value,!b||!w)return;w.hasAttribute(be)&&w.removeAttribute(be);const{children:m}=b,S=b.offsetWidth,O=[],$=n.tail?R==null?void 0:R():null;let p=$?$.offsetWidth:0,F=!1;const L=b.children.length-(n.tail?1:0);for(let y=0;y<L-1;++y){if(y<0)continue;const U=m[y];if(F){U.hasAttribute(be)||U.setAttribute(be,"");continue}else U.hasAttribute(be)&&U.removeAttribute(be);const Y=U.offsetWidth;if(p+=Y,O[y]=Y,p>S){const{updateCounter:q}=e;for(let D=y;D>=0;--D){const G=L-1-D;q!==void 0?q(G):w.textContent=`${G}`;const J=w.offsetWidth;if(p-=O[D],p+J<=S||D===0){F=!0,y=D-1,$&&(y===-1?($.style.maxWidth=`${S-J}px`,$.style.boxSizing="border-box"):$.style.maxWidth="");break}}}}const{onUpdateOverflow:C}=e;F?C!==void 0&&C(!0):(C!==void 0&&C(!1),w.setAttribute(be,""))}const c=mt();return _n.mount({id:"vueuc/overflow",head:!0,anchorMetaName:St,ssr:c}),ke(d),{selfRef:o,counterRef:l,sync:d}},render(){const{$slots:e}=this;return lt(this.sync),r("div",{class:"v-overflow",ref:"selfRef"},[Jt(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Tt(e,n){n&&(ke(()=>{const{value:o}=e;o&&ft.registerHandler(o,n)}),wt(()=>{const{value:o}=e;o&&ft.unregisterHandler(o)}))}const $n=re({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),An=re({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),En=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Nn=_("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[N("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[N("description",`
 margin-top: 8px;
 `)])]),N("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),N("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Ln=Object.assign(Object.assign({},he.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Dn=re({name:"Empty",props:Ln,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=yt(e),l=he("Empty","-empty",Nn,Qt,e,n),{localeRef:d}=Ft("Empty"),c=rt(en,null),b=k(()=>{var m,S,O;return(m=e.description)!==null&&m!==void 0?m:(O=(S=c==null?void 0:c.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||O===void 0?void 0:O.description}),a=k(()=>{var m,S;return((S=(m=c==null?void 0:c.mergedComponentPropsRef.value)===null||m===void 0?void 0:m.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>r(An,null))}),R=k(()=>{const{size:m}=e,{common:{cubicBezierEaseInOut:S},self:{[ue("iconSize",m)]:O,[ue("fontSize",m)]:$,textColor:p,iconColor:F,extraTextColor:L}}=l.value;return{"--n-icon-size":O,"--n-font-size":$,"--n-bezier":S,"--n-text-color":p,"--n-icon-color":F,"--n-extra-text-color":L}}),w=o?He("empty",k(()=>{let m="";const{size:S}=e;return m+=S[0],m}),R,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:k(()=>b.value||d.value.description),cssVars:o?void 0:R,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),r("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${n}-empty__icon`},e.icon?e.icon():r(xt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${n}-empty__extra`},e.extra()):null)}});function Vn(e,n){return r(Ct,{name:"fade-in-scale-up-transition"},{default:()=>e?r(xt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>r($n)}):null})}const bt=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:d,renderLabelRef:c,renderOptionRef:b,labelFieldRef:a,valueFieldRef:R,showCheckmarkRef:w,nodePropsRef:m,handleOptionClick:S,handleOptionMouseEnter:O}=rt(at),$=Le(()=>{const{value:C}=o;return C?e.tmNode.key===C.key:!1});function p(C){const{tmNode:y}=e;y.disabled||S(C,y)}function F(C){const{tmNode:y}=e;y.disabled||O(C,y)}function L(C){const{tmNode:y}=e,{value:U}=$;y.disabled||U||O(C,y)}return{multiple:l,isGrouped:Le(()=>{const{tmNode:C}=e,{parent:y}=C;return y&&y.rawNode.type==="group"}),showCheckmark:w,nodeProps:m,isPending:$,isSelected:Le(()=>{const{value:C}=n,{value:y}=l;if(C===null)return!1;const U=e.tmNode.rawNode[R.value];if(y){const{value:Y}=d;return Y.has(U)}else return C===U}),labelField:a,renderLabel:c,renderOption:b,handleMouseMove:L,handleMouseEnter:F,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:d,showCheckmark:c,nodeProps:b,renderOption:a,renderLabel:R,handleClick:w,handleMouseEnter:m,handleMouseMove:S}=this,O=Vn(o,e),$=R?[R(n,o),c&&O]:[Ce(n[this.labelField],n,o),c&&O],p=b==null?void 0:b(n),F=r("div",Object.assign({},p,{class:[`${e}-base-select-option`,n.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:d,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:c}],style:[(p==null?void 0:p.style)||"",n.style||""],onClick:Qe([w,p==null?void 0:p.onClick]),onMouseenter:Qe([m,p==null?void 0:p.onMouseenter]),onMousemove:Qe([S,p==null?void 0:p.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},$));return n.render?n.render({node:F,option:n,selected:o}):a?a({node:F,option:n,selected:o}):F}}),pt=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=rt(at);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:d}}=this,c=l==null?void 0:l(d),b=n?n(d,!1):Ce(d[this.labelField],d,!1),a=r("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),b);return d.render?d.render({node:a,option:d}):o?o({node:a,option:d,selected:!1}):a}}),Wn=_("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[_("scrollbar",`
 max-height: var(--n-height);
 `),_("virtual-list",`
 max-height: var(--n-height);
 `),_("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[N("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),_("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),_("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),N("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),N("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),N("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),_("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),_("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ne("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ne("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ne("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ne("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),ne("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ne("disabled",`
 cursor: not-allowed;
 `,[ot("selected",`
 color: var(--n-option-text-color-disabled);
 `),ne("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),N("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Rt({enterScale:"0.5"})])])]),Hn=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=he("InternalSelectMenu","-internal-select-menu",Wn,tn,e,Q(e,"clsPrefix")),o=T(null),l=T(null),d=T(null),c=k(()=>e.treeMate.getFlattenedNodes()),b=k(()=>pn(c.value)),a=T(null);function R(){const{treeMate:i}=e;let f=null;const{value:E}=e;E===null?f=i.getFirstAvailableNode():(e.multiple?f=i.getNode((E||[])[(E||[]).length-1]):f=i.getNode(E),(!f||f.disabled)&&(f=i.getFirstAvailableNode())),h(f||null)}function w(){const{value:i}=a;i&&!e.treeMate.getNode(i.key)&&(a.value=null)}let m;Se(()=>e.show,i=>{i?m=Se(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?R():w(),lt(v)):w()},{immediate:!0}):m==null||m()},{immediate:!0}),wt(()=>{m==null||m()});const S=k(()=>nt(n.value.self[ue("optionHeight",e.size)])),O=k(()=>Ze(n.value.self[ue("padding",e.size)])),$=k(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=k(()=>{const i=c.value;return i&&i.length===0});function F(i){const{onToggle:f}=e;f&&f(i)}function L(i){const{onScroll:f}=e;f&&f(i)}function C(i){var f;(f=d.value)===null||f===void 0||f.sync(),L(i)}function y(){var i;(i=d.value)===null||i===void 0||i.sync()}function U(){const{value:i}=a;return i||null}function Y(i,f){f.disabled||h(f,!1)}function q(i,f){f.disabled||F(f)}function D(i){var f;Ve(i,"action")||(f=e.onKeyup)===null||f===void 0||f.call(e,i)}function G(i){var f;Ve(i,"action")||(f=e.onKeydown)===null||f===void 0||f.call(e,i)}function J(i){var f;(f=e.onMousedown)===null||f===void 0||f.call(e,i),!e.focusable&&i.preventDefault()}function ie(){const{value:i}=a;i&&h(i.getNext({loop:!0}),!0)}function ee(){const{value:i}=a;i&&h(i.getPrev({loop:!0}),!0)}function h(i,f=!1){a.value=i,f&&v()}function v(){var i,f;const E=a.value;if(!E)return;const Z=b.value(E.key);Z!==null&&(e.virtualScroll?(i=l.value)===null||i===void 0||i.scrollTo({index:Z}):(f=d.value)===null||f===void 0||f.scrollTo({index:Z,elSize:S.value}))}function I(i){var f,E;!((f=o.value)===null||f===void 0)&&f.contains(i.target)&&((E=e.onFocus)===null||E===void 0||E.call(e,i))}function W(i){var f,E;!((f=o.value)===null||f===void 0)&&f.contains(i.relatedTarget)||(E=e.onBlur)===null||E===void 0||E.call(e,i)}st(at,{handleOptionMouseEnter:Y,handleOptionClick:q,valueSetRef:$,pendingTmNodeRef:a,nodePropsRef:Q(e,"nodeProps"),showCheckmarkRef:Q(e,"showCheckmark"),multipleRef:Q(e,"multiple"),valueRef:Q(e,"value"),renderLabelRef:Q(e,"renderLabel"),renderOptionRef:Q(e,"renderOption"),labelFieldRef:Q(e,"labelField"),valueFieldRef:Q(e,"valueField")}),st(fn,o),ke(()=>{const{value:i}=d;i&&i.sync()});const H=k(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:f},self:{height:E,borderRadius:Z,color:se,groupHeaderTextColor:Re,actionDividerColor:Fe,optionTextColorPressed:pe,optionTextColor:me,optionTextColorDisabled:de,optionTextColorActive:te,optionOpacityDisabled:we,optionCheckColor:ce,actionTextColor:Te,optionColorPending:ve,optionColorActive:ge,loadingColor:Oe,loadingSize:ze,optionColorActivePending:Me,[ue("optionFontSize",i)]:ye,[ue("optionHeight",i)]:xe,[ue("optionPadding",i)]:oe}}=n.value;return{"--n-height":E,"--n-action-divider-color":Fe,"--n-action-text-color":Te,"--n-bezier":f,"--n-border-radius":Z,"--n-color":se,"--n-option-font-size":ye,"--n-group-header-text-color":Re,"--n-option-check-color":ce,"--n-option-color-pending":ve,"--n-option-color-active":ge,"--n-option-color-active-pending":Me,"--n-option-height":xe,"--n-option-opacity-disabled":we,"--n-option-text-color":me,"--n-option-text-color-active":te,"--n-option-text-color-disabled":de,"--n-option-text-color-pressed":pe,"--n-option-padding":oe,"--n-option-padding-left":Ze(oe,"left"),"--n-option-padding-right":Ze(oe,"right"),"--n-loading-color":Oe,"--n-loading-size":ze}}),{inlineThemeDisabled:V}=e,A=V?He("internal-select-menu",k(()=>e.size[0]),H,e):void 0,j={selfRef:o,next:ie,prev:ee,getPendingTmNode:U};return Tt(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:l,scrollbarRef:d,itemSize:S,padding:O,flattenedNodes:c,empty:p,virtualListContainer(){const{value:i}=l;return i==null?void 0:i.listElRef},virtualListContent(){const{value:i}=l;return i==null?void 0:i.itemsElRef},doScroll:L,handleFocusin:I,handleFocusout:W,handleKeyUp:D,handleKeyDown:G,handleMouseDown:J,handleVirtualListResize:y,handleVirtualListScroll:C,cssVars:V?void 0:H,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},j)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:d,onRender:c}=this;return c==null||c(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,d,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?r("div",{class:`${o}-base-select-menu__loading`},r(nn,{clsPrefix:o,strokeWidth:20})):this.empty?r("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Fn(e.empty,()=>[r(Dn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])):r(wn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?r(Bn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:b})=>b.isGroup?r(pt,{key:b.key,clsPrefix:o,tmNode:b}):b.ignored?null:r(bt,{clsPrefix:o,key:b.key,tmNode:b})}):r("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(b=>b.isGroup?r(pt,{key:b.key,clsPrefix:o,tmNode:b}):r(bt,{clsPrefix:o,key:b.key,tmNode:b})))}),Rn(e.action,b=>b&&[r("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},b),r(En,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),jn=le([_("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[_("base-loading",`
 color: var(--n-loading-color);
 `),_("base-selection-tags","min-height: var(--n-height);"),N("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),N("state-border",`
 z-index: 1;
 border-color: #0000;
 `),_("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[N("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),_("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[N("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),_("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[N("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),_("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),_("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[_("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[N("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),N("render-label",`
 color: var(--n-text-color);
 `)]),ot("disabled",[le("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ne("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ne("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),_("base-selection-label","background-color: var(--n-color-active);"),_("base-selection-tags","background-color: var(--n-color-active);")])]),ne("disabled","cursor: not-allowed;",[N("arrow",`
 color: var(--n-arrow-color-disabled);
 `),_("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[_("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),N("render-label",`
 color: var(--n-text-color-disabled);
 `)]),_("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),_("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),_("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[N("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),N("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ne(`${e}-status`,[N("state-border",`border: var(--n-border-${e});`),ot("disabled",[le("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ne("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),_("base-selection-label",`background-color: var(--n-color-active-${e});`),_("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ne("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),_("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),_("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),_("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[N("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Kn=re({name:"InternalSelection",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=T(null),o=T(null),l=T(null),d=T(null),c=T(null),b=T(null),a=T(null),R=T(null),w=T(null),m=T(null),S=T(!1),O=T(!1),$=T(!1),p=he("InternalSelection","-internal-selection",jn,on,e,Q(e,"clsPrefix")),F=k(()=>e.clearable&&!e.disabled&&($.value||e.active)),L=k(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ce(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),C=k(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),y=k(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function U(){var s;const{value:g}=n;if(g){const{value:K}=o;K&&(K.style.width=`${g.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=w.value)===null||s===void 0||s.sync()))}}function Y(){const{value:s}=m;s&&(s.style.display="none")}function q(){const{value:s}=m;s&&(s.style.display="inline-block")}Se(Q(e,"active"),s=>{s||Y()}),Se(Q(e,"pattern"),()=>{e.multiple&&lt(U)});function D(s){const{onFocus:g}=e;g&&g(s)}function G(s){const{onBlur:g}=e;g&&g(s)}function J(s){const{onDeleteOption:g}=e;g&&g(s)}function ie(s){const{onClear:g}=e;g&&g(s)}function ee(s){const{onPatternInput:g}=e;g&&g(s)}function h(s){var g;(!s.relatedTarget||!(!((g=l.value)===null||g===void 0)&&g.contains(s.relatedTarget)))&&D(s)}function v(s){var g;!((g=l.value)===null||g===void 0)&&g.contains(s.relatedTarget)||G(s)}function I(s){ie(s)}function W(){$.value=!0}function H(){$.value=!1}function V(s){!e.active||!e.filterable||s.target!==o.value&&s.preventDefault()}function A(s){J(s)}function j(s){if(s.key==="Backspace"&&!i.value&&!e.pattern.length){const{selectedOptions:g}=e;g!=null&&g.length&&A(g[g.length-1])}}const i=T(!1);let f=null;function E(s){const{value:g}=n;if(g){const K=s.target.value;g.textContent=K,U()}e.ignoreComposition&&i.value?f=s:ee(s)}function Z(){i.value=!0}function se(){i.value=!1,e.ignoreComposition&&ee(f),f=null}function Re(s){var g;O.value=!0,(g=e.onPatternFocus)===null||g===void 0||g.call(e,s)}function Fe(s){var g;O.value=!1,(g=e.onPatternBlur)===null||g===void 0||g.call(e,s)}function pe(){var s,g;if(e.filterable)O.value=!1,(s=b.value)===null||s===void 0||s.blur(),(g=o.value)===null||g===void 0||g.blur();else if(e.multiple){const{value:K}=d;K==null||K.blur()}else{const{value:K}=c;K==null||K.blur()}}function me(){var s,g,K;e.filterable?(O.value=!1,(s=b.value)===null||s===void 0||s.focus()):e.multiple?(g=d.value)===null||g===void 0||g.focus():(K=c.value)===null||K===void 0||K.focus()}function de(){const{value:s}=o;s&&(q(),s.focus())}function te(){const{value:s}=o;s&&s.blur()}function we(s){const{value:g}=a;g&&g.setTextContent(`+${s}`)}function ce(){const{value:s}=R;return s}function Te(){return o.value}let ve=null;function ge(){ve!==null&&window.clearTimeout(ve)}function Oe(){e.disabled||e.active||(ge(),ve=window.setTimeout(()=>{y.value&&(S.value=!0)},100))}function ze(){ge()}function Me(s){s||(ge(),S.value=!1)}Se(y,s=>{s||(S.value=!1)}),ke(()=>{ln(()=>{const s=b.value;s&&(s.tabIndex=e.disabled||O.value?-1:0)})}),Tt(l,e.onResize);const{inlineThemeDisabled:ye}=e,xe=k(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:g},self:{borderRadius:K,color:Pe,placeholderColor:je,textColor:Ke,paddingSingle:Ue,paddingMultiple:qe,caretColor:Ie,colorDisabled:Be,textColorDisabled:_e,placeholderColorDisabled:Ge,colorActive:Ye,boxShadowFocus:$e,boxShadowActive:fe,boxShadowHover:t,border:u,borderFocus:x,borderHover:B,borderActive:z,arrowColor:P,arrowColorDisabled:M,loadingColor:X,colorActiveWarning:Ae,boxShadowFocusWarning:Xe,boxShadowActiveWarning:zt,boxShadowHoverWarning:Mt,borderWarning:kt,borderFocusWarning:Pt,borderHoverWarning:It,borderActiveWarning:Bt,colorActiveError:_t,boxShadowFocusError:$t,boxShadowActiveError:At,boxShadowHoverError:Et,borderError:Nt,borderFocusError:Lt,borderHoverError:Dt,borderActiveError:Vt,clearColor:Wt,clearColorHover:Ht,clearColorPressed:jt,clearSize:Kt,arrowSize:Ut,[ue("height",s)]:qt,[ue("fontSize",s)]:Gt}}=p.value;return{"--n-bezier":g,"--n-border":u,"--n-border-active":z,"--n-border-focus":x,"--n-border-hover":B,"--n-border-radius":K,"--n-box-shadow-active":fe,"--n-box-shadow-focus":$e,"--n-box-shadow-hover":t,"--n-caret-color":Ie,"--n-color":Pe,"--n-color-active":Ye,"--n-color-disabled":Be,"--n-font-size":Gt,"--n-height":qt,"--n-padding-single":Ue,"--n-padding-multiple":qe,"--n-placeholder-color":je,"--n-placeholder-color-disabled":Ge,"--n-text-color":Ke,"--n-text-color-disabled":_e,"--n-arrow-color":P,"--n-arrow-color-disabled":M,"--n-loading-color":X,"--n-color-active-warning":Ae,"--n-box-shadow-focus-warning":Xe,"--n-box-shadow-active-warning":zt,"--n-box-shadow-hover-warning":Mt,"--n-border-warning":kt,"--n-border-focus-warning":Pt,"--n-border-hover-warning":It,"--n-border-active-warning":Bt,"--n-color-active-error":_t,"--n-box-shadow-focus-error":$t,"--n-box-shadow-active-error":At,"--n-box-shadow-hover-error":Et,"--n-border-error":Nt,"--n-border-focus-error":Lt,"--n-border-hover-error":Dt,"--n-border-active-error":Vt,"--n-clear-size":Kt,"--n-clear-color":Wt,"--n-clear-color-hover":Ht,"--n-clear-color-pressed":jt,"--n-arrow-size":Ut}}),oe=ye?He("internal-selection",k(()=>e.size[0]),xe,e):void 0;return{mergedTheme:p,mergedClearable:F,patternInputFocused:O,filterablePlaceholder:L,label:C,selected:y,showTagsPanel:S,isComposing:i,counterRef:a,counterWrapperRef:R,patternInputMirrorRef:n,patternInputRef:o,selfRef:l,multipleElRef:d,singleElRef:c,patternInputWrapperRef:b,overflowRef:w,inputTagElRef:m,handleMouseDown:V,handleFocusin:h,handleClear:I,handleMouseEnter:W,handleMouseLeave:H,handleDeleteOption:A,handlePatternKeyDown:j,handlePatternInputInput:E,handlePatternInputBlur:Fe,handlePatternInputFocus:Re,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:ze,handleFocusout:v,handleCompositionEnd:se,handleCompositionStart:Z,onPopoverUpdateShow:Me,focus:me,focusInput:de,blur:pe,blurInput:te,updateCounter:we,getCounter:ce,getTail:Te,renderLabel:e.renderLabel,cssVars:ye?void 0:xe,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:d,maxTagCount:c,bordered:b,clsPrefix:a,onRender:R,renderTag:w,renderLabel:m}=this;R==null||R();const S=c==="responsive",O=typeof c=="number",$=S||O,p=r(yn,null,{default:()=>r(Sn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var L,C;return(C=(L=this.$slots).arrow)===null||C===void 0?void 0:C.call(L)}})});let F;if(n){const{labelField:L}=this,C=v=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:v.value},w?w({option:v,handleClose:()=>this.handleDeleteOption(v)}):r(Je,{size:o,closable:!v.disabled,disabled:l,onClose:()=>this.handleDeleteOption(v),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m(v,!0):Ce(v[L],v,!0)})),y=()=>(O?this.selectedOptions.slice(0,c):this.selectedOptions).map(C),U=d?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,Y=S?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let q;if(O){const v=this.selectedOptions.length-c;v>0&&(q=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${v}`})))}const D=S?d?r(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:Y,tail:()=>U}):r(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:Y}):O?y().concat(q):y(),G=$?()=>r("div",{class:`${a}-base-selection-popover`},S?y():this.selectedOptions.map(C)):void 0,J=$?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,ee=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,h=d?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},D,S?null:U,p):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},D,p);F=r(rn,null,$?r(hn,Object.assign({},J,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>h,default:G}):h,ee)}else if(d){const L=this.pattern||this.isComposing,C=this.active?!L:!this.selected,y=this.active?!1:this.selected;F=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},w?w({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):null,C?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else F=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:On(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},w?w({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),p);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},F,b?r("div",{class:`${a}-base-selection__border`}):null,b?r("div",{class:`${a}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function Ot(e){return e.type==="ignored"}function tt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Un(e,n){return{getIsGroup:We,getIgnored:Ot,getKey(l){return We(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function qn(e,n,o,l){if(!n)return e;function d(c){if(!Array.isArray(c))return[];const b=[];for(const a of c)if(We(a)){const R=d(a[l]);R.length&&b.push(Object.assign({},a,{[l]:R}))}else{if(Ot(a))continue;n(o,a)&&b.push(a)}return b}return d(e)}function Gn(e,n,o){const l=new Map;return e.forEach(d=>{We(d)?d[o].forEach(c=>{l.set(c[n],c)}):l.set(d[n],d)}),l}const Yn=le([_("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),_("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Rt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Xn=Object.assign(Object.assign({},he.props),{to:it.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ao=re({name:"Select",props:Xn,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:d}=yt(e),c=he("Select","-select",Yn,cn,e,n),b=T(e.defaultValue),a=Q(e,"value"),R=ut(a,b),w=T(!1),m=T(""),S=k(()=>{const{valueField:t,childrenField:u}=e,x=Un(t,u);return mn(v.value,x)}),O=k(()=>Gn(ee.value,e.valueField,e.childrenField)),$=T(!1),p=ut(Q(e,"show"),$),F=T(null),L=T(null),C=T(null),{localeRef:y}=Ft("Select"),U=k(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:y.value.placeholder}),Y=an(e,["items","options"]),q=[],D=T([]),G=T([]),J=T(new Map),ie=k(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:x}=e;return B=>({[u]:String(B),[x]:B})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),ee=k(()=>G.value.concat(D.value).concat(Y.value)),h=k(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:x}=e;return(B,z)=>{if(!z)return!1;const P=z[u];if(typeof P=="string")return tt(B,P);const M=z[x];return typeof M=="string"?tt(B,M):typeof M=="number"?tt(B,String(M)):!1}}),v=k(()=>{if(e.remote)return Y.value;{const{value:t}=ee,{value:u}=m;return!u.length||!e.filterable?t:qn(t,h.value,u,e.childrenField)}});function I(t){const u=e.remote,{value:x}=J,{value:B}=O,{value:z}=ie,P=[];return t.forEach(M=>{if(B.has(M))P.push(B.get(M));else if(u&&x.has(M))P.push(x.get(M));else if(z){const X=z(M);X&&P.push(X)}}),P}const W=k(()=>{if(e.multiple){const{value:t}=R;return Array.isArray(t)?I(t):[]}return null}),H=k(()=>{const{value:t}=R;return!e.multiple&&!Array.isArray(t)?t===null?null:I([t])[0]||null:null}),V=Cn(e),{mergedSizeRef:A,mergedDisabledRef:j,mergedStatusRef:i}=V;function f(t,u){const{onChange:x,"onUpdate:value":B,onUpdateValue:z}=e,{nTriggerFormChange:P,nTriggerFormInput:M}=V;x&&ae(x,t,u),z&&ae(z,t,u),B&&ae(B,t,u),b.value=t,P(),M()}function E(t){const{onBlur:u}=e,{nTriggerFormBlur:x}=V;u&&ae(u,t),x()}function Z(){const{onClear:t}=e;t&&ae(t)}function se(t){const{onFocus:u,showOnFocus:x}=e,{nTriggerFormFocus:B}=V;u&&ae(u,t),B(),x&&de()}function Re(t){const{onSearch:u}=e;u&&ae(u,t)}function Fe(t){const{onScroll:u}=e;u&&ae(u,t)}function pe(){var t;const{remote:u,multiple:x}=e;if(u){const{value:B}=J;if(x){const{valueField:z}=e;(t=W.value)===null||t===void 0||t.forEach(P=>{B.set(P[z],P)})}else{const z=H.value;z&&B.set(z[e.valueField],z)}}}function me(t){const{onUpdateShow:u,"onUpdate:show":x}=e;u&&ae(u,t),x&&ae(x,t),$.value=t}function de(){j.value||(me(!0),$.value=!0,e.filterable&&_e())}function te(){me(!1)}function we(){m.value="",G.value=q}const ce=T(!1);function Te(){e.filterable&&(ce.value=!0)}function ve(){e.filterable&&(ce.value=!1,p.value||we())}function ge(){j.value||(p.value?e.filterable?_e():te():de())}function Oe(t){var u,x;!((x=(u=C.value)===null||u===void 0?void 0:u.selfRef)===null||x===void 0)&&x.contains(t.relatedTarget)||(w.value=!1,E(t),te())}function ze(t){se(t),w.value=!0}function Me(t){w.value=!0}function ye(t){var u;!((u=F.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(w.value=!1,E(t),te())}function xe(){var t;(t=F.value)===null||t===void 0||t.focus(),te()}function oe(t){var u;p.value&&(!((u=F.value)===null||u===void 0)&&u.$el.contains(xn(t))||te())}function s(t){if(!Array.isArray(t))return[];if(ie.value)return Array.from(t);{const{remote:u}=e,{value:x}=O;if(u){const{value:B}=J;return t.filter(z=>x.has(z)||B.has(z))}else return t.filter(B=>x.has(B))}}function g(t){K(t.rawNode)}function K(t){if(j.value)return;const{tag:u,remote:x,clearFilterAfterSelect:B,valueField:z}=e;if(u&&!x){const{value:P}=G,M=P[0]||null;if(M){const X=D.value;X.length?X.push(M):D.value=[M],G.value=q}}if(x&&J.value.set(t[z],t),e.multiple){const P=s(R.value),M=P.findIndex(X=>X===t[z]);if(~M){if(P.splice(M,1),u&&!x){const X=Pe(t[z]);~X&&(D.value.splice(X,1),B&&(m.value=""))}}else P.push(t[z]),B&&(m.value="");f(P,I(P))}else{if(u&&!x){const P=Pe(t[z]);~P?D.value=[D.value[P]]:D.value=q}Be(),te(),f(t[z],t)}}function Pe(t){return D.value.findIndex(x=>x[e.valueField]===t)}function je(t){p.value||de();const{value:u}=t.target;m.value=u;const{tag:x,remote:B}=e;if(Re(u),x&&!B){if(!u){G.value=q;return}const{onCreate:z}=e,P=z?z(u):{[e.labelField]:u,[e.valueField]:u},{valueField:M}=e;Y.value.some(X=>X[M]===P[M])||D.value.some(X=>X[M]===P[M])?G.value=q:G.value=[P]}}function Ke(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&te(),Z(),u?f([],[]):f(null,null)}function Ue(t){!Ve(t,"action")&&!Ve(t,"empty")&&t.preventDefault()}function qe(t){Fe(t)}function Ie(t){var u,x,B,z,P;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=F.value)===null||u===void 0)&&u.isComposing)){if(p.value){const M=(x=C.value)===null||x===void 0?void 0:x.getPendingTmNode();M?g(M):e.filterable||(te(),Be())}else if(de(),e.tag&&ce.value){const M=G.value[0];if(M){const X=M[e.valueField],{value:Ae}=R;e.multiple&&Array.isArray(Ae)&&Ae.some(Xe=>Xe===X)||K(M)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;p.value&&((B=C.value)===null||B===void 0||B.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;p.value?(z=C.value)===null||z===void 0||z.next():de();break;case"Escape":p.value&&(Mn(t),te()),(P=F.value)===null||P===void 0||P.focus();break}}function Be(){var t;(t=F.value)===null||t===void 0||t.focus()}function _e(){var t;(t=F.value)===null||t===void 0||t.focusInput()}function Ge(){var t;p.value&&((t=L.value)===null||t===void 0||t.syncPosition())}pe(),Se(Q(e,"options"),pe);const Ye={focus:()=>{var t;(t=F.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=F.value)===null||t===void 0||t.blur()}},$e=k(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),fe=d?He("select",void 0,$e,e):void 0;return Object.assign(Object.assign({},Ye),{mergedStatus:i,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:S,isMounted:sn(),triggerRef:F,menuRef:C,pattern:m,uncontrolledShow:$,mergedShow:p,adjustedTo:it(e),uncontrolledValue:b,mergedValue:R,followerRef:L,localizedPlaceholder:U,selectedOption:H,selectedOptions:W,mergedSize:A,mergedDisabled:j,focused:w,activeWithoutMenuOpen:ce,inlineThemeDisabled:d,onTriggerInputFocus:Te,onTriggerInputBlur:ve,handleTriggerOrMenuResize:Ge,handleMenuFocus:Me,handleMenuBlur:ye,handleMenuTabOut:xe,handleTriggerClick:ge,handleToggle:g,handleDeleteOption:K,handlePatternInput:je,handleClear:Ke,handleTriggerBlur:Oe,handleTriggerFocus:ze,handleKeydown:Ie,handleMenuAfterLeave:we,handleMenuClickOutside:oe,handleMenuScroll:qe,handleMenuKeydown:Ie,handleMenuMousedown:Ue,mergedTheme:c,cssVars:d?void 0:$e,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(vn,null,{default:()=>[r(gn,null,{default:()=>r(Kn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),r(bn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===it.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),dn(r(Hn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,d;return[(d=(l=this.$slots).empty)===null||d===void 0?void 0:d.call(l)]},action:()=>{var l,d;return[(d=(l=this.$slots).action)===null||d===void 0?void 0:d.call(l)]}}),this.displayDirective==="show"?[[un,this.mergedShow],[dt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[dt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{ao as N};
