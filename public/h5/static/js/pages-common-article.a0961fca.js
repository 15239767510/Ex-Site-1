(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-article"],{"1e1b":function(t,e,n){"use strict";n.r(e);var i=n("d36d"),a=n("dc1e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var u,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"78ab3b38",null,!1,i["a"],u);e["default"]=s.exports},6524:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{article:{}}},onLoad:function(t){var e=t.id;this.id=e},onShow:function(){this.getNewsDetail()},methods:{getNewsDetail:function(){var t=this;this.$u.api.index.getNewsDetail(this.id).then((function(e){t.article=e.message}))}}};e.default=i},d36d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("f64b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{title:t.article.title}}),n("v-uni-view",{staticClass:"m-30"},[n("v-uni-text",{staticClass:"d-block font-size-32 text-center"},[t._v(t._s(t.article.title))]),n("v-uni-view",{staticClass:"mt-20",domProps:{innerHTML:t._s(t.article.content)}})],1)],1)},r=[]},dc1e:function(t,e,n){"use strict";n.r(e);var i=n("6524"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);