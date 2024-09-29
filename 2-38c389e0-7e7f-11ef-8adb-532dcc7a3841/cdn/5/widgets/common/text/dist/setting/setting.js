System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/rich-text-editor"],(function(e,t){var o={},a={},n={},l={},r={},i={};return{setters:[function(e){o.AllDataSourceTypes=e.AllDataSourceTypes,o.Immutable=e.Immutable,o.React=e.React,o.ReactRedux=e.ReactRedux,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.lodash=e.lodash},function(e){a.SettingRow=e.SettingRow,a.SettingSection=e.SettingSection},function(e){n.Button=e.Button,n.Switch=e.Switch,n.TextArea=e.TextArea,n.defaultMessages=e.defaultMessages,n.richTextUtils=e.richTextUtils},function(e){l.DataSourceSelector=e.DataSourceSelector},function(e){r.ExpressionInput=e.ExpressionInput,r.ExpressionInputType=e.ExpressionInputType},function(e){i.RichTextFormats=e.RichTextFormats,i.richTextEditorUtils=e.richTextEditorUtils,i.useEditorSelectionFormats=e.useEditorSelectionFormats}],execute:function(){e((()=>{var e={9759:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.5 2a.5.5 0 0 0 0 1H7l-1.868 8.406a.488.488 0 0 0 .953.212L8 3h3.5a.5.5 0 0 0 0-1zm-1 11a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm6.64-3.86a.477.477 0 0 1 .674 0l1.686 1.686 1.686-1.686a.477.477 0 1 1 .674.674L12.174 11.5l1.686 1.686a.477.477 0 1 1-.674.674L11.5 12.174 9.814 13.86a.477.477 0 1 1-.674-.674l1.686-1.686L9.14 9.814a.477.477 0 0 1 0-.674" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=o},14321:e=>{"use strict";e.exports=n},13089:e=>{"use strict";e.exports=l},84845:e=>{"use strict";e.exports=r},33949:e=>{"use strict";e.exports=i},79298:e=>{"use strict";e.exports=a}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var c={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(c),s.d(c,{__set_webpack_public_path__:()=>h,default:()=>w});var e=s(79244),t=s(79298),o=s(14321),a=s(13089);const n={verticalAlignment:"Vertical alignment"};var l=s(84845);var r=s(9759),i=s.n(r),u=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const p=t=>{const o=window.SVG,{className:a}=t,n=u(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:l,src:i()},n)):e.React.createElement("svg",Object.assign({className:l},n))};var d=s(33949),m=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const g=e.css`
  > * {
    user-select: none;
  }
`,S=t=>{const{editor:a,onChange:n}=t,l=m(t,["editor","onChange"]),[,r]=(0,d.useEditorSelectionFormats)(a,!0),i=e.hooks.useTranslation(o.defaultMessages);return(0,e.jsx)(o.Button,Object.assign({css:g},l,{icon:!0,type:"tertiary",size:"sm",onClick:()=>{d.richTextEditorUtils.clearFormats(a,r),null==n||n(null==a?void 0:a.root.innerHTML)},title:i("clearAllFormats"),"aria-label":i("clearAllFormats")}),(0,e.jsx)(p,null))};var v=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const f=t=>{const{editor:o}=t,a=v(t,["editor"]),[n,l]=(0,d.useEditorSelectionFormats)(o,!0),r=e.React.useMemo((()=>{var t;let o=n;return null!=(null===(t=null==o?void 0:o.link)||void 0===t?void 0:t.link)&&(o=e.lodash.assign({},o,{link:o.link.link})),o}),[n]);return e.React.createElement(d.RichTextFormats,Object.assign({editor:o,formats:r,selection:l},a))},x=(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer,e.AllDataSourceTypes.SceneLayer,e.AllDataSourceTypes.BuildingComponentSubLayer,e.AllDataSourceTypes.OrientedImageryLayer,e.AllDataSourceTypes.ImageryLayer]),y=(0,e.Immutable)([l.ExpressionInputType.Static,l.ExpressionInputType.Attribute,l.ExpressionInputType.Statistics,l.ExpressionInputType.Expression]),b=(0,e.Immutable)([]),w=r=>{var i,s,c,u,p,d,m,g;const{id:v,config:w,useDataSources:h,useDataSourcesEnabled:E,onSettingChange:R}=r,T="Web Experience Template"===(null===(s=null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appInfo)||void 0===s?void 0:s.type),O=null===(u=null===(c=null==w?void 0:w.style)||void 0===c?void 0:c.wrap)||void 0===u||u,j=null==w?void 0:w.text,I=null==w?void 0:w.placeholder,D=e.React.useMemo((()=>{var e;return null!==(e=o.richTextUtils.getHTMLTextContent(I))&&void 0!==e?e:""}),[I]),A=null==w?void 0:w.tooltip,M=e.ReactRedux.useSelector((e=>e.appStateInBuilder)),P=null===(d=null===(p=null==M?void 0:M.widgetsMutableStateVersion)||void 0===p?void 0:p[v])||void 0===d?void 0:d.editor,k=null===(g=null===(m=null==M?void 0:M.widgetsRuntimeInfo)||void 0===m?void 0:m[v])||void 0===g?void 0:g.isInlineEditing,C=E&&(null==h?void 0:h.length)>0,[F,_]=e.React.useState(null),[L,U]=e.React.useState(!1);e.React.useEffect((()=>{var e;const t=window._appWindow._mutableStoreManager,o=null!==(e=null==t?void 0:t.getStateValue([v,"editor"]))&&void 0!==e?e:null;_(o)}),[P,v]);const N=e.hooks.useTranslation(n,o.defaultMessages),B=e=>{const t=o.richTextUtils.isBlankRichText(j)&&!!I,a=!k&&t?"placeholder":"text";R({id:v,config:w.set(a,e)})},V=e.React.useMemo((()=>C?y:(0,e.Immutable)([l.ExpressionInputType.Static])),[C]);return e.React.createElement("div",{className:"widget-setting-text jimu-widget-setting"},e.React.createElement(t.SettingSection,null,e.React.createElement(t.SettingRow,null,e.React.createElement(a.DataSourceSelector,{isMultiple:!0,types:x,useDataSources:h,useDataSourcesEnabled:E,onToggleUseDataEnabled:()=>{const e=!E;R(A&&!e?{id:v,config:w.without("tooltip"),useDataSourcesEnabled:e}:{id:v,useDataSourcesEnabled:e})},onChange:e=>{null!=e&&R({id:v,useDataSources:e})},widgetId:v}))),e.React.createElement(t.SettingSection,null,e.React.createElement(t.SettingRow,{flow:"no-wrap",label:N("wrap")},e.React.createElement(o.Switch,{checked:O,onChange:()=>{R({id:v,config:w.setIn(["style","wrap"],!O)})},"aria-label":N("wrap")})),e.React.createElement(t.SettingRow,{label:N("tooltip"),flow:"wrap",role:"group","aria-label":N("tooltip")},e.React.createElement("div",{className:"w-100"},e.React.createElement(l.ExpressionInput,{"aria-label":N("tooltip"),autoHide:!0,useDataSources:C?h:b,onChange:e=>{null!=e&&(R({id:v,config:w.set("tooltip",e)}),U(!1))},openExpPopup:()=>{U(!0)},expression:"object"==typeof A?A:null,isExpPopupOpen:L,closeExpPopup:()=>{U(!1)},types:V,widgetId:v}))),T&&e.React.createElement(t.SettingRow,{flow:"wrap",label:N("placeholder")},e.React.createElement(o.TextArea,{"aria-label":N("placeholder"),defaultValue:D,onAcceptValue:e=>{e=e.replace(/\n/gm,"");const t=((e,t)=>{const a=o.richTextUtils.getHTMLTextContent(e);return e.replace(null==a?void 0:a.trim(),t)})(I,e);R({id:v,config:w.set("placeholder",t)})}}))),null!=F&&e.React.createElement(t.SettingSection,null,e.React.createElement(t.SettingRow,{flow:"no-wrap",label:N("textFormat"),role:"group","aria-label":N("textFormat")},e.React.createElement(S,{editor:F,onChange:B})),e.React.createElement(t.SettingRow,null,e.React.createElement(f,{editor:F,useDataSources:h,widgetId:v,onChange:B}))))};function h(e){s.p=e}})(),c})())}}}));