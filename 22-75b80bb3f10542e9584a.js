(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{845:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return I});var t=s(36),p=s.n(t),e=s(27),o=s.n(e),c=s(734),u=s.n(c),l=s(22),i=s.n(l),r=s(23),k=s.n(r),d=s(24),m=s.n(d),g=s(25),h=s.n(g),y=s(26),f=s.n(y),v=s(0),w=s.n(v),b=s(297),N=s(827),z=function(){var n=[{id:205772,name:"test1"},{id:205773,name:"test2"},{id:205774,name:"test3"}],a=function(a){function s(n){var a;return i()(this,s),(a=m()(this,h()(s).call(this,n))).state={imageList:[]},a}return f()(s,a),k()(s,[{key:"renderTrigger",value:function(){return w.a.createElement("span",null)}},{key:"fetchNetworkImage",value:function(n){var a=this;return new Promise(function(s){a.setState({imageList:[{file:null,src:n}]}),s(n)})}},{key:"updateLocalImage",value:function(n){var a=this;return new Promise(function(s){setTimeout(function(){a.setState({imageList:n}),s(n)},1e3)})}},{key:"render",value:function(){return w.a.createElement("div",null,this.state.imageList.map(function(n,a){return w.a.createElement("img",{className:"zent-upload-demo-pic",width:"80",height:"80",key:a,src:n.src,style:{marginRight:"10px"}})}),w.a.createElement(N.a,{className:"zent-upload-demo-pic",maxSize:1048576,maxAmount:2,triggerInline:!0,tips:"Recommended image size: 640px x 640px",categoryList:n,onFetch:this.fetchNetworkImage.bind(this),onUpload:this.updateLocalImage.bind(this),errorMessages:{overMaxSize:function(n){return"Over size: ".concat(n.maxSize)},overMaxAmount:"So many",wrongMimeType:function(){return!1}}}))}}]),s}(w.a.Component);return w.a.createElement(a,null)},x=function(){var n=function(n){function a(n){var s;return i()(this,a),(s=m()(this,h()(a).call(this,n))).state={voiceList:[]},s}return f()(a,n),k()(a,[{key:"renderTrigger",value:function(){return w.a.createElement("span",null)}},{key:"fetchNetworkImage",value:function(n){var a=this;return new Promise(function(s){a.setState({voiceList:[n]}),s(n)})}},{key:"updateLocalImage",value:function(n){var a=this;return new Promise(function(s){a.setState({voiceList:n}),s(n)})}},{key:"render",value:function(){return w.a.createElement("div",null,this.state.voiceList.map(function(n,a){return w.a.createElement("div",{key:a,style:{fontSize:12,lineHeight:1.5,marginTop:10}},w.a.createElement("p",null,"File Name: ",n.file.name),w.a.createElement("p",null,"File Size: ",(n.file.size/1024).toFixed(1)," KB"))}),w.a.createElement(N.a,{maxSize:8e6,triggerInline:!0,tips:"",type:"voice",accept:"audio/mp3, audio/mpeg",maxAmount:1,onFetch:this.fetchNetworkImage.bind(this),onUpload:this.updateLocalImage.bind(this),triggerClassName:"",trigger:function(){return w.a.createElement("a",{href:"javascript:;"},"Upload Voice")}}))}}]),a}(w.a.Component);return w.a.createElement(n,null)};function E(n){return w.a.createElement(n.tag,u()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return w.a.createElement(E,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function L(n){return w.a.createElement(E,{tag:"style",html:n.style})}var j=function(n){function a(){var n,s;i()(this,a);for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];return s=m()(this,(n=h()(a)).call.apply(n,[this].concat(e))),o()(p()(s),"state",{showCode:!1}),o()(p()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return f()(a,n),k()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(E,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),I=function(n){function a(){return i()(this,a),m()(this,h()(a).apply(this,arguments))}return f()(a,n),k()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(L,{style:"/* 上传图片组件垂直居中对齐(避免计算行高) */\n\t.zent-upload-demo-pic {\n\t\tvertical-align: middle;\n\t}"}),w.a.createElement(S,{html:'<h1 class="anchor-heading"><a href="#upload">¶</a><a href="javascript:void(0)" id="upload" class="anchor-point"></a>Upload</h1>\n<p>File uploader. Supports images and audios.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),w.a.createElement(j,{title:"Basics",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Upload</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'@zent/compat\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">205772</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">\'test1\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">205773</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">\'test2\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">205774</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">\'test3\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n          imageList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">renderTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">fetchNetworkImage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          imageList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n            file<span class="token operator">:</span> <span class="token keyword null nil">null</span><span class="token punctuation">,</span>\n            src<span class="token operator">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">updateLocalImage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              imageList<span class="token operator">:</span> data\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">imageList</span><span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>zent-upload-demo-pic<span class="token punctuation">\'</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span><span class="token property-access">src</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>marginRight<span class="token operator">:</span> <span class="token string">\'10px\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>zent-upload-demo-pic<span class="token punctuation">\'</span></span>\n            <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">maxAmount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">triggerInline</span>\n            <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Recommended image size: 640px x 640px<span class="token punctuation">"</span></span>\n            <span class="token attr-name">categoryList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>categoryList<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFetch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">fetchNetworkImage</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onUpload</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">updateLocalImage</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">errorMessages</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              <span class="token function-variable function">overMaxSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Over size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span><span class="token property-access">maxSize</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// function</span>\n              overMaxAmount<span class="token operator">:</span> <span class="token string">\'So many\'</span><span class="token punctuation">,</span> <span class="token comment">// string</span>\n              wrongMimeType<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token keyword null nil">null</span> <span class="token operator">||</span> <span class="token string">\'\'</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// show nothing</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(j,{title:"Upload Voice",id:"Demovoice",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Upload</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'@zent/compat\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n          voiceList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">renderTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">fetchNetworkImage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          voiceList<span class="token operator">:</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">updateLocalImage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            voiceList<span class="token operator">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">voiceList</span><span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> lineHeight<span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span> marginTop<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">File</span> <span class="token maybe-class-name">Name</span><span class="token operator">:</span> <span class="token punctuation">{</span>item<span class="token punctuation">.</span><span class="token property-access">file</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">File</span> <span class="token maybe-class-name">Size</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token property-access">file</span><span class="token punctuation">.</span><span class="token property-access">size</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token constant">KB</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>\n            <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">triggerInline</span>\n            <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>voice<span class="token punctuation">"</span></span>\n            <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/mp3, audio/mpeg<span class="token punctuation">"</span></span>\n            <span class="token attr-name">maxAmount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFetch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">fetchNetworkImage</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onUpload</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">updateLocalImage</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">triggerClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n            <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Upload</span> <span class="token maybe-class-name">Voice</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(x)),w.a.createElement(S,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Upload type, the default value is 'image', use 'voice' for audio</td>\n<td>string</td>\n<td><code>'image'</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>localOnly</td>\n<td>Allow local images only</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>tips</td>\n<td>Hint text</td>\n<td>string</td>\n<td><code>''</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>maxSize</td>\n<td>Image size limit in bytes</td>\n<td>number</td>\n<td><code>1024 * 1024</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>maxAmount</td>\n<td>Limit number of images, 0 means no limit</td>\n<td>number</td>\n<td><code>0</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>Allowed file types</td>\n<td>string</td>\n<td><code>'image/gif, image/jpeg, image/png, image/bmp'</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>silent</td>\n<td>Deprecated, No notification about sucesss/failure when set to true</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>triggerInline</td>\n<td>Make trigger node's display inline</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>onFetch</td>\n<td>Callback to fetch remote image</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>onUpload</td>\n<td>Callback to upload local image</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>filterFiles</td>\n<td>Filter local files, supports Promise as return value</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>categoryList</td>\n<td>Group data</td>\n<td>array</td>\n<td>[]</td>\n<td>No</td>\n</tr>\n<tr>\n<td>categoryId</td>\n<td>Group id</td>\n<td>number</td>\n<td>[]</td>\n<td>No</td>\n</tr>\n<tr>\n<td>auto</td>\n<td>Open upload dialog automatically</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>withoutPopup</td>\n<td>Don't render inside a popup</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>triggerClassName</td>\n<td>Custom trigger class name</td>\n<td>string</td>\n<td><code>'zent-upload-trigger'</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>errorMessages</td>\n<td>Custom error message, contains overMaxSize, overMaxAmount, wrongMimeType</td>\n<td>object</td>\n<td><code>{}</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Extension class name</td>\n<td>string</td>\n<td><code>''</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(v.Component)}}]);