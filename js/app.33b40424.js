(function(t){function e(e){for(var n,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-24c033f2":"b29e9a85","chunk-70e0e2c0":"3481ab42","chunk-d8664f2c":"7f6c43a6"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={"chunk-24c033f2":1,"chunk-70e0e2c0":1,"chunk-d8664f2c":1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-24c033f2":"fd2c9579","chunk-70e0e2c0":"cff59625","chunk-d8664f2c":"5cd57788"}[t]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===n||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),o(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,o[1](f)}a[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/easystory/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"23c5":function(t,e,o){},"2877c":function(t,e,o){"use strict";var n=o("a76f"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],i={beforeMount:function(){var t=localStorage.getItem("mybooks"),e=localStorage.getItem("setting");if(t){var o=JSON.parse(t);this.$store.commit("INIT_MYBOOKS",o)}if(e){var n=JSON.parse(e);this.$store.commit("INIT_SETTING",n)}}},s=i,c=(o("034f"),o("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null),l=u.exports,f=(o("d3b7"),o("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"header"},[n("div",{staticClass:"home"}),n("div",{staticClass:"search",on:{click:t.tosearch}},[n("img",{staticClass:"searchicon",attrs:{src:o("eaf1"),alt:""}})])]),n("div",{staticClass:"content"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-title"},[t._v("我的书架")]),t.books.length>0?n("div",{staticClass:"panel-content"},t._l(t.books,(function(e){return n("div",{key:e._id,staticClass:"book"},[n("img",{staticClass:"bookcover",attrs:{src:t.getrealeurl(e.cover)}}),n("div",{staticClass:"bookinfo"},[n("div",{staticClass:"bookname"},[t._v(t._s(e.title))]),n("div",{staticClass:"lastchapter"},[t._v(t._s(e.lastChapter))]),n("div",{staticClass:"updated"},[t._v(t._s(t.getupdatetimespan(e.updated)))]),n("div",{staticClass:"btn",on:{click:function(o){return t.toread(e)}}},[t._v("继续阅读")])]),n("bookmenu",{attrs:{bookid:e._id,removebook:t.removebook}})],1)})),0):n("div",{staticClass:"none"},[t._v("你的书架空空如也~快去搜索添加吧~")])])])])},m=[],h=(o("4de4"),o("7db0"),o("a15b"),o("d81d"),o("b680"),o("ac1f"),o("5319"),o("5530")),p=o("bc3a"),b=o.n(p),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu",on:{click:t.togglemenu}},[t.showbars?o("div",{staticClass:"bars"},[o("div",{staticClass:"bar",on:{click:function(e){return t.removebook(t.bookid)}}},[t._v("删除")])]):t._e()])},v=[],A={props:{bookid:String,removebook:Function},data:function(){return{showbars:!1}},methods:{togglemenu:function(){this.showbars=!this.showbars}}},k=A,y=(o("ab1a"),Object(c["a"])(k,g,v,!1,null,"22bb1921",null)),C=y.exports;n["a"].component("bookmenu",C);var w={data:function(){return{books:[]}},methods:{NumtoFixed:function(t){return(t/1e4).toFixed(1)},getrealeurl:function(t){return"//statics.zhuishushenqi.com/agent/"+encodeURIComponent(t.replace("/agent/",""))},getupdatetimespan:function(t){var e=new Date,o=new Date(t),n=e.getTime()-o.getTime(),r=Math.floor(n/1e3/60)%60,a=Math.floor(n/1e3/60/60)%24,i=Math.floor(n/1e3/60/60/24)%30,s=Math.floor(n/1e3/60/60/24/30)%12,c=Math.floor(n/1e3/60/60/24/30/12);return c>0?c+"年前更新":0===c&&s>0?s+"月前更新":0===c&&0===s&&i>0?i+"日前更新":0===c&&0===s&&0===i&&a>0?a+"小时前更新":0===c&&0===s&&0===i&&0===a&&r>0?r+"分钟前更新":0===c&&0===s&&0===i&&0===a&&r<0?"刚刚更新":void 0},removebook:function(t){this.books=this.books.filter((function(e){return e._id!==t})),this.$store.commit("REMOVE_BOOK",t)},toread:function(t){this.$router.push({path:"/Read",query:{bookid:t._id,source:t.source,chapterindex:t.chapterindex}})},tosearch:function(){this.$router.push({path:"/Search"})}},beforeMount:function(){var t=this;if(this.$store.state.mybooks.length>0){var e=this.$store.state.mybooks.map((function(t){return t._id}));b.a.post("http://bookapi01.zhuishushenqi.com/book/updated",{id:e.join(",")}).then((function(e){t.books=t.$store.state.mybooks.map((function(t){var o=e.data.find((function(e){return e._id===t._id}));return Object(h["a"])(Object(h["a"])({},t),o)}))}))}}},O=w,S=(o("2877c"),Object(c["a"])(O,d,m,!1,null,"5bf6f796",null)),j=S.exports;n["a"].use(f["a"]);var q=[{path:"/",name:"Home",component:j},{path:"/Search",name:"Search",component:function(){return o.e("chunk-24c033f2").then(o.bind(null,"2d3b"))}},{path:"/Book",name:"Book",component:function(){return o.e("chunk-d8664f2c").then(o.bind(null,"8bf3"))},props:function(t){return{bookid:t.query.bookid}}},{path:"/Read",name:"Read",component:function(){return o.e("chunk-70e0e2c0").then(o.bind(null,"c844"))},props:function(t){return{bookid:t.query.bookid,source:t.query.source,chapterindex:parseInt(t.query.chapterindex)}}}],x=new f["a"]({mode:"history",base:"/easystory/",routes:q}),B=x,I=o("2f62");n["a"].use(I["a"]);var E=new I["a"].Store({state:{mybooks:[],curent:null,setting:{layout_tips_style:{backgroundColor:"#fff"},chapter_tips_style:{fontSize:"16px",color:"#333"},title_tips_style:{color:"#333"}}},mutations:{ADD_BOOK:function(t,e){t.mybooks.push(e),localStorage.setItem("mybooks",JSON.stringify(t.mybooks))},REMOVE_BOOK:function(t,e){t.mybooks=t.mybooks.filter((function(t){return t._id!==e})),localStorage.setItem("mybooks",JSON.stringify(t.mybooks))},INIT_MYBOOKS:function(t,e){t.mybooks=e},UPDATE_MYBOOKS:function(t,e){t.mybooks=e,localStorage.setItem("mybooks",JSON.stringify(t.mybooks))},INIT_SETTING:function(t,e){t.setting=e},UPDATE_SETTING:function(t,e){t.setting=e,localStorage.setItem("setting",JSON.stringify(t.setting))}}});n["a"].config.productionTip=!1,new n["a"]({router:B,store:E,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,o){},a76f:function(t,e,o){},ab1a:function(t,e,o){"use strict";var n=o("23c5"),r=o.n(n);r.a},eaf1:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.33b40424.js.map