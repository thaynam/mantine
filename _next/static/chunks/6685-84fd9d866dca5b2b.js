"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6685],{238:function(e,r,t){t.d(r,{U:function(){return eb}});var n=t(67294),o=t(9779),a=t(643),i=t(53768),l=t(45763);let[c,s]=(0,l.R)("Accordion component was not found in the tree"),[d,m]=(0,l.R)("Accordion.Item component was not found in the tree");var u={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"},p=t(3154),f=t(30370),b=t(81110),v=Object.defineProperty,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,O=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))y.call(r,t)&&O(e,t,r[t]);if(h)for(var t of h(r))g.call(r,t)&&O(e,t,r[t]);return e},P=(e,r)=>{var t={};for(var n in e)y.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>r.indexOf(n)&&g.call(e,n)&&(t[n]=e[n]);return t};let C={},E=(0,p.d)((e,r)=>{let t=(0,f.w)("AccordionItem",C,e),{classNames:o,className:a,style:i,styles:l,vars:c,value:m}=t,u=P(t,["classNames","className","style","styles","vars","value"]),p=s();return n.createElement(d,{value:{value:m}},n.createElement(b.x,w(w({ref:r,mod:{active:p.isItemActive(m)}},p.getStyles("item",{className:a,classNames:o,styles:l,style:i,variant:p.variant})),u)))});E.displayName="@mantine/core/AccordionItem",E.classes=u;var j=t(50226),x=Object.defineProperty,A=Object.defineProperties,S=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))M.call(r,t)&&R(e,t,r[t]);if(I)for(var t of I(r))N.call(r,t)&&R(e,t,r[t]);return e},z=(e,r)=>A(e,S(r)),T=(e,r)=>{var t={};for(var n in e)M.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&I)for(var n of I(e))0>r.indexOf(n)&&N.call(e,n)&&(t[n]=e[n]);return t};let B={},D=(0,p.d)((e,r)=>{var t;let o=(0,f.w)("AccordionPanel",B,e),{classNames:a,className:i,style:l,styles:c,vars:d,children:u}=o,p=T(o,["classNames","className","style","styles","vars","children"]),{value:b}=m(),v=s();return n.createElement(j.U,z(k(k({ref:r},v.getStyles("panel",{className:i,classNames:a,style:l,styles:c})),p),{in:v.isItemActive(b),transitionDuration:null!=(t=v.transitionDuration)?t:200,role:"region",id:v.getRegionId(b),"aria-labelledby":v.getControlId(b)}),n.createElement("div",k({},v.getStyles("content",{classNames:a,styles:c})),u))});D.displayName="@mantine/core/AccordionPanel",D.classes=u;var H=t(86610),F=t(49999),G=Object.defineProperty,Z=Object.defineProperties,U=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,q=(e,r,t)=>r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))$.call(r,t)&&q(e,t,r[t]);if(L)for(var t of L(r))J.call(r,t)&&q(e,t,r[t]);return e},K=(e,r)=>Z(e,U(r)),Q=(e,r)=>{var t={};for(var n in e)$.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&L)for(var n of L(e))0>r.indexOf(n)&&J.call(e,n)&&(t[n]=e[n]);return t};let V={},W=(0,p.d)((e,r)=>{let t=(0,f.w)("AccordionControl",V,e),{classNames:o,className:a,style:i,styles:l,vars:c,chevron:d,icon:u,onClick:p,onKeyDown:v,children:h,disabled:y}=t,g=Q(t,["classNames","className","style","styles","vars","chevron","icon","onClick","onKeyDown","children","disabled"]),{value:O}=m(),w=s(),P=w.isItemActive(O),C="number"==typeof w.order,E=`h${w.order}`,j=n.createElement(H.k,K(_(_({},g),w.getStyles("control",{className:a,classNames:o,style:i,styles:l,variant:w.variant})),{unstyled:w.unstyled,mod:["accordion-control",{active:P,"chevron-position":w.chevronPosition,disabled:y}],ref:r,onClick:e=>{null==p||p(e),w.onChange(O)},type:"button",disabled:y,"aria-expanded":P,"aria-controls":w.getRegionId(O),id:w.getControlId(O),onKeyDown:(0,F.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:w.loop,orientation:"vertical",onKeyDown:v})}),n.createElement(b.x,_({component:"span",mod:{rotate:!w.disableChevronRotation&&P,position:w.chevronPosition}},w.getStyles("chevron",{classNames:o,styles:l})),d||w.chevron),n.createElement("span",_({},w.getStyles("label",{classNames:o,styles:l})),h),u&&n.createElement(b.x,_({component:"span",mod:{"chevron-position":w.chevronPosition}},w.getStyles("icon",{classNames:o,styles:l})),u));return C?n.createElement(E,_({},w.getStyles("itemTitle",{classNames:o,styles:l})),j):j});W.displayName="@mantine/core/AccordionControl",W.classes=u;var X=t(47065),Y=t(86109),ee=t(8586),er=t(72622),et=t(48468),en=Object.defineProperty,eo=Object.defineProperties,ea=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,el=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,es=(e,r,t)=>r in e?en(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ed=(e,r)=>{for(var t in r||(r={}))el.call(r,t)&&es(e,t,r[t]);if(ei)for(var t of ei(r))ec.call(r,t)&&es(e,t,r[t]);return e},em=(e,r)=>eo(e,ea(r)),eu=(e,r)=>{var t={};for(var n in e)el.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&ei)for(var n of ei(e))0>r.indexOf(n)&&ec.call(e,n)&&(t[n]=e[n]);return t};let ep={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:n.createElement(i.Q,null)},ef=(0,ee.Z)((e,{transitionDuration:r,chevronSize:t,radius:n})=>({root:{"--accordion-transition-duration":void 0===r?void 0:`${r}ms`,"--accordion-chevron-size":void 0===t?void 0:(0,er.h)(t),"--accordion-radius":void 0===n?void 0:(0,et.H5)(n)}}));function eb(e){let r=(0,f.w)("Accordion",ep,e),{classNames:t,className:i,style:l,styles:s,unstyled:d,vars:m,children:p,multiple:v,value:h,defaultValue:y,onChange:g,id:O,loop:w,transitionDuration:P,disableChevronRotation:C,chevronPosition:E,chevronSize:j,order:x,chevron:A,variant:S,radius:I}=r,M=eu(r,["classNames","className","style","styles","unstyled","vars","children","multiple","value","defaultValue","onChange","id","loop","transitionDuration","disableChevronRotation","chevronPosition","chevronSize","order","chevron","variant","radius"]),N=(0,o.M)(O),[R,k]=(0,a.C)({value:h,defaultValue:y,finalValue:v?[]:null,onChange:g}),z=e=>Array.isArray(R)?R.includes(e):e===R,T=e=>{let r=Array.isArray(R)?R.includes(e)?R.filter(r=>r!==e):[...R,e]:e===R?null:e;k(r)},B=(0,Y.y)({name:"Accordion",classes:u,props:r,className:i,style:l,classNames:t,styles:s,unstyled:d,vars:m,varsResolver:ef});return n.createElement(c,{value:{isItemActive:z,onChange:T,getControlId:(0,X.A)(`${N}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,X.A)(`${N}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:P,disableChevronRotation:C,chevronPosition:E,order:x,chevron:A,loop:w,getStyles:B,variant:S,unstyled:d}},n.createElement(b.x,em(ed(em(ed({},B("root")),{id:N}),M),{variant:S,"data-accordion":!0}),p))}eb.extend=e=>e,eb.classes=u,eb.displayName="@mantine/core/Accordion",eb.Item=E,eb.Panel=D,eb.Control=W,eb.Chevron=i.Q},66740:function(e,r,t){t.d(r,{q:function(){return q}});var n=t(67294);let o=(0,n.createContext)(null),a=o.Provider;var i={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"},l=t(3154),c=t(30370),s=t(86109),d=t(81110),m=t(8586),u=t(48468),p=Object.defineProperty,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&h(e,t,r[t]);if(f)for(var t of f(r))v.call(r,t)&&h(e,t,r[t]);return e},g=(e,r)=>{var t={};for(var n in e)b.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>r.indexOf(n)&&v.call(e,n)&&(t[n]=e[n]);return t};let O={},w=(0,m.Z)((e,{spacing:r})=>({group:{"--ag-spacing":(0,u.bG)(r)}})),P=(0,l.d)((e,r)=>{let t=(0,c.w)("AvatarGroup",O,e),{classNames:o,className:l,style:m,styles:u,unstyled:p,vars:f,spacing:b}=t,v=g(t,["classNames","className","style","styles","unstyled","vars","spacing"]),h=(0,s.y)({name:"AvatarGroup",classes:i,props:t,className:l,style:m,classNames:o,styles:u,unstyled:p,vars:f,varsResolver:w,rootSelector:"group"});return n.createElement(a,{value:!0},n.createElement(d.x,y(y({ref:r},h("group")),v)))});P.classes=i,P.displayName="@mantine/core/AvatarGroup";var C=Object.defineProperty,E=Object.defineProperties,j=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,I=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,M=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&I(e,t,r[t]);if(x)for(var t of x(r))S.call(r,t)&&I(e,t,r[t]);return e},N=(e,r)=>E(e,j(r));function R(e){return n.createElement("svg",N(M({},e),{"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),n.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var k=t(70405),z=Object.defineProperty,T=Object.defineProperties,B=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,G=(e,r,t)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Z=(e,r)=>{for(var t in r||(r={}))H.call(r,t)&&G(e,t,r[t]);if(D)for(var t of D(r))F.call(r,t)&&G(e,t,r[t]);return e},U=(e,r)=>T(e,B(r)),L=(e,r)=>{var t={};for(var n in e)H.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&D)for(var n of D(e))0>r.indexOf(n)&&F.call(e,n)&&(t[n]=e[n]);return t};let $={},J=(0,m.Z)((e,{size:r,radius:t,variant:n,gradient:o,color:a})=>{let i=e.variantColorResolver({color:a||"gray",theme:e,gradient:o,variant:n||"light"});return{root:{"--avatar-size":(0,u.ap)(r,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,u.H5)(t),"--avatar-bg":a||n?i.background:void 0,"--avatar-color":a||n?i.color:void 0,"--avatar-bd":a||n?i.border:void 0}}}),q=(0,k.b)((e,r)=>{let t=(0,c.w)("Avatar",$,e),{classNames:a,className:l,style:m,styles:u,unstyled:p,vars:f,src:b,alt:v,radius:h,color:y,gradient:g,imageProps:O,children:w}=t,P=L(t,["classNames","className","style","styles","unstyled","vars","src","alt","radius","color","gradient","imageProps","children"]),C=function(){let e=(0,n.useContext)(o);return{withinGroup:!!e}}(),[E,j]=(0,n.useState)(!b),x=(0,s.y)({name:"Avatar",props:t,classes:i,className:l,style:m,classNames:a,styles:u,unstyled:p,vars:f,varsResolver:J});return(0,n.useEffect)(()=>j(!b),[b]),n.createElement(d.x,Z(U(Z({},x("root")),{mod:{"within-group":C.withinGroup},ref:r}),P),E?n.createElement("span",U(Z({},x("placeholder")),{title:v}),w||n.createElement(R,null)):n.createElement("img",U(Z(Z({},O),x("image")),{src:b,alt:v,onError:e=>{var r;j(!0),null==(r=null==O?void 0:O.onError)||r.call(O,e)}})))});q.classes=i,q.displayName="@mantine/core/Avatar",q.Group=P},50226:function(e,r,t){t.d(r,{U:function(){return R}});var n=t(67294),o=t(34223),a=t(73935),i=t(14372),l=t(83443),c=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&f(e,t,r[t]);if(m)for(var t of m(r))p.call(r,t)&&f(e,t,r[t]);return e},v=(e,r)=>s(e,d(r)),h=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&m)for(var n of m(e))0>r.indexOf(n)&&p.call(e,n)&&(t[n]=e[n]);return t};function y(e){return(null==e?void 0:e.current)?e.current.scrollHeight:"auto"}let g="undefined"!=typeof window&&window.requestAnimationFrame;var O=t(30370),w=t(43440),P=t(81110),C=t(42654),E=Object.defineProperty,j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,I=(e,r)=>{for(var t in r||(r={}))x.call(r,t)&&S(e,t,r[t]);if(j)for(var t of j(r))A.call(r,t)&&S(e,t,r[t]);return e},M=(e,r)=>{var t={};for(var n in e)x.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&j)for(var n of j(e))0>r.indexOf(n)&&A.call(e,n)&&(t[n]=e[n]);return t};let N={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},R=(0,n.forwardRef)((e,r)=>{let t=(0,O.w)("Collapse",N,e),{children:c,in:s,transitionDuration:d,transitionTimingFunction:m,style:u,onTransitionEnd:p,animateOpacity:f}=t,E=M(t,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),j=(0,w.rZ)(),x=(0,o.J)(),A=!!j.respectReducedMotion&&x,S=A?0:d,R=function({transitionDuration:e,transitionTimingFunction:r="ease",onTransitionEnd:t=()=>{},opened:o}){let c=(0,n.useRef)(null),s={display:"none",height:0,overflow:"hidden"},[d,m]=(0,n.useState)(o?{}:s),u=e=>{(0,a.flushSync)(()=>m(e))},p=e=>{u(r=>b(b({},r),e))};function f(t){let n=e||function(e){if(!e||"string"==typeof e)return 0;let r=e/36;return Math.round((4+15*r**.25+r/5)*10)}(t);return{transition:`height ${n}ms ${r}`}}(0,i.l)(()=>{"function"==typeof g&&(o?g(()=>{p({willChange:"height",display:"block",overflow:"hidden"}),g(()=>{let e=y(c);p(v(b({},f(e)),{height:e}))})}):g(()=>{let e=y(c);p(v(b({},f(e)),{willChange:"height",height:e})),g(()=>p({height:0,overflow:"hidden"}))}))},[o]);let O=e=>{if(e.target===c.current&&"height"===e.propertyName){if(o){let e=y(c);e===d.height?u({}):p({height:e}),t()}else 0===d.height&&(u(s),t())}};return function(e={}){var{style:r={},refKey:t="ref"}=e,n=h(e,["style","refKey"]);let a=n[t];return v(b({"aria-hidden":!o},n),{[t]:(0,l.lq)(c,a),onTransitionEnd:O,style:b(b({boxSizing:"border-box"},r),d)})}}({opened:s,transitionDuration:S,transitionTimingFunction:m,onTransitionEnd:p});return 0===S?s?n.createElement(P.x,I({},E),c):null:n.createElement(P.x,I({},R(I({style:(0,C.c)(u,j),ref:r},E))),n.createElement("div",{style:{opacity:s||!f?1:0,transition:f?`opacity ${S}ms ${m}`:"none"}},c))});R.displayName="@mantine/core/Collapse"},56685:function(e,r,t){t.d(r,{P:function(){return y},t:function(){return h}});var n=t(67294),o=t(16262),a=t(66740),i=t(72039),l=t(238),c=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))m.call(r,t)&&u(e,t,r[t]);return e};let f=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}],b=`
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
`;function v({label:e,image:r,description:t}){return n.createElement(o.Z,{wrap:"nowrap"},n.createElement(a.q,{src:r,radius:"xl",size:"lg"}),n.createElement("div",null,n.createElement(i.x,null,e),n.createElement(i.x,{size:"sm",c:"dimmed",fw:400},t)))}function h(e){let r=f.map(e=>n.createElement(l.U.Item,{value:e.id,key:e.label},n.createElement(l.U.Control,null,n.createElement(v,p({},e))),n.createElement(l.U.Panel,null,n.createElement(i.x,{size:"sm"},e.content))));return n.createElement(l.U,p({chevronPosition:"right",variant:"contained"},e),r)}let y={type:"code",code:b,component:function(){return n.createElement(h,null)},maxWidth:540,centered:!0}}}]);