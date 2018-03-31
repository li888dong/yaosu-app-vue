<style scoped>
    @import "Goods.css";
</style>
<template>
    <div class="pannel container">
        <div class="top-bar" v-if="$route.path==='/goods_list'">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>现货</p>
            <i class="icon iconfont icon-search right"></i>
        </div>
        <div class="item-header" :style="{marginTop:$route.path==='/goods_list'?'2px':0}">
            <slot></slot>

            <div class="tabbar-list">
                <table cellspacing="0" cellpadding="5" width="100%">
                    <tbody>
                    <tr>
                        <td data-type="api" data-index="1" :class="{selected:curSelected==='api'}"
                            @click="changeSelected">原料药
                        </td>
                        <td data-type="featureApi" data-index="2" :class="{selected:curSelected==='featureApi'}"
                            @click="changeSelected">特色原料药及制剂
                        </td>
                        <td data-type="midbody" data-index="3" :class="{selected:curSelected==='midbody'}"
                            @click="changeSelected">中间体及精细化学品
                        </td>
                        <td data-type="tcm" data-index="4" :class="{selected:curSelected==='tcm'}"
                            @click="changeSelected">中药材
                        </td>
                    </tr>
                    <tr>
                        <td data-type="natural" data-index="5" :class="{selected:curSelected==='natural'}"
                            @click="changeSelected">天然提取物
                        </td>
                        <td data-type="basics" data-index="6" :class="{selected:curSelected==='basics'}"
                            @click="changeSelected">基础化工产品及溶剂
                        </td>
                        <td data-type="ingredients" data-index="7" :class="{selected:curSelected==='ingredients'}"
                            @click="changeSelected">药用辅料及包材
                        </td>
                        <td data-type="selfSupport" data-index="0" :class="{selected:curSelected==='selfSupport'}"
                            @click="changeSelected">自营产品
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--要现货列表-->
        <VueDataLoading v-if="$route.path==='/goods_list'" :loading="loading" :completed="completed" :listens="['infinite-scroll']" :init-scroll="true" @infinite-scroll="infiniteScroll">
            <div class="item-content goods-list">
                <div v-for="goodsItem in goodsList" @click="$router.push({path:'goods_detail',query:{goodsId:goodsItem.goodId}})">
                    <p>{{goodsItem.goodName}} <i class="icon iconfont icon-more"></i></p>
                    <p>纯度:{{goodsItem.purity}}</p>
                    <p><span>{{goodsItem.qiymc}}</span></p>
                </div>
            </div>
        </VueDataLoading>
        <!--首页要现货-->
        <div class="item-content" v-else>
            <div class="product-item" :key="goodsItem.goodsID" v-for="goodsItem in curGoods" @click="$router.push({path:'goods_detail',query:{goodsId:goodsItem.goodsID}})">
                <h4 class="item-title text-ellipsis">{{goodsItem.chanpmc}}</h4>
                <div class="item-info text-ellipsis">{{goodsItem.chund}}</div>
                <div class="item-company text-ellipsis">{{goodsItem.qiymc}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    //    本页数据来源1是首页的接口通过props传递，2是点击按钮时的网络请求
    export default {
        name: 'goods',

        data() {
            return {
                curSelected: 'api',
                element:'',
                loading: false,
                completed: false,
                page: 1,
                pageSize:14
            }
        },
        computed: {
            goods(){
                return this.$store.getters.goods
            },
            curGoods() {
                return this.$route.path === '/goods_list' ? [] : this.goods[this.curSelected]
            },
            goodsList() {
                return this.$store.getters.goodsList
            }
        },
        watch: {
            '$route'(){
                this.$store.dispatch('clear_goodsList');
            }
        },
        mounted(){
            this.$store.dispatch('clear_goodsList');
            this.element = document.querySelector('td')
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.$http.get(this.$APIs.GOODS_LIST + '?categoryID=' + this.element.dataset.index+'&page='+this.page+'&pageSize='+this.pageSize)
                    .then((res) => {
                        if (res.data.status === 200) {
                            this.$store.dispatch('set_goodsList',res.data.data.rows);
                            this.curSelected = this.element.dataset.type;
                            this.page++;
                            this.loading = false;
                        }else if(res.data.status===300){
                            this.completed = true;
                            if (res.data.data===null){
                                this.$message.error({message:res.data.msg});
                            }
                        }else {
                            this.$message.error({message:res.data.msg});
                        }
                    })
                    .catch((err) => {
//                        alert(err.msg)
                        this.$message.error({message:'网络错误'});
                    });

            },
            changeSelected(e) {
                this.$store.dispatch('clear_goodsList');
                this.page = 1;
                this.element = e.srcElement;
                if (this.$route.path === '/goods_list') {
                    this.fetchData()
                }else {
                    this.curSelected = this.element.dataset.type;
                }

            },
            infiniteScroll() {
                this.fetchData();
            },
        }
    }
</script>
