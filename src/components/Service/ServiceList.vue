<style scoped>
    .top-bar{
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background-color:  #03A657;
        color: #ffffff;
        text-align: center;
        position: relative;
    }
    .top-bar .icon-fanhui{
        position: absolute;
        left: 10px;
    }
    .top-bar .icon-search{
        position: absolute;
        top: 0;
        right: 10px;
    }
    .catorage-selector {
        width: 100%;
        height: 40px;
        font-size: 14px;
        background-color: #fff;
        text-align: center;
        line-height: 40px;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
    }

    .icon-more {
        position: absolute;
        right: 5px;
        font-size: 10px;
        font-weight: bold;
        transform: rotate(90deg);
        transition: all 0.5s ease;
    }

    .reverse {
        transform: rotate(-90deg);
    }

    .fade-enter-active {
        transition: all .8s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .catorage-list {
        width: 100%;
        background-color: #fff;
        text-align: center;
        font-size: 12px;
        line-height: 30px;
        position: absolute;
        z-index: 11;
    }

    .catorage-list p {
        border-bottom: 1px solid #ccc;
    }

    .curCatorage {
        color: #03A657;
        background-color: #f1f1f1;
    }

    .greenFont {
        color: #03A657;
    }

    .list-item {
        width: 98%;
        position: relative;
        margin: 10px 1% 0 1%;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 5px #888888;
        font-size: 12px;
        color: #000;
    }


    .list-item p {
        line-height: 28px;
    }

    .list-item .type.demand{
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: 1px;
        padding: 10px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        border-radius: 4px;
        width: 20px;
        background-color: #019117;
        color: #ffffff;
        font-size: 14px;
        text-align: center;
    }

    .list-item .content,
    .list-item .footer{
        margin-left: 50px;
    }

    .list-item .footer span{
        margin-left: 20px;
        color: #666;
    }


    .add-btn {
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        color: #ffffff;
        font-size: 22px;
        box-shadow: 0 0 5px #888888;
        background-color: #019117;
        position: fixed;
        bottom: 50px;
        right: 30px;
        z-index: 10;
    }
</style>
<template>
    <div>
        <div>
            <div class="top-bar">
                <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <p>{{type}}</p>
                <i class="icon iconfont icon-search"></i>
            </div>
            <div class="catorage-selector" @click="selectorIsShow = !selectorIsShow"
                 :class="{greenFont:selectorIsShow}">
                <span>{{curCatorage}}</span>
                <i class="icon iconfont icon-more" :class="{reverse:selectorIsShow}"></i>
            </div>
            <div class="catorage-list">
                <transition name="fade">
                    <div v-if="selectorIsShow">
                        <p :class="{curCatorage:curCatorage==='全部分类'}" @click="changeCatorageType('全部分类')">全部分类</p>
                        <p :class="{curCatorage:curCatorage===demand}" @click="changeCatorageType(demand)">
                            {{demand}}</p>
                        <p :class="{curCatorage:curCatorage===support}" @click="changeCatorageType(support)">
                            {{support}}</p>
                    </div>
                </transition>
            </div>
            <ul class="list-container">
                <li class="list-item" v-for="item in dataList">
                    <div v-if="type==='项目'">
                        <div class="type demand">{{item.servicecategory.name}}</div>
                        <div class="content">
                            <p class="hs-code">{{item.requirementdescription}}</p>
                            <p class="hs-code">{{item.companyname}}</p>
                        </div>
                        <div class="footer">
                            <p class="hs-code">编号 : <span>{{item.projectno}}</span><span style="float: right;margin-right: 20px;">{{item.addtime}}</span>
                            </p>
                        </div>
                    </div>
                    <div v-else-if="type==='外贸'">
                        <div class="type demand">{{item.servicecategory.name}}</div>
                        <div class="content">
                            <p class="hs-code"><span>HS号:</span>{{item.hs}}</p>
                            <p class="hs-code"><span>需求描述：</span>{{item.requirementdescription}}</p>
                        </div>
                        <div class="footer">
                            <p class="hs-code">编号 : <span>{{item.foreigntradeno}}</span><span style="float: right;margin-right: 20px;">{{item.addtime}}</span>
                            </p>
                        </div>
                    </div>
                    <div v-else-if="type==='技术'">
                        <div class="type demand">{{item.servicecategory.name}}</div>
                        <div class="content">
                            <p class="hs-code">{{item.requirementdescription}}</p>
                            <p class="hs-code">{{item.companyname}}</p>
                        </div>
                        <div class="footer">
                            <p class="hs-code">编号 : <span>{{item.projectno}}</span><span style="float: right;margin-right: 20px;">{{item.addtime}}</span>
                            </p>
                        </div>
                    </div>
                    <div v-else-if="type==='批文'">
                        <div class="type demand">{{item.servicecategory.name}}</div>
                        <div class="content">
                            <p class="hs-code">{{item.requirementdescription}}</p>
                            <p class="hs-code">{{item.companyname}}</p>
                        </div>
                        <div class="footer">
                            <p class="hs-code">编号 : <span>{{item.projectno}}</span><span style="float: right;margin-right: 20px;">{{item.addtime}}</span>
                            </p>
                        </div>
                    </div>



                </li>
            </ul>
        </div>
        <div class="add-btn">+</div>
    </div>
</template>
<script>
    export default {
        name: 'service',
        data() {
            return {
                selectorIsShow: false,
                demand: '',
                support: '',
                type:'',
                reqUrl:'',
                curCatorage: '全部分类',
                dataList:[]
            }
        },
        methods: {
            changeCatorageType(type) {
                this.curCatorage = type;
                this.selectorIsShow = false;
            },
            getReqUrl(type){
                switch (type){
                    case '项目':
                        return this.$APIs.PROJECT_LIST;
                    case '外贸':
                        return this.$APIs.FOREIGNTRADE_LIST;
                }
            }
        },
        mounted() {
            this.demand = this.$route.query.demand;
            this.type = this.$route.query.type;
            this.support = this.$route.query.support;
            this.reqUrl = this.getReqUrl(this.type);
            this.$http.get(this.reqUrl)
                .then((res)=>{
                    console.log('+++',res)
                    this.dataList = res.data.data.rows
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>
