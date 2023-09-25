(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},1150:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/anchor",function(){return t(22192)}])},22192:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(85893),o=t(11151),c=t(19905),i=t(9904),a=t(67294),h=t(67585);let l=`
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`,s={type:"code",component:function(){return a.createElement(h.e,{href:"https://mantine.dev/",target:"_blank"},"Anchor component")},code:l};var d=t(16262);let u=`
import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}
`,p={type:"code",component:function(){return a.createElement(d.Z,{justify:"center"},a.createElement(h.e,{href:"https://mantine.dev/",target:"_blank",underline:"always"},"Underline always"),a.createElement(h.e,{href:"https://mantine.dev/",target:"_blank",underline:"hover"},"Underline hover"),a.createElement(h.e,{href:"https://mantine.dev/",target:"_blank",underline:"never"},"Underline never"))},code:u},v=(0,c.A)(i.us.Anchor);function f(e){let n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",pre:"pre"},(0,o.ah)(),e.components),{Demo:t,Polymorphic:c,GetElementRef:i}=n;return t||m("Demo",!0),i||m("GetElementRef",!0),c||m("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:s}),"\n",(0,r.jsx)(n.h2,{id:"underline",children:"Underline"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"underline"})," prop to configure ",(0,r.jsx)(n.code,{children:"text-decoration"})," property. It accepts the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"always"})," - link is always underlined"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hover"})," - link is underlined on hover"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"never"})," - link is never underlined"]}),"\n"]}),"\n",(0,r.jsx)(t,{data:p}),"\n",(0,r.jsxs)(n.p,{children:["You can also configure ",(0,r.jsx)(n.code,{children:"underline"})," prop for all ",(0,r.jsx)(n.code,{children:"Anchor"})," components with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Anchor, createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Anchor: Anchor.extend({\n      defaultProps: {\n        underline: 'always',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(c,{defaultElement:"a",changeToElement:"button",component:"Anchor",withNext:!0}),"\n",(0,r.jsx)(i,{component:"Anchor",refType:"a"})]})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,Object.assign({},e,{children:(0,r.jsx)(f,e)}))};function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=1150)}),_N_E=e.O()}]);