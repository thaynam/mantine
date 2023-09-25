(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3358],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},83100:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-media-query",function(){return n(19395)}])},19395:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(85893),r=n(11151),i=n(19905),o=n(9904),s=n(67294),d=n(72622),c=n(28931),l=n(3921);let h=`
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${(0,d.em)(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`,u={type:"code",code:h,component:function(){let e=(0,l.a)(`(min-width: ${(0,d.em)(900)})`);return s.createElement(c.C,{color:e?"teal":"red",variant:"filled"},"Breakpoint ",e?"matches":"does not match")},centered:!0},p=(0,i.A)(o.us.useMediaQuery);function g(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-media-query"})," subscribes to media queries.\nIt receives a media query as an argument and returns ",(0,a.jsx)(t.code,{children:"true"})," if the given media query matches the current state.\nThe hook relies on ",(0,a.jsx)(t.code,{children:"window.matchMedia()"})," ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",children:"API"}),"\nand will return ",(0,a.jsx)(t.code,{children:"false"})," if the API is not available, unless an initial value is provided in the second argument."]}),"\n",(0,a.jsxs)(t.p,{children:["Resize browser window to trigger ",(0,a.jsx)(t.code,{children:"window.matchMedia"})," event:"]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"server-side-rendering",children:"Server Side Rendering"}),"\n",(0,a.jsxs)(t.p,{children:["During server side rendering the hook will always return ",(0,a.jsx)(t.code,{children:"false"})," as ",(0,a.jsx)(t.code,{children:"window.matchMedia"})," api is not available,\nif that is not a desired behavior, you can override the initial value:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useMediaQuery } from '@mantine/hooks';\n\nfunction Demo() {\n  // Set initial value in second argument and getInitialValueInEffect option to false\n  const matches = useMediaQuery('(max-width: 40em)', true, { getInitialValueInEffect: false });\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"function useMediaQuery(\n  query: string,\n  initialValue?: boolean,\n  options?: {\n    getInitialValueInEffect: boolean;\n  }\n): boolean;\n"})})]})}var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(p,Object.assign({},e,{children:(0,a.jsx)(g,e)}))}},28931:function(e,t,n){"use strict";n.d(t,{C:function(){return x}});var a=n(67294),r={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},i=n(70405),o=n(30370),s=n(86109),d=n(81110),c=n(8586),l=n(48468),h=n(40184),u=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(v)for(var n of v(t))m.call(t,n)&&y(e,n,t[n]);return e},k=(e,t)=>p(e,g(t)),M=(e,t)=>{var n={};for(var a in e)f.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&v)for(var a of v(e))0>t.indexOf(a)&&m.call(e,a)&&(n[a]=e[a]);return n};let w={},j=(0,c.Z)((e,{radius:t,color:n,gradient:a,variant:r,size:i})=>{let o=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:a,variant:r||"filled"});return{root:{"--badge-height":(0,l.ap)(i,"badge-height"),"--badge-padding-x":(0,l.ap)(i,"badge-padding-x"),"--badge-fz":(0,l.ap)(i,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,l.H5)(t),"--badge-bg":n||r?o.background:void 0,"--badge-color":n||r?o.color:void 0,"--badge-bd":n||r?o.border:void 0,"--badge-dot-color":"dot"===r?(0,h.p)(n,e):void 0}}}),x=(0,i.b)((e,t)=>{let n=(0,o.w)("Badge",w,e),{classNames:i,className:c,style:l,styles:h,unstyled:u,vars:p,radius:g,color:v,gradient:f,leftSection:m,rightSection:y,children:x,variant:I,fullWidth:E}=n,O=M(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),Z=(0,s.y)({name:"Badge",props:n,classes:r,className:c,style:l,classNames:i,styles:h,unstyled:u,vars:p,varsResolver:j});return a.createElement(d.x,b(k(b({variant:I,mod:{block:E}},Z("root",{variant:I})),{ref:t}),O),m&&a.createElement("span",k(b({},Z("section")),{"data-position":"left"}),m),a.createElement("span",b({},Z("label")),x),y&&a.createElement("span",k(b({},Z("section")),{"data-position":"right"}),y))});x.classes=r,x.displayName="@mantine/core/Badge"}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=83100)}),_N_E=e.O()}]);