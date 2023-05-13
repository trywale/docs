"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={title:"\ud83d\udcdd Summarization",slug:"tutorial-summarization",hidden:!1,createdAt:"2023-05-10T00:42:08.173Z",updatedAt:"2023-05-10T00:59:44.655Z"},o="Context",s={unversionedId:"tutorials/summarization",id:"tutorials/summarization",title:"\ud83d\udcdd Summarization",description:"Build a prompt that will summarize paragraphs into a few sentences. In doing so, we want to give it a constraint, the number of sentences.",source:"@site/docs/tutorials/summarization.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-summarization",permalink:"/docs/tutorials/tutorial-summarization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/summarization.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcdd Summarization",slug:"tutorial-summarization",hidden:!1,createdAt:"2023-05-10T00:42:08.173Z",updatedAt:"2023-05-10T00:59:44.655Z"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/tutorials/Tutorials"},next:{title:"\ud83c\udf0e Translation",permalink:"/docs/tutorials/tutorial-translation"}},l={},c=[{value:"Prompt",id:"prompt",level:2},{value:"Dataset",id:"dataset",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"context"},"Context"),(0,n.kt)("p",null,"Build a prompt that will summarize paragraphs into a few sentences. In doing so, we want to give it a constraint, the number of sentences."),(0,n.kt)("h2",{id:"prompt"},"Prompt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Summarize {{paragraph}} into {{num_sentences}} sentences.\n")),(0,n.kt)("p",null,"Here are the paragraphs and the number of sentences we want to summarize each paragraph into."),(0,n.kt)("h2",{id:"dataset"},"Dataset"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"paragraph"),(0,n.kt)("th",{parentName:"tr",align:"left"},"num_sentences"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"The COVID-19 pandemic has created a widespread shift towards remote work, but this change has been particularly difficult for some industries. In the architecture industry, for example, remote work has made it more challenging to communicate and collaborate on designs, which can ultimately lead to mistakes and delays. To address this challenge, some architects have turned to virtual reality (VR) and augmented reality (AR) tools to create immersive, interactive design experiences that can be accessed remotely."),(0,n.kt)("td",{parentName:"tr",align:"left"},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Advances in technology have transformed the world of finance, making it easier than ever to manage investments and access financial information. One of the most significant developments in this area is the rise of robo-advisors, which use artificial intelligence and machine learning algorithms to provide personalized investment advice to users. These platforms have made investing more accessible and affordable for people who may not have the time or expertise to manage their own portfolios."),(0,n.kt)("td",{parentName:"tr",align:"left"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"The field of education has undergone significant changes in recent years, with many traditional classroom activities and practices being replaced by online learning platforms and digital tools. While this shift has brought many benefits, it has also raised concerns about the potential for students to become disconnected and disengaged from their studies. To address this challenge, some educators are experimenting with gamification techniques, which use game-like elements to make learning more interactive and engaging."),(0,n.kt)("td",{parentName:"tr",align:"left"},"2")))),(0,n.kt)("p",null,"Let's see what this looks like in Wale!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Wale's Prompt Page")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1238).Z,width:"1875",height:"1024"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Wale's Dataset Page")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tutorial-summarization-dataset",src:a(3445).Z,width:"1877",height:"1024"})),(0,n.kt)("p",null,"\ud83e\udd17 Happy Prompting!"))}d.isMDXComponent=!0},3445:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/summarization-dataset-391dc5d57f8fdfaf99b3d37f9598e98c.png"},1238:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/summarization-editor-0d89a485137ce3de2f8079122f72038d.png"}}]);