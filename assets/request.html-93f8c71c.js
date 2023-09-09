import{m as s,k as pe,J as u,K as r,O as k,M as y,a5 as ge,P as _e,Q as Ce,d as P,h as N,q as we,a6 as ye,l as ze,y as Re,ak as Se,s as De,R as O,S as Ne,g as U,T as K,W as Be,ao as Te,ac as $e,aD as Me,bi as Ie,Y as M,o as D,F,w as z,a as p,e as I,u as v,c as L,H as Pe,au as j,N as q,b5 as Ve,b6 as Ue,b as A,_ as G,r as Ke}from"./app-07d797d5.js";import{N as E}from"./Input-b8574501.js";import{N as H}from"./Button-ec1e5790.js";import"./browser-d546ed1c.js";const Fe=s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),je=s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),qe=pe("n-checkbox-group"),Ee=u([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[u("&:hover",[r("checkbox-box",[k("border",{border:"var(--n-border-checked)"})])]),u("&:focus:not(:active)",[r("checkbox-box",[k("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),y("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),y("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[u(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),y("indeterminate",[r("checkbox-box",[r("checkbox-icon",[u(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),u(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),y("checked, indeterminate",[u("&:focus:not(:active)",[r("checkbox-box",[k("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[k("border",{border:"var(--n-border-checked)"})])]),y("disabled",{cursor:"not-allowed"},[y("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[k("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[k("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),k("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
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
 `,[k("border",`
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
 `),ge({left:"1px",top:"1px"})])]),k("label",`
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
 `))]),He=Object.assign(Object.assign({},O.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Oe=P({name:"Checkbox",props:He,setup(o){const a=N(null),{mergedClsPrefixRef:d,inlineThemeDisabled:f,mergedRtlRef:g}=we(o),n=ye(o,{mergedSize(e){const{size:h}=o;if(h!==void 0)return h;if(l){const{value:t}=l.mergedSizeRef;if(t!==void 0)return t}if(e){const{mergedSize:t}=e;if(t!==void 0)return t.value}return"medium"},mergedDisabled(e){const{disabled:h}=o;if(h!==void 0)return h;if(l){if(l.disabledRef.value)return!0;const{maxRef:{value:t},checkedCountRef:m}=l;if(t!==void 0&&m.value>=t&&!x.value)return!0;const{minRef:{value:C}}=l;if(C!==void 0&&m.value<=C&&x.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:i,mergedSizeRef:b}=n,l=ze(qe,null),c=N(o.defaultChecked),B=Re(o,"checked"),T=Se(B,c),x=De(()=>{if(l){const e=l.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return T.value===o.checkedValue}),R=O("Checkbox","-checkbox",Ee,Ie,o,d);function S(e){if(l&&o.value!==void 0)l.toggleCheckbox(!x.value,o.value);else{const{onChange:h,"onUpdate:checked":t,onUpdateChecked:m}=o,{nTriggerFormInput:C,nTriggerFormChange:$}=n,w=x.value?o.uncheckedValue:o.checkedValue;t&&M(t,w,e),m&&M(m,w,e),h&&M(h,w,e),C(),$(),c.value=w}}function Y(e){i.value||S(e)}function J(e){if(!i.value)switch(e.key){case" ":case"Enter":S(e)}}function Q(e){switch(e.key){case" ":e.preventDefault()}}const X={focus:()=>{var e;(e=a.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=a.value)===null||e===void 0||e.blur()}},Z=Ne("Checkbox",g,d),V=U(()=>{const{value:e}=b,{common:{cubicBezierEaseInOut:h},self:{borderRadius:t,color:m,colorChecked:C,colorDisabled:$,colorTableHeader:w,colorTableHeaderModal:ee,colorTableHeaderPopover:oe,checkMarkColor:re,checkMarkColorDisabled:ae,border:ce,borderFocus:ne,borderDisabled:le,borderChecked:te,boxShadowFocus:de,textColor:ie,textColorDisabled:se,checkMarkColorDisabledChecked:be,colorDisabledChecked:ue,borderDisabledChecked:he,labelPadding:fe,labelLineHeight:ke,labelFontWeight:ve,[K("fontSize",e)]:xe,[K("size",e)]:me}}=R.value;return{"--n-label-line-height":ke,"--n-label-font-weight":ve,"--n-size":me,"--n-bezier":h,"--n-border-radius":t,"--n-border":ce,"--n-border-checked":te,"--n-border-focus":ne,"--n-border-disabled":le,"--n-border-disabled-checked":he,"--n-box-shadow-focus":de,"--n-color":m,"--n-color-checked":C,"--n-color-table":w,"--n-color-table-modal":ee,"--n-color-table-popover":oe,"--n-color-disabled":$,"--n-color-disabled-checked":ue,"--n-text-color":ie,"--n-text-color-disabled":se,"--n-check-mark-color":re,"--n-check-mark-color-disabled":ae,"--n-check-mark-color-disabled-checked":be,"--n-font-size":xe,"--n-label-padding":fe}}),_=f?Be("checkbox",U(()=>b.value[0]),V,o):void 0;return Object.assign(n,X,{rtlEnabled:Z,selfRef:a,mergedClsPrefix:d,mergedDisabled:i,renderedChecked:x,mergedTheme:R,labelId:Te(),handleClick:Y,handleKeyUp:J,handleKeyDown:Q,cssVars:f?void 0:V,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender})},render(){var o;const{$slots:a,renderedChecked:d,mergedDisabled:f,indeterminate:g,privateInsideTable:n,cssVars:i,labelId:b,label:l,mergedClsPrefix:c,focusable:B,handleKeyUp:T,handleKeyDown:x,handleClick:R}=this;return(o=this.onRender)===null||o===void 0||o.call(this),s("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,d&&`${c}-checkbox--checked`,f&&`${c}-checkbox--disabled`,g&&`${c}-checkbox--indeterminate`,n&&`${c}-checkbox--inside-table`],tabindex:f||!B?void 0:0,role:"checkbox","aria-checked":g?"mixed":d,"aria-labelledby":b,style:i,onKeyup:T,onKeydown:x,onClick:R,onMousedown:()=>{Me("selectstart",window,S=>{S.preventDefault()},{once:!0})}},s("div",{class:`${c}-checkbox-box-wrapper`}," ",s("div",{class:`${c}-checkbox-box`},s($e,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${c}-checkbox-icon`},je):s("div",{key:"check",class:`${c}-checkbox-icon`},Fe)}),s("div",{class:`${c}-checkbox-box__border`}))),l!==null||a.default?s("span",{class:`${c}-checkbox__label`,id:b},a.default?a.default():l):null)}}),W=o=>(Ve("data-v-76bcf538"),o=o(),Ue(),o),Le=W(()=>A("h4",null,"client_id",-1)),Ae=W(()=>A("h4",null,"client_secret",-1)),Ge=P({__name:"Request",setup(o){const a=N({id:"76lrwrklhdn1icb",secret:""}),d=N(!1),f=()=>{window.open("https://dropbox.com/developers/apps","_blank")},g=()=>{const n=new URL("https://www.dropbox.com/oauth2/authorize");n.searchParams.set("client_id",a.value.id),n.searchParams.set("response_type","code"),n.searchParams.set("redirect_uri",`${location.origin}/tool/dropbox/callback`),n.searchParams.set("token_access_type","offline"),n.searchParams.set("state",window.btoa(`${a.value.id}::${a.value.secret}`)),window.open(n.toString(),"_self")};return(n,i)=>(D(),F(v(q),{vertical:"",size:"large"},{default:z(()=>[p(v(Oe),{checked:d.value,"onUpdate:checked":i[0]||(i[0]=b=>d.value=b),size:"large"},{default:z(()=>[I("Use my own client")]),_:1},8,["checked"]),d.value?(D(),L(Pe,{key:0},[Le,p(v(E),{size:"large",value:a.value.id,"onUpdate:value":i[1]||(i[1]=b=>a.value.id=b)},null,8,["value"]),Ae,p(v(E),{size:"large",value:a.value.secret,"onUpdate:value":i[2]||(i[2]=b=>a.value.secret=b),placeholder:"keep it empty if you don't have one"},null,8,["value"])],64)):j("v-if",!0),p(v(q),{justify:"center"},{default:z(()=>[d.value?(D(),F(v(H),{key:0,size:"large",secondary:"",onClick:f},{default:z(()=>[I("Create client")]),_:1})):j("v-if",!0),p(v(H),{size:"large",type:"info",onClick:g},{default:z(()=>[I("Get Refresh Token")]),_:1})]),_:1})]),_:1}))}});const We=G(Ge,[["__scopeId","data-v-76bcf538"],["__file","Request.vue"]]),Ye=P({__name:"request.html",setup(o){return(a,d)=>{const f=Ke("NaiveClient");return D(),L("div",null,[p(f,null,{default:z(()=>[p(v(We))]),_:1})])}}}),eo=G(Ye,[["__file","request.html.vue"]]);export{eo as default};
