(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],v=0,p=[];v<i.length;v++)o=i[v],s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a8d":function(e,t,n){"use strict";var r=n("caeb"),s=n.n(r);s.a},"36fb":function(e,t,n){},"524c":function(e,t,n){"use strict";var r=n("8f77"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),s=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},c=u,v=(n("524c"),n("2877")),p=Object(v["a"])(c,i,l,!1,null,"b6a59770",null);p.options.__file="HelloWorld.vue";var f=p.exports,h={name:"app",components:{HelloWorld:f},created:function(){}},m=h,d=(n("76d6"),Object(v["a"])(m,a,o,!1,null,"bfb42192",null));d.options.__file="App.vue";var g=d.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{ref:"ps-messages-view",staticClass:"content"},e._l(e.messageChat,function(t,r){return n("div",{key:r,staticClass:"message"},[e._m(1,!0),n("div",{staticClass:"right"},[e._v(e._s(t))])])})),n("div",{staticClass:"footer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"footer-input",attrs:{placeholder:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{staticClass:"footer-btn",on:{click:e.addMessageChat}},[e._v("Send")])])])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head"},[n("span",[e._v("Chat-Mobile")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left"},[n("div",{staticClass:"cover"})])}],w={name:"chat",data:function(){return{messageChat:["Imagine we have a right-aligned navigation on the very top of our website, but we want it to be centered on medium-sized screens and single-columned on small devices. Easy enough.","[HMR] Waiting for update signal from WDS...","Download the Vue Devtools extension for a better development experience","Download the Vue Devtools extension for a better development experience","Download the Vue Devtools extension for a better development experience","Download the Vue Devtools extension for a better development experience","Download the Vue Devtools extension for a better development experience","This is last row..."],message:""}},methods:{addMessageChat:function(){this.message.length&&(this.messageChat.push(this.message),this.message="")}},mounted:function(){var e=this;this.$nextTick(function(){window.addEventListener("resize",function(){e.$refs["ps-messages-view"].scrollTop=e.$refs["ps-messages-view"].scrollHeight}),e.$refs["ps-messages-view"].scrollTop=e.$refs["ps-messages-view"].scrollHeight})},computed:{messageChatLength:function(){return this.messageChat.length}},watch:{messageChatLength:function(e,t){var n=this;e>t&&this.$nextTick(function(){n.$refs["ps-messages-view"].scrollTop=n.$refs["ps-messages-view"].scrollHeight})}}},x=w,j=(n("0a8d"),Object(v["a"])(x,_,b,!1,null,"62c8a20a",null));j.options.__file="Chat.vue";var C=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  example\n")])},y=[],$={name:"example",data:function(){return{}},methods:{}},E=$,O=(n("f2f0"),Object(v["a"])(E,k,y,!1,null,null,null));O.options.__file="Example.vue";var D=O.exports;r["a"].use(s["a"]),r["a"].config.productionTip=!1;var T=[{path:"/",component:C},{path:"/exam",name:"exam",component:D}],M=new s["a"]({mode:"history",routes:T});new r["a"]({router:M,render:function(e){return e(g)}}).$mount("#app")},"76d6":function(e,t,n){"use strict";var r=n("36fb"),s=n.n(r);s.a},"8f77":function(e,t,n){},"946a":function(e,t,n){},caeb:function(e,t,n){},f2f0:function(e,t,n){"use strict";var r=n("946a"),s=n.n(r);s.a}});
//# sourceMappingURL=app.616ff01e.js.map