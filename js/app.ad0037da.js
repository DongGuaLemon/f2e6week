(function(t){function e(e){for(var i,o,c=e[0],s=e[1],l=e[2],f=0,d=[];f<c.length;f++)o=c[f],a[o]&&d.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/f2e6week/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},1559:function(t,e,n){},"1a8a":function(t,e,n){"use strict";var i=n("a544"),a=n.n(i);a.a},"214d":function(t,e,n){"use strict";var i=n("4989"),a=n.n(i);a.a},"223e":function(t,e,n){t.exports=n.p+"img/Icon_check.f62daf06.svg"},2855:function(t,e,n){},"2b8e":function(t,e,n){t.exports=n.p+"img/Icon_cross.2f6e9688.svg"},"305f":function(t,e,n){t.exports=n.p+"img/btn_chevronleft.ca217e1c.svg"},"352d":function(t,e,n){t.exports=n.p+"img/Icon_phone.bc72b71f.svg"},4989:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("826b"),n("450d");var i=n("c263"),a=n.n(i),r=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-brand",{attrs:{href:"/"}},[t._v("HOMEPLACE")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{href:"#"}},[n("span",[t._v("活動公告")])]),n("b-nav-item",{attrs:{href:"#"}},[n("span",[t._v("交通方式")])]),n("b-nav-item",{attrs:{href:"#"}},[n("span",[t._v("周邊景點")])]),n("b-nav-item",{attrs:{href:"#"}},[n("span",[t._v("關於我們")])])],1)],1)],1)],1)},l=[],u={},f=u,d=(n("1a8a"),n("2877")),p=Object(d["a"])(f,s,l,!1,null,null,null),h=p.exports,v={components:{Navbar:h}},m=v,g=(n("034f"),Object(d["a"])(m,o,c,!1,null,null,null)),b=g.exports,_=n("8c4f"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"hometop",style:t.height},[t._m(0),i("img",{staticClass:"aniimg",attrs:{src:n("f6f6")}})]),i("hotelcard"),i("footers")],1)},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hometilte"},[i("img",{attrs:{alt:"hotel logo",src:n("8e54")}}),i("div",{staticClass:"follow"},[i("span",{staticClass:"notice"},[t._v("Follow Us!")]),i("img",{staticClass:"notice",attrs:{alt:"ig",src:n("f4fb")}}),i("img",{staticClass:"notice",attrs:{alt:"fb",src:n("d9bf")}})])])}],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hotel"},[n("div",[n("b-card-group",{staticClass:"hotelcard"},t._l(t.Info,function(e){return n("div",{key:e.id,staticClass:"carddis"},[n("b-card",{staticStyle:{width:"288px",height:"344px"},on:{click:function(n){return t.choicehotel(e.id)}}},[n("b-card-img",{staticClass:"rounded-0",staticStyle:{width:"248px",height:"248px"},attrs:{src:e.imageUrl}}),n("b-card-text",[t._v(t._s(e.name))]),n("b-card-text",[t._v("$"+t._s(e.normalDayPrice)+"/"+t._s(e.holidayPrice))])],1)],1)}),0)],1),n("div",[n("b-card-group",{staticClass:"hotelcard"},t._l(t.Info2,function(e){return n("div",{key:e.id,staticClass:"carddis"},[n("b-card",{staticStyle:{width:"288px",height:"344px"},on:{click:function(n){return t.choicehotel(e.id)}}},[n("b-card-img",{staticClass:"rounded-0",staticStyle:{width:"248px",height:"248px"},attrs:{src:e.imageUrl}}),n("b-card-text",[t._v(t._s(e.name))]),n("b-card-text",[t._v("$"+t._s(e.normalDayPrice)+"/"+t._s(e.holidayPrice))])],1)],1)}),0)],1)])},C=[],j=(n("8e6e"),n("ac6a"),n("456d"),n("75fc")),k=n("bd86"),w=n("2f62");function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach(function(e){Object(k["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var P={data:function(){return{}},computed:I({},Object(w["b"])(["info"]),{Info:function(){var t=Object(j["a"])(this.info);return t.slice(0,3)},Info2:function(){var t=Object(j["a"])(this.info);return t.slice(3,6)}}),methods:{choicehotel:function(t){this.$router.push({name:"check",params:{id:t}})}},created:function(){this.$store.dispatch("GetInfo")}},E=P,$=(n("7718"),Object(d["a"])(E,O,C,!1,null,null,null)),D=$.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footers"},[i("ul",{staticClass:"footersul"},[i("li",[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:n("a9a2")}}),t._v("台北市大安區新生南路二段86號")]),i("li",[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:n("352d")}}),t._v("02-2345678")]),i("li",[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:n("948a")}}),t._v("homeplace@mail.com")])])])}],T={},A=T,B=(n("68b3"),Object(d["a"])(A,M,G,!1,null,null,null)),U=B.exports,F={name:"home",data:function(){return{height:"height:90vh"}},components:{hotelcard:D,footers:U},created:function(){console.log(window.innerHeight);var t=window.innerHeight;this.height="height:".concat(t-56,"px")}},R=F,z=(n("cccb"),Object(d["a"])(R,y,x,!1,null,null,null)),H=z.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkpage"},[n("checkinfo"),n("footers")],1)},L=[],J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"checkinfo"},[i("div",{staticClass:"titleleft"},[i("div",{staticClass:"left",on:{click:function(e){return t.changeImg("0")}}},[i("img",{attrs:{src:n("305f")}})]),i("b-card",{staticStyle:{width:"464px",height:"554px"}},[i("div",{staticStyle:{display:"flex","justify-content":"center"}},[i("b-card-img",{staticClass:"rounded-0",staticStyle:{width:"400px",height:"400px"},attrs:{src:t.oneinfo.imageUrl[t.imgInd]}})],1),i("b-card-text",{staticClass:"card-text-title"},[t._v(t._s(t.oneinfo.name))]),i("b-card-text",{staticClass:"cardtext"},[t._v("平日/假日")]),i("b-card-text",{staticClass:"cardtext"},[t._v("$"+t._s(t.oneinfo.normalDayPrice)+"/"+t._s(t.oneinfo.holidayPrice))])],1),i("div",{staticClass:"right",on:{click:function(e){return t.changeImg("1")}}},[i("img",{attrs:{src:n("6d5a")}})])],1),i("div",{staticClass:"titleright"},[i("div",[i("ul",{staticStyle:{"list-style":"none",font:"Bold 18px/21px Arial Rounded MT"}},[i("li",[t._v("房客人數限制:"+t._s(t.oneinfo.descriptionShort.GuestMax)+"人")]),i("li",[t._v("床型:"+t._s(t.oneinfo.descriptionShort.Bed[0]))]),i("li",[t._v("衛浴數量:"+t._s(t.oneinfo.descriptionShort["Private-Bath"])+"間")]),i("li",[t._v("房間尺寸:"+t._s(t.oneinfo.descriptionShort.Footage)+"平方")])])]),i("div",{staticClass:"description"},[i("span",[t._v(t._s(t.oneinfo.description))])])])]),i("div",{staticClass:"checkmain"},[i("div",{staticClass:"checkleft"},[i("div",[t._m(0),i("vue-datepicker-local",{attrs:{type:"inline","disabled-date":t.disabledDate},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),i("div",{staticClass:"amenities"},[i("div",[t._m(1),i("ul",{staticStyle:{"list-style":"none"}},t._l(t.haveamenities,function(e,n){return i("li",{key:n},[t._v(t._s(e))])}),0)]),i("div",[t._m(2),i("ul",{staticStyle:{"list-style":"none"}},t._l(t.nothaveamenities,function(e,n){return i("li",{key:n},[t._v(t._s(e))])}),0)])])]),i("div",{staticClass:"checkright"},[t._m(3),i("b-card",{staticClass:"mb-2",staticStyle:{width:"404px",height:"348px","margin-top":"15px"},attrs:{title:"即刻預定",tag:"article"}},[i("div",{staticClass:"checkcard"},[i("div",[i("b-row",{staticClass:"my-1"},[i("b-col",{attrs:{sm:"3"}},[i("label",{attrs:{for:"input-default"}},[t._v("姓名:")])]),i("b-col",{attrs:{sm:"9"}},[i("b-form-input",{attrs:{id:"input-default",placeholder:"Enter your name"}})],1)],1)],1),i("div",[i("b-row",[i("b-col",{attrs:{sm:"3"}},[i("label",{attrs:{for:"input-default"}},[t._v("電話:")])]),i("b-col",{attrs:{sm:"9"}},[i("b-form-input",{attrs:{id:"input-default",type:"tel",placeholder:"Enter your Phone"}})],1)],1)],1),i("div",{staticClass:"datepickers"},[t._v("\n            日期:\n            "),i("div",{staticClass:"picker"},[i("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"開始日期","end-placeholder":"结束日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)]),i("b-button",{staticClass:"checkbtn",attrs:{href:"#",variant:"dark"}},[t._v("預約")])],1)])],1)])])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticStyle:{font:"Bold 20px/23px Arial Rounded MT"}},[t._v("--此房型可預訂狀態")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticStyle:{"list-style":"none"}},[i("li",[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:n("223e")}}),t._v("提供項目\n            ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticStyle:{"list-style":"none"}},[i("li",[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:n("2b8e")}}),t._v("未提供項目\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkinout"},[n("div",{staticClass:"checkinoutinfo"},[n("div",{staticClass:"CheckIn"},[n("div",[t._v("CheckIn")]),n("div",[t._v("15:00-21:00")])]),n("div",{staticStyle:{font:"Bold 40px/21px Arial Rounded MT","margin-bottom":"10px"}},[t._v("|")]),n("div",{staticClass:"CheckOut"},[n("div",[t._v("CheckOut")]),n("div",[t._v("10:00")])])])])}],q=n("c6ca");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(n,!0).forEach(function(e){Object(k["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var W={data:function(){return{imgInd:0,value1:"",time:new Date,have:{},nothave:{}}},computed:Q({},Object(w["b"])(["info","oneinfo"]),{Info:function(){var t=this.info;return t},haveamenities:function(){for(var t in this.oneinfo.amenities)1==this.oneinfo.amenities[t]&&(this.have[t]=t);return this.have},nothaveamenities:function(){for(var t in this.oneinfo.amenities)0==this.oneinfo.amenities[t]&&(this.nothave[t]=t);return this.nothave}}),methods:{disabledDate:function(t){var e=t.getDay();return 0===e||6===e},changeImg:function(t){t&&(this.imgInd>=this.oneinfo.imageUrl.length-1?this.imgInd=0:this.imgInd++),t||(this.imgInd<0?this.imgInd=this.oneinfo.imageUrl.length-1:this.imgInd--)}},created:function(){this.$store.dispatch("GetInfo"),this.$store.dispatch("GetoneInfo",this.$route.params.id)},components:{VueDatepickerLocal:q["a"]}},X=W,Z=(n("214d"),Object(d["a"])(X,J,N,!1,null,null,null)),Y=Z.exports,tt={components:{checkinfo:Y,footers:U}},et=tt,nt=(n("d5c7"),Object(d["a"])(et,V,L,!1,null,null,null)),it=nt.exports;r["default"].use(_["a"]);var at=new _["a"]({routes:[{path:"/",name:"home",component:H},{path:"/checkpage/:id",name:"check",component:it}]}),rt=n("bc3a"),ot=n.n(rt);r["default"].use(w["a"]);var ct="fxbyuQEkpl8EZ08TpW0F3MT86t1HAqXy4I7V2VGdE3PkKF5V6pfhLRzR6zTF",st=new w["a"].Store({getters:{info:function(t){return t.info},oneinfo:function(t){return t.oneinfo}},state:{info:[{imageUrl:""}],oneinfo:{descriptionShort:{GuestMax:"",Bed:[""]},imageUrl:[""]}},mutations:{Mu_GetInfo:function(t,e){t.info=e},Mu_GetoneInfo:function(t,e){t.oneinfo=e}},actions:{GetInfo:function(t){var e=t.commit;ot()({method:"GET",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",responseType:"json",headers:{Acctept:"application/json",Authorization:"Bearer ".concat(ct)}}).then(function(t){console.log(t.data.items),e("Mu_GetInfo",t.data.items)}).catch(function(t){console.log(t)}),console.log("cors problem")},GetoneInfo:function(t,e){var n=t.commit;ot()({method:"GET",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(e),responseType:"json",headers:{Acctept:"application/json",Authorization:"Bearer ".concat(ct)}}).then(function(t){console.log(t.data),n("Mu_GetoneInfo",t.data.room[0])}).catch(function(t){console.log(t)}),console.log("cors problem")}}}),lt=n("5f5b"),ut=(n("f9e3"),n("2dd8"),n("1951"),n("eedf")),ft=n.n(ut),dt=n("c87b"),pt=n.n(dt),ht=n("4897"),vt=n.n(ht);vt.a.use(pt.a),r["default"].use(ft.a),r["default"].use(a.a),r["default"].use(lt["a"]),r["default"].config.productionTip=!1,new r["default"]({router:at,store:st,render:function(t){return t(b)}}).$mount("#app")},"5d5a":function(t,e,n){},"64a9":function(t,e,n){},"68b3":function(t,e,n){"use strict";var i=n("1559"),a=n.n(i);a.a},"6d5a":function(t,e,n){t.exports=n.p+"img/btn_chevronright.520da79d.svg"},7718:function(t,e,n){"use strict";var i=n("5d5a"),a=n.n(i);a.a},"8e54":function(t,e,n){t.exports=n.p+"img/pic_S26427394.3b9b2b60.png"},"948a":function(t,e,n){t.exports=n.p+"img/Icon_email.8e9f374a.svg"},a544:function(t,e,n){},a9a2:function(t,e,n){t.exports=n.p+"img/Icon_place.a8f3bd32.svg"},cccb:function(t,e,n){"use strict";var i=n("d563"),a=n.n(i);a.a},d563:function(t,e,n){},d5c7:function(t,e,n){"use strict";var i=n("2855"),a=n.n(i);a.a},d9bf:function(t,e,n){t.exports=n.p+"img/Icon_facebook.3ce07d5e.svg"},f4fb:function(t,e,n){t.exports=n.p+"img/Icon_instagram.69d18098.svg"},f6f6:function(t,e,n){t.exports=n.p+"img/Icon_chevronsdown.94a2897f.svg"}});
//# sourceMappingURL=app.ad0037da.js.map