<style scoped>
    .pannel {
        margin: 0;
    }

    .absolute {
        position: absolute;
        top: 0;
        bottom: 0;
    }

    .tabbar-list {
        border-bottom: 5px solid #EFEDEE;
        font-size: 14px;
    }

    .tabbar-list td {
        text-align: center;
        border-bottom: 1px solid #eee;
        width: 25%;
    }

    .tabbar-list td:not(:nth-child(1)) {
        border-left: 1px solid #eee;
    }

    .tabbar-list td.selected {
        background-color: #03A657;
        color: white;
    }

    .tabbar-list > span {
        display: inline-block;
        height: 60px;
        text-align: center;
        vertical-align: middle;
        padding: 10px 15px;
    }

    .item-content.goods-list {
        padding: 15px 20px;
        font-size: 14px;
        color: #000;
    }

    .item-content.goods-list > div {
        border-bottom: 1px solid #eee;
        position: relative;
        padding-top: 4px;
        line-height: 22px;
    }

    .item-content.goods-list .icon-more {
        transform: rotate(0);
        position: absolute;
        right: 0;
        font-weight: bolder;
        font-size: 16px;
    }

    .item-content.goods-list span {
        color: #999;
    }

    .item-content .product-item {
        width: 50%;
        display: inline-block;
        padding: 10px 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        line-height: 24px;
    }

    .item-content .product-item h4.item-title {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
    }

    .item-content .product-item:nth-child(even) {
        border-left: 1px solid #eee;
    }

    .item-company {
        font-size: 12px;
    }
</style>
<template>
    <div class="pannel container" :class="{absolute:$route.path==='/goods_list'}">
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
        <div class="item-content goods-list" v-if="$route.path==='/goods_list'">
            <div v-for="goodsItem in goodsList" @click="$router.push({path:'goods_detail',query:{goodsId:goodsItem.goodId}})">
                <p>{{goodsItem.goodName}} <i class="icon iconfont icon-more"></i></p>
                <p>纯度:{{goodsItem.purity}}</p>
                <p><span>{{goodsItem.qiymc}}</span></p>
            </div>
        </div>
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
                curSelected: 'api'
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
        mounted() {

        },
        methods: {
            changeSelected(e) {
                if (this.$route.path === '/goods_list') {
                    this.$http.get(this.$APIs.GOODS_LIST + '?categoryID=' + e.srcElement.dataset.index)
                        .then((res) => {
                            if (res.data.status === 200) {
                                this.$store.dispatch('set_goodsList', res.data.data.rows);
                                this.curSelected = e.srcElement.dataset.type;
                            } else {
                                alert(res.data.msg)
                            }
                        })
                        .catch((err) => {
//                        alert(err.msg)
                            console.log(err)
                        });
                }else {
                    this.curSelected = e.srcElement.dataset.type;
                }

            }
        }
    }
</script>
