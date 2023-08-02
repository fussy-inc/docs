"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(y,s(s({ref:t},i),{},{components:n})):r.createElement(y,s({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7048:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=n(7462),o=n(7294),a=n(3905);const s={id:"responses",title:"responses",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"queries/responses",id:"queries/responses",title:"responses",description:"No description",source:"@site/documents/queries/responses.mdx",sourceDirName:"queries",slug:"/queries/responses",permalink:"/docs/queries/responses",draft:!1,tags:[],version:"current",frontMatter:{id:"responses",title:"responses",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},d={},i=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>responses.<b>categoryIds</b></code><Bullet /><code>[Int!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsesbcategoryidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>responses.<b>formIds</b></code><Bullet /><code>[Int!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsesbformidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>responses.<b>ids</b></code><Bullet /><code>[Int!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsesbidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>responses.<b>locationNearby</b></code><Bullet /><code>LocationNearInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-responsesblocationnearbybcodelocationnearinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>responses.<b>order</b></code><Bullet /><code>OrderEnum</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-responsesborderbcodeorderenum-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>responses.<b>userIds</b></code><Bullet /><code>[Int!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-responsesbuseridsbcodeint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Response</code> <Badge class="secondary" text="object"/>',id:"response-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[c,d]=(0,o.useState)(l);return(0,a.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&s)},f={Bullet:i,SpecifiedBy:p,Badge:u,toc:m,Details:y},k="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"responses(\n  categoryIds: [Int!]\n  formIds: [Int!]\n  ids: [Int!]\n  locationNearby: LocationNearInput\n  order: OrderEnum\n  userIds: [Int!]\n): [Response!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-responsesbcategoryidsbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"responses.",(0,a.kt)("b",null,"categoryIds"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,a.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"filter by category ids")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-responsesbformidsbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"responses.",(0,a.kt)("b",null,"formIds"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,a.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"filter by form ids")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-responsesbidsbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"responses.",(0,a.kt)("b",null,"ids"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,a.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-responsesblocationnearbybcodelocationnearinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"responses.",(0,a.kt)("b",null,"locationNearby"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/inputs/location-near-input"},(0,a.kt)("inlineCode",{parentName:"a"},"LocationNearInput"))," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"filter by location nearby")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-responsesborderbcodeorderenum-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"responses.",(0,a.kt)("b",null,"order"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/enums/order-enum"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderEnum"))," ",(0,a.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"sort by create_at")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-responsesbuseridsbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"responses.",(0,a.kt)("b",null,"userIds"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,a.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"filter by user ids")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"response-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/response"},(0,a.kt)("inlineCode",{parentName:"a"},"Response"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}b.isMDXComponent=!0}}]);