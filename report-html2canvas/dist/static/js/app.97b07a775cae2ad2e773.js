webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),l=s("fZjL"),i=s.n(l),n=s("BO1k"),o=s.n(n),v=s("mvHQ"),c=s.n(v),r=s("2Pnh"),p=s.n(r),u={name:"index",data:function(){return{isResetMask:!1,isDeleteMask:!1,deleteData:{},output:null,download:"",href:"",isInputPage:!0,info:{time:"",partSystemRetail:[],partSystemApart:[],allSystemRetail:[],allSystemApart:[],partSystemRetailColor:"green",partSystemApartColor:"green",allSystemRetailColor:"green",allSystemApartColor:"green",eventsAlertColor:"green",eventsClosedColor:"green",eventsFollowColor:"green",eventsServiceColor:"green",events:{eventsAlertRetail:{count:"",desc:[{value:""}]},eventsAlertApart:{count:"",desc:[{value:""}]},eventsClosedRetail:{count:"",desc:[{value:""}]},eventsClosedApart:{count:"",desc:[{value:""}]},eventsFollowRetail:{count:"",desc:[{value:""}]},eventsFollowApart:{count:"",desc:[{value:""}]},eventsServiceRetail:{count:"",desc:[{value:""}]},eventsServiceApart:{count:"",desc:[{value:""}]}},otherNotices:[{value:""}],maxCount:0},infoPre:{time:"",partSystemRetail:[],partSystemApart:[],allSystemRetail:[],allSystemApart:[],partSystemRetailColor:"green",partSystemApartColor:"green",allSystemRetailColor:"green",allSystemApartColor:"green",eventsAlertColor:"green",eventsClosedColor:"green",eventsFollowColor:"green",eventsServiceColor:"green",events:{eventsAlertRetail:{count:"",desc:[{value:""}]},eventsAlertApart:{count:"",desc:[{value:""}]},eventsClosedRetail:{count:"",desc:[{value:""}]},eventsClosedApart:{count:"",desc:[{value:""}]},eventsFollowRetail:{count:"",desc:[{value:""}]},eventsFollowApart:{count:"",desc:[{value:""}]},eventsServiceRetail:{count:"",desc:[{value:""}]},eventsServiceApart:{count:"",desc:[{value:""}]}},otherNotices:[{value:""}],maxCount:0},value:{partSystemRetail:"",partSystemApart:"",allSystemRetail:"",allSystemApart:""}}},created:function(){this.info.time=this.getDate();var t=JSON.parse(localStorage.getItem("reportData"+this.info.time)||null);t&&(this.info=t,this.value.partSystemRetail=this.info.partSystemRetail.join("&"),this.value.partSystemApart=this.info.partSystemApart.join("&"),this.value.allSystemRetail=this.info.allSystemRetail.join("&"),this.value.allSystemApart=this.info.allSystemApart.join("&"))},methods:{clearData:function(){this.isResetMask=!1,this.info={time:"",partSystemRetail:[],partSystemApart:[],allSystemRetail:[],allSystemApart:[],partSystemRetailColor:"green",partSystemApartColor:"green",allSystemRetailColor:"green",allSystemApartColor:"green",eventsAlertColor:"green",eventsClosedColor:"green",eventsFollowColor:"green",eventsServiceColor:"green",events:{eventsAlertRetail:{count:"",desc:[{value:""}]},eventsAlertApart:{count:"",desc:[{value:""}]},eventsClosedRetail:{count:"",desc:[{value:""}]},eventsClosedApart:{count:"",desc:[{value:""}]},eventsFollowRetail:{count:"",desc:[{value:""}]},eventsFollowApart:{count:"",desc:[{value:""}]},eventsServiceRetail:{count:"",desc:[{value:""}]},eventsServiceApart:{count:"",desc:[{value:""}]}},otherNotices:[{value:""}],maxCount:0},this.info.time=this.getDate(),this.value={partSystemRetail:"",partSystemApart:"",allSystemRetail:"",allSystemApart:""}},createPic:function(){var t=this,e=[],s=!0,a=!1,l=void 0;try{for(var n,v=o()(i()(this.info.events));!(s=(n=v.next()).done);s=!0){var r=n.value;e.push(+this.info.events[r].count)}}catch(t){a=!0,l=t}finally{try{!s&&v.return&&v.return()}finally{if(a)throw l}}this.info.maxCount=Math.max.apply(Math,e),this.value.partSystemRetail&&(this.info.partSystemRetail=this.value.partSystemRetail.split("&")),this.value.partSystemApart&&(this.info.partSystemApart=this.value.partSystemApart.split("&")),this.value.allSystemRetail&&(this.info.allSystemRetail=this.value.allSystemRetail.split("&")),this.value.allSystemApart&&(this.info.allSystemApart=this.value.allSystemApart.split("&")),this.isInputPage=!1,localStorage.setItem("reportData"+this.info.time,c()(this.info)),setTimeout(function(){var e=t.$refs.print,s=t.$refs.canvasImg;p()(e).then(function(e){s.appendChild(e),t.href=e.toDataURL("image/png"),t.download="运营简报"+t.info.time})},200)},addDesc:function(t){"otherNotices"==t?this.info[t].push({value:""}):this.info.events[t].desc.push({value:""})},showDeteleMask:function(t,e){this.isDeleteMask=!0,this.deleteData={type:t,index:e}},deleteDesc:function(){this.isDeleteMask=!1;var t=this.deleteData.type,e=this.deleteData.index;"otherNotices"==t?this.info[t].splice(e,1):this.info.events[t].desc.splice(e,1)},getDate:function(){var t=new Date,e=t.getMonth()+1,s=t.getDate();return e<10&&(e="0"+e),s<10&&(s="0"+s),t.getFullYear()+"-"+e+"-"+s},changeColor:function(t,e){this.info[t]=e}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header"},[s("div",{staticClass:"page-header-inner"},[t._v("\n            每日运营简报\n            "),s("div",{staticClass:"el-rt"},[t.isInputPage?s("div",[s("div",{staticClass:"btn btn-border",on:{click:function(e){t.isResetMask=!0}}},[t._v("重置参数")]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.createPic}},[t._v("生成图片")])]):s("div",[s("div",{staticClass:"btn btn-border",on:{click:function(e){t.isInputPage=!0}}},[t._v("返回修改")]),t._v(" "),s("a",{ref:"btnDownload",staticClass:"btn",attrs:{download:t.download,href:t.href}},[t._v("下载图片")])])])])]),t._v(" "),s("div",{ref:"print",staticClass:"wrap-page"},[t._m(0),t._v(" "),t.isInputPage?s("div",{staticClass:"wrap-page-input wrap-container"},[s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("简报日期")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.time,expression:"info.time"}],staticClass:"input",attrs:{type:"date",placeholder:"请输入简报日期",pattern:"yyyy/mm/dd"},domProps:{value:t.info.time},on:{input:function(e){e.target.composing||t.$set(t.info,"time",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.partSystemRetailColor},[t._v("灰度关键子系统-零售域")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("partSystemRetailColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("partSystemRetailColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("partSystemRetailColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("零售域")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value.partSystemRetail,expression:"value.partSystemRetail"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"},domProps:{value:t.value.partSystemRetail},on:{input:function(e){e.target.composing||t.$set(t.value,"partSystemRetail",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.partSystemApartColor},[t._v("灰度关键子系统-平台域")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("partSystemApartColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("partSystemApartColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("partSystemApartColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("平台域")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value.partSystemApart,expression:"value.partSystemApart"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"},domProps:{value:t.value.partSystemApart},on:{input:function(e){e.target.composing||t.$set(t.value,"partSystemApart",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.allSystemRetailColor},[t._v("全量关键子系统-零售域")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("allSystemRetailColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("allSystemRetailColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("allSystemRetailColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("零售域")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value.allSystemRetail,expression:"value.allSystemRetail"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"},domProps:{value:t.value.allSystemRetail},on:{input:function(e){e.target.composing||t.$set(t.value,"allSystemRetail",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.allSystemApartColor},[t._v("灰度关键子系统-平台域")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("allSystemApartColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("allSystemApartColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("allSystemApartColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("平台域")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value.allSystemApart,expression:"value.allSystemApart"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"},domProps:{value:t.value.allSystemApart},on:{input:function(e){e.target.composing||t.$set(t.value,"allSystemApart",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.eventsAlertColor},[t._v("处理告警事件单量")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("eventsAlertColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("eventsAlertColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("eventsAlertColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("零售域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsAlertRetail.count,expression:"info.events.eventsAlertRetail.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入零售域处理告警事件单量"},domProps:{value:t.info.events.eventsAlertRetail.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsAlertRetail,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsAlertRetail.desc,function(e,a){return s("label",{key:a+"eventsAlertRetail",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"零售域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条零售域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsAlertRetail")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsAlertRetail",a)}}})])}),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("平台域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsAlertApart.count,expression:"info.events.eventsAlertApart.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入平台域处理告警事件单量"},domProps:{value:t.info.events.eventsAlertApart.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsAlertApart,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsAlertApart.desc,function(e,a){return s("label",{key:a+"eventsAlertApart",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"平台域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条平台域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsAlertApart")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsAlertApart",a)}}})])}),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.eventsClosedColor},[t._v("关闭事件单量")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("eventsClosedColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("eventsClosedColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("eventsClosedColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("零售域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsClosedRetail.count,expression:"info.events.eventsClosedRetail.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入零售域关闭事件单量单量"},domProps:{value:t.info.events.eventsClosedRetail.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsClosedRetail,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsClosedRetail.desc,function(e,a){return s("label",{key:a+"eventsClosedRetail",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"零售域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条零售域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsClosedRetail")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsClosedRetail",a)}}})])}),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("平台域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsClosedApart.count,expression:"info.events.eventsClosedApart.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入平台域关闭事件单量单量"},domProps:{value:t.info.events.eventsClosedApart.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsClosedApart,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsClosedApart.desc,function(e,a){return s("label",{key:a+"eventsClosedApart",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"平台域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条平台域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsClosedApart")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsClosedApart",a)}}})])}),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.eventsFollowColor},[t._v("待跟进事件单量")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("eventsFollowColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("eventsFollowColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("eventsFollowColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("零售域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsFollowRetail.count,expression:"info.events.eventsFollowRetail.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入零售域待跟进事件单量单量"},domProps:{value:t.info.events.eventsFollowRetail.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsFollowRetail,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsFollowRetail.desc,function(e,a){return s("label",{key:a+"eventsFollowRetail",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"零售域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条零售域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsFollowRetail")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsFollowRetail",a)}}})])}),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("平台域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsFollowApart.count,expression:"info.events.eventsFollowApart.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入平台域待跟进事件单量单量"},domProps:{value:t.info.events.eventsFollowApart.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsFollowApart,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsFollowApart.desc,function(e,a){return s("label",{key:a+"eventsFollowApart",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"平台域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条平台域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsFollowApart")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsFollowApart",a)}}})])}),t._v(" "),s("div",{staticClass:"wrap-divider-title"},[s("span",{staticClass:"divider-title",class:t.info.eventsServiceColor},[t._v("处理服务请求单量")]),t._v(" "),s("span",{staticClass:"choose-title"},[t._v("更换标签颜色")]),t._v(" "),s("span",{staticClass:"choose green",on:{click:function(e){t.changeColor("eventsServiceColor","green")}}}),t._v(" "),s("span",{staticClass:"choose yellow",on:{click:function(e){t.changeColor("eventsServiceColor","yellow")}}}),t._v(" "),s("span",{staticClass:"choose red",on:{click:function(e){t.changeColor("eventsServiceColor","red")}}})]),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("零售域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsServiceRetail.count,expression:"info.events.eventsServiceRetail.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入零售域处理服务请求单量单量"},domProps:{value:t.info.events.eventsServiceRetail.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsServiceRetail,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsServiceRetail.desc,function(e,a){return s("label",{key:a+"eventsServiceRetail",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"零售域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条零售域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsServiceRetail")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsServiceRetail",a)}}})])}),t._v(" "),s("label",{staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v("平台域单量")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.events.eventsServiceApart.count,expression:"info.events.eventsServiceApart.count"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入平台域处理服务请求单量单量"},domProps:{value:t.info.events.eventsServiceApart.count},on:{input:function(e){e.target.composing||t.$set(t.info.events.eventsServiceApart,"count",e.target.value)}}})]),t._v(" "),t._l(t.info.events.eventsServiceApart.desc,function(e,a){return s("label",{key:a+"eventsServiceApart",staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"平台域描述":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条平台域相关描述"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("eventsServiceApart")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("eventsServiceApart",a)}}})])}),t._v(" "),t._m(1),t._v(" "),t._l(t.info.otherNotices,function(e,a){return s("label",{key:a,staticClass:"input-label"},[s("span",{staticClass:"input-title"},[t._v(t._s(0==a?"其他关注事项":""))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入一条其他关注事项"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}}),t._v(" "),s("span",0==a?{staticClass:"icon-add",on:{click:function(e){t.addDesc("otherNotices")}}}:{staticClass:"icon-delete",on:{click:function(e){t.showDeteleMask("otherNotices",a)}}})])})],2):t.isInputPage?t._e():s("div",{staticClass:"wrap-page-content"},[s("header",{staticClass:"wrap-page-header"},[s("h2",{staticClass:"header-title"},[t._v("运维简报")]),t._v(" "),s("div",{staticClass:"header-time"},[t._v(t._s(t.info.time))])]),t._v(" "),s("div",{staticClass:"display-flex"},[s("div",{staticClass:"flex wrap-container"},[s("h3",{staticClass:"container-title"},[t._v("灰度关键子系统")]),t._v(" "),s("div",{staticClass:"display-flex flex-start"},[s("div",{staticClass:"flex wrap-inner"},[s("h4",{staticClass:"inner-tips",class:t.info.partSystemRetailColor},[t._v("零售域（"+t._s(t.info.partSystemRetail.length||0)+"个）")]),t._v(" "),s("div",{staticClass:"list"},[t._l(t.info.partSystemRetail,function(e,a){return t.info.partSystemRetail.length>0?s("div",{key:a,staticClass:"item"},[t._v(t._s(e))]):t._e()}),t._v(" "),0==t.info.partSystemRetail.length?s("div",{staticClass:"item color-description"},[t._v("无")]):t._e()],2)]),t._v(" "),s("div",{staticClass:"flex wrap-inner"},[s("h4",{staticClass:"inner-tips",class:t.info.partSystemApartColor},[t._v("平台域（"+t._s(t.info.partSystemApart.length||0)+"个）")]),t._v(" "),s("div",{staticClass:"list"},[t._l(t.info.partSystemApart,function(e,a){return s("div",{key:a,staticClass:"item"},[t._v(t._s(e))])}),t._v(" "),0==t.info.partSystemApart.length?s("div",{staticClass:"item color-description"},[t._v("无")]):t._e()],2)])])]),t._v(" "),s("div",{staticClass:"flex wrap-container"},[s("h3",{staticClass:"container-title"},[t._v("全量关键子系统")]),t._v(" "),s("div",{staticClass:"display-flex flex-start"},[s("div",{staticClass:"flex wrap-inner"},[s("h4",{staticClass:"inner-tips",class:t.info.allSystemRetailColor},[t._v("零售域（"+t._s(t.info.allSystemRetail.length||0)+"个）")]),t._v(" "),s("div",{staticClass:"list"},[t._l(t.info.allSystemRetail,function(e,a){return s("div",{key:a,staticClass:"item"},[t._v(t._s(e))])}),t._v(" "),0==t.info.allSystemRetail.length?s("div",{staticClass:"item color-description"},[t._v("无")]):t._e()],2)]),t._v(" "),s("div",{staticClass:"flex wrap-inner"},[s("h4",{staticClass:"inner-tips",class:t.info.allSystemApartColor},[t._v("平台域（"+t._s(t.info.allSystemApart.length||0)+"个）")]),t._v(" "),s("div",{staticClass:"list"},[t._l(t.info.allSystemApart,function(e,a){return s("div",{key:a,staticClass:"item"},[t._v(t._s(e))])}),t._v(" "),0==t.info.allSystemApart.length?s("div",{staticClass:"item color-description"},[t._v("无")]):t._e()],2)])])])]),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),s("div",{staticClass:"wrap-container"},[s("h3",{staticClass:"container-title"},[t._v("事件单量")]),t._v(" "),s("div",{staticClass:"display-flex flex-start"},[s("div",{staticClass:"flex wrap-inner",class:t.info.eventsAlertColor},[s("h4",{staticClass:"inner-tips"},[t._v("处理告警事件单量")]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("零售域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsAlertRetail.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsAlertRetail.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsAlertRetail.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))]),t._v(" "),s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("平台域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsAlertApart.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsAlertApart.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsAlertApart.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))])])]),t._v(" "),s("div",{staticClass:"flex wrap-inner",class:t.info.eventsClosedColor},[s("h4",{staticClass:"inner-tips"},[t._v("关闭事件单量")]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("零售域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsClosedRetail.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsClosedRetail.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsClosedRetail.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))]),t._v(" "),s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("平台域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsClosedApart.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsClosedApart.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsClosedApart.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))])])])]),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),s("div",{staticClass:"display-flex flex-start"},[s("div",{staticClass:"flex wrap-inner",class:t.info.eventsFollowColor},[s("h4",{staticClass:"inner-tips"},[t._v("待跟进事件单量")]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("零售域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsFollowRetail.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsFollowRetail.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsFollowRetail.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))]),t._v(" "),s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("平台域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsFollowApart.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsFollowApart.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsFollowApart.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))])])]),t._v(" "),s("div",{staticClass:"flex wrap-inner",class:t.info.eventsServiceColor},[s("h4",{staticClass:"inner-tips"},[t._v("处理服务请求单")]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("零售域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsServiceRetail.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsServiceRetail.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsServiceRetail.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))]),t._v(" "),s("div",{staticClass:"wrap-detail"},[s("div",{staticClass:"detail-header"},[s("span",{staticClass:"detail-title"},[t._v("平台域")]),t._v(" "),s("div",{staticClass:"detail-bar",style:"width:"+ +t.info.events.eventsServiceApart.count/t.info.maxCount*300+"px"}),t._v(" "),s("span",{staticClass:"detail-num"},[t._v(t._s(t.info.events.eventsServiceApart.count||0)+"个")])]),t._v(" "),s("ul",{staticClass:"detail-list"},t._l(t.info.events.eventsServiceApart.desc,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))])])])])]),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),s("div",{staticClass:"wrap-container"},[s("h3",{staticClass:"container-title"},[t._v("其他关注事项")]),t._v(" "),s("ul",{staticClass:"detail-list secondary"},t._l(t.info.otherNotices,function(e,a){return e.value?s("li",{key:a,staticClass:"detail-item"},[t._v(t._s(e.value))]):s("li",{staticClass:"color-description"},[t._v("无")])}))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isInputPage,expression:"!isInputPage"}],ref:"canvasImg",staticClass:"canvas-img"})]),t._v(" "),s("div",{staticClass:"wrap-bottom"},[t._v("有问题请联系@Apollo-zz")]),t._v(" "),t.isResetMask?s("div",{staticClass:"mask"},[s("div",{staticClass:"pop"},[s("div",{staticClass:"pop-content"},[t._v("\n                确认重置参数吗？\n            ")]),t._v(" "),s("div",{staticClass:"wrap-btn"},[s("div",{staticClass:"pop-btn color-theme",on:{click:function(e){t.isResetMask=!1}}},[t._v("取消")]),t._v(" "),s("div",{staticClass:"pop-btn",on:{click:t.clearData}},[t._v("确定")])])])]):t._e(),t._v(" "),t.isDeleteMask?s("div",{staticClass:"mask"},[s("div",{staticClass:"pop"},[s("div",{staticClass:"pop-content"},[t._v("\n                确认删除此条信息吗？\n            ")]),t._v(" "),s("div",{staticClass:"wrap-btn"},[s("div",{staticClass:"pop-btn color-theme",on:{click:function(e){t.isDeleteMask=!1}}},[t._v("取消")]),t._v(" "),s("div",{staticClass:"pop-btn",on:{click:function(e){t.deleteDesc()}}},[t._v("确定")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg"},[e("div",{staticClass:"bg-top"}),this._v(" "),e("div",{staticClass:"bg-bottom"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap-divider-title"},[e("div",{staticClass:"divider-title"},[this._v("其他关注事项")])])}]};var C=s("VU/8")(u,d,!1,function(t){s("wl+S")},null,null).exports,_=s("/ocq");a.a.use(_.a);var m=new _.a({mode:"history",routes:[{path:"/",name:"index",component:C}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:m,render:function(t){return t(C)}})},"wl+S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.97b07a775cae2ad2e773.js.map