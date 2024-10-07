System.register(["jimu-core","jimu-core/react","jimu-arcgis","calcite-components","jimu-ui"],(function(e,t){var i={},n={},o={},r={},l={};return{setters:[function(e){i.React=e.React},function(e){n.useEffect=e.useEffect,n.useState=e.useState},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent},function(e){r.CalciteAccordion=e.CalciteAccordion,r.CalciteAccordionItem=e.CalciteAccordionItem,r.CalciteAction=e.CalciteAction,r.CalciteDropdown=e.CalciteDropdown,r.CalciteDropdownGroup=e.CalciteDropdownGroup,r.CalciteDropdownItem=e.CalciteDropdownItem,r.CalcitePickListItem=e.CalcitePickListItem},function(e){l.Button=e.Button,l.Icon=e.Icon}],execute:function(){e((()=>{var e={4378:(e,t,i)=>{"use strict";i.d(t,{A:()=>c});var n=i(1601),o=i.n(n),r=i(6314),l=i.n(r)()(o());l.push([e.id,".widget-content{overflow-x:hidden !important}.labels-button{padding:0}.accordion-container{display:flex;flex-direction:column}.accordion-header{display:flex;justify-content:space-between;align-items:center;padding:10px}#decrease-Btn{padding-left:5px !important}#increase-Btn{padding-left:3px !important}",""]);const c=l},6314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(n)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(l[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&l[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),i&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=i):u[2]=i),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},1601:e=>{"use strict";e.exports=function(e){return e[1]}},5072:e=>{"use strict";var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var r={},l=[],c=0;c<e.length;c++){var a=e[c],s=n.base?a[0]+n.base:a[0],u=r[s]||0,d="".concat(s," ").concat(u);r[s]=u+1;var p=i(d),v={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(v);else{var m=o(v,n);n.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}l.push(d)}return l}function o(e,t){var i=t.domAPI(t);i.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,o){var r=n(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<r.length;l++){var c=i(r[l]);t[c].references--}for(var a=n(e,o),s=0;s<r.length;s++){var u=i(r[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=a}}},7659:e=>{"use strict";var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,o&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},9037:e=>{"use strict";e.exports=r},2686:e=>{"use strict";e.exports=o},9244:e=>{"use strict";e.exports=i},8972:e=>{"use strict";e.exports=n},4321:e=>{"use strict";e.exports=l}},t={};function c(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,c),o.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="",c.nc=void 0;var a={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(a),c.d(a,{__set_webpack_public_path__:()=>C,default:()=>A});var e=c(9244),t=c(8972),i=c(2686),n=c(5072),o=c.n(n),r=c(7825),l=c.n(r),s=c(7659),u=c.n(s),d=c(5056),p=c.n(d),v=c(540),m=c.n(v),g=c(1113),f=c.n(g),y=c(4378),h={};h.styleTagTransform=f(),h.setAttributes=p(),h.insert=u().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=m();o()(y.A,h);y.A&&y.A.locals&&y.A.locals;var b=c(9037),w=c(4321);function A(n){const[o,r]=(0,t.useState)(),[l,c]=(0,t.useState)([]),[a,s]=(0,t.useState)(!0),[u,d]=(0,t.useState)(!1),[p,v]=(0,t.useState)([!1,!1,!1,!1,!1,!1,!1]),[m,g]=(0,t.useState)([!1,!1]),[f,y]=(0,t.useState)(1),[h,A]=(0,t.useState)(),[C,E]=(0,t.useState)([]),[I,x]=(0,t.useState)([{groupId:0,isVisible:!1},{groupId:1,isVisible:!1},{groupId:2,isVisible:!1},{groupId:3,isVisible:!1},{groupId:4,isVisible:!1},{groupId:5,isVisible:!1},{groupId:6,isVisible:!1},{groupId:7,isVisible:!1}]),[S,$]=(0,t.useState)([{groupId:"sub-3",isVisible:!1},{groupId:"sub-6",isVisible:!1}]),q={display:"inline-block",position:"absolute",right:"10px"},R={display:"inline-block",position:"absolute",right:"10px",bottom:"2px"},V={width:"24px",height:"24px",fontSize:"12px",cursor:"pointer",padding:"0px",lineHeight:"0px",paddingLeft:"3px"},L=e=>{const t=[...S];t.forEach((t=>{t.groupId===e&&(t.isVisible=!t.isVisible)})),$(t),console.log(S)},B=(e,t,i)=>{const n=[],r=[],l=[];let c;document.querySelectorAll(`[data-id="${e}"]`).forEach((e=>{var t,i;const c=e.getAttribute("value"),a=null===(i=null===(t=null==o?void 0:o.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.findLayerById(c);a&&(a.visible?r.push(c):l.push(c),a&&n.push(c))})),r.length!==n.length?(c="undefined"!==i&&i?document.querySelector(`[data-layer-id="${i}"]`):document.querySelector(`[group-id="${e}"]`),c&&c.setAttribute("icon","square")):(c="undefined"!==i&&i?document.querySelector(`[data-layer-id="${t}"]`):document.querySelector(`[group-id="${e}"]`),c&&c.setAttribute("icon","check-square"))},k=(e,t,i)=>{let n;"undefined"!=i&&null!=i&&(n=i),console.log(e),(e=>{const t=[...I];t.forEach((t=>{t.groupId===e&&(t.isVisible=!t.isVisible)})),x(t),console.log(t)})(e);const o=I.filter((t=>t.groupId===e))[0].isVisible;z(e,t,o)},M=(e,t)=>{var i,n;const r=null===(n=null===(i=null==o?void 0:o.view)||void 0===i?void 0:i.map)||void 0===n?void 0:n.findLayerById(e);r&&(r.opacity=t,r.refresh())};let H=0;const N=(t,i="",n)=>{const r=[];let l=n,c=[],a=[];const s=o.view.map.layers.items;return console.log(t),s.forEach((e=>c.push(e.title))),console.log("group titles are: ",c),console.log("subgroup titles are: ",a),t.forEach(((t,n)=>{const s=""!==i?i:H++;if("group"===t.type){const i=t.title||"Group";if(c.includes(t.title))r.push(e.React.createElement(b.CalciteAccordionItem,{"data-id":s,key:t.id,className:"accordion-item",description:i},e.React.createElement(b.CalciteAction,{"data-id":s,id:`action-${t.id}`,"group-id":s,className:`group-${s}`,slot:"actions-end",icon:"square",text:t.title,onClick:()=>k(s,t.id)}),e.React.createElement("div",null,N(t.layers.items,s))));else{let n=`sub-${s}`;console.log(t.title),a.push(t.title),console.log(a),r.push(e.React.createElement(b.CalciteAccordionItem,{"data-id":s,"sub-id":`sub-${s}`,key:t.id,className:`accordion-item sub-group-${s}`,description:`sub-${i}`},e.React.createElement(b.CalciteAction,{"data-id":`sub-${s}`,id:`action-${t.id}`,className:`sub-group-${s}`,"data-layer-id":t.id,"group-id":`sub-${s}`,slot:"actions-end",icon:"square",text:t.title,onClick:()=>((e,t)=>{L(e);const i=S.filter((t=>t.groupId===e))[0].isVisible;let n=e.toString();n.includes("sub")&&(n=n.substring(4)),T(e,i),B(e),_(n)})(n,t.id)}),e.React.createElement("div",null,N(t.layers.items,n))))}}else r.push(e.React.createElement(b.CalcitePickListItem,{key:t.id,label:t.title,value:t.id,description:t.type,"data-id":i},e.React.createElement(b.CalciteAction,{id:`action-${t.id}`,slot:"actions-end","data-id":`${s}`,className:l?`sub-group-${s}`:`group-${s}`,icon:t.visible?"check-square":"square",text:t.title,onClick:()=>D(t.id,i)}),e.React.createElement(b.CalciteDropdown,{slot:"actions-end","width-scale":"l",closeOnSelectDisabled:"true"},e.React.createElement(b.CalciteAction,{id:`action-${t.id}`,icon:"ellipsis",slot:"trigger",text:t.title}),e.React.createElement(b.CalciteDropdownGroup,null,e.React.createElement(b.CalciteDropdownItem,null,"Transparency",e.React.createElement("div",{className:"transparency-control",style:q},e.React.createElement(w.Button,{style:V,onClick:()=>{return e=t.id,console.log("Decrease transparency clicked"),void y((t=>{const i=t-.1;return console.log("New transparency:",i),M(e,i),i>=0?i:0}));var e},size:"default"},e.React.createElement(w.Icon,{icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12H21V13H3V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ',size:"m"})),e.React.createElement(w.Button,{style:V,onClick:()=>{return e=t.id,console.log("Increase transparency clicked"),void y((t=>{const i=t+.1;return console.log("New transparency:",i),M(e,i),i<=1?i:1}));var e}},e.React.createElement(w.Icon,{icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12H12V6H13V12H19V13H13V19H12V13H6V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ',size:"m"})))),e.React.createElement(b.CalciteDropdownItem,{label:"Toggle Labels"},"Toggle Labels",e.React.createElement("div",{className:"transparency-control",style:R},e.React.createElement(b.CalciteAction,{id:`action-vis-${t.id}`,slot:"actions-end",icon:t.labelsVisible?"view-visible":"view-hide",text:t.title,scale:"s",className:"labels-button",onClick:()=>(e=>{var t,i;const n=null===(i=null===(t=null==o?void 0:o.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.findLayerById(e);n&&(n.labelsVisible=!n.labelsVisible);const r=document.getElementById(`action-vis-${e}`);r&&r.setAttribute("icon",n.labelsVisible?"view-visible":"view-hide")})(t.id)}))),e.React.createElement(b.CalciteDropdownItem,{label:"Layer Details",href:t.url,target:"_blank"},"Layer Details",e.React.createElement("div",{className:"transparency-control",style:q},e.React.createElement(w.Button,{style:V,href:t.url,type:"tertiary",target:"_blank"},e.React.createElement(w.Icon,{icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99991 14C6.99991 14.025 7.00291 14.05 7.00391 14.075L3.46391 10.535C1.52614 8.57967 1.53349 5.42577 3.48035 3.47947C5.4272 1.53316 8.5811 1.52671 10.5359 3.46503L14.5359 7.46502C15.731 8.65643 16.2432 10.3709 15.8976 12.0227C15.552 13.6744 14.3954 15.0397 12.8229 15.652L12.5859 15.415C12.4117 15.2393 12.2717 15.0328 12.1729 14.806C13.5137 14.3989 14.5422 13.3175 14.8816 11.9579C15.2209 10.5983 14.8212 9.16045 13.8289 8.17103L9.82891 4.17103C8.37283 2.71559 6.04981 2.6031 4.45991 3.91103L4.14191 3.52403L4.45991 3.91003C3.58739 4.62642 3.05823 5.67817 3.003 6.80576C2.94776 7.93335 3.37159 9.03178 4.16991 9.83003L7.10991 12.77C7.03714 13.176 7.00033 13.5876 6.99991 14ZM22.9999 18C23.0035 16.6732 22.4763 15.4 21.5359 14.464L17.9959 10.925C17.9959 10.95 17.9999 10.975 17.9999 11C17.9981 11.4125 17.9603 11.8241 17.8869 12.23L20.8289 15.171C21.601 15.9429 22.024 16.9969 21.9999 18.0884C21.9757 19.1799 21.5064 20.2141 20.7009 20.951C19.1219 22.3968 16.6846 22.343 15.1709 20.829L11.1709 16.829C10.1694 15.8439 9.7638 14.4025 10.1046 13.0396C10.4453 11.6768 11.4816 10.5959 12.8289 10.198C12.73 9.96963 12.5892 9.76172 12.4139 9.58503L12.1799 9.35103C11.4501 9.63417 10.797 10.0846 10.2729 10.666C8.50323 12.6438 8.58708 15.6596 10.4639 17.536L14.4639 21.536C15.8939 22.9664 18.0448 23.3944 19.9135 22.6203C21.7821 21.8462 23.0003 20.0226 22.9999 18Z" fill="#6A6A6A"/>\r\n                        </svg>',size:"m"}))))))))})),r},D=(e,t,i)=>{var n,r;const l=null===(r=null===(n=null==o?void 0:o.view)||void 0===n?void 0:n.map)||void 0===r?void 0:r.findLayerById(e);if(l&&(l.visible=!l.visible),l){const t=document.getElementById(`action-${e}`);t&&t.setAttribute("icon",l.visible?"check-square":"square")}let c=t.toString();console.log(typeof c),c.includes("sub")?B(t):j(e,t,i),c.includes("sub")&&(t=c.substring(4)),_(t)},T=(e,t)=>{if(t){const t=document.querySelector(`.group-${e}`);t&&t.setAttribute("icon","check-square");document.querySelectorAll(`[data-id="${e}"]`).forEach((e=>{var t,i;const n=e.getAttribute("value"),r=null===(i=null===(t=null==o?void 0:o.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.findLayerById(n);if(r){r.visible=!0;const e=document.getElementById(`action-${n}`);e&&e.setAttribute("icon","check-square")}}))}else{const t=document.querySelector(`.group-${e}`);t&&t.setAttribute("icon","square");document.querySelectorAll(`[data-id="${e}"]`).forEach((e=>{var t,i;const n=e.getAttribute("value"),r=null===(i=null===(t=null==o?void 0:o.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.findLayerById(n);if(r){r.visible=!1;const e=document.getElementById(`action-${n}`);e&&e.setAttribute("icon","square")}}))}},j=(e,t,i,n)=>{if(!n){const e=[],i=[],n=[];if(document.querySelectorAll(`[data-id="${t}"]`).forEach((t=>{var r,l;const c=t.getAttribute("value"),a=null===(l=null===(r=null==o?void 0:o.view)||void 0===r?void 0:r.map)||void 0===l?void 0:l.findLayerById(c);a&&(a.visible?i.push(c):n.push(c),a&&e.push(c))})),i.length!==e.length){const e=document.querySelector(`.group-${t}`);e&&e.setAttribute("icon","square")}else{const e=document.querySelector(`.group-${t}`);e&&e.setAttribute("icon","check-square")}}},_=e=>{console.log("toggle all icon");const t=[],i=[],n=[];if([...document.querySelectorAll(`[data-id="${e}"]`),...document.querySelectorAll(`[data-id="sub-${e}"]`)].forEach((e=>{var r,l;const c=e.getAttribute("value"),a=null===(l=null===(r=null==o?void 0:o.view)||void 0===r?void 0:r.map)||void 0===l?void 0:l.findLayerById(c);a&&(a.visible?i.push(c):n.push(c),a&&t.push(c))})),i.length!==t.length){const t=document.querySelector(`[group-id="${e}"]`);t&&t.setAttribute("icon","square")}else{const t=document.querySelector(`[group-id="${e}"]`);t&&t.setAttribute("icon","check-square")}},z=(e,t,i,n)=>{let r;const l=`sub-${e}`,c=document.querySelectorAll(`[data-id="sub-${e}"]`);let a,s;if(c.length>0){c.forEach((e=>{null!==e.getAttribute("data-layer-id")&&(a=e)}));const t=a.getAttribute("data-layer-id");console.log(a),L(e);S.filter((e=>e.groupId===l));s=i,T(l,i),B(l,t,s)}((e,t,i)=>{if(i){const e=document.querySelector(`.group-${t}`);e&&e.setAttribute("icon","check-square"),document.querySelectorAll(`[data-id="${t}"]`).forEach((e=>{var t,i;const n=e.getAttribute("value"),r=null===(i=null===(t=null==o?void 0:o.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.findLayerById(n);if(r){r.visible=!0;const e=document.getElementById(`action-${n}`);e&&e.setAttribute("icon","check-square")}}))}else{const e=document.querySelector(`.group-${t}`);e&&e.setAttribute("icon","square"),document.querySelectorAll(`[data-id="${t}"]`).forEach((e=>{var t,i;const n=e.getAttribute("value"),r=null===(i=null===(t=null==o?void 0:o.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.findLayerById(n);if(r){r.visible=!1;const e=document.getElementById(`action-${n}`);e&&e.setAttribute("icon","square")}}))}})(0,e,i),j(r,e)};return(0,t.useEffect)((()=>{if(o){let e=[];const t=o.view.map.layers.items;console.log(t),t.forEach((t=>e.push(t.title))),console.log(e),E(e);const i=N(t);A(o.view.zoom),c(i)}}),[o]),e.React.createElement("div",{className:"widget-starter jimu-widget",style:{overflowX:"hidden"}},e.React.createElement("calcite-panel",null,e.React.createElement(b.CalciteAccordion,{"icon-position":"start","icon-type":"caret",scale:"m"},e.React.createElement("div",{className:"accordion-container"},e.React.createElement("div",{id:"layerlist-header-container",className:"accordion-header",style:{height:"50px"}},e.React.createElement("h5",null,"Layer List"),e.React.createElement("div",{style:{marginLeft:"auto"}},e.React.createElement(w.Button,{style:V,onClick:()=>{A((e=>{const t=e-1;return o&&o.view&&(o.view.zoom=t),t}))},className:"btn",id:"decrease-Btn"},e.React.createElement(w.Icon,{icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12H21V13H3V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ',size:"s"})),e.React.createElement(w.Button,{style:{width:"24px",height:"24px",fontSize:"12px",cursor:"pointer",padding:"0px",lineHeight:"0px",paddingLeft:"2px"},onClick:()=>{A((e=>{const t=e+1;return o&&o.view&&(o.view.zoom=t),t}))},className:"btn",id:"increase-Btn"},e.React.createElement(w.Icon,{icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12H12V6H13V12H19V13H13V19H12V13H6V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ',size:"m"}))))),n.useMapWidgetIds&&1===n.useMapWidgetIds.length&&e.React.createElement(i.JimuMapViewComponent,{useMapWidgetId:n.useMapWidgetIds[0],onActiveViewChange:e=>{e&&r(e)}}),e.React.createElement("div",null,l))))}function C(e){c.p=e}})(),a})())}}}));