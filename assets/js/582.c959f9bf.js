(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[582],{6287:(e,t,n)=>{"use strict";n.d(t,{e:()=>p,A:()=>u});var r=n(8168),o=n(6540),l=n(53),s=n(4798),a=n(9777);const c="anchorWithStickyNavbar_y2LR",i="anchorWithHideOnScrollNavbar_3ly5",p=function(e){let{...t}=e;return o.createElement("header",null,o.createElement("h1",(0,r.A)({},t,{id:void 0}),t.children))},u=e=>{return"h1"===e?p:(t=e,function(e){let{id:n,...r}=e;const{navbar:{hideOnScroll:p}}=(0,a.pN)();return n?o.createElement(t,r,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.A)("anchor",`anchor__${t}`,{[i]:p,[c]:!p}),id:n}),r.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,s.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,r)});var t}},5582:(e,t,n)=>{"use strict";n.d(t,{A:()=>F});var r=n(8168),o=n(6540),l=n(2602),s=n(4676),a=n(53);const c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i={Prism:n(1258).default,theme:c};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var d=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=u({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==o&&(l.style=void 0!==l.style?u({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var s=r?{display:"inline-block"}:{},a=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(a))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,s=u({},m(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?u({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,s=0,a=[],c=[a];s>-1;){for(;(l=r[s]++)<o[s];){var i=void 0,p=t[s],u=n[s][l];if("string"==typeof u?(p=s>0?p:["plain"],i=u):(p=h(p,u.type),u.alias&&(p=h(p,u.alias)),i=u.content),"string"==typeof i){var m=i.split(d),g=m.length;a.push({types:p,content:m[0]});for(var f=1;f<g;f++)y(a),c.push(a=[]),a.push({types:p,content:m[f]})}else s++,t.push(p),n.push(i),r.push(0),o.push(i.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return y(a),c}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const f=g;var v=n(8426),b=n.n(v);const k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var E=n(4785),A=n(9777);const T=()=>{const{prism:e}=(0,A.pN)(),{isDarkTheme:t}=(0,E.A)(),n=e.theme||k,r=e.darkTheme||n;return t?r:n};var j=n(4798);const N="codeBlockContainer_J+bg",x="codeBlockContent_csEI",C="codeBlockTitle_oQzk",B="codeBlock_rtdJ",S="copyButton_M3SB",_="codeBlockLines_1zSZ",$=/{([\d,-]+)}/,L=["js","jsBlock","jsx","python","html"],w={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},O=["highlight-next-line","highlight-start","highlight-end"],P=function(e){void 0===e&&(e=L);const t=e.map((e=>{const{start:t,end:n}=w[e];return`(?:${t}\\s*(${O.join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)};function D(e){let{children:t,className:n,metastring:l,title:s}=e;const{prism:c}=(0,A.pN)(),[p,u]=(0,o.useState)(!1),[d,y]=(0,o.useState)(!1);(0,o.useEffect)((()=>{y(!0)}),[]);const h=(0,A.wt)(l)||s,m=(0,o.useRef)(null);let g=[];const v=T(),k=Array.isArray(t)?t.join(""):t;if(l&&$.test(l)){const e=l.match($)[1];g=b()(e).filter((e=>e>0))}let E=n?.replace(/language-/,"");!E&&c.defaultLanguage&&(E=c.defaultLanguage);let L=k.replace(/\n$/,"");if(0===g.length&&void 0!==E){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(E),n=k.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const l=o+1,s=n[o].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":r=l;break;case"highlight-end":e+=`${r}-${l-1},`}n.splice(o,1)}else o+=1}g=b()(e),L=n.join("\n")}const w=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const l=document.getSelection(),s=l.rangeCount>0&&l.getRangeAt(0);n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}r.remove(),s&&(l.removeAllRanges(),l.addRange(s)),o&&o.focus()}(L),u(!0),setTimeout((()=>u(!1)),2e3)};return o.createElement(f,(0,r.A)({},i,{key:String(d),theme:v,code:L,language:E}),(e=>{let{className:t,style:n,tokens:l,getLineProps:s,getTokenProps:c}=e;return o.createElement("div",{className:N},h&&o.createElement("div",{style:n,className:C},h),o.createElement("div",{className:(0,a.A)(x,E)},o.createElement("pre",{tabIndex:0,className:(0,a.A)(t,B,"thin-scrollbar"),style:n},o.createElement("code",{className:_},l.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=s({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.A)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,r.A)({key:t},c({token:e,key:t}))))))})))),o.createElement("button",{ref:m,type:"button","aria-label":(0,j.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.A)(S,"clean-btn"),onClick:w},p?o.createElement(j.A,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(j.A,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var z=n(6287);const I="details_h+cY";function R(e){let{...t}=e;return o.createElement(A.B_,(0,r.A)({},t,{className:(0,a.A)("alert alert--info",I,t.className)}))}const F={head:e=>{const t=o.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e)));return o.createElement(l.A,e,t)},code:e=>{const{children:t}=e;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(D,e):o.createElement("code",e)},a:e=>o.createElement(s.A,e),pre:e=>{const{children:t}=e;return(0,o.isValidElement)(t)&&(0,o.isValidElement)(t?.props?.children)?t.props.children:o.createElement(D,(0,o.isValidElement)(t)?t?.props:{...e})},details:e=>{const t=o.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),l=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(R,(0,r.A)({},e,{summary:n}),l)},h1:(0,z.A)("h1"),h2:(0,z.A)("h2"),h3:(0,z.A)("h3"),h4:(0,z.A)("h4"),h5:(0,z.A)("h5"),h6:(0,z.A)("h6")}},8426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);