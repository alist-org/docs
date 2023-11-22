import{m as i,k as pe,J as u,K as r,M as p,O as f,a5 as ge,P as _e,Q as Ce,d as V,h as $,q as we,a6 as ye,l as ze,y as Re,ak as Se,s as Ne,R as L,S as De,g as K,T as F,W as $e,ao as Be,X as Te,ac as Me,aD as Ie,bi as Pe,Y as I,o as D,F as j,w as R,a as g,e as P,u as v,c as A,H as Ve,au as q,N as E,b5 as Ue,b6 as Ke,b as G,_ as W,r as Fe}from"./app-c47dc280.js";import{N as H}from"./Input-6994ea07.js";import{N as O}from"./Button-d8a3e347.js";import"./browser-8dd58791.js";const je=i("svg",{viewBox:"0 0 64 64",class:"check-icon"},i("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),qe=i("svg",{viewBox:"0 0 100 100",class:"line-icon"},i("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Ee=pe("n-checkbox-group"),He=u([r("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[p("show-label","line-height: var(--n-label-line-height);"),u("&:hover",[r("checkbox-box",[f("border","border: var(--n-border-checked);")])]),u("&:focus:not(:active)",[r("checkbox-box",[f("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),p("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),p("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[u(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),p("indeterminate",[r("checkbox-box",[r("checkbox-icon",[u(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),u(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),p("checked, indeterminate",[u("&:focus:not(:active)",[r("checkbox-box",[f("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[f("border",{border:"var(--n-border-checked)"})])]),p("disabled",{cursor:"not-allowed"},[p("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[f("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[f("border",`
 border: var(--n-border-disabled);
 `),r("checkbox-icon",[u(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),f("label",`
 color: var(--n-text-color-disabled);
 `)]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[f("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[u(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ge({left:"1px",top:"1px"})])]),f("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[u("&:empty",{display:"none"})])]),_e(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Ce(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Oe=Object.assign(Object.assign({},L.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Le=V({name:"Checkbox",props:Oe,setup(o){const c=$(null),{mergedClsPrefixRef:s,inlineThemeDisabled:k,mergedRtlRef:_}=we(o),n=ye(o,{mergedSize(e){const{size:h}=o;if(h!==void 0)return h;if(l){const{value:t}=l.mergedSizeRef;if(t!==void 0)return t}if(e){const{mergedSize:t}=e;if(t!==void 0)return t.value}return"medium"},mergedDisabled(e){const{disabled:h}=o;if(h!==void 0)return h;if(l){if(l.disabledRef.value)return!0;const{maxRef:{value:t},checkedCountRef:m}=l;if(t!==void 0&&m.value>=t&&!x.value)return!0;const{minRef:{value:y}}=l;if(y!==void 0&&m.value<=y&&x.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:d,mergedSizeRef:b}=n,l=ze(Ee,null),a=$(o.defaultChecked),B=Re(o,"checked"),T=Se(B,a),x=Ne(()=>{if(l){const e=l.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return T.value===o.checkedValue}),N=L("Checkbox","-checkbox",He,Pe,o,s);function S(e){if(l&&o.value!==void 0)l.toggleCheckbox(!x.value,o.value);else{const{onChange:h,"onUpdate:checked":t,onUpdateChecked:m}=o,{nTriggerFormInput:y,nTriggerFormChange:M}=n,z=x.value?o.uncheckedValue:o.checkedValue;t&&I(t,z,e),m&&I(m,z,e),h&&I(h,z,e),y(),M(),a.value=z}}function C(e){d.value||S(e)}function J(e){if(!d.value)switch(e.key){case" ":case"Enter":S(e)}}function Q(e){switch(e.key){case" ":e.preventDefault()}}const X={focus:()=>{var e;(e=c.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=c.value)===null||e===void 0||e.blur()}},Z=De("Checkbox",_,s),U=K(()=>{const{value:e}=b,{common:{cubicBezierEaseInOut:h},self:{borderRadius:t,color:m,colorChecked:y,colorDisabled:M,colorTableHeader:z,colorTableHeaderModal:ee,colorTableHeaderPopover:oe,checkMarkColor:re,checkMarkColorDisabled:ae,border:ce,borderFocus:ne,borderDisabled:le,borderChecked:te,boxShadowFocus:se,textColor:de,textColorDisabled:ie,checkMarkColorDisabledChecked:be,colorDisabledChecked:ue,borderDisabledChecked:he,labelPadding:ke,labelLineHeight:fe,labelFontWeight:ve,[F("fontSize",e)]:xe,[F("size",e)]:me}}=N.value;return{"--n-label-line-height":fe,"--n-label-font-weight":ve,"--n-size":me,"--n-bezier":h,"--n-border-radius":t,"--n-border":ce,"--n-border-checked":te,"--n-border-focus":ne,"--n-border-disabled":le,"--n-border-disabled-checked":he,"--n-box-shadow-focus":se,"--n-color":m,"--n-color-checked":y,"--n-color-table":z,"--n-color-table-modal":ee,"--n-color-table-popover":oe,"--n-color-disabled":M,"--n-color-disabled-checked":ue,"--n-text-color":de,"--n-text-color-disabled":ie,"--n-check-mark-color":re,"--n-check-mark-color-disabled":ae,"--n-check-mark-color-disabled-checked":be,"--n-font-size":xe,"--n-label-padding":ke}}),w=k?$e("checkbox",K(()=>b.value[0]),U,o):void 0;return Object.assign(n,X,{rtlEnabled:Z,selfRef:c,mergedClsPrefix:s,mergedDisabled:d,renderedChecked:x,mergedTheme:N,labelId:Be(),handleClick:C,handleKeyUp:J,handleKeyDown:Q,cssVars:k?void 0:U,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender})},render(){var o;const{$slots:c,renderedChecked:s,mergedDisabled:k,indeterminate:_,privateInsideTable:n,cssVars:d,labelId:b,label:l,mergedClsPrefix:a,focusable:B,handleKeyUp:T,handleKeyDown:x,handleClick:N}=this;(o=this.onRender)===null||o===void 0||o.call(this);const S=Te(c.default,C=>l||C?i("span",{class:`${a}-checkbox__label`,id:b},l||C):null);return i("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,s&&`${a}-checkbox--checked`,k&&`${a}-checkbox--disabled`,_&&`${a}-checkbox--indeterminate`,n&&`${a}-checkbox--inside-table`,S&&`${a}-checkbox--show-label`],tabindex:k||!B?void 0:0,role:"checkbox","aria-checked":_?"mixed":s,"aria-labelledby":b,style:d,onKeyup:T,onKeydown:x,onClick:N,onMousedown:()=>{Ie("selectstart",window,C=>{C.preventDefault()},{once:!0})}},i("div",{class:`${a}-checkbox-box-wrapper`}," ",i("div",{class:`${a}-checkbox-box`},i(Me,null,{default:()=>this.indeterminate?i("div",{key:"indeterminate",class:`${a}-checkbox-icon`},qe):i("div",{key:"check",class:`${a}-checkbox-icon`},je)}),i("div",{class:`${a}-checkbox-box__border`}))),S)}}),Y=o=>(Ue("data-v-76bcf538"),o=o(),Ke(),o),Ae=Y(()=>G("h4",null,"client_id",-1)),Ge=Y(()=>G("h4",null,"client_secret",-1)),We=V({__name:"Request",setup(o){const c=$({id:"76lrwrklhdn1icb",secret:""}),s=$(!1),k=()=>{window.open("https://dropbox.com/developers/apps","_blank")},_=()=>{const n=new URL("https://www.dropbox.com/oauth2/authorize");n.searchParams.set("client_id",c.value.id),n.searchParams.set("response_type","code"),n.searchParams.set("redirect_uri",`${location.origin}/tool/dropbox/callback`),n.searchParams.set("token_access_type","offline"),n.searchParams.set("state",window.btoa(`${c.value.id}::${c.value.secret}`)),window.open(n.toString(),"_self")};return(n,d)=>(D(),j(v(E),{vertical:"",size:"large"},{default:R(()=>[g(v(Le),{checked:s.value,"onUpdate:checked":d[0]||(d[0]=b=>s.value=b),size:"large"},{default:R(()=>[P("Use my own client")]),_:1},8,["checked"]),s.value?(D(),A(Ve,{key:0},[Ae,g(v(H),{size:"large",value:c.value.id,"onUpdate:value":d[1]||(d[1]=b=>c.value.id=b)},null,8,["value"]),Ge,g(v(H),{size:"large",value:c.value.secret,"onUpdate:value":d[2]||(d[2]=b=>c.value.secret=b),placeholder:"keep it empty if you don't have one"},null,8,["value"])],64)):q("v-if",!0),g(v(E),{justify:"center"},{default:R(()=>[s.value?(D(),j(v(O),{key:0,size:"large",secondary:"",onClick:k},{default:R(()=>[P("Create client")]),_:1})):q("v-if",!0),g(v(O),{size:"large",type:"info",onClick:_},{default:R(()=>[P("Get Refresh Token")]),_:1})]),_:1})]),_:1}))}});const Ye=W(We,[["__scopeId","data-v-76bcf538"],["__file","Request.vue"]]),Je=V({__name:"request.html",setup(o){return(c,s)=>{const k=Fe("NaiveClient");return D(),A("div",null,[g(k,null,{default:R(()=>[g(v(Ye))]),_:1})])}}}),oo=W(Je,[["__file","request.html.vue"]]);export{oo as default};
