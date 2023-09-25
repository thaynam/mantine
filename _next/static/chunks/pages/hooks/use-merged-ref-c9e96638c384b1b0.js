(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8716],{33507:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},73362:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-merged-ref",function(){return s(63532)}])},63532:function(e,n,s){"use strict";s.r(n);var t=s(85893),r=s(11151),o=s(19905),c=s(9904);let i=(0,o.A)(c.us.useMergedRef);function d(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-merged-ref"})," accepts any number of refs and returns a function that should be passed to the ",(0,t.jsx)(n.code,{children:"ref"})," prop.\nUse this hook when you need to use more than one ref on a single dom node, for example,\nwhen you want to use ",(0,t.jsx)(n.a,{href:"/hooks/use-click-outside/",children:"use-click-outside"})," and ",(0,t.jsx)(n.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hooks and also get a ref for yourself:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { useClickOutside, useFocusTrap, useMergedRef } from '@mantine/hooks';\n\nfunction Demo() {\n  const myRef = useRef();\n  const useClickOutsideRef = useClickOutside(() => {});\n  const focusTrapRef = useFocusTrap();\n  const mergedRef = useMergedRef(myRef, useClickOutsideRef, focusTrapRef);\n\n  return <div ref={mergedRef} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mergerefs-function",children:"mergeRefs function"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-merged-ref"})," hooks memoizes refs with ",(0,t.jsx)(n.code,{children:"useCallback"})," hook, but in some cases\nmemoizing is not a valid strategy, for example, when you are working with a list\nof dynamic components React will complain that different number of hooks was called\nacross two renders. To fix that issue, use ",(0,t.jsx)(n.code,{children:"mergeRefs"})," function instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { useClickOutside, mergeRefs } from '@mantine/hooks';\n\nfunction Demo() {\n  const myRef = useRef();\n  const useClickOutsideRef = useClickOutside(() => {});\n  const mergedRef = mergeRefs(myRef, useClickOutsideRef);\n  return <div ref={mergedRef} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"mergeRefs"})," works the same way as ",(0,t.jsx)(n.code,{children:"use-merged-ref"}),", but does not use hooks internally.\nUse it only when you cannot use ",(0,t.jsx)(n.code,{children:"use-merged-ref"}),". Note that ",(0,t.jsx)(n.code,{children:"mergeRefs"})," will not work\ncorrectly with ",(0,t.jsx)(n.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook, you are required to\nuse ",(0,t.jsx)(n.code,{children:"use-merged-ref"})," with it."]}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useMergedRef<T = any>(...refs: React.ForwardedRef<T>[]): (node: T) => void;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"set-node-type",children:"Set node type"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"useMergedRef<HTMLDivElement>();\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(d,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=73362)}),_N_E=e.O()}]);