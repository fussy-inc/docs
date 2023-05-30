"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(r),p=o,f=s["".concat(i,".").concat(p)]||s[p]||m[p]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3477:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),o=r(7294),a=r(3905);const l={id:"order-enum",title:"OrderEnum",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"enums/order-enum",id:"enums/order-enum",title:"OrderEnum",description:"No description",source:"@site/documents/enums/order-enum.mdx",sourceDirName:"enums",slug:"/enums/order-enum",permalink:"/docs/enums/order-enum",draft:!1,tags:[],version:"current",frontMatter:{id:"order-enum",title:"OrderEnum",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},u={},d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OrderEnum.<b>asc</b></code>",id:"code-style-fontweight-normal-orderenumbascbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrderEnum.<b>desc</b></code>",id:"code-style-fontweight-normal-orderenumbdescbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:c=!1}=e;const[i,u]=(0,o.useState)(c);return(0,a.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&l)},b={Bullet:d,SpecifiedBy:s,Badge:m,toc:p,Details:f},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OrderEnum {\n  asc\n  desc\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderenumbascbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEnum.",(0,a.kt)("b",null,"asc")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ascending order")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderenumbdescbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEnum.",(0,a.kt)("b",null,"desc")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Descending order")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/queries/categories"},(0,a.kt)("inlineCode",{parentName:"a"},"categories")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/queries/forms"},(0,a.kt)("inlineCode",{parentName:"a"},"forms")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);