(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-share"],{"49ca":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={uNavbar:i("1952").default,uqrcode:i("6d6b").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-navbar",{attrs:{backIconColor:"black",borderBottom:!1,isFixed:!1,background:{background:"rgb(242, 246, 247)"},"title-color":"black",title:t.i18n.share}}),i("v-uni-text",{staticClass:"d-block text-center font-size-50 text-white m-30 py-30"},[t._v(t._s(t.i18n.my_qrcode))]),i("v-uni-view",{staticClass:"m-30 p-30 border-radius-20 bg-white text-white"},[i("v-uni-view",{staticClass:"d-flex  align-items-center"},[i("v-uni-image",{staticClass:"border-radius-50per border",staticStyle:{width:"120rpx",height:"120rpx"},attrs:{src:t.user.head_portrait||t.retImageUrl,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"ml-22"},[i("v-uni-text",{staticClass:"d-block font-size-36 font-weight-bold"},[t._v(t._s(t.user.account_number||t.$t("common.plsLogin")))]),t.user.id?i("v-uni-text",{staticClass:"d-block font-size-22 opacity-50 mt-4"},[t._v("ID:"+t._s(t.user.id))]):t._e(),t.user.score?i("v-uni-text",{staticClass:"d-block font-size-22 opacity-50 mt-4"},[t._v(t._s(t.i18n.score)+":"+t._s(Number(t.user.score)))]):t._e()],1)],1),i("v-uni-view",{staticClass:"mt-50 mx-auto text-center p-30 bg-333 border-radius-20",staticStyle:{width:"330px"}},[i("uqrcode",{ref:"uqrcode"})],1)],1)],1)},n=[]},e64f:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{user:{}}},onLoad:function(){this.user=this.$store.state.user},onShow:function(){this.$nextTick((function(){this.$refs.uqrcode.make({size:300,text:this.$store.state.baseDomain+"/#/pages/common/register?code="+this.user.extension_code})}))},computed:{i18n:function(){return this.$t("setting")}}}},e696:function(t,e,i){"use strict";i.r(e);var s=i("49ca"),r=i("f57e");for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);var a=i("f0c5"),o=Object(a["a"])(r["default"],s["b"],s["c"],!1,null,"49d90cb0",null,!1,s["a"],void 0);e["default"]=o.exports},f57e:function(t,e,i){"use strict";i.r(e);var s=i("e64f"),r=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=r.a}}]);