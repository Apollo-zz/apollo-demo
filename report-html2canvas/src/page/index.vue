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
            data: {
                time: '',
                partSystemRetail: [],
                partSystemApart: [],
                allSystemRetail: [],
                allSystemApart: [],
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
            dataPre: {},
            value: {
                partSystemRetail: '',
                partSystemApart: '',
                allSystemRetail: '',
                allSystemApart: '',
            },
            valuePre: {},
        }
    },
    created(){
        this.dataPre = this.data; //保留初始化数据
        this.valuePre = this.value; //保留初始化数据
        this.data.time = this.getDate();
        let data = JSON.parse(localStorage.getItem(`reportData${this.data.time}`) || null);
        if(!!data){
            this.data = data;
            this.value.partSystemRetail = this.data.partSystemRetail.join('&');
            this.value.partSystemApart = this.data.partSystemApart.join('&');
            this.value.allSystemRetail = this.data.allSystemRetail.join('&');
            this.value.allSystemApart = this.data.allSystemApart.join('&');
        }
    },
    methods: {
        // 重置参数
        clearData(){
            this.isResetMask = false;
            this.data = this.dataPre;
            this.value = this.valuePre;
        },
        // 生成图片
        createPic(){
            let countArr = [];
            for (let key of Object.keys(this.data.events)) {
                countArr.push(+this.data.events[key].count);
            }
            this.data.maxCount = Math.max(...countArr);
            if(!!this.value.partSystemRetail){
                this.data.partSystemRetail = this.value.partSystemRetail.split('&');
            }
            if(!!this.value.partSystemApart){
                this.data.partSystemApart = this.value.partSystemApart.split('&');
            }
            if(!!this.value.allSystemRetail){
                this.data.allSystemRetail = this.value.allSystemRetail.split('&');
            }
            if(!!this.value.allSystemApart){
                 this.data.allSystemApart = this.value.allSystemApart.split('&');
            }
            this.isInputPage = false;
            localStorage.setItem(`reportData${this.data.time}`,JSON.stringify(this.data));
            setTimeout(()=>{
                const el = this.$refs.print;
                html2canvas(el).then(canvas => {
                    // canvasImg.appendChild(canvas);
                    this.href=canvas.toDataURL("image/png");
                    this.download =`运营简报${this.data.time}`;
                });
            },200);
        },
        // 增加多项
        addDesc(type){
            if(type == 'otherNotices'){
                this.data[type].push({
                    value: ''
                })
            }else{
                this.data.events[type].desc.push({
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
                this.data[type].splice(index,1);
            }else{
                this.data.events[type].desc.splice(index,1);
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
                <input class="input" type="date" v-model="data.time" placeholder="请输入简报日期" pattern="yyyy/mm/dd">
            </label>
            <!-- 子系统 -->
            <div class="divider-title">灰度关键子系统</div>
            <label class="input-label">
                <span class="input-title">零售域</span>
                <textarea class="input" type="text" v-model="value.partSystemRetail" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>
            <label class="input-label">
                <span class="input-title">平台域</span>
                <textarea class="input" type="text" v-model="value.partSystemApart" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>
            <div class="divider-title">全量关键子系统</div>
            <label class="input-label">
                <span class="input-title">零售域</span>
                <textarea class="input" type="text" v-model="value.allSystemRetail" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>
            <label class="input-label">
                <span class="input-title">平台域</span>
                <textarea class="input" type="text" v-model="value.allSystemApart" placeholder="请输入发布的子系统名称，使用‘&’分割，例如web-pub&web-pmb"></textarea>
            </label>

            <div class="divider-title">处理告警事件单量</div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="data.events.eventsAlertRetail.count" placeholder="请输入零售域处理告警事件单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsAlertRetail.desc" :key="index + 'eventsAlertRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsAlertRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsAlertRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="data.events.eventsAlertApart.count" placeholder="请输入平台域处理告警事件单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsAlertApart.desc" :key="index + 'eventsAlertApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsAlertApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsAlertApart',index)"></span>
            </label>

            <div class="divider-title">关闭事件单量</div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="data.events.eventsClosedRetail.count" placeholder="请输入零售域关闭事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsClosedRetail.desc" :key="index + 'eventsClosedRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsClosedRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsClosedRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="data.events.eventsClosedApart.count" placeholder="请输入平台域关闭事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsClosedApart.desc" :key="index + 'eventsClosedApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsClosedApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsClosedApart',index)"></span>
            </label>

            <div class="divider-title">待跟进事件单量</div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="data.events.eventsFollowRetail.count" placeholder="请输入零售域待跟进事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsFollowRetail.desc" :key="index + 'eventsFollowRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsFollowRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsFollowRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="data.events.eventsFollowApart.count" placeholder="请输入平台域待跟进事件单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsFollowApart.desc" :key="index + 'eventsFollowApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsFollowApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsFollowApart',index)"></span>
            </label>

            <div class="divider-title">处理服务请求单量</div>
            <label class="input-label">
                <span class="input-title">零售域单量</span>
                <input class="input" type="number" v-model="data.events.eventsServiceRetail.count" placeholder="请输入零售域处理服务请求单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsServiceRetail.desc" :key="index + 'eventsServiceRetail'">
                <span class="input-title">{{index == 0 ? '零售域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条零售域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsServiceRetail')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsServiceRetail',index)"></span>
            </label>
            <label class="input-label">
                <span class="input-title">平台域单量</span>
                <input class="input" type="number" v-model="data.events.eventsServiceApart.count" placeholder="请输入平台域处理服务请求单量单量">
            </label>
            <label class="input-label" v-for="(item,index) in data.events.eventsServiceApart.desc" :key="index + 'eventsServiceApart'">
                <span class="input-title">{{index == 0 ? '平台域描述' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条平台域相关描述">
                <span class="icon-add" v-if="index == 0" @click="addDesc('eventsServiceApart')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('eventsServiceApart',index)"></span>
            </label>

            <div class="divider-title">其他关注事项</div>
            <label class="input-label" v-for="(item,index) in data.otherNotices" :key="index">
                <span class="input-title">{{index == 0 ? '其他关注事项' : ''}}</span>
                <input class="input" type="text" v-model="item.value" placeholder="请输入一条其他关注事项">
                <span class="icon-add" v-if="index == 0" @click="addDesc('otherNotices')"></span>
                <span class="icon-delete" v-else @click="showDeteleMask('otherNotices',index)"></span>
            </label>
        </div>
        <div class="wrap-page-content" v-if="!isInputPage">
            <header class="wrap-page-header">
                <h2 class="header-title">运维简报</h2>
                <div class="header-time">{{data.time}}</div>
            </header>
            <div class="display-flex">
                <div class="flex wrap-container">
                    <h3 class="container-title">灰度关键子系统</h3>
                    <div class="display-flex flex-start">
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips">零售域（{{data.partSystemRetail.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in data.partSystemRetail" :key="index" v-if="data.partSystemRetail.length>0">{{item}}</div>
                                <div class="item color-description" v-if="data.partSystemRetail.length == 0">无</div>
                            </div>
                        </div>
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips">平台域（{{data.partSystemApart.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in data.partSystemApart" :key="index">{{item}}</div>
                                <div class="item color-description" v-if="data.partSystemApart.length == 0">无</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex wrap-container">
                    <h3 class="container-title">全量关键子系统</h3>
                    <div class="display-flex flex-start">
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips">零售域（{{data.allSystemRetail.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in data.allSystemRetail" :key="index">{{item}}</div>
                                <div class="item color-description" v-if="data.allSystemRetail.length == 0">无</div>
                            </div>
                        </div>
                        <div class="flex wrap-inner">
                            <h4 class="inner-tips">平台域（{{data.allSystemApart.length || 0}}个）</h4>
                            <div class="list">
                                <div class="item" v-for="(item,index) in data.allSystemApart" :key="index">{{item}}</div>
                                <div class="item color-description" v-if="data.allSystemApart.length == 0">无</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="wrap-container">
                <h3 class="container-title">事件单量</h3>
                <div class="display-flex flex-start">
                    <div class="flex wrap-inner">
                        <h4 class="inner-tips">处理告警事件单量</h4>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">零售域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsAlertRetail.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsAlertRetail.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsAlertRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">平台域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsAlertApart.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsAlertApart.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsAlertApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex wrap-inner">
                        <h4 class="inner-tips">关闭事件单量</h4>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">零售域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsClosedRetail.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsClosedRetail.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsClosedRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">平台域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsClosedApart.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsClosedApart.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsClosedApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="display-flex flex-start">
                    <div class="flex wrap-inner">
                        <h4 class="inner-tips">待跟进事件单量</h4>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">零售域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsFollowRetail.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsFollowRetail.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsFollowRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">平台域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsFollowApart.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsFollowApart.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsFollowApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex wrap-inner">
                        <h4 class="inner-tips">处理服务请求单</h4>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">零售域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsServiceRetail.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsServiceRetail.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsServiceRetail.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                        <div class="wrap-detail">
                            <div class="detail-header">
                                <span class="detail-title">平台域</span>
                                <div class="detail-bar" :style="'width:'+ (+data.events.eventsServiceApart.count/data.maxCount*300) +'px'"></div>
                                <span class="detail-num">{{data.events.eventsServiceApart.count || 0}}个</span>
                            </div>
                            <ul class="detail-list">
                                <li class="detail-item" v-for="(item,index) in data.events.eventsServiceApart.desc" :key="index" v-if="!!item.value">{{item.value}}</li>
                                <li class="color-description" v-else>无</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="wrap-container">
                <h3 class="container-title">其他关注事项</h3>
                <ul class="detail-list secondary">
                    <li class="detail-item" v-for="(item,index) in data.otherNotices" :key="index" v-if="!!item.value">{{item.value}}</li>
                    <li class="color-description" v-else>无</li>
                </ul>
            </div>
        </div>
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

