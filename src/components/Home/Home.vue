<template>
    <div class="home">

        <!--顶部banner搜索框-->
        <header>
            <div class="search-container" :class="{'top-bg':scrollTop}">
                <i class="icon iconfont icon-touxiang2" @click="$router.push('person')" v-if="isLogin"></i>
                <span class="login" @click="$router.push('login')" v-else>登陆</span>
                <i class="icon iconfont icon-search "></i>
                <input type="search" placeholder="搜索产品/企业" class="search-input" @focus="$router.push('search_history')">
            </div>
            <Banner></Banner>
        </header>

        <!--导航按钮-->
        <NavList></NavList>

        <!--参考价格-->
        <ProductPriceList></ProductPriceList>

        <!--优质现货-->
        <Xianhuo></Xianhuo>

        <!--热门采购-->
        <Caigou></Caigou>

        <!--优选外贸-->
        <Waimao></Waimao>

        <!--推荐项目-->
        <Xiangmu></Xiangmu>

        <!--创新技术-->
        <Jishu></Jishu>

        <!--人气批文-->
        <Piwen></Piwen>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Banner from '@/components/Home/Banner/Banner.vue'
    import NavList from '@/components/Home/NavList/NavList.vue'
    import ProductPriceList from '@/components/Home/ProductPriceList/ProductPriceList.vue'
    import Xianhuo from '@/components/Home/Xianhuo/Xianhuo.vue'
    import Caigou from '@/components/Home/Caigou/Caigou.vue'
    import Waimao from '@/components/Home/Waimao/Waimao.vue'
    import Xiangmu from '@/components/Home/Xiangmu/Xiangmu.vue'
    import Jishu from '@/components/Home/Jishu/Jishu.vue'
    import Piwen from '@/components/Home/Piwen/Piwen.vue'
    const advertsing ={
        urlList: [],
        init: function (data) {
            this.urlList.length = 0;
            data.map(i => {
                this.urlList.push('http://image.yaosuce.com' + i.picture)
            });
            this.rendererData()

        },
        rendererData: function () {
            let $adLogoList = $('.item-container');
            for (let i = 0; i < this.urlList.length; i++) {
                $($adLogoList[i]).append(`<div class="ad-logo" style="background-image: url(${this.urlList[i]})"></div>`)
            }
        }
    };
    export default {
        name: 'Home',
        data() {
            return {
                scrollTop:0,
                advertising:[],
                ANN1:[],
                ANN2:[],
                FTN1:[],
                FTN2:[],
                PNO1:[],
                PNO2:[],
                TNO1:[],
                TNO2:[]
            }
        },
        components: {
            Banner,
            NavList,
            ProductPriceList,
            Xianhuo,
            Caigou,
            Waimao,
            Xiangmu,
            Jishu,
            Piwen
        },
        computed:{
            isLogin(){
                return !!localStorage.getItem('uid')
            }
        },
        beforeMount(){

        },
        mounted() {
            const _this = this;
            window.onscroll = function () {
                _this.scrollTop = document.documentElement.scrollTop !== 0;
            };
            this.$http.get(this.$APIs.INDEX_LIST)
                .then(function (response) {
                    const data = response.data.data;
                    _this.advertising = data.advertising;
                    _this.ANN1 = data.service.ANN[0].list;
                    _this.ANN2 = data.service.ANN[1].list;
                    _this.FTN1 = data.service.FTN[0].list;
                    _this.FTN2 = data.service.FTN[1].list;
                    _this.PNO1 = data.service.PNO[0].list;
                    _this.PNO2 = data.service.PNO[1].list;
                    _this.TNO1 = data.service.TNO[0].list;
                    _this.TNO2 = data.service.TNO[1].list;
//                    设置广告条幅
                    _this.$store.dispatch('set_advertising', data.advertising);
//                    设置参考价格数据
                    _this.$store.dispatch('set_api', data.api);
//                    设置顶部banner图
                    _this.$store.dispatch('set_banner', data.banner);
//                    设置现货商品
                    _this.$store.dispatch('set_goods', data.goods);
//                    设置采购数据
                    _this.$store.dispatch('set_procurement', data.procurement);
//                    设置批文数据
                    _this.$store.dispatch('set_ANN1', _this.ANN1);
                    _this.$store.dispatch('set_ANN2', _this.ANN2);
//                    设置外贸数据
                    _this.$store.dispatch('set_FTN1', _this.FTN1);
                    _this.$store.dispatch('set_FTN2', _this.FTN2);
//                    设置推荐项目数据
                    _this.$store.dispatch('set_PNO1', _this.PNO1);
                    _this.$store.dispatch('set_PNO2', _this.PNO2);
//                    设置创新技术数据
                    _this.$store.dispatch('set_TNO1', _this.TNO1);
                    _this.$store.dispatch('set_TNO2', _this.TNO2);
//                    设置中药材数据
                    _this.$store.dispatch('set_tcm', data.tcm);

//                    设置广告的图片链接
                    advertsing.init(_this.advertising);


                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style>
    @import "Home.css";
</style>
