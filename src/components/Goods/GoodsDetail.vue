<style>
    .banner-img{
        height: 150px;
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100% 150px;
        display: inline-block;
        vertical-align: top;
    }
    .goods-price{
        height: 100px;
    }
    .goods-info{
        padding: 20px;
        font-size: 14px;
        color: #000;
        line-height: 28px;
    }
</style>
<template>
    <div>
        <div class="goods-summary">
            <div class="goods-img">
                <swiper v-if="imgList.length>0" :options="swiperOption">
                    <swiper-slide class="banner-img" :style="{backgroundImage:url}" v-for="url in imgList"></swiper-slide>
                </swiper>
            </div>
            <div class="goods-price pannel">
                <h4>{{goodsData.chanpmc}}</h4>
                <p></p>
            </div>
            <div class="goods-selecetor pannel">
                <i>***</i><span>请选择规格数量</span><i class="icon iconfont icon-more"></i>
            </div>
        </div>
        <div class="divide">——商品信息——</div>
        <div class="goods-info pannel">
            <p>商品编号：<span>{{goodsData.huoh}}</span></p>
            <p>产品分类：<span>{{goodsData.categoryname}}</span></p>
            <p>中文学名：<span>{{goodsData.chanpmc}}</span></p>
            <p>英文学名：<span></span></p>
            <p>英文别名：<span></span></p>
            <p>纯度/含量：<span>{{goodsData.chund}}</span></p>
            <p>CAS：<span>{{goodsData.cas}}</span></p>
            <p>所在地：<span></span></p>
            <p>分子式：<span></span></p>
            <p>分子量：<span></span></p>
            <p>品牌：<span></span></p>
            <p>生产厂商：<span></span></p>
            <p>质量标准：<span></span></p>
            <p>有关物质：<span></span></p>
            <p>性状描述：<span></span></p>
            <p>备货期：<span></span></p>
            <p>更新时间：<span></span></p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'goodsdetail',
        data() {
            return {
                goodsData: [],
                swiperOption: {
                    speed:1000,
                    spaceBetween: 0,
                    loop: true,
                    centeredSlides: true
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
                })
        }
    }
</script>
