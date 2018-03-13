<style scoped>
    .goods-detail{
        font-size: 14px;
    }
    .fixedTop{
        position: fixed;
        top: 0;
        z-index: 11;
    }
    .goods-summary{
        position: relative;
    }
    .goods-summary .circle-back{
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 10;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        background-color: #999;
        border-radius: 50% ;
        color: #ffffff;
        font-weight:bolder;
    }
    .banner-img{
        height: 150px;
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100% 150px;
        display: inline-block;
        vertical-align: top;
    }
    .divide{
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    .goods-price{
        height: 80px;
        padding:10px 20px;
        box-sizing: border-box;
    }
    .goods-selecetor{
        height: 40px;
        line-height: 40px;
        padding:0 20px;
        box-sizing: border-box;
        color: #000;

    }
    .goods-selecetor .icon-more{
        transform: rotate(0);
        font-size: 18px;
        color: #ccc;
    }
    .goods-info{
        padding: 20px;
        color: #000;
        line-height: 28px;
    }
    .footer .btn-group{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .footer .btn-group button{
        width: 50%;
        height: 40px;
        line-height: 40px;
        border: none;
        color: #ffffff;
    }
    .model{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 11;
        background-color: #000;
        opacity: .3;
    }
    .specification .content{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 12;
        background-color: #fff;
        height: 50%;
    }
    .specification .confirm-btn{
        position: absolute;
        bottom: 0;
        width: 100%;
        border: none;
        height: 40px;
        background-color: #03A657;
        color: #fff;
    }
</style>
<template>
    <div class="goods-detail">
        <div class="top-bar fixedTop" v-if="scrollTop">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>详情</p>
            <i class="icon iconfont icon-search right"></i>
        </div>
        <div class="goods-summary">
            <i class="icon iconfont icon-fanhui circle-back" @click="$router.go(-1)"></i>
            <div class="goods-img">
                <swiper v-if="imgList.length>0" :options="swiperOption">
                    <swiper-slide class="banner-img" :style="{backgroundImage:url}" v-for="url in imgList" :key="url"></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="goods-price pannel">
                <h4>{{goodsData.chanpmc}}</h4>
                <p style="color: #f00">￥{{goodsData.chanpdj}}</p>
            </div>
            <div class="goods-selecetor pannel">
                <i class="icon iconfont icon-xuanze"></i><span style="margin-left: 10px;">请选择规格数量</span><i class="icon iconfont icon-more"></i>
            </div>
        </div>
        <div class="divide"> ———— <i class="icon iconfont icon-zan"> </i> 商品信息 ———— </div>
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
        <div class="footer">
            <div class="btn-group">
                <button style="background-color: #03A657;">联系卖家</button><button style="background-color: darkorange;">加入购物车</button>
            </div>
        </div>
        <div class="specification">
            <div class="content">

                <div class="selected">
                    <div class="logo"></div>
                    <div>
                        <p>单价：<span>50.000</span></p>
                        <p>库存：<span>8201</span>件</p>
                        <p>已选：<span>20kg/件</span></p>
                    </div>
                </div>
                <p>规格</p>
                <button>25kg/jina</button>
                <button>25kg/jina</button>
                <button>25kg/jina</button>
                <hr>
                <div>
                    <span>购买数量</span><span><button>-</button><span>1</span><button>+</button></span>
                </div>
                <button class="confirm-btn">确认</button>
            </div>
        </div>
        <div class="model">

        </div>
    </div>
</template>
<script>
    export default {
        name: 'goodsdetail',
        data() {
            return {
                goodsData: [],
                scrollTop:0,
                swiperOption: {
                    speed:1000,
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
                        console.log(this.imgList)
                    } else {
                        alert(res.data.data.msg)
                    }
                })
                .catch(err => {
                    console.log(err)
                });
            let _this = this;
            document.documentElement.scrollTop = 0;
            window.onscroll = function () {
                if (document.documentElement.scrollTop!==0){
                    _this.scrollTop = true
                }else {
                    _this.scrollTop = false
                }
            }

        }
    }
</script>
