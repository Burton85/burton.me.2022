"use strict";(self["webpackChunkburton_me_2022"]=self["webpackChunkburton_me_2022"]||[]).push([[242],{7909:function(e,t,s){s.d(t,{Z:function(){return m}});s(6699);var i=s(3396);const o=["innerHTML"],n=["src"];function c(e,t,s,c,r,a){return(0,i.wg)(),(0,i.iD)("li",{class:"home-item",onClick:t[0]||(t[0]=e=>a.goNext())},[(0,i._)("h3",{class:"home-item-title",innerHTML:s.homeItemList.name},null,8,o),s.homeItemList.checkItems&&s.homeItemList.checkItems[0].name.includes("https")?((0,i.wg)(),(0,i.iD)("img",{key:0,src:s.homeItemList.checkItems[0].name,alt:""},null,8,n)):(0,i.kq)("",!0)])}var r={props:["homeItemList","index","type"],methods:{goNext(){this.$router.push({path:"/"+this.type+"detail",query:{id:this.index}})}}},a=s(89);const h=(0,a.Z)(r,[["render",c]]);var m=h},2242:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var i=s(3396),o=s(2268);const n={class:"sub-page"},c={class:"home-title"},r={class:"home-list"};function a(e,t,s,a,h,m){const l=(0,i.up)("HomeItem");return(0,i.wg)(),(0,i.iD)("section",n,[(0,i._)("h2",c,[(0,i._)("i",{class:(0,o.C_)("ico ico-"+e.$route.path.slice(1))},null,2),(0,i.Uk)(" "+(0,o.zw)(e.$route.path.slice(1).toUpperCase()),1)]),(0,i._)("ul",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.contentList,((t,s)=>((0,i.wg)(),(0,i.j4)(l,{type:e.$route.path.slice(1),homeItemList:t,key:s,index:s},null,8,["type","homeItemList","index"])))),128))])])}var h=s(7909),m=s(7139),l={name:"SubPage",components:{HomeItem:h.Z},computed:{contentList(){let e,t=this.$route.path.slice(1);switch(t){case"project":e=this.getProjectList;break;case"note":e=this.getNoteList;break;case"photo":e=this.getPhotoList;break;default:e=this.getProfileList;break}return e&&"nodata"==e[0].checkItems[0].name?(this.$store.dispatch("getTrelloJson",{name:t}),e):e},...(0,m.Se)(["getProjectList","getNoteList","getPhotoList","getProfileList"])}},u=s(89);const p=(0,u.Z)(l,[["render",a]]);var g=p}}]);
//# sourceMappingURL=242.b7e40664.js.map