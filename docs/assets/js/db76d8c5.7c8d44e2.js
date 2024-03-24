"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?l.createElement(g,a(a({ref:t},u),{},{components:n})):l.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3875:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var l=n(7462),r=n(7294),o=n(3905);const a={id:"write-blog-with-llm",title:"writeBlogWithLlm",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"mutations/write-blog-with-llm",id:"mutations/write-blog-with-llm",title:"writeBlogWithLlm",description:"No description",source:"@site/documents/mutations/write-blog-with-llm.mdx",sourceDirName:"mutations",slug:"/mutations/write-blog-with-llm",permalink:"/docs/mutations/write-blog-with-llm",draft:!1,tags:[],version:"current",frontMatter:{id:"write-blog-with-llm",title:"writeBlogWithLlm",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},p={},u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>writeBlogWithLlm.<b>input</b></code><Bullet /><code>WriteBlogWithLlmInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-writeblogwithllmbinputbcodewriteblogwithllminput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>WriteBlogWithLlmPayload</code> <Badge class="secondary" text="object"/>',id:"writeblogwithllmpayload-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:i=!1}=e;const[c,p]=(0,r.useState)(i);return(0,o.kt)("details",(0,l.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&a)},f={Bullet:u,SpecifiedBy:s,Badge:d,toc:m,Details:g};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"writeBlogWithLlm(\n  input: WriteBlogWithLlmInput!\n): WriteBlogWithLlmPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-writeblogwithllmbinputbcodewriteblogwithllminput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"writeBlogWithLlm.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/write-blog-with-llm-input"},(0,o.kt)("inlineCode",{parentName:"a"},"WriteBlogWithLlmInput!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for WriteBlogWithLlm")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"writeblogwithllmpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/write-blog-with-llm-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"WriteBlogWithLlmPayload"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of WriteBlogWithLlm.")))}y.isMDXComponent=!0}}]);