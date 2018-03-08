<template>
    <div id="app">
        <!--顶部banner搜索框-->
        <header>
            <Banner :bannerData="banner"/>
        </header>

        <!--导航按钮-->
        <NavList/>

        <!--参考价格-->
        <ProductPriceList :yuanliaos="api" :zhongyaos="tcm"/>

        <!--优质现货-->
        <Xianhuo :goods="goods"/>
        <div class="ad-logo ad01">

        </div>

        <!--热门采购-->
        <Caigou :procurement="procurement"/>
        <div class="ad-logo ad02">

        </div>

        <!--优选外贸-->
        <Waimao :demandData="FTN[0]" :supplyData="FTN[1]"/>
        <div class="ad-logo ad03">

        </div>
        <!--推荐项目-->
        <Xiangmu/>
        <div class="ad-logo ad04">

        </div>
        <!--创新技术-->
        <Jishu/>
        <div class="ad-logo ad05">

        </div>
        <!--人气批文-->
        <Piwen/>
        <Advertsing/>
    </div>
</template>

<script>
    import Banner from './components/Banner/Banner.vue'
    import NavList from './components/NavList/NavList.vue'
    import ProductPriceList from './components/ProductPriceList/ProductPriceList.vue'
    import Xianhuo from './components/Xianhuo/Xianhuo.vue'
    import Caigou from './components/Caigou/Caigou.vue'
    import Waimao from './components/Waimao/Waimao.vue'
    import Xiangmu from './components/Xiangmu/Xiangmu.vue'
    import Jishu from './components/Jishu/Jishu.vue'
    import Piwen from './components/Piwen/Piwen.vue'
    import Advertsing from './components/Advertising/Advertising.vue'

    export default {
        name: 'App',
        data() {
            return {
                advertising:[],
                api:[],
                banner:[],
                goods:[],
                procurement:[],
                ANN:[],
                FTN:[],
                PNO:[],
                TNO:[],
                tcm:[]
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
            Piwen,
            Advertsing
        },
        mounted() {
            const _this = this;
            this.$http.get('/app/index/list')
                .then(function (response) {
                    const data = response.data.data;
                    _this.banner = data.banner;
                    _this.api = data.api;
                    _this.tcm = data.tcm;
                    _this.advertising = data.advertising;
                    _this.goods = data.goods;
                    _this.procurement = data.procurement;
                    _this.ANN = data.service.ANN;
                    _this.FTN = data.service.FTN;
                    _this.PNO = data.service.PNO;
                    _this.TNO = data.service.TNO;
                    _this.$store.dispatch('set_advertising', data.advertising);
                    _this.$store.dispatch('set_api', data.api);
                    _this.$store.dispatch('set_banner', data.banner);
                    _this.$store.dispatch('set_goods', data.goods);
                    _this.$store.dispatch('set_procurement', data.procurement);
                    _this.$store.dispatch('set_service', data.service);
                    _this.$store.dispatch('set_tcm', data.tcm);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #efedee;
        color: #858585;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    .pannel {
        background-color: #fff;
        margin-top: 5px;
        overflow: hidden;
    }
    /*标题logo*/
    .item-container .title{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        height: 20px;
        padding: 10px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .item-container .title .logo{
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: -2px;
        width: 100px;
        height: 30px;
    }
    .item-container .title .more{
        margin-right: 10px;
        font-size: 12px;
    }
</style>
