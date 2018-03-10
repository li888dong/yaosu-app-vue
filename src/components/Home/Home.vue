<template>
    <div>

        <!--顶部banner搜索框-->
        <header>
            <Banner :bannerData="banner"></Banner>
        </header>

        <!--导航按钮-->
        <NavList></NavList>

        <!--参考价格-->
        <ProductPriceList :yuanliaos="api" :zhongyaos="tcm"></ProductPriceList>

        <!--优质现货-->
        <Xianhuo :goods="goods"></Xianhuo>
        <Advertsing></Advertsing>

        <!--热门采购-->
        <Caigou :procurement="procurement"></Caigou>
        <Advertsing></Advertsing>

        <!--优选外贸-->
        <Waimao :demandData="FTN1" :supplyData="FTN2"></Waimao>
        <Advertsing></Advertsing>

        <!--推荐项目-->
        <Xiangmu :demandData="PNO1" :supplyData="PNO2"></Xiangmu>
        <Advertsing></Advertsing>

        <!--创新技术-->
        <Jishu :demandData="TNO1" :supplyData="TNO2"></Jishu>
        <Advertsing></Advertsing>

        <!--人气批文-->
        <Piwen :demandData="ANN1" :supplyData="ANN2"></Piwen>
        <Advertsing></Advertsing>
    </div>
</template>

<script>
    import Banner from '@/components/Home/Banner/Banner.vue'
    import NavList from '@/components/Home/NavList/NavList.vue'
    import ProductPriceList from '@/components/Home/ProductPriceList/ProductPriceList.vue'
    import Xianhuo from '@/components/Home/Xianhuo/Xianhuo.vue'
    import Caigou from '@/components/Home/Caigou/Caigou.vue'
    import Waimao from '@/components/Home/Waimao/Waimao.vue'
    import Xiangmu from '@/components/Home/Xiangmu/Xiangmu.vue'
    import Jishu from '@/components/Home/Jishu/Jishu.vue'
    import Piwen from '@/components/Home/Piwen/Piwen.vue'
    import Advertsing from '@/components/Home/Advertising/Advertising.vue'

    export default {
        name: 'App',
        data() {
            return {
                advertising:[],
                api:[],
                banner:[],
                goods:[],
                procurement:[],
                ANN1:[],
                ANN2:[],
                FTN1:[],
                FTN2:[],
                PNO1:[],
                PNO2:[],
                TNO1:[],
                TNO2:[],
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
        beforeMount(){

        },
        mounted() {
            const _this = this;
            const adDoms = document.querySelectorAll('.ad-logo');

            this.$http.get(this.$APIs.INDEX_LIST)
                .then(function (response) {
                    const data = response.data.data;
                    _this.banner = data.banner;
                    _this.api = data.api;
                    _this.tcm = data.tcm;
                    _this.advertising = data.advertising;
                    _this.goods = data.goods;
                    _this.procurement = data.procurement;
                    _this.ANN1 = data.service.ANN[0].list;
                    _this.ANN2 = data.service.ANN[1].list;
                    _this.FTN1 = data.service.FTN[0].list;
                    _this.FTN2 = data.service.FTN[1].list;
                    _this.PNO1 = data.service.PNO[0].list;
                    _this.PNO2 = data.service.PNO[1].list;
                    _this.TNO1 = data.service.TNO[0].list;
                    _this.TNO2 = data.service.TNO[1].list;
                    _this.$store.dispatch('set_advertising', data.advertising);
                    _this.$store.dispatch('set_api', data.api);
                    _this.$store.dispatch('set_banner', data.banner);
                    _this.$store.dispatch('set_goods', data.goods);
                    _this.$store.dispatch('set_procurement', data.procurement);
                    _this.$store.dispatch('set_service', data.service);
                    _this.$store.dispatch('set_tcm', data.tcm);

//                    设置广告的图片链接
                    for (let i=0;i<_this.advertising.length;i++){
                        adDoms[i].style.backgroundImage = 'url(http://image.yaosuce.com'+_this.advertising[i].picture+')'
                    }
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
