"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[317],{3905:(e,t,s)=>{s.d(t,{Zo:()=>i,kt:()=>f});var n=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},i=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=l(s),y=a,f=p["".concat(u,".").concat(y)]||p[y]||d[y]||o;return s?n.createElement(f,r(r({ref:t},i),{},{components:s})):n.createElement(f,r({ref:t},i))}));function f(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=s.length,r=new Array(o);r[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=s[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}y.displayName="MDXCreateElement"},806:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>d,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>u,toc:()=>y});var n=s(7462),a=s(7294),o=s(3905);const r={id:"issue-fussy-access-token",title:"issueFussyAccessToken",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,u={unversionedId:"mutations/issue-fussy-access-token",id:"mutations/issue-fussy-access-token",title:"issueFussyAccessToken",description:"you can get access token at once",source:"@site/documents/mutations/issue-fussy-access-token.mdx",sourceDirName:"mutations",slug:"/mutations/issue-fussy-access-token",permalink:"/docs/mutations/issue-fussy-access-token",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-fussy-access-token",title:"issueFussyAccessToken",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},l={},i=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>issueFussyAccessToken.<b>input</b></code><Bullet /><code>IssueFussyAccessTokenInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-issuefussyaccesstokenbinputbcodeissuefussyaccesstokeninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>IssueFussyAccessTokenPayload</code> <Badge class="secondary" text="object"/>',id:"issuefussyaccesstokenpayload-",level:4}],f=e=>{let{dataOpen:t,dataClose:s,children:r,startOpen:c=!1}=e;const[u,l]=(0,a.useState)(c);return(0,o.kt)("details",(0,n.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},u?t:s),u&&r)},k={Bullet:i,SpecifiedBy:p,Badge:d,toc:y,Details:f},m="wrapper";function g(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"you can get access token at once"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"issueFussyAccessToken(\n  input: IssueFussyAccessTokenInput!\n): IssueFussyAccessTokenPayload\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuefussyaccesstokenbinputbcodeissuefussyaccesstokeninput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"issueFussyAccessToken.",(0,o.kt)("b",null,"input"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/issue-fussy-access-token-input"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueFussyAccessTokenInput!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for IssueFussyAccessToken")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"issuefussyaccesstokenpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/issue-fussy-access-token-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueFussyAccessTokenPayload"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of IssueFussyAccessToken.")))}g.isMDXComponent=!0}}]);