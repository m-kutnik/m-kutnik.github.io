(function(e){function n(n){for(var r,o,c=n[0],a=n[1],s=n[2],l=0,f=[];l<c.length;l++)o=c[l],u[o]&&f.push(u[o][0]),u[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==u[c]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u={app:0},i=[];function c(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-08c76d2d":"8498f939","chunk-212c3c22":"fe2ea556","chunk-6105f431":"6326cb80"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t={"chunk-08c76d2d":1,"chunk-212c3c22":1,"chunk-6105f431":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-08c76d2d":"5e71440c","chunk-212c3c22":"690baa6a","chunk-6105f431":"da5b74cb"}[e]+".css",u=a.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],d.parentNode.removeChild(d),t(i)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=i);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.src=c(e),s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}u[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar"},[t("RouterLink",{attrs:{to:"/"},on:{click:function(n){e.mouseover(0)}},nativeOn:{mouseover:function(n){e.mouseover(0)},mouseleave:function(n){e.mouseleave()}}},[e._v("\n      About\n    ")]),t("RouterLink",{attrs:{to:"/projects"},on:{click:function(n){e.mouseover(1)}},nativeOn:{mouseover:function(n){e.mouseover(1)},mouseleave:function(n){e.mouseleave()}}},[e._v("\n      Projects\n    ")]),t("RouterLink",{attrs:{to:"/contact"},on:{click:function(n){e.mouseover(2)}},nativeOn:{mouseover:function(n){e.mouseover(2)},mouseleave:function(n){e.mouseleave()}}},[e._v("\n      Contact\n    ")]),t("span",{staticClass:"underline",style:e.underlineStyle})],1),t("Transition",{attrs:{name:"slide-fade",mode:"out-in",appear:""}},[t("RouterView")],1)],1)},u=[],i=(t("7f7f"),{name:"App",data:function(){return{underline:{style:{width:0,left:0},hover:!1,active:{}},underlineList:[{width:"67px",left:0},{width:"84px",left:"105px"},{width:"84px",left:"227px"}]}},computed:{underlineStyle:function(){return this.underline.hover?this.underline.active:this.underline.style}},beforeUpdate:function(){var e=["About","Projects","Contact"],n=e.indexOf(this.$route.name);this.underline.style=this.underlineList[n]},methods:{mouseover:function(e){this.underline.hover=!0,this.underline.active=this.underlineList[e]},mouseleave:function(){this.underline.hover=!1},click:function(e){this.underline.style=this.underlineList[e]}}}),c=i,a=(t("5c0b"),t("2877")),s=Object(a["a"])(c,o,u,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,f=t("8c4f"),d=function(){return t.e("chunk-6105f431").then(t.bind(null,"f820"))},p=function(){return t.e("chunk-212c3c22").then(t.bind(null,"acca"))},h=function(){return t.e("chunk-08c76d2d").then(t.bind(null,"b8fa"))};r["a"].use(f["a"]);var v=new f["a"]({routes:[{path:"/",name:"About",component:d},{path:"/projects",name:"Projects",component:p},{path:"/contact",name:"Contact",component:h}]});r["a"].config.productionTip=!1,new r["a"]({router:v,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.50ef5fe6.js.map