"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},f),{},{components:n})):r.createElement(m,l({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8249:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>f,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(7462),a=n(7294),o=n(3905);const l={id:"fussy-event-reference-eventable-interface",title:"FussyEventReferenceEventableInterface",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"interfaces/fussy-event-reference-eventable-interface",id:"interfaces/fussy-event-reference-eventable-interface",title:"FussyEventReferenceEventableInterface",description:"No description",source:"@site/documents/interfaces/fussy-event-reference-eventable-interface.mdx",sourceDirName:"interfaces",slug:"/interfaces/fussy-event-reference-eventable-interface",permalink:"/docs/interfaces/fussy-event-reference-eventable-interface",draft:!1,tags:[],version:"current",frontMatter:{id:"fussy-event-reference-eventable-interface",title:"FussyEventReferenceEventableInterface",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},s={},f=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Implemented by",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:c=!1}=e;const[i,s]=(0,a.useState)(c);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},y={Bullet:f,SpecifiedBy:p,Badge:u,toc:d,Details:m};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface FussyEventReferenceEventableInterface {\n}\n")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/category"},(0,o.kt)("inlineCode",{parentName:"a"},"Category")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/form"},(0,o.kt)("inlineCode",{parentName:"a"},"Form")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/quest"},(0,o.kt)("inlineCode",{parentName:"a"},"Quest")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);