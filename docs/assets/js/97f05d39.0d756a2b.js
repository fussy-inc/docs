"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,l(l({ref:t},i),{},{components:n})):r.createElement(y,l({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[m]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4778:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),o=n(7294),a=n(3905);const l={id:"answer-type-enum",title:"AnswerTypeEnum",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},u=void 0,c={unversionedId:"enums/answer-type-enum",id:"enums/answer-type-enum",title:"AnswerTypeEnum",description:"No description",source:"@site/documents/enums/answer-type-enum.mdx",sourceDirName:"enums",slug:"/enums/answer-type-enum",permalink:"/docs/enums/answer-type-enum",draft:!1,tags:[],version:"current",frontMatter:{id:"answer-type-enum",title:"AnswerTypeEnum",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},s={},i=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>date</b></code>",id:"code-style-fontweight-normal-answertypeenumbdatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>image_url</b></code>",id:"code-style-fontweight-normal-answertypeenumbimage_urlbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>location</b></code>",id:"code-style-fontweight-normal-answertypeenumblocationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>long_text</b></code>",id:"code-style-fontweight-normal-answertypeenumblong_textbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>number</b></code>",id:"code-style-fontweight-normal-answertypeenumbnumberbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>reference</b></code>",id:"code-style-fontweight-normal-answertypeenumbreferencebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>short_text</b></code>",id:"code-style-fontweight-normal-answertypeenumbshort_textbcode",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AnswerTypeEnum.<b>text</b></code> <Badge class="secondary" text="deprecated"/>',id:"code-style-fontweight-normal-answertypeenumbtextbcode-",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AnswerTypeEnum.<b>url</b></code>",id:"code-style-fontweight-normal-answertypeenumburlbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:u=!1}=e;const[c,s]=(0,o.useState)(u);return(0,a.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},b={Bullet:i,SpecifiedBy:m,Badge:p,toc:d,Details:y},f="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AnswerTypeEnum {\n  date\n  image_url\n  location\n  long_text\n  number\n  reference\n  short_text\n  text @deprecated\n  url\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumbdatebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"date")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Date")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumbimage_urlbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"image_url")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Image URL")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumblocationbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"location")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Location")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumblong_textbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"long_text")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Long Text")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumbnumberbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"number")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Number")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumbreferencebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"reference")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reference")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumbshort_textbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"short_text")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Short Text")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumbtextbcode-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"text")))," ",(0,a.kt)(p,{class:"secondary",text:"deprecated",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)(p,{class:"warning",text:"DEPRECATED: Use SHORT_TEXT or LONG_TEXT instead",mdxType:"Badge"}),(0,a.kt)("p",{parentName:"blockquote"},"Text")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-answertypeenumburlbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AnswerTypeEnum.",(0,a.kt)("b",null,"url")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"URL")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/inputs/answer-input"},(0,a.kt)("inlineCode",{parentName:"a"},"AnswerInput")),"  ",(0,a.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/objects/question"},(0,a.kt)("inlineCode",{parentName:"a"},"Question")),"  ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/inputs/question-input"},(0,a.kt)("inlineCode",{parentName:"a"},"QuestionInput")),"  ",(0,a.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);