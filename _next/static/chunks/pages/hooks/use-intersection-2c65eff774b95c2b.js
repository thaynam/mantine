(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5157],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},34185:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-intersection",function(){return t(63234)}])},63234:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(85893),s=t(11151),o=t(19905),i=t(9904),c=t(67294),l=t(93384),a=t(81110),d=t(72039);let u=`
import { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Box } from '@mantine/core';

function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} style={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: entry?.isIntersecting
              ? 'var(--mantine-color-green-6)'
              : 'var(--mantine-color-red-6)',
            minWidth: '50%',
          }}
        >
          <Text c="#fff" fw={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
`,h={type:"code",code:u,component:function(){let e=(0,c.useRef)(null),{ref:n,entry:t}=function(e){let[n,t]=(0,c.useState)(null),r=(0,c.useRef)(null),s=(0,c.useCallback)(n=>{if(r.current&&(r.current.disconnect(),r.current=null),null===n){t(null);return}r.current=new IntersectionObserver(([e])=>{t(e)},e),r.current.observe(n)},[null==e?void 0:e.rootMargin,null==e?void 0:e.root,null==e?void 0:e.threshold]);return{ref:s,entry:n}}({root:e.current,threshold:1});return c.createElement(l.X,{ref:e,h:300,style:{overflowY:"scroll"}},c.createElement(a.x,{pt:260,pb:280},c.createElement(l.X,{ref:n,p:"xl",style:{backgroundColor:(null==t?void 0:t.isIntersecting)?"var(--mantine-color-green-6)":"var(--mantine-color-red-6)",minWidth:"50%"}},c.createElement(d.x,{c:"#fff",fw:700},(null==t?void 0:t.isIntersecting)?"Fully visible":"Obscured"))))}},v=(0,o.A)(i.us.useIntersection);function p(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,s.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-intersection"})," returns information about the intersection\nof a given element with its scroll container or body element with ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"}),":"]}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.p,{children:["The hook accepts ",(0,r.jsx)(n.code,{children:"IntersectionObserver"}),"'s options as its only optional argument:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"useIntersection({\n  root: someDomElement,\n  rootMargin: '0rem',\n  threshold: 1.0,\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The hook returns a ",(0,r.jsx)(n.code,{children:"ref"})," function that should be passed to the observed element, and the latest entry, as returned by ",(0,r.jsx)(n.code,{children:"IntersectionObserver"}),"'s callback.\nSee ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"})," documentation to learn everything about options."]}),"\n",(0,r.jsxs)(n.p,{children:["On the first render (as well as during SSR), or when no element is being observed, the entry is ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const { ref, entry } = useIntersection();\n\n// With regular element:\n<div ref={ref}>Observed</div>\n\n// With Mantine component:\n<Paper ref={ref}>Observed</Paper>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useIntersection<T extends HTMLElement = any>(\n  options?: ConstructorParameters<typeof IntersectionObserver>[1]\n): {\n  ref: (element: T | null) => void;\n  entry: IntersectionObserverEntry;\n};\n"})})]})}var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,Object.assign({},e,{children:(0,r.jsx)(p,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=34185)}),_N_E=e.O()}]);