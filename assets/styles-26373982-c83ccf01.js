import{G as V}from"./layout-5e08cda4.js";import{p as N,l as u,q,c as C,k as I,r as $,o as E,h as _,y as M,t as R}from"./mermaid.core-58885786.js";import{f as F}from"./flowDb-52e24d17-a81435cf.js";import{r as H}from"./index-5219d011-43f9e169.js";import{bJ as U,bH as J}from"./app-3ff1fc36.js";import{s as W}from"./selectAll-761e2dfb.js";function ne(e,l){return!!e.children(l).length}function ie(e){return L(e.v)+":"+L(e.w)+":"+L(e.name)}var X=/:/g;function L(e){return e?String(e).replace(X,"\\:"):""}function K(e,l){l&&e.attr("style",l)}function ce(e,l,c){l&&e.attr("class",l).attr("class",c+" "+e.attr("class"))}function de(e,l){var c=l.graph();if(U(c)){var a=c.transition;if(J(a))return a(e)}return e}function Q(e,l){var c=e.append("foreignObject").attr("width","100000"),a=c.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var i=l.label;switch(typeof i){case"function":a.insert(i);break;case"object":a.insert(function(){return i});break;default:a.html(i)}K(a,l.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var d=a.node().getBoundingClientRect();return c.attr("width",d.width).attr("height",d.height),c}const G={},Y=function(e){const l=Object.keys(e);for(const c of l)G[c]=e[c]},z=function(e,l,c,a,i,d){const w=a.select(`[id="${c}"]`);Object.keys(e).forEach(function(p){const r=e[p];let k="default";r.classes.length>0&&(k=r.classes.join(" ")),k=k+" flowchart-label";const h=N(r.styles);let t=r.text!==void 0?r.text:r.id,n;if(u.info("vertex",r,r.labelType),r.labelType==="markdown")u.info("vertex",r,r.labelType);else if(q(C().flowchart.htmlLabels)){const m={label:t.replace(/fa[blrs]?:fa-[\w-]+/g,g=>`<i class='${g.replace(":"," ")}'></i>`)};n=Q(w,m).node(),n.parentNode.removeChild(n)}else{const m=i.createElementNS("http://www.w3.org/2000/svg","text");m.setAttribute("style",h.labelStyle.replace("color:","fill:"));const g=t.split(I.lineBreakRegex);for(const T of g){const v=i.createElementNS("http://www.w3.org/2000/svg","tspan");v.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),v.setAttribute("dy","1em"),v.setAttribute("x","1"),v.textContent=T,m.appendChild(v)}n=m}let f=0,o="";switch(r.type){case"round":f=5,o="rect";break;case"square":o="rect";break;case"diamond":o="question";break;case"hexagon":o="hexagon";break;case"odd":o="rect_left_inv_arrow";break;case"lean_right":o="lean_right";break;case"lean_left":o="lean_left";break;case"trapezoid":o="trapezoid";break;case"inv_trapezoid":o="inv_trapezoid";break;case"odd_right":o="rect_left_inv_arrow";break;case"circle":o="circle";break;case"ellipse":o="ellipse";break;case"stadium":o="stadium";break;case"subroutine":o="subroutine";break;case"cylinder":o="cylinder";break;case"group":o="rect";break;case"doublecircle":o="doublecircle";break;default:o="rect"}l.setNode(r.id,{labelStyle:h.labelStyle,shape:o,labelText:t,labelType:r.labelType,rx:f,ry:f,class:k,style:h.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:d.db.getTooltip(r.id)||"",domId:d.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:C().flowchart.padding}),u.info("setNode",{labelStyle:h.labelStyle,labelType:r.labelType,shape:o,labelText:t,rx:f,ry:f,class:k,style:h.style,id:r.id,domId:d.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:C().flowchart.padding})})},P=function(e,l,c){u.info("abc78 edges = ",e);let a=0,i={},d,w;if(e.defaultStyle!==void 0){const s=N(e.defaultStyle);d=s.style,w=s.labelStyle}e.forEach(function(s){a++;var p="L-"+s.start+"-"+s.end;i[p]===void 0?(i[p]=0,u.info("abc78 new entry",p,i[p])):(i[p]++,u.info("abc78 new entry",p,i[p]));let r=p+"-"+i[p];u.info("abc78 new link id to be used is",p,r,i[p]);var k="LS-"+s.start,h="LE-"+s.end;const t={style:"",labelStyle:""};switch(t.minlen=s.length||1,s.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",s.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let n="",f="";switch(s.stroke){case"normal":n="fill:none;",d!==void 0&&(n=d),w!==void 0&&(f=w),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(s.style!==void 0){const o=N(s.style);n=o.style,f=o.labelStyle}t.style=t.style+=n,t.labelStyle=t.labelStyle+=f,s.interpolate!==void 0?t.curve=$(s.interpolate,E):e.defaultInterpolate!==void 0?t.curve=$(e.defaultInterpolate,E):t.curve=$(G.curve,E),s.text===void 0?s.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=s.labelType,t.label=s.text.replace(I.lineBreakRegex,`
`),s.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=r,t.classes="flowchart-link "+k+" "+h,l.setEdge(s.start,s.end,t,a)})},Z=function(e,l){u.info("Extracting classes"),l.db.clear();try{return l.parse(e),l.db.getClasses()}catch{return}},j=function(e,l,c,a){u.info("Drawing flowchart"),a.db.clear(),F.setGen("gen-2"),a.parser.parse(e);let i=a.db.getDirection();i===void 0&&(i="TD");const{securityLevel:d,flowchart:w}=C(),s=w.nodeSpacing||50,p=w.rankSpacing||50;let r;d==="sandbox"&&(r=_("#i"+l));const k=d==="sandbox"?_(r.nodes()[0].contentDocument.body):_("body"),h=d==="sandbox"?r.nodes()[0].contentDocument:document,t=new V({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:s,ranksep:p,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let n;const f=a.db.getSubGraphs();u.info("Subgraphs - ",f);for(let b=f.length-1;b>=0;b--)n=f[b],u.info("Subgraph - ",n),a.db.addVertex(n.id,{text:n.title,type:n.labelType},"group",void 0,n.classes,n.dir);const o=a.db.getVertices(),m=a.db.getEdges();u.info("Edges",m);let g=0;for(g=f.length-1;g>=0;g--){n=f[g],W("cluster").append("text");for(let b=0;b<n.nodes.length;b++)u.info("Setting up subgraphs",n.nodes[b],n.id),t.setParent(n.nodes[b],n.id)}z(o,t,l,k,h,a),P(m,t);const T=k.select(`[id="${l}"]`),v=k.select("#"+l+" g");if(H(v,t,["point","circle","cross"],"flowchart",l),M.insertTitle(T,"flowchartTitleText",w.titleTopMargin,a.db.getDiagramTitle()),R(t,T,w.diagramPadding,w.useMaxWidth),a.db.indexNodes("subGraph"+g),!w.htmlLabels){const b=h.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(const x of b){const S=x.getBBox(),y=h.createElementNS("http://www.w3.org/2000/svg","rect");y.setAttribute("rx",0),y.setAttribute("ry",0),y.setAttribute("width",S.width),y.setAttribute("height",S.height),x.insertBefore(y,x.firstChild)}}Object.keys(o).forEach(function(b){const x=o[b];if(x.link){const S=_("#"+l+' [id="'+b+'"]');if(S){const y=h.createElementNS("http://www.w3.org/2000/svg","a");y.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),y.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),y.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),d==="sandbox"?y.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&y.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);const A=S.insert(function(){return y},":first-child"),B=S.select(".label-container");B&&A.append(function(){return B.node()});const D=S.select(".label");D&&A.append(function(){return D.node()})}}})},pe={setConf:Y,addVertices:z,addEdges:P,getClasses:Z,draw:j},O=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,fe=O;export{K as a,Q as b,de as c,ce as d,ie as e,pe as f,fe as g,ne as i};
