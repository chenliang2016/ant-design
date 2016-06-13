webpackJsonp([2,358],{68:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=s(117),o=t(e),c=s(139),l=t(c),u=s(75),i=t(u),k=p({},o["default"]);k.lang=p({placeholder:"Select date",rangePlaceholder:["Start date","End date"]},l["default"]),k.timePickerLocale=p({},i["default"]),a["default"]=k,n.exports=a["default"]},75:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=s(142),o=t(e),c=p({placeholder:"Select a time"},o["default"]);a["default"]=c,n.exports=a["default"]},126:function(n,a,s){"use strict";n.exports=s(68)},178:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(215),e=t(p),o=s(68),c=t(o),l=s(75),u=t(l),i=s(126),k=t(i);a["default"]={Pagination:e["default"],DatePicker:c["default"],TimePicker:u["default"],Calendar:k["default"],Table:{filterTitle:"Filter Menu",filterConfirm:"OK",filterReset:"Reset",emptyText:"No Data"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{notFoundContent:"Not Found",searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items"},Select:{notFoundContent:"Not Found"}},n.exports=a["default"]},215:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={items_per_page:"/page",jump_to:"Goto",page:"",first_page:"First Page",last_page:"Last Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages"},n.exports=a["default"]},579:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(180),s(179)),e=t(p),o=(s(33),s(32)),c=t(o),l=(s(23),s(22)),u=t(l),i=(s(92),s(91)),k=t(i),r=(s(115),s(114)),d=t(r),g=(s(109),s(108)),m=t(g),f=(s(6),s(5)),v=t(f),h=(s(42),s(48)),y=t(h),w=(s(45),s(44)),x=t(w),b=(s(38),s(37)),P=t(b),S=(s(29),s(28)),j=t(S),E=(s(15),s(14)),C=t(E),M=s(1),_=t(M),N=s(2),O=(t(N),s(178)),R=t(O);n.exports={content:[["p","\u6b64\u5904\u5217\u51fa Ant Design \u4e2d\u9700\u8981\u56fd\u9645\u5316\u652f\u6301\u7684\u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u5728\u6f14\u793a\u91cc\u5207\u6362\u8bed\u8a00\u3002"]],meta:{order:2,title:"\u6240\u6709\u7ec4\u4ef6",filename:"components/locale-provider/demo/all.md",id:"components-locale-provider-demo-all"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> LocaleProvider<span class="token punctuation" >,</span> Pagination<span class="token punctuation" >,</span> DatePicker<span class="token punctuation" >,</span> TimePicker<span class="token punctuation" >,</span> Calendar<span class="token punctuation" >,</span>\n         Popconfirm<span class="token punctuation" >,</span> Table<span class="token punctuation" >,</span> Modal<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Select<span class="token punctuation" >,</span> Transfer<span class="token punctuation" >,</span> Radio <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> enUS <span class="token keyword" >from</span> <span class="token string" >\'antd/lib/locale-provider/en_US\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> RangePicker <span class="token operator" >=</span> DatePicker<span class="token punctuation" >.</span>RangePicker<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'Name\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n  filters<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'filter1\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'filter1\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'Age\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Page <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showModal</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >hideModal</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> info <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      Modal<span class="token punctuation" >.</span><span class="token function" >info</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        title<span class="token punctuation" >:</span> <span class="token string" >\'some info\'</span><span class="token punctuation" >,</span>\n        content<span class="token punctuation" >:</span> <span class="token string" >\'some info\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> confirm <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      Modal<span class="token punctuation" >.</span><span class="token function" >confirm</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        title<span class="token punctuation" >:</span> <span class="token string" >\'some info\'</span><span class="token punctuation" >,</span>\n        content<span class="token punctuation" >:</span> <span class="token string" >\'some info\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>locale-components<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >showSizeChanger</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >showSearch</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>jack<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>jack<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lucy<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>lucy<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RangePicker</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showModal<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Show Modal<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>info<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Show info<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Show confirm<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Question?<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Click to confirm<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Transfer</span>\n            <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >showSearch</span>\n            <span class="token attr-name" >titles</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >targetKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >render</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item <span class="token operator" >=</span><span class="token operator" >></span> item<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >290</span><span class="token punctuation" >,</span> border<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #d9d9d9\'</span><span class="token punctuation" >,</span> borderRadius<span class="token punctuation" >:</span> <span class="token number" >4</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Calendar</span> <span class="token attr-name" >fullscreen</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Modal</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Locale</span> <span class="token attr-name" >Modal"</span> <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>visible<span class="token punctuation" >}</span></span> <span class="token attr-name" >onCancel</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>hideModal<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Locale Modal<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Modal</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      locale<span class="token punctuation" >:</span> enUS<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >changeLocale</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> locale<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>change-locale<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginRight<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Change locale <span class="token keyword" >of</span> components<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio.Group</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>enUS<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>changeLocale<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio.Button</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>en<span class="token punctuation" >"</span></span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>enUS<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>English<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio.Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio.Button</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>cn<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e2d\u6587<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio.Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio.Group</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>LocaleProvider</span> <span class="token attr-name" >locale</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>locale<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Page</span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>LocaleProvider</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=C["default"].Option,a=j["default"].RangePicker,s=[{title:"Name",dataIndex:"name",filters:[{text:"filter1",value:"filter1"}]},{title:"Age",dataIndex:"age"}],t=_["default"].createClass({displayName:"Page",getInitialState:function(){return{visible:!1}},showModal:function(){this.setState({visible:!0})},hideModal:function(){this.setState({visible:!1})},render:function(){var t=function(){P["default"].info({title:"some info",content:"some info"})},p=function(){P["default"].confirm({title:"some info",content:"some info"})};return _["default"].createElement("div",{className:"locale-components"},_["default"].createElement("div",{className:"example"},_["default"].createElement(x["default"],{defaultCurrent:1,total:50,showSizeChanger:!0})),_["default"].createElement("div",{className:"example"},_["default"].createElement(C["default"],{showSearch:!0,style:{width:200}},_["default"].createElement(n,{value:"jack"},"jack"),_["default"].createElement(n,{value:"lucy"},"lucy")),_["default"].createElement(j["default"],null),_["default"].createElement(y["default"],null),_["default"].createElement(a,{style:{width:200}})),_["default"].createElement("div",{className:"example"},_["default"].createElement(v["default"],{type:"primary",onClick:this.showModal},"Show Modal"),_["default"].createElement(v["default"],{onClick:t},"Show info"),_["default"].createElement(v["default"],{onClick:p},"Show confirm"),_["default"].createElement(m["default"],{title:"Question?"},_["default"].createElement("a",{href:"#"},"Click to confirm"))),_["default"].createElement("div",{className:"example"},_["default"].createElement(d["default"],{dataSource:[],showSearch:!0,titles:["",""],targetKeys:[],render:function(n){return n.title}})),_["default"].createElement("div",{style:{width:290,border:"1px solid #d9d9d9",borderRadius:4}},_["default"].createElement(k["default"],{fullscreen:!1})),_["default"].createElement("div",{className:"example"},_["default"].createElement(u["default"],{dataSource:[],columns:s})),_["default"].createElement(P["default"],{title:"Locale Modal",visible:this.state.visible,onCancel:this.hideModal},_["default"].createElement("p",null,"Locale Modal")))}}),p=_["default"].createClass({displayName:"App",getInitialState:function(){return{locale:R["default"]}},changeLocale:function(n){this.setState({locale:n.target.value})},render:function(){return _["default"].createElement("div",null,_["default"].createElement("div",{className:"change-locale"},_["default"].createElement("span",{style:{marginRight:16}},"Change locale of components: "),_["default"].createElement(c["default"].Group,{defaultValue:R["default"],onChange:this.changeLocale},_["default"].createElement(c["default"].Button,{key:"en",value:R["default"]},"English"),_["default"].createElement(c["default"].Button,{key:"cn"},"\u4e2d\u6587"))),_["default"].createElement(e["default"],{locale:this.state.locale},_["default"].createElement(t,null)))}});return _["default"].createElement(p,null)},style:".locale-components {\n  border-top: 1px solid #d9d9d9;\n  padding-top: 16px;\n}\n\n.example {\n  margin: 16px 0;\n}\n\n.example > * {\n  margin-right: 8px;\n}\n\n.change-locale {\n  margin-bottom: 16px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.locale-components</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >border-top</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#d9d9d9</span><span class="token punctuation" >;</span>\n  <span class="token property" >padding-top</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.example</span> > * </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.change-locale</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});