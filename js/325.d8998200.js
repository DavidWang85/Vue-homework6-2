"use strict";(self["webpackChunkw6_2"]=self["webpackChunkw6_2"]||[]).push([[325],{530:function(a,t,n){function e(a){return{all:a=a||new Map,on:function(t,n){var e=a.get(t);e?e.push(n):a.set(t,[n])},off:function(t,n){var e=a.get(t);e&&(n?e.splice(e.indexOf(n)>>>0,1):a.set(t,[]))},emit:function(t,n){var e=a.get(t);e&&e.slice().map((function(a){a(n)})),(e=a.get("*"))&&e.slice().map((function(a){a(t,n)}))}}}n.d(t,{Z:function(){return s}});const r=e();var s=r},325:function(a,t,n){n.r(t),n.d(t,{default:function(){return H}});var e=n(252);function r(a,t,n,r,s,l){const o=(0,e.up)("FrontNavbar"),c=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(o),(0,e.Wm)(c)],64)}var s=n(577);const l={class:"navbar navbar-expand-lg navbar-light bg-light"},o={class:"container-fluid"},c=(0,e.Uk)("老人安養中心"),i=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},v={class:"navbar-nav"},d={class:"nav-item"},g=(0,e.Uk)("Home"),b={class:"nav-item"},p=(0,e.Uk)("產品頁面"),f={class:"nav-item"},m=(0,e.Uk)("購物車"),_={class:"nav-item"},h=(0,e.Uk)("登入"),k={type:"button",class:"btn btn-primary"},w=(0,e.Uk)(" 結帳 "),W={class:"badge rounded-pill bg-warning text-dark"};function U(a,t,n,r,U,x){const C=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",l,[(0,e._)("div",o,[(0,e.Wm)(C,{class:"navbar-brand",to:"/"},{default:(0,e.w5)((()=>[c])),_:1}),i,(0,e._)("div",u,[(0,e._)("ul",v,[(0,e._)("li",d,[(0,e.Wm)(C,{class:"nav-link",to:"/"},{default:(0,e.w5)((()=>[g])),_:1})]),(0,e._)("li",b,[(0,e.Wm)(C,{class:"nav-link",to:"/products"},{default:(0,e.w5)((()=>[p])),_:1})]),(0,e._)("li",f,[(0,e.Wm)(C,{class:"nav-link",to:"/cart"},{default:(0,e.w5)((()=>[m])),_:1})]),(0,e._)("li",_,[(0,e.Wm)(C,{class:"nav-link",to:"/login"},{default:(0,e.w5)((()=>[h])),_:1})])])]),(0,e._)("button",k,[w,(0,e._)("span",W,(0,s.zw)(U.cartData.carts.length),1)])])])}var x=n(530),C={data(){return{cartData:{carts:[]}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2//api/david-frontend/cart").then((a=>{console.log(a),this.cartData=a.data.data}))}},mounted(){this.getCart(),x.Z.on("get-cart",(()=>{this.getCart()}))}},D=n(744);const N=(0,D.Z)(C,[["render",U]]);var Z=N,y={components:{FrontNavbar:Z}};const F=(0,D.Z)(y,[["render",r]]);var H=F}}]);
//# sourceMappingURL=325.d8998200.js.map