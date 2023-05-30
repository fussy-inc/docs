"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,y=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(y,s(s({ref:t},i),{},{components:n})):a.createElement(y,s({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(7462),o=n(7294),r=n(3905);const s={id:"response",title:"Response",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"objects/response",id:"objects/response",title:"Response",description:"No description",source:"@site/documents/objects/response.mdx",sourceDirName:"objects",slug:"/objects/response",permalink:"/docs/objects/response",draft:!1,tags:[],version:"current",frontMatter:{id:"response",title:"Response",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},c={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>answers</b></code><Bullet /><code>[AnswerUnion!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-responsebanswersbcodeanswerunion--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>createdAt</b></code><Bullet /><code>ISO8601DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsebcreatedatbcodeiso8601datetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>form</b></code><Bullet /><code>Form!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-responsebformbcodeform--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>formId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsebformidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsebidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>updatedAt</b></code><Bullet /><code>ISO8601DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsebupdatedatbcodeiso8601datetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>user</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-responsebuserbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Response.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsebuseridbcodeint--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[d,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&s)},k={Bullet:i,SpecifiedBy:p,Badge:m,toc:u,Details:y},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Response {\n  answers: [AnswerUnion!]!\n  createdAt: ISO8601DateTime!\n  form: Form!\n  formId: Int!\n  id: Int!\n  updatedAt: ISO8601DateTime!\n  user: User!\n  userId: Int!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebanswersbcodeanswerunion--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"answers"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/unions/answer-union"},(0,r.kt)("inlineCode",{parentName:"a"},"[AnswerUnion!]!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebcreatedatbcodeiso8601datetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/iso8601-date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"ISO8601DateTime!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebformbcodeform--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"form"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/form"},(0,r.kt)("inlineCode",{parentName:"a"},"Form!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebformidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"formId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"id"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebupdatedatbcodeiso8601datetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/iso8601-date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"ISO8601DateTime!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebuserbcodeuser--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"user"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-responsebuseridbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Response.",(0,r.kt)("b",null,"userId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/queries/response"},(0,r.kt)("inlineCode",{parentName:"a"},"response")),"  ",(0,r.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/queries/responses"},(0,r.kt)("inlineCode",{parentName:"a"},"responses")),"  ",(0,r.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/objects/create-response-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateResponsePayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/date-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"DateAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/form"},(0,r.kt)("inlineCode",{parentName:"a"},"Form")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/image-url-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"ImageUrlAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/location-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"LocationAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/long-text-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"LongTextAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/number-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"NumberAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/reference-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"ReferenceAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/short-text-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"ShortTextAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/text-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"TextAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/url-answer"},(0,r.kt)("inlineCode",{parentName:"a"},"UrlAnswer")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);