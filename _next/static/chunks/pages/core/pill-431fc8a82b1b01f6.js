(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2551],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},42243:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pill",function(){return r(55885)}])},55885:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var n=r(85893),l=r(11151),o=r(19905),a=r(9904),i=r(67294),s=r(14462),c={demoWrapper:"m-6874fea5"},p=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))v.call(t,r)&&m(e,r,t[r]);return e};let y=`
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`,h={type:"configurator",component:function(e){return i.createElement("div",{className:c.demoWrapper},i.createElement(s.D,f({},e),"React"))},code:y,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"withRemoveButton",initialValue:!1,libraryValue:!1}]};var g=r(70097);let b=`
import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
`,P={type:"code",component:function(){let e=Array(10).fill(0).map((e,t)=>i.createElement(s.D,{key:t,withRemoveButton:!0},"Item ",t));return i.createElement(g.M,{component:"div",multiline:!0},i.createElement(s.D.Group,null,e))},code:b,centered:!0,maxWidth:340};var w=r(4733),O=Object.defineProperty,k=Object.defineProperties,j=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&I(e,r,t[r]);if(M)for(var r of M(t))E.call(t,r)&&I(e,r,t[r]);return e},Z=(e,t)=>k(e,j(t));let N=`
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`,z={type:"styles-api",data:w.K,component:function(e){return i.createElement("div",{className:c.demoWrapper},i.createElement(s.D,Z(D({},e),{withRemoveButton:!0,style:{flex:0}}),"Test pill"))},code:N,centered:!0,maxWidth:200},_=(0,o.A)(a.us.Pill);function R(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,l.ah)(),e.components),{Demo:r,StylesApiSelectors:o}=t;return r||S("Demo",!0),o||S("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"inside-inputs",children:"Inside inputs"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Pill"})," component is designed to be used inside inputs. It can be used to create custom\nmulti select or tag inputs."]}),"\n",(0,n.jsx)(r,{data:P}),"\n",(0,n.jsx)(o,{component:"Pill"}),"\n",(0,n.jsx)(r,{data:z})]})}var B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,Object.assign({},e,{children:(0,n.jsx)(R,e)}))};function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},14462:function(e,t,r){"use strict";r.d(t,{D:function(){return G}});var n=r(67294),l=r(50377);let[o,a]=(0,l.V)();var i=r(67399),s={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"},c=r(3154),p=r(30370),u=r(86109),d=r(81110),v=r(8586),m=r(48468),f=Object.defineProperty,y=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&b(e,r,t[r]);if(y)for(var r of y(t))g.call(t,r)&&b(e,r,t[r]);return e},w=(e,t)=>{var r={};for(var n in e)h.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))0>t.indexOf(n)&&g.call(e,n)&&(r[n]=e[n]);return r};let O={},k=(0,v.Z)((e,{gap:t},{size:r})=>({group:{"--pg-gap":void 0!==t?(0,m.ap)(t):(0,m.ap)(r,"pg-gap")}})),j=(0,c.d)((e,t)=>{let r=(0,p.w)("PillGroup",O,e),{classNames:l,className:a,style:c,styles:v,unstyled:m,vars:f,size:y,disabled:h}=r,g=w(r,["classNames","className","style","styles","unstyled","vars","size","disabled"]),b=(0,i.D)(),j=(null==b?void 0:b.size)||y||void 0,M=(0,u.y)({name:"PillGroup",classes:s,props:r,className:a,style:c,classNames:l,styles:v,unstyled:m,vars:f,varsResolver:k,stylesCtx:{size:j},rootSelector:"group"});return n.createElement(o,{value:{size:j,disabled:h}},n.createElement(d.x,P(P({ref:t,size:j},M("group")),g)))});j.classes=s,j.displayName="@mantine/core/PillGroup";var M=r(76198),x=Object.defineProperty,E=Object.defineProperties,I=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&z(e,r,t[r]);if(D)for(var r of D(t))N.call(t,r)&&z(e,r,t[r]);return e},R=(e,t)=>E(e,I(t)),B=(e,t)=>{var r={};for(var n in e)Z.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&D)for(var n of D(e))0>t.indexOf(n)&&N.call(e,n)&&(r[n]=e[n]);return r};let S={variant:"default"},C=(0,v.Z)((e,{radius:t},{size:r})=>({root:{"--pill-fz":(0,m.ap)(r,"pill-fz"),"--pill-height":(0,m.ap)(r,"pill-height"),"--pill-radius":void 0===t?void 0:(0,m.H5)(t)}})),G=(0,c.d)((e,t)=>{let r=(0,p.w)("Pill",S,e),{classNames:l,className:o,style:c,styles:v,unstyled:m,vars:f,variant:y,children:h,withRemoveButton:g,onRemove:b,removeButtonProps:P,radius:w,size:O,disabled:k}=r,j=B(r,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),x=a(),E=(0,i.D)(),I=O||(null==x?void 0:x.size)||void 0,D=(null==E?void 0:E.variant)==="filled"?"contrast":y||"default",Z=(0,u.y)({name:"Pill",classes:s,props:r,className:o,style:c,classNames:l,styles:v,unstyled:m,vars:f,varsResolver:C,stylesCtx:{size:I}});return n.createElement(d.x,_(R(_({component:"span",ref:t,variant:D,size:I},Z("root",{variant:D})),{mod:{"with-remove":g,disabled:k||(null==x?void 0:x.disabled)}}),j),n.createElement("span",_({},Z("label")),h),g&&n.createElement(M.P,R(_(_({variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:m},P),Z("remove",{className:null==P?void 0:P.className,style:null==P?void 0:P.style})),{onMouseDown:e=>{var t;e.preventDefault(),e.stopPropagation(),null==(t=null==P?void 0:P.onMouseDown)||t.call(P,e)},onClick:e=>{var t;e.stopPropagation(),null==b||b(),null==(t=null==P?void 0:P.onClick)||t.call(P,e)}})))});G.classes=s,G.displayName="@mantine/core/Pill",G.Group=j},67399:function(e,t,r){"use strict";r.d(t,{D:function(){return o},H:function(){return l}});var n=r(50377);let[l,o]=(0,n.V)()}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=42243)}),_N_E=e.O()}]);