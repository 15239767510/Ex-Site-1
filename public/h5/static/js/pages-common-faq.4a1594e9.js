(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-faq"],{1913:function(t,e,n){"use strict";n.r(e);var i=n("794f"),a=n("72db");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var r,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"cb5b5244",null,!1,i["a"],r);e["default"]=o.exports},"72db":function(t,e,n){"use strict";n.r(e);var i=n("eecb"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"794f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("f64b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{title:t.article.title}}),n("v-uni-view",{staticClass:"m-30"},[n("v-uni-text",{staticClass:"d-block font-size-32 text-center"},[t._v(t._s(t.article.title))]),n("v-uni-view",{staticClass:"mt-20 text-white",domProps:{innerHTML:t._s(t.article.content)}})],1)],1)},u=[]},eecb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{article:{}}},onLoad:function(t){var e=t.id;this.id=e},onShow:function(){this.getNewsDetail()},methods:{getNewsDetail:function(){var t=this;this.$u.api.index.getFAQ().then((function(e){t.article=e.message}))}}};e.default=i}}]);