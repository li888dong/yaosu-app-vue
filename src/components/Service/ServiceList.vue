<style scoped>
    .tabbar-container {
        background-color: #fff;
        padding-top: 10px;
        margin: 0;
    }

    .animate-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 92px;
        bottom: 0;
    }

    .animate-item {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        vertical-align: top;
    }

    .slide-fade1-enter {
        transform: translateX(100%);
        opacity: 0;
    }

    .slide-fade1-enter-active,
    .slide-fade2-enter-active {
        transition: all .2s ease;
    }

    .slide-fade2-enter {
        transform: translateX(-100%);
        opacity: 0;
    }

    .fade-enter-active {
        transition: all .8s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .list-item {
        width: 98%;
        min-height: 80px;
        position: relative;
        margin: 10px 1% 0 1%;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 5px #888888;
        font-size: 14px;
        color: #666;
    }

    .list-item p {
        line-height: 28px;
    }

    .list-item .type {
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
        background-color: #03A657;
        color: #ffffff;
        font-size: 12px;
        text-align: center;
    }

    .list-item .type.supply {
        background-color: #9acd32;
    }

    .list-item .content,
    .list-item .footer {
        margin-left: 50px;
    }

    .list-item .content span {
        color: #666;
    }

    .list-item .footer .hs-code {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }

    .list-item .footer span {
        margin-left: 20px;
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
                <i class="icon iconfont icon-search right"></i>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}"
                      @click="changeCatorageType('demand')">{{demand}}</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}"
                      @click="changeCatorageType('supply')">{{supply}}</span>
            </div>
            <div class="animate-container">

                <transition name="slide-fade1">
                    <div class="animate-item" v-if="curSelected==='supply'">
                        <VueDataLoading :loading="loading" :completed="completed" :listens="['infinite-scroll']"
                                        @infinite-scroll="infiniteScroll">
                            <ul class="list-container" v-if="supplyDataList.length>0">
                                <li class="list-item" v-for="item in supplyDataList"
                                    @click="$router.push({path:'service_detail',query:{itemData:item,catorageType:type}})">
                                    <div v-if="type==='项目'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">{{item.requirementdescription}}</p>
                                            <p class="hs-code">{{item.companyname}}</p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.projectno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div v-else-if="type==='外贸'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">HS号:<span>{{item.hs}}</span></p>
                                            <p class="hs-code">需求描述：<span>{{item.requirementdescription}}</span></p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.foreigntradeno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div v-else-if="type==='技术'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">{{item.requirementdescription}}</p>
                                            <p class="hs-code">{{item.companyname}}</p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.projectno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div v-else-if="type==='批文'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">需求描述：<span>{{item.requirementdescription}}</span></p>
                                            <p class="hs-code">适应症：<span>《》</span></p>
                                            <p class="hs-code"><span>{{item.companyname}}</span></p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.approvalnumberno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h3 v-else>暂无数据</h3>

                        </VueDataLoading>
                    </div>
                </transition>
                <transition name="slide-fade2">
                    <div class="animate-item" v-if="curSelected==='demand'">
                        <VueDataLoading :loading="loading" :completed="completed" :listens="['infinite-scroll']"
                                        @infinite-scroll="infiniteScroll">
                            <ul class="list-container" v-if="demandDataList.length>0">
                                <li class="list-item" v-for="item in demandDataList"
                                    @click="$router.push({path:'service_detail',query:{itemData:item,catorageType:type}})">
                                    <div v-if="type==='项目'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">{{item.requirementdescription}}</p>
                                            <p class="hs-code">{{item.companyname}}</p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.projectno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div v-else-if="type==='外贸'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">HS号:<span>{{item.hs}}</span></p>
                                            <p class="hs-code">需求描述：<span>{{item.requirementdescription}}</span></p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.foreigntradeno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div v-else-if="type==='技术'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">{{item.requirementdescription}}</p>
                                            <p class="hs-code">{{item.companyname}}</p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.projectno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div v-else-if="type==='批文'">
                                        <div class="type" :class="{supply:item.type==='B'}">{{item.servicecategory.name}}
                                        </div>
                                        <div class="content">
                                            <p class="hs-code">需求描述：<span>{{item.requirementdescription}}</span></p>
                                            <p class="hs-code">适应症：<span>《》</span></p>
                                            <p class="hs-code"><span>{{item.companyname}}</span></p>
                                        </div>
                                        <div class="footer">
                                            <p class="hs-code">
                                                编号 : <span>{{item.approvalnumberno}}</span><span>{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h3 v-else>暂无数据</h3>
                        </VueDataLoading>
                    </div>
                </transition>
            </div>
        </div>
        <div class="add-btn">+</div>
    </div>
</template>
<script>
    export default {
        name: 'servicelist',
        data() {
            return {
                demand: '',
                supply: '',
                type: '',
                reqUrl: '',
                curSelected: 'demand',
                resData: [],
                supplyDataList: [],
                demandDataList: [],
                dataList: [],
                loading: false,
                completed: false,
                page: 1,
                pageSize: 20
            }
        },
        methods: {
            changeCatorageType(type) {
                this.curSelected = type;
            },
            getReqUrl(type) {
                switch (type) {
                    case '项目':
                        return this.$APIs.PROJECT_LIST;
                    case '外贸':
                        return this.$APIs.FOREIGNTRADE_LIST;
                    case '技术':
                        return this.$APIs.TECHNOLOGY_LIST;
                    case '批文':
                        return this.$APIs.APPROVAL_NUMBER_LIST;
                }
            },
            fetchData() {
                this.$http.get(this.reqUrl + '?page=' + this.page + '&pageSize=' + this.pageSize)
                    .then((res) => {
                        if (res.data.status === 200) {
                            this.page++;
                            this.resData = this.resData.concat(res.data.data.rows);
                            this.supplyDataList = this.resData.filter((item) => {
                                return item.type === 'B'
                            });
                            this.demandDataList = this.resData.filter((item) => {
                                return item.type === 'A'
                            });
                            this.changeCatorageType('demand')
                        }
                        if (res.data.status === 300) {
                            this.completed = true
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            infiniteScroll() {
                this.fetchData()
            }

        },
        mounted() {
            this.demand = this.$route.query.demand;
            this.type = this.$route.query.type;
            this.supply = this.$route.query.supply;
            this.reqUrl = this.getReqUrl(this.type);
            this.$http.get(this.reqUrl + '?page=1&pageSize=20')
                .then((res) => {
                    console.log('+++', res);
                    this.resData = res.data.data.rows;
                    this.supplyDataList = this.resData.filter((item) => {
                        return item.type === 'B'
                    });
                    this.demandDataList = this.resData.filter((item) => {
                        return item.type === 'A'
                    });
                    this.page++;
                    this.changeCatorageType('demand')
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    }
</script>
