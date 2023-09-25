"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4391],{84391:function(e,t,r){r.d(t,{h:function(){return tJ}});var o=r(67294),n=r(16658),a=r(45763);let[l,i]=(0,a.R)("Combobox component was not found in tree");var c=r(83443),s=Object.defineProperty,b=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&m(e,r,t[r]);return e},O=(e,t)=>b(e,p(t));function v({onKeyDown:e,withKeyboardNavigation:t,withAriaAttributes:r,withExpandedAttribute:n,targetType:a}){let l=i(),[c,s]=(0,o.useState)(null),b=r=>{null==e||e(r),!l.readOnly&&t&&("ArrowDown"===r.nativeEvent.code&&(r.preventDefault(),l.store.dropdownOpened?s(l.store.selectNextOption()):(l.store.openDropdown("keyboard"),s(l.store.selectActiveOption()))),"ArrowUp"===r.nativeEvent.code&&(r.preventDefault(),l.store.dropdownOpened?s(l.store.selectPreviousOption()):(l.store.openDropdown("keyboard"),s(l.store.selectActiveOption()))),"Enter"===r.nativeEvent.code&&(l.store.dropdownOpened?(r.preventDefault(),l.store.clickSelectedOption()):"button"===a&&(r.preventDefault(),l.store.openDropdown("keyboard"))),"Escape"===r.nativeEvent.code&&l.store.closeDropdown("keyboard"),"Space"===r.nativeEvent.code&&"button"===a&&(r.preventDefault(),l.store.toggleDropdown("keyboard")))},p=r?{"aria-haspopup":"listbox","aria-expanded":n&&!!(l.store.listId&&l.store.dropdownOpened)||void 0,"aria-controls":l.store.listId,"aria-activedescendant":l.store.dropdownOpened&&c||void 0,autoComplete:"off","data-expanded":!!l.store.dropdownOpened||void 0}:{};return O(y({},p),{onKeyDown:b})}var w=r(84131),x=r(3154),g=r(30370),h=r(12322),j=Object.defineProperty,P=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&S(e,r,t[r]);if(P)for(var r of P(t))E.call(t,r)&&S(e,r,t[r]);return e},A=(e,t)=>{var r={};for(var o in e)C.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>t.indexOf(o)&&E.call(e,o)&&(r[o]=e[o]);return r};let N={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1},k=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxTarget",N,e),{children:n,refProp:a,withKeyboardNavigation:l,withAriaAttributes:s,withExpandedAttribute:b,targetType:p}=r,u=A(r,["children","refProp","withKeyboardNavigation","withAriaAttributes","withExpandedAttribute","targetType"]);if(!(0,h.k)(n))throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let d=i(),f=v({targetType:p,withAriaAttributes:s,withKeyboardNavigation:l,withExpandedAttribute:b,onKeyDown:n.props.onKeyDown}),m=(0,o.cloneElement)(n,D(D({},f),u));return o.createElement(w.J.Target,{ref:(0,c.Yx)(t,d.store.targetRef)},m)});k.displayName="@mantine/core/ComboboxTarget";var I=r(77331),T=Object.defineProperty,K=Object.defineProperties,R=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&$(e,r,t[r]);if(Z)for(var r of Z(t))q.call(t,r)&&$(e,r,t[r]);return e},_=(e,t)=>K(e,R(t)),F=(e,t)=>{var r={};for(var o in e)M.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&Z)for(var o of Z(e))0>t.indexOf(o)&&q.call(e,o)&&(r[o]=e[o]);return r};let H={},B=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxDropdown",H,e),{classNames:n,styles:a,className:l,style:c,hidden:s}=r,b=F(r,["classNames","styles","className","style","hidden"]),p=i();return o.createElement(w.J.Dropdown,z(_(z({},b),{ref:t,role:"presentation","data-hidden":s||void 0}),p.getStyles("dropdown",{className:l,style:c,classNames:n,styles:a})))});B.classes=I.Z,B.displayName="@mantine/core/ComboboxDropdown";var J=r(9779),G=r(81110),V=Object.defineProperty,Y=Object.defineProperties,L=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&X(e,r,t[r]);if(U)for(var r of U(t))W.call(t,r)&&X(e,r,t[r]);return e},et=(e,t)=>Y(e,L(t)),er=(e,t)=>{var r={};for(var o in e)Q.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&U)for(var o of U(e))0>t.indexOf(o)&&W.call(e,o)&&(r[o]=e[o]);return r};let eo={},en=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxOptions",eo,e),{classNames:n,className:a,style:l,styles:c,id:s,onMouseDown:b,labelledBy:p}=r,u=er(r,["classNames","className","style","styles","id","onMouseDown","labelledBy"]),d=i(),f=(0,J.M)(s);return(0,o.useEffect)(()=>{d.store.setListId(f)},[f]),o.createElement(G.x,et(ee(ee({ref:t},d.getStyles("options",{className:a,style:l,classNames:n,styles:c})),u),{id:f,role:"listbox","aria-labelledby":p,onMouseDown:e=>{e.preventDefault(),null==b||b(e)}}))});en.classes=I.Z,en.displayName="@mantine/core/ComboboxOptions";var ea=Object.defineProperty,el=Object.defineProperties,ei=Object.getOwnPropertyDescriptors,ec=Object.getOwnPropertySymbols,es=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,ep=(e,t,r)=>t in e?ea(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eu=(e,t)=>{for(var r in t||(t={}))es.call(t,r)&&ep(e,r,t[r]);if(ec)for(var r of ec(t))eb.call(t,r)&&ep(e,r,t[r]);return e},ed=(e,t)=>el(e,ei(t)),ef=(e,t)=>{var r={};for(var o in e)es.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&ec)for(var o of ec(e))0>t.indexOf(o)&&eb.call(e,o)&&(r[o]=e[o]);return r};let em={},ey=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxOption",em,e),{classNames:n,className:a,style:l,styles:c,vars:s,onClick:b,id:p,active:u,onMouseDown:d,onMouseOver:f,disabled:m,selected:y}=r,O=ef(r,["classNames","className","style","styles","vars","onClick","id","active","onMouseDown","onMouseOver","disabled","selected"]),v=i(),w=(0,o.useId)();return o.createElement(G.x,ed(eu(eu({},v.getStyles("option",{className:a,classNames:n,styles:c,style:l})),O),{ref:t,id:p||w,mod:["combobox-option",{"combobox-active":u,"combobox-disabled":m,"combobox-selected":y}],role:"option",onClick:e=>{var t;m?e.preventDefault():(null==(t=v.onOptionSubmit)||t.call(v,r.value,r),null==b||b(e))},onMouseDown:e=>{e.preventDefault(),null==d||d(e)},onMouseOver:e=>{v.resetSelectionOnOptionHover&&v.store.resetSelectedOption(),null==f||f(e)}}))});ey.classes=I.Z,ey.displayName="@mantine/core/ComboboxOption";var eO=r(52561),ev=Object.defineProperty,ew=Object.defineProperties,ex=Object.getOwnPropertyDescriptors,eg=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,ej=Object.prototype.propertyIsEnumerable,eP=(e,t,r)=>t in e?ev(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eC=(e,t)=>{for(var r in t||(t={}))eh.call(t,r)&&eP(e,r,t[r]);if(eg)for(var r of eg(t))ej.call(t,r)&&eP(e,r,t[r]);return e},eE=(e,t)=>ew(e,ex(t)),eS=(e,t)=>{var r={};for(var o in e)eh.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&eg)for(var o of eg(e))0>t.indexOf(o)&&ej.call(e,o)&&(r[o]=e[o]);return r};let eD={withAriaAttributes:!0,withKeyboardNavigation:!0},eA=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxSearch",eD,e),{classNames:n,styles:a,unstyled:l,vars:s,withAriaAttributes:b,onKeyDown:p,withKeyboardNavigation:u,size:d}=r,f=eS(r,["classNames","styles","unstyled","vars","withAriaAttributes","onKeyDown","withKeyboardNavigation","size"]),m=i(),y=m.getStyles("search"),O=v({targetType:"input",withAriaAttributes:b,withKeyboardNavigation:u,withExpandedAttribute:!1,onKeyDown:p});return o.createElement(eO.I,eE(eC(eC({ref:(0,c.Yx)(t,m.store.searchRef),classNames:[{input:y.className},n],styles:[{input:y.style},a],size:d||m.size},O),f),{__staticSelector:"Combobox"}))});eA.classes=I.Z,eA.displayName="@mantine/core/ComboboxSearch";var eN=Object.defineProperty,ek=Object.getOwnPropertySymbols,eI=Object.prototype.hasOwnProperty,eT=Object.prototype.propertyIsEnumerable,eK=(e,t,r)=>t in e?eN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eR=(e,t)=>{for(var r in t||(t={}))eI.call(t,r)&&eK(e,r,t[r]);if(ek)for(var r of ek(t))eT.call(t,r)&&eK(e,r,t[r]);return e},eZ=(e,t)=>{var r={};for(var o in e)eI.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&ek)for(var o of ek(e))0>t.indexOf(o)&&eT.call(e,o)&&(r[o]=e[o]);return r};let eM={},eq=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxEmpty",eM,e),{classNames:n,className:a,style:l,styles:c,vars:s}=r,b=eZ(r,["classNames","className","style","styles","vars"]),p=i();return o.createElement(G.x,eR(eR({ref:t},p.getStyles("empty",{className:a,classNames:n,styles:c,style:l})),b))});eq.classes=I.Z,eq.displayName="@mantine/core/ComboboxEmpty";var e$=r(63017),ez=Object.defineProperty,e_=Object.getOwnPropertySymbols,eF=Object.prototype.hasOwnProperty,eH=Object.prototype.propertyIsEnumerable,eB=(e,t,r)=>t in e?ez(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eJ=(e,t)=>{for(var r in t||(t={}))eF.call(t,r)&&eB(e,r,t[r]);if(e_)for(var r of e_(t))eH.call(t,r)&&eB(e,r,t[r]);return e},eG=(e,t)=>{var r={};for(var o in e)eF.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&e_)for(var o of e_(e))0>t.indexOf(o)&&eH.call(e,o)&&(r[o]=e[o]);return r};let eV={},eY=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxFooter",eV,e),{classNames:n,className:a,style:l,styles:c,vars:s}=r,b=eG(r,["classNames","className","style","styles","vars"]),p=i();return o.createElement(G.x,eJ(eJ({ref:t},p.getStyles("footer",{className:a,classNames:n,style:l,styles:c})),b))});eY.classes=I.Z,eY.displayName="@mantine/core/ComboboxFooter";var eL=Object.defineProperty,eU=Object.getOwnPropertySymbols,eQ=Object.prototype.hasOwnProperty,eW=Object.prototype.propertyIsEnumerable,eX=(e,t,r)=>t in e?eL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,e0=(e,t)=>{for(var r in t||(t={}))eQ.call(t,r)&&eX(e,r,t[r]);if(eU)for(var r of eU(t))eW.call(t,r)&&eX(e,r,t[r]);return e},e1=(e,t)=>{var r={};for(var o in e)eQ.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&eU)for(var o of eU(e))0>t.indexOf(o)&&eW.call(e,o)&&(r[o]=e[o]);return r};let e6={},e3=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxHeader",e6,e),{classNames:n,className:a,style:l,styles:c,vars:s}=r,b=e1(r,["classNames","className","style","styles","vars"]),p=i();return o.createElement(G.x,e0(e0({ref:t},p.getStyles("header",{className:a,classNames:n,style:l,styles:c})),b))});e3.classes=I.Z,e3.displayName="@mantine/core/ComboboxHeader";var e4=Object.defineProperty,e8=Object.defineProperties,e7=Object.getOwnPropertyDescriptors,e2=Object.getOwnPropertySymbols,e9=Object.prototype.hasOwnProperty,e5=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?e4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tt=(e,t)=>{for(var r in t||(t={}))e9.call(t,r)&&te(e,r,t[r]);if(e2)for(var r of e2(t))e5.call(t,r)&&te(e,r,t[r]);return e},tr=(e,t)=>e8(e,e7(t)),to=(e,t)=>{var r={};for(var o in e)e9.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&e2)for(var o of e2(e))0>t.indexOf(o)&&e5.call(e,o)&&(r[o]=e[o]);return r};let tn={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1},ta=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxEventsTarget",tn,e),{children:n,refProp:a,withKeyboardNavigation:l,withAriaAttributes:s,withExpandedAttribute:b,targetType:p}=r,u=to(r,["children","refProp","withKeyboardNavigation","withAriaAttributes","withExpandedAttribute","targetType"]);if(!(0,h.k)(n))throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let d=i(),f=v({targetType:p,withAriaAttributes:s,withKeyboardNavigation:l,withExpandedAttribute:b,onKeyDown:n.props.onKeyDown});return(0,o.cloneElement)(n,tr(tt(tt({},f),u),{[a]:(0,c.Yx)(t,d.store.targetRef,null==n?void 0:n.ref)}))});ta.displayName="@mantine/core/ComboboxEventsTarget";let tl={refProp:"ref"},ti=(0,x.d)((e,t)=>{let{children:r,refProp:n}=(0,g.w)("ComboboxDropdownTarget",tl,e);if(i(),!(0,h.k)(r))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return o.createElement(w.J.Target,{ref:t,refProp:n},r)});ti.displayName="@mantine/core/ComboboxDropdownTarget";var tc=Object.defineProperty,ts=Object.getOwnPropertySymbols,tb=Object.prototype.hasOwnProperty,tp=Object.prototype.propertyIsEnumerable,tu=(e,t,r)=>t in e?tc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,td=(e,t)=>{for(var r in t||(t={}))tb.call(t,r)&&tu(e,r,t[r]);if(ts)for(var r of ts(t))tp.call(t,r)&&tu(e,r,t[r]);return e},tf=(e,t)=>{var r={};for(var o in e)tb.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&ts)for(var o of ts(e))0>t.indexOf(o)&&tp.call(e,o)&&(r[o]=e[o]);return r};let tm={},ty=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxGroup",tm,e),{classNames:n,className:a,style:l,styles:c,vars:s,children:b,label:p}=r,u=tf(r,["classNames","className","style","styles","vars","children","label"]),d=i();return o.createElement(G.x,td(td({ref:t},d.getStyles("group",{className:a,classNames:n,style:l,styles:c})),u),p&&o.createElement("div",td({},d.getStyles("groupLabel",{classNames:n,styles:c})),p),b)});ty.classes=I.Z,ty.displayName="@mantine/core/ComboboxGroup";var tO=r(76198),tv=Object.defineProperty,tw=Object.defineProperties,tx=Object.getOwnPropertyDescriptors,tg=Object.getOwnPropertySymbols,th=Object.prototype.hasOwnProperty,tj=Object.prototype.propertyIsEnumerable,tP=(e,t,r)=>t in e?tv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tC=(e,t)=>{for(var r in t||(t={}))th.call(t,r)&&tP(e,r,t[r]);if(tg)for(var r of tg(t))tj.call(t,r)&&tP(e,r,t[r]);return e},tE=(e,t)=>tw(e,tx(t)),tS=(e,t)=>{var r={};for(var o in e)th.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&tg)for(var o of tg(e))0>t.indexOf(o)&&tj.call(e,o)&&(r[o]=e[o]);return r};let tD=(0,o.forwardRef)((e,t)=>{var{size:r,onMouseDown:n,onClick:a,onClear:l}=e,i=tS(e,["size","onMouseDown","onClick","onClear"]);return o.createElement(tO.P,tE(tC({ref:t,size:r||"sm",variant:"transparent",tabIndex:-1,"aria-hidden":!0},i),{onMouseDown:e=>{e.preventDefault(),null==n||n(e)},onClick:e=>{l(),null==a||a(e)}}))});tD.displayName="@mantine/core/ComboboxClearButton";var tA=r(86109),tN=r(8586),tk=r(48468),tI=r(72622),tT=Object.defineProperty,tK=Object.defineProperties,tR=Object.getOwnPropertyDescriptors,tZ=Object.getOwnPropertySymbols,tM=Object.prototype.hasOwnProperty,tq=Object.prototype.propertyIsEnumerable,t$=(e,t,r)=>t in e?tT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tz=(e,t)=>{for(var r in t||(t={}))tM.call(t,r)&&t$(e,r,t[r]);if(tZ)for(var r of tZ(t))tq.call(t,r)&&t$(e,r,t[r]);return e},t_=(e,t)=>tK(e,tR(t)),tF=(e,t)=>{var r={};for(var o in e)tM.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&tZ)for(var o of tZ(e))0>t.indexOf(o)&&tq.call(e,o)&&(r[o]=e[o]);return r};let tH={keepMounted:!0,withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0}},tB=(0,tN.Z)((e,{size:t,dropdownPadding:r})=>({options:{"--combobox-option-fz":(0,tk.yv)(t),"--combobox-option-padding":(0,tk.ap)(t,"combobox-option-padding")},dropdown:{"--combobox-padding":void 0===r?void 0:(0,tI.h)(r),"--combobox-option-fz":(0,tk.yv)(t),"--combobox-option-padding":(0,tk.ap)(t,"combobox-option-padding")}}));function tJ(e){let t=(0,g.w)("Combobox",tH,e),{classNames:r,styles:a,unstyled:i,children:c,store:s,vars:b,onOptionSubmit:p,size:u,dropdownPadding:d,resetSelectionOnOptionHover:f,__staticSelector:m,readOnly:y}=t,O=tF(t,["classNames","styles","unstyled","children","store","vars","onOptionSubmit","size","dropdownPadding","resetSelectionOnOptionHover","__staticSelector","readOnly"]),v=(0,n.K)(),x=s||v,h=(0,tA.y)({name:m||"Combobox",classes:I.Z,props:t,classNames:r,styles:a,unstyled:i,vars:b,varsResolver:tB});return o.createElement(l,{value:{getStyles:h,store:x,onOptionSubmit:p,size:u,resetSelectionOnOptionHover:f,readOnly:y}},o.createElement(w.J,t_(tz({opened:x.dropdownOpened},O),{onClose:x.closeDropdown,withRoles:!1,unstyled:i}),c))}tJ.extend=e=>e,tJ.classes=I.Z,tJ.displayName="@mantine/core/Combobox",tJ.Target=k,tJ.Dropdown=B,tJ.Options=en,tJ.Option=ey,tJ.Search=eA,tJ.Empty=eq,tJ.Chevron=e$.d,tJ.Footer=eY,tJ.Header=e3,tJ.EventsTarget=ta,tJ.DropdownTarget=ti,tJ.Group=ty,tJ.ClearButton=tD},16658:function(e,t,r){r.d(t,{K:function(){return a}});var o=r(67294),n=r(643);function a({defaultOpened:e,opened:t,onOpenedChange:r,onDropdownClose:a,onDropdownOpen:l,loop:i=!0,scrollBehavior:c="instant"}={}){let[s,b]=(0,n.C)({value:t,defaultValue:e,finalValue:!1,onChange:r}),p=(0,o.useRef)(null),u=(0,o.useRef)(-1),d=(0,o.useRef)(null),f=(0,o.useRef)(null),m=(0,o.useRef)(-1),y=(0,o.useRef)(-1),O=(0,o.useRef)(-1),v=(0,o.useCallback)((e="unknown")=>{s||(b(!0),null==l||l(e))},[b,l,s]),w=(0,o.useCallback)((e="unknown")=>{s&&(b(!1),null==a||a(e))},[b,a,s]),x=(0,o.useCallback)((e="unknown")=>{s?w(e):v(e)},[w,v,s]),g=(0,o.useCallback)(()=>{let e=document.querySelector(`#${p.current} [data-combobox-selected]`);null==e||e.removeAttribute("data-combobox-selected"),null==e||e.removeAttribute("aria-selected")},[]),h=(0,o.useCallback)(e=>{let t=document.getElementById(p.current),r=null==t?void 0:t.querySelectorAll("[data-combobox-option]");if(!r)return null;let o=e>=r.length?0:e<0?r.length-1:e;return(u.current=o,(null==r?void 0:r[o])&&!r[o].hasAttribute("data-combobox-disabled"))?(g(),r[o].setAttribute("data-combobox-selected","true"),r[o].setAttribute("aria-selected","true"),r[o].scrollIntoView({block:"nearest",behavior:c}),r[o].id):null},[c,g]),j=(0,o.useCallback)(()=>{let e=document.querySelector(`#${p.current} [data-combobox-active]`);if(e){let t=document.querySelectorAll(`#${p.current} [data-combobox-option]`),r=Array.from(t).findIndex(t=>t===e);return h(r)}return h(0)},[h]),P=(0,o.useCallback)(()=>h(function(e,t,r){for(let r=e+1;r<t.length;r+=1)if(!t[r].hasAttribute("data-combobox-disabled"))return r;if(r){for(let e=0;e<t.length;e+=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(u.current,document.querySelectorAll(`#${p.current} [data-combobox-option]`),i)),[h,i]),C=(0,o.useCallback)(()=>h(function(e,t,r){for(let r=e-1;r>=0;r-=1)if(!t[r].hasAttribute("data-combobox-disabled"))return r;if(r){for(let e=t.length-1;e>-1;e-=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(u.current,document.querySelectorAll(`#${p.current} [data-combobox-option]`),i)),[h,i]),E=(0,o.useCallback)(()=>h(function(e){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;return -1}(document.querySelectorAll(`#${p.current} [data-combobox-option]`))),[h]),S=(0,o.useCallback)((e="selected")=>{O.current=window.setTimeout(()=>{let t=document.querySelectorAll(`#${p.current} [data-combobox-option]`),r=Array.from(t).findIndex(t=>t.hasAttribute(`data-combobox-${e}`));u.current=r},0)},[]),D=(0,o.useCallback)(()=>{u.current=-1,g()},[g]),A=(0,o.useCallback)(()=>{let e=document.querySelectorAll(`#${p.current} [data-combobox-option]`),t=null==e?void 0:e[u.current];null==t||t.click()},[]),N=(0,o.useCallback)(e=>{p.current=e},[]),k=(0,o.useCallback)(()=>{m.current=window.setTimeout(()=>d.current.focus(),0)},[]),I=(0,o.useCallback)(()=>{y.current=window.setTimeout(()=>f.current.focus(),0)},[]);return(0,o.useEffect)(()=>()=>{window.clearTimeout(m.current),window.clearTimeout(y.current),window.clearTimeout(O.current)},[]),{dropdownOpened:s,openDropdown:v,closeDropdown:w,toggleDropdown:x,selectedOptionIndex:u.current,selectOption:h,selectFirstOption:E,selectActiveOption:j,selectNextOption:P,selectPreviousOption:C,resetSelectedOption:D,updateSelectedOptionIndex:S,listId:p.current,setListId:N,clickSelectedOption:A,searchRef:d,focusSearchInput:k,targetRef:f,focusTarget:I}}}}]);