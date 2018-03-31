<style scoped>
    @import "GoodsDetail.css";
</style>
<template>
    <div class="goods-detail">
        <!--标题栏-->
        <div class="top-bar fixedTop" v-if="scrollTop">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>详情</p>
        </div>
        <!--标题栏结束-->
        <div class="goods-summary">
            <!--商品大图-->
            <i class="icon iconfont icon-fanhui circle-back" @click="$router.go(-1)"></i>
            <div class="goods-img">
                <swiper v-if="imgList.length>0" :options="swiperOption">
                    <swiper-slide class="banner-img" :style="{backgroundImage:url}" v-for="url in imgList"
                                  :key="url"></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="banner-img" v-else>

                </div>
            </div>
            <!--商品大图结束-->
            <!--商品名称、单价、公司-->
            <div class="goods-price pannel">
                <h4>{{goodsData.chanpmc}}</h4>
                <p style="color: #f00">￥{{specification.current.danj | defaultValue}}</p>
                <p>{{goodsData.pinp}}</p>
            </div>
            <!--商品名称、单价、公司结束-->
            <!--商品规格选择框-->
            <div class="goods-selecetor pannel" @click="showSelector">
                <i class="icon iconfont icon-xuanze"></i>
                <span
                    v-if="confirmSelectGoods">{{amount}}{{specification.current.jildw}},{{specification.current.guig}}</span>
                <span v-else style="margin-left: 10px;">请选择规格数量</span>

                <i class="icon iconfont icon-more"></i>
            </div>
            <!--商品规格选择框结束-->

        </div>
        <div class="divide"> ———— <i class="icon iconfont icon-zan"> </i> 商品信息 ———— </div>
        <!--商品详细信息-->
        <div class="goods-info pannel">
            <p>商品编号：<span>{{goodsData.huoh}}</span></p>
            <p>产品分类：<span>{{goodsData.categoryname}}</span></p>
            <p>中文学名：<span>{{goodsData.chanpmc}}</span></p>
            <p>英文学名：<span>{{goodsData.yingwm}}</span></p>
            <p>英文别名：<span>{{goodsData.yingwbm}}</span></p>
            <p>纯度/含量：<span>{{goodsData.chund}}</span></p>
            <p>CAS：<span>{{goodsData.cas}}</span></p>
            <p>所在地：<span>{{goodsData.chand}}</span></p>
            <p>分子式：<span>{{goodsData.fenzs}}</span></p>
            <p>分子量：<span>{{goodsData.fenzl}}</span></p>
            <p>品牌：<span>{{goodsData.pinp}}</span></p>
            <p>生产厂商：<span>{{goodsData.companyname}}</span></p>
            <p>质量标准：<span>{{goodsData.zhilbz}}</span></p>
            <p>有关物质：<span>{{goodsData.yougwz}}</span></p>
            <p>性状描述：<span>{{goodsData.xingzms}}</span></p>
            <p>备货期：<span>{{   }}</span></p>
            <p>更新时间：<span>{{new Date(goodsData.updatetime).Format('yyyy-MM-dd')}}</span></p>
        </div>
        <!--商品详细信息结束-->
        <div class="divide"> ———— <i class="icon iconfont icon-zan"> </i> 图文详情 ———— </div>
        <!--底部按钮-->
        <div class="footer">
            <div class="btn-group">
                <button v-if="from === 'own_goods'" style="background-color: #03A657;width: 100%"
                        @click="$router.push({path:'publish_goods',query:{from:'edit_goods',imgList:goodsData.pictures}})">编辑
                </button><button style="background-color: #03A657;" v-if="!selectorShow&&from !== 'own_goods'">联系卖家</button><!--
                --><button style="background-color: darkorange;" v-if="!selectorShow&&from !== 'own_goods'" @click="addCart">加入购物车</button><!--
                --><button class="confirm-btn" v-if="selectorShow&&from !== 'own_goods'" @click="confirmSelect">确认</button>
            </div>
        </div>
        <!--底部按钮结束-->
        <!--商品规格选择列表-->
        <div class="specification" v-if="selectorShow">
            <div class="content">
                <div class="selected">
                    <div class="logo"></div>
                    <div class="selected-info">
                        <p style="color: #df5000;font-size: 16px;">
                            单价：<span>{{specification.current.danj | defaultValue}}</span></p>
                        <p>
                            库存：<span>{{specification.current.kucsl | defaultValue}}</span>{{specification.current.kucdw | defaultValue}}
                        </p>
                        <p>已选：<span>{{specification.current.guig | defaultValue}}</span></p>
                    </div>
                    <div class="close-btn"><i class="icon iconfont icon-guanbi" @click="selectorShow = false"></i></div>
                </div>
                <p>规格</p>
                <button
                    class="specifications-btn"
                    :class="{current:specification.index===index}"
                    v-for="(item,index) in specification.list"
                    @click="changeSpecification(index)">{{item.guig}}
                </button>
                <hr color="#ccc">
                <div style="margin-top: 20px;">
                    <span style="font-size: 16px;">购买数量</span> <span style="float: right"><button
                    class="amount-btn current" @click="decreaseAmount">-</button><span>{{amount}}</span><button
                    class="amount-btn" @click="increaseAmount">+</button></span>
                </div>

            </div>
        </div>
        <!--商品规格选择列表结束-->
        <!--模态框-->
        <div class="model" v-if="selectorShow" @click="selectorShow = false">

        </div>
    </div>
</template>
<script>
    export default {
        name: 'goodsdetail',
        data() {
            return {
//                商品数据
                goodsData: [],
//                当前选择的商品规格
                specification: {
                    list: [],
                    index: 0,
                    current: {}
                },
//                是否已选择商品规格
                confirmSelectGoods: false,
//                选择商品数量
                amount: 1,
//                页面初始化滚动条位置
                scrollTop: 0,
//                产品选择框
                selectorShow: false,
//                轮播图配置
                swiperOption: {
                    speed: 1000,
                    spaceBetween: 0,
                    loop: true,
                    centeredSlides: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        },
        computed: {
//            顶部大图的地址
            imgList() {
                if (this.goodsData.pictures && this.goodsData.pictures.length > 0) {
                    return this.goodsData.pictures.map(i => "url('http://image.yaosuce.com" + i.url + "')")
                } else {
                    return ''
                }
            },
            from() {
                return this.$route.query.from
            }
        },
        mounted() {
//            请求数据
            this.fetchData();
//            页面滚动在顶部
            let _this = this;
            document.documentElement.scrollTop = 0;
            window.onscroll = function () {
                _this.scrollTop = document.documentElement.scrollTop !== 0;
            }

        },
        methods: {
//            获取商品详情
            fetchData() {
                this.$http.get(this.$APIs.GOODS_DETAIL + '?goodsid=' + this.$route.query.goodsId)
                    .then(res => {
                        if (res.data.status === 200) {
                            console.log('***', res.data.data.GoodsApi);
                            this.goodsData = res.data.data.GoodsApi;
                            this.specification.list = res.data.data.GoodsApi.tbGoodsSpecifications;
                            this.specification.current = this.specification.list[0];
                            this.$store.commit('set_goodsApi_json',this.goodsData)
                        } else {
                            this.$message.error({message: res.data.data.msg});
                        }
                    })
                    .catch(err => {
                        this.$message.error({message: '网络错误'});
                    });
            },
//            选择规格
            changeSpecification(index) {
                this.specification.index = index;
                this.specification.current = this.specification.list[index]
            },
//            显示规格选择页
            showSelector() {
                this.selectorShow = true;
            },
            increaseAmount() {
                this.amount = Math.min(this.specification.current.kucsl, this.amount + 1)
            },
            decreaseAmount() {
                this.amount = Math.max(this.amount - 1, 1)
            },
//            确认选择
            confirmSelect() {
                this.confirmSelectGoods = true;
                this.selectorShow = false
            },
//            添加至购物车
            addCart() {
                if (!localStorage.getItem('uid')){
                    this.$message.warning('请登录');
                    return
                }
                this.$http.post(this.$APIs.CART_ADD, {
                    goodsNum: this.amount,
                    goodsid: this.goodsData.goodsid,
                    userid: localStorage.getItem('uid'),
                    specificationsid: this.specification.current.specificationsid
                })
                    .then(res => {
                        console.log(res);
                        this.$message.error({message: res.data.msg});
                    })
                    .catch(err => {
                        this.$message.error({message: err.data.msg});
                    })
            }
        }
    }
</script>
