<script>
import html2canvas from 'html2canvas';
export default {
    name: 'index',
    data () {
        return {
            isResetMask: false,
            isDeleteMask: false,
            deleteData: {},
            output: null,
            download: '',
            href: '',
            isInputPage: true,
            info: {
                time: '',
                partSystemRetail: [],
                partSystemApart: [],
                allSystemRetail: [],
                allSystemApart: [],
                partSystemRetailColor: 'green',
                partSystemApartColor: 'green',
                allSystemRetailColor: 'green',
                allSystemApartColor: 'green',
                eventsAlertColor: 'green',
                eventsClosedColor: 'green',
                eventsFollowColor: 'green',
                eventsServiceColor: 'green',
                events: {
                    eventsAlertRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsAlertApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsClosedRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsClosedApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsFollowRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsFollowApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsServiceRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsServiceApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    }
                },
                otherNotices: [{
                    value: ''
                }],
                maxCount: 0
            },
            infoPre: {
                time: '',
                partSystemRetail: [],
                partSystemApart: [],
                allSystemRetail: [],
                allSystemApart: [],
                partSystemRetailColor: 'green',
                partSystemApartColor: 'green',
                allSystemRetailColor: 'green',
                allSystemApartColor: 'green',
                eventsAlertColor: 'green',
                eventsClosedColor: 'green',
                eventsFollowColor: 'green',
                eventsServiceColor: 'green',
                events: {
                    eventsAlertRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsAlertApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsClosedRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsClosedApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsFollowRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsFollowApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsServiceRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsServiceApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    }
                },
                otherNotices: [{
                    value: ''
                }],
                maxCount: 0
            },
            value: {
                partSystemRetail: '',
                partSystemApart: '',
                allSystemRetail: '',
                allSystemApart: '',
            },
        }
    },
    created(){
        this.info.time = this.getDate();
        let data = JSON.parse(localStorage.getItem(`reportData${this.info.time}`) || null);
        if(!!data){
            this.info = data;
            this.value.partSystemRetail = this.info.partSystemRetail.join('&');
            this.value.partSystemApart = this.info.partSystemApart.join('&');
            this.value.allSystemRetail = this.info.allSystemRetail.join('&');
            this.value.allSystemApart = this.info.allSystemApart.join('&');
        }
    },
    methods: {
        // 重置参数
        clearData(){
            this.isResetMask = false;
            this.info = {
                time: '',
                partSystemRetail: [],
                partSystemApart: [],
                allSystemRetail: [],
                allSystemApart: [],
                partSystemRetailColor: 'green',
                partSystemApartColor: 'green',
                allSystemRetailColor: 'green',
                allSystemApartColor: 'green',
                eventsAlertColor: 'green',
                eventsClosedColor: 'green',
                eventsFollowColor: 'green',
                eventsServiceColor: 'green',
                events: {
                    eventsAlertRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsAlertApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsClosedRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsClosedApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsFollowRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsFollowApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsServiceRetail: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    },
                    eventsServiceApart: {
                        count: '',
                        desc: [{
                            value: ''
                        }]
                    }
                },
                otherNotices: [{
                    value: ''
                }],
                maxCount: 0
            };
            this.info.time = this.getDate();
            this.value = {
                partSystemRetail: '',
                partSystemApart: '',
                allSystemRetail: '',
                allSystemApart: '',
            };
        },
        // 生成图片
        createPic(){
            let countArr = [];
            this.href = '';
            for (let key of Object.keys(this.info.events)) {
                countArr.push(+this.info.events[key].count);
            }
            this.info.maxCount = Math.max(...countArr);
            if(!!this.value.partSystemRetail){
                this.info.partSystemRetail = this.value.partSystemRetail.split('&');
            }
            if(!!this.value.partSystemApart){
                this.info.partSystemApart = this.value.partSystemApart.split('&');
            }
            if(!!this.value.allSystemRetail){
                this.info.allSystemRetail = this.value.allSystemRetail.split('&');
            }
            if(!!this.value.allSystemApart){
                 this.info.allSystemApart = this.value.allSystemApart.split('&');
            }
            this.isInputPage = false;
            localStorage.setItem(`reportData${this.info.time}`,JSON.stringify(this.info));
            setTimeout(()=>{
                const el = this.$refs.print;
                // const canvasImg = this.$refs.canvasImg;
                html2canvas(el).then(canvas => {
                    // canvasImg.appendChild(canvas);
                    this.href=canvas.toDataURL("image/png");
                    this.download =`运营简报${this.info.time}`;
                });
            },200);
            
        },
        // 增加多项
        addDesc(type){
            if(type == 'otherNotices'){
                this.info[type].push({
                    value: ''
                })
            }else{
                this.info.events[type].desc.push({
                    value: ''
                })
            }
        },
        showDeteleMask(type,index){
            this.isDeleteMask = true;
            this.deleteData = {
                type: type,
                index: index
            }
        },
        // 删除多项
        deleteDesc(){
            this.isDeleteMask = false;
            let type = this.deleteData.type,
                index = this.deleteData.index
            if(type == 'otherNotices'){
                this.info[type].splice(index,1);
            }else{
                this.info.events[type].desc.splice(index,1);
            }
        },
        // 获取当前时间
        getDate(){
            let date = new Date();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            if(month < 10){
                month = '0' + month;
            }
            if(day < 10){
                day = '0' + day;
            }
            return `${date.getFullYear()}-${month}-${day}`;
        },
        changeColor(string,color){
            this.info[string] = color;
        }
    }
}
</script>
<template>
<div>
    <div class="page-header">
        <div class="page-header-inner">
            每日运营简报
            <div class="el-rt">
                <div v-if="isInputPage">
                    <div class="btn btn-border" @click="isResetMask = true">重置参数</div>
                    <div class="btn" @click="createPic">生成图片</div>
                </div>
                <div v-else>
                    <div class="btn btn-border" @click="isInputPage = true">返回修改</div>
                    <a class="btn" ref="btnDownload" :download="download" :href="href">下载图片</a>
                </div>
            </div>
        </div>
    </div>
    <div class="wrap-page" ref="print">
        <div class="bg">
            <div class="bg-top"></div>
            <div class="bg-bottom"></div>
        </div>
        <div class="wrap-page-input wrap-container" v-if="isInputPage">
            <label class="input-label">
                <span class="input-title">简报日期</span>
                <input class="input" type="date" v-model="info.time" placeholder="请输入简报日期" pattern="yyyy/mm/dd">
            </label>
            <!-- 子系统 -->
            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.partSystemRetailColor">灰度关键子系统-零售域</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('partSystemRetailColor','green')"></span>
                <span class="choose yellow" @click="changeColor('partSystemRetailColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('partSystemRetailColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">零售域</span>
                <textarea class="input" type="text" v-model="value.partSystemRetail" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>
            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.partSystemApartColor">灰度关键子系统-平台域</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('partSystemApartColor','green')"></span>
                <span class="choose yellow" @click="changeColor('partSystemApartColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('partSystemApartColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">平台域</span>
                <textarea class="input" type="text" v-model="value.partSystemApart" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>
            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.allSystemRetailColor">全量关键子系统-零售域</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('allSystemRetailColor','green')"></span>
                <span class="choose yellow" @click="changeColor('allSystemRetailColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('allSystemRetailColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">零售域</span>
                <textarea class="input" type="text" v-model="value.allSystemRetail" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>
            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.allSystemApartColor">灰度关键子系统-平台域</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('allSystemApartColor','green')"></span>
                <span class="choose yellow" @click="changeColor('allSystemApartColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('allSystemApartColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">平台域</span>
                <textarea class="input" type="text" v-model="value.allSystemApart" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>

            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.eventsAlertColor">处理告警事件单量</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('eventsAlertColor','green')"></span>
                <span class="choose yellow" @click="changeColor('eventsAlertColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('eventsAlertColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="info.events.eventsAlertRetail.count" placeholder="请输入零售域处理告警事件单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsAlertRetail.desc" :key="index + 'eventsAlertRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsAlertRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsAlertRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="info.events.eventsAlertApart.count" placeholder="请输入平台域处理告警事件单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsAlertApart.desc" :key="index + 'eventsAlertApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsAlertApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsAlertApart',index)"></span>
            </label>

            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.eventsClosedColor">关闭事件单量</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('eventsClosedColor','green')"></span>
                <span class="choose yellow" @click="changeColor('eventsClosedColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('eventsClosedColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="info.events.eventsClosedRetail.count" placeholder="请输入零售域关闭事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsClosedRetail.desc" :key="index + 'eventsClosedRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsClosedRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsClosedRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="info.events.eventsClosedApart.count" placeholder="请输入平台域关闭事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsClosedApart.desc" :key="index + 'eventsClosedApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsClosedApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsClosedApart',index)"></span>
            </label>

            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.eventsFollowColor">待跟进事件单量</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('eventsFollowColor','green')"></span>
                <span class="choose yellow" @click="changeColor('eventsFollowColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('eventsFollowColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="info.events.eventsFollowRetail.count" placeholder="请输入零售域待跟进事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsFollowRetail.desc" :key="index + 'eventsFollowRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsFollowRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsFollowRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="info.events.eventsFollowApart.count" placeholder="请输入平台域待跟进事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsFollowApart.desc" :key="index + 'eventsFollowApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsFollowApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsFollowApart',index)"></span>
            </label>

            <div class="wrap-divider-title">
                <span class="divider-title" :class="info.eventsServiceColor">处理服务请求单量</span>
                <span class="choose-title">更换标签颜色</span>
                <span class="choose green" @click="changeColor('eventsServiceColor','green')"></span>
                <span class="choose yellow" @click="changeColor('eventsServiceColor','yellow')"></span>
                <span class="choose red"  @click="changeColor('eventsServiceColor','red')"></span>
            </div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="info.events.eventsServiceRetail.count" placeholder="请输入零售域处理服务请求单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsServiceRetail.desc" :key="index + 'eventsServiceRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsServiceRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsServiceRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="info.events.eventsServiceApart.count" placeholder="请输入平台域处理服务请求单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in info.events.eventsServiceApart.desc" :key="index + 'eventsServiceApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsServiceApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsServiceApart',index)"></span>
            </label>

            <div class="wrap-divider-title">
                <div class="divider-title">其他关注事项</div>
            </div>
            <label class="input-label" v-for="(item,index) in info.otherNotices" :key="index">
                <span class="input-title">{{index == 0 ? '其他关注事项' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条其他关注事项">
                <span class="icon-add" v-if="index == 0" @click="addDesc('otherNotices')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('otherNotices',index)"></span>
            </label>
        </div>
        <div class="wrap-page-content" v-else-if="!isInputPage">
            <header class="wrap-page-header">
                <h2 class="header-title">运维简报</h2>
                <div class="header-time">{{info.time}}</div>
            </header>
            <div class="display-flex">
                <div class="flex wrap-container">
                    <h3 class="container-title">灰度关键子系统</h3>
                    <div class="display-flex flex-start">
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips" :class="info.partSystemRetailColor">零售域（{{info.partSystemRetail.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in info.partSystemRetail" :key="index" v-if="info.partSystemRetail.length>0">{{item}}</div>
                                <div class="item color-description" v-if="info.partSystemRetail.length == 0">无</div>
                            </div>
                        </div>
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips" :class="info.partSystemApartColor">平台域（{{info.partSystemApart.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in info.partSystemApart" :key="index">{{item}}</div>
                                <div class="item color-description" v-if="info.partSystemApart.length == 0">无</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex wrap-container">
                    <h3 class="container-title">全量关键子系统</h3>
                    <div class="display-flex flex-start">
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips" :class="info.allSystemRetailColor">零售域（{{info.allSystemRetail.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in info.allSystemRetail" :key="index">{{item}}</div>
                                <div class="item color-description" v-if="info.allSystemRetail.length == 0">无</div>
                            </div>
                        </div>
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips" :class="info.allSystemApartColor">平台域（{{info.allSystemApart.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in info.allSystemApart" :key="index">{{item}}</div>
                                <div class="item color-description" v-if="info.allSystemApart.length == 0">无</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="wrap-container">
                <h3 class="container-title">事件单量</h3>
                <div class="display-flex flex-start">
                    <div class="flex wrap-inner" :class="info.eventsAlertColor">
                        <h4 class="inner-tips">处理告警事件单量</h4>
                        <div class="list">
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">零售域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsAlertRetail.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsAlertRetail.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsAlertRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">平台域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsAlertApart.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsAlertApart.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsAlertApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex wrap-inner" :class="info.eventsClosedColor">
                        <h4 class="inner-tips">关闭事件单量</h4>
                        <div class="list">
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">零售域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsClosedRetail.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsClosedRetail.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsClosedRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">平台域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsClosedApart.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsClosedApart.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsClosedApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="divider"></div>
                <div class="display-flex flex-start">
                    <div class="flex wrap-inner" :class="info.eventsFollowColor">
                        <h4 class="inner-tips">待跟进事件单量</h4>
                        <div class="list">
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">零售域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsFollowRetail.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsFollowRetail.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsFollowRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">平台域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsFollowApart.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsFollowApart.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsFollowApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex wrap-inner" :class="info.eventsServiceColor">
                        <h4 class="inner-tips">处理服务请求单</h4>
                        <div class="list">
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">零售域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsServiceRetail.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsServiceRetail.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsServiceRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                            <div class="wrap-detail">
                                <div class="detail-header">
                                    <span class="detail-title">平台域</span>
                                    <div class="detail-bar" :style="'width:'+ (+info.events.eventsServiceApart.count/info.maxCount*300) +'px'"></div>
                                    <span class="detail-num">{{info.events.eventsServiceApart.count || 0}}个</span>
                                </div>
                                <ul class="detail-list">
                                    <li class="detail-item" v-for="(item,index) in info.events.eventsServiceApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                    <li class="color-description" v-else>无</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="wrap-container">
                <h3 class="container-title">其他关注事项</h3>
                <ul class="detail-list secondary">
                    <li class="detail-item" v-for="(item,index) in info.otherNotices" :key="index" v-if="!!item.value">{{item.value}}</li>
                    <li class="color-description" v-else>无</li>
                </ul>
            </div>
        </div>
        <img class="canvas-img" v-show="!isInputPage && !!href" :src="href"/>
    </div>
    
    <div class="wrap-bottom">有问题请联系@Apollo-zz</div>
    <div class="mask" v-if="isResetMask">
        <div class="pop">
            <div class="pop-content">
                确认重置参数吗？
            </div>
            <div class="wrap-btn">
                <div class="pop-btn color-theme" @click="isResetMask = false">取消</div>
                <div class="pop-btn" @click="clearData">确定</div>
            </div>
        </div>
    </div>
    <div class="mask" v-if="isDeleteMask">
        <div class="pop">
            <div class="pop-content">
                确认删除此条信息吗？
            </div>
            <div class="wrap-btn">
                <div class="pop-btn color-theme" @click="isDeleteMask = false">取消</div>
                <div class="pop-btn" @click="deleteDesc()">确定</div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss">
@import "../styles/main";
</style>

