<style scoped>
    .goods-detail {
        font-size: 14px;
        margin-top: 0 !important;
        margin-bottom: 40px;
    }

    .fixedTop {
        position: fixed;
        top: 0;
        z-index: 13;
    }

    .goods-summary {
        position: relative;
    }

    .goods-summary .circle-back {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 10;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        background-color: #999;
        border-radius: 50%;
        color: #ffffff;
        font-weight: bolder;
    }

    .banner-img {
        height: 150px;
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100% 150px;
        display: inline-block;
        vertical-align: top;
    }

    .divide {
        text-align: center;
        height: 30px;
        line-height: 30px;
    }

    .goods-price {
        height: 80px;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    .goods-selecetor {
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        color: #000;

    }

    .goods-selecetor span {
        width: 85%;
        margin-left: 10px;
        display: inline-block;
    }

    .goods-selecetor .icon-more {
        transform: rotate(0);
        font-size: 18px;
        color: #ccc;
    }

    .goods-info {
        padding: 20px;
        color: #000;
        line-height: 28px;
    }

    .goods-info p > span {
        color: #999999;
    }

    .footer .btn-group {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 13;
    }

    .footer .btn-group button {
        width: 50%;
        height: 40px;
        line-height: 40px;
        border: none;
        color: #ffffff;
    }

    .model {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 11;
        background-color: #000;
        opacity: .3;
    }

    .specification .content {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 12;
        background-color: #fff;
        height: 300px;
        padding: 15px 20px;

    }

    .specification .selected {
        position: relative;
    }

    .specification .selected > div {
        display: inline-block;
        vertical-align: top;
    }

    .specification .logo {
        width: 60px;
        height: 60px;
        margin-left: 20px;
        background: url("../../assets/logo_01.png") no-repeat;
        background-size: contain;
    }

    .specification .selected-info {
        margin-left: 40px;
        font-size: 14px;
        line-height: 22px;
    }

    .specification .close-btn {
        position: absolute;
        top: 0;
        right: 0;
    }

    .specification .close-btn i {
        font-size: 28px;
    }

    .specifications-btn {
        border-radius: 4px;
        border: none;
        padding: 10px 8px;
        outline: none;
        margin-top: 20px;
        margin-right: 10px;
    }

    .specifications-btn.current {
        background-color: #03A657;
        color: white;
    }

    .specification .amount-btn {
        font-size: 16px;
        margin: 0 10px;
        padding: 5px 14px;
        background-color: #eee;
    }

    .specification .amount-btn.current {
        background-color: #ccc;
    }

    .confirm-btn {
        position: absolute;
        bottom: 0;
        width: 100% !important;
        border: none;
        height: 40px;
        background-color: #03A657;
        color: #fff;
    }
</style>
<template>
    <div class="goods-detail">
        <!--标题栏-->
        <div class="top-bar fixedTop" v-if="scrollTop">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>详情</p>
            <i class="icon iconfont icon-search right"></i>
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
                <p style="color: #f00">￥{{specification.current.danj}}</p>
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
            <p>更新时间：<span>{{goodsData.updatetime}}</span></p>
        </div>
        <!--商品详细信息结束-->
        <div class="divide"> ———— <i class="icon iconfont icon-zan"> </i> 图文详情 ———— </div>
        <!--底部按钮-->
        <div class="footer">
            <div class="btn-group">
                <button style="background-color: #03A657;" v-if="!selectorShow">联系卖家</button><!--
                --><button style="background-color: darkorange;" v-if="!selectorShow" @click="addCart">加入购物车</button><!--
                --><button class="confirm-btn" v-if="selectorShow" @click="confirmSelect">确认</button>
            </div>
        </div>
        <!--底部按钮结束-->
        <!--商品规格选择列表-->
        <div class="specification" v-if="selectorShow">
            <div class="content">
                <div class="selected">
                    <div class="logo"></div>
                    <div class="selected-info">
                        <p style="color: #df5000;font-size: 16px;">单价：<span>{{specification.current.danj}}</span></p>
                        <p>库存：<span>{{specification.current.kucsl}}</span>{{specification.current.kucdw}}</p>
                        <p>已选：<span>{{specification.current.guig}}</span></p>
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
            imgList() {
                if (this.goodsData.pictures && this.goodsData.pictures.length > 0) {
                    return this.goodsData.pictures.map(i => "url('http://image.yaosuce.com" + i.url + "')")
                } else {
                    return ''
                }
            }
        },
        mounted() {
            this.$http.get(this.$APIs.GOODS_DETAIL + '?goodsid=' + this.$route.query.goodsId)
                .then(res => {
                    if (res.data.status === 200) {
                        console.log('***', res.data.data.GoodsApi);
                        this.goodsData = res.data.data.GoodsApi;
                        this.specification.list = res.data.data.GoodsApi.tbGoodsSpecifications;
                        this.specification.current = this.specification.list[0];
                        console.log(this.specification.list)
                    } else {
                        this.$message.error({message:res.data.data.msg});
                    }
                })
                .catch(err => {
                    this.$message.error({message:'网络错误'});
                });
            let _this = this;
            document.documentElement.scrollTop = 0;
            window.onscroll = function () {
                _this.scrollTop = document.documentElement.scrollTop !== 0;
            }

        },
        methods: {
            changeSpecification(index) {
                this.specification.index = index;
                this.specification.current = this.specification.list[index]
            },
            showSelector() {
                this.selectorShow = true;
            },
            increaseAmount() {
                this.amount = Math.min(this.specification.current.kucsl, this.amount + 1)
            },
            decreaseAmount() {
                this.amount = Math.max(this.amount - 1, 1)
            },
            confirmSelect() {
                this.confirmSelectGoods = true;
                this.selectorShow = false
            },
            addCart(){
                this.$http.post(this.$APIs.CART_ADD,{
                    goodsNum:this.amount,
                    goodsid:this.goodsData.goodsid,
                    userid:localStorage.getItem('uid'),
                    specificationsid:this.specification.current.specificationsid
                })
                    .then(res=>{
                        console.log(res);
                        this.$message.error({message:res.data.msg});
                    })
                    .catch(err=>{
                        this.$message.error({message:err.data.msg});
                    })
            }
        }
    }
</script>
