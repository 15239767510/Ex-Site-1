(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mailMessage-ggList"],{"6ac9":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={data:function(){return{list:[]}},onShow:function(){this.getNews()},methods:{toDetail:function(t){this.$utils.jump("/pages/mailMessage/ggDetail?id="+t)},getNews:function(){var t=this;this.$u.api.index.getNews().then((function(i){t.list=i.message.list}))}}}},"92e9":function(t,i,e){"use strict";e.r(i);var a=e("6ac9"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},a80b:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uNavbar:e("1952").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-scroll-view",{staticStyle:{height:"1688rpx"}},[e("v-uni-view",{staticClass:"mailMessageDetail"},[e("u-navbar",{attrs:{backIconColor:"black",borderBottom:!1,isFixed:!1,background:{background:"rgb(242, 246, 247)"},"title-color":"black",title:t.$t("mailMessage.gg")}}),e("v-uni-view",{staticClass:"list"},t._l(t.list,(function(i){return e("v-uni-view",{staticClass:"list-item"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"desc"},[t._v(t._s(i.abstract))]),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"time"},[t._v(t._s(i.create_time))]),e("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i.id)}}},[t._v(t._s(t.$t("mailMessage.detail_botton")))])],1)],1)})),1)],1)],1)},s=[]},e29f:function(t,i,e){"use strict";e.r(i);var a=e("a80b"),n=e("92e9");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);var u=e("f0c5"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"2ee1bb10",null,!1,a["a"],void 0);i["default"]=c.exports}}]);