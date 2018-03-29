<style scoped>
@import "ServiceList.css";
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
                                        <div class="item-footer">
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
                                        <div class="item-footer">
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
                                        <div class="item-footer">
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
                                        <div class="item-footer">
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
                                        <div class="item-footer">
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
                                        <div class="item-footer">
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
                                        <div class="item-footer">
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
                                        <div class="item-footer">
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
