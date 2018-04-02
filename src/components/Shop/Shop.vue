<style scoped>
    .shop-container{
        margin: 0!important;
    }
    .logo{
        height: 200px;
        background-size:100% 180px;
        background-repeat:no-repeat;
        background-color: #fff;
    }
    .icon-dingwei{
        color: #cc0000;
        margin-top: 25px;
    }
    .company-info{
        font-size: 14px;
        margin-top: 8px;
        display: flex;
        padding: 15px;
        height: 70px;

    }
    .company-info p{
        margin: 5px;
    }
    .company-info button{
        background-color: #03A657;
        color: #ffffff;
        padding: 5px;
        margin-top: 10px;
        border-radius: 2px;
        height: 42px;
    }
    .call{
        padding: 8px;
    }
    .icon-76{
        color: #007aff;
        font-size: 22px;
        vertical-align: middle;
    }
    a{
        width: 100%;
        display: inline-block;
        color: #000000;
        text-decoration: none;
        font-size: 12px;
    }
    i{
        vertical-align: middle;
    }
    .goods-list{
        width: 48%;
        display: inline-block;
        border-radius: 4px;
        margin: 1%;
        font-size: 14px;
        padding: 5px;
        box-sizing: border-box;
        color: #000000;
    }
    .chund{
        font-size: 12px;
    }
    .pinp{
        font-size: 12px;
        color: #999;
    }
    .icon-huo{
        color: #cc0000;
    }
</style>
<template>
    <div class="shop-container">
        <!--标题栏-->
        <div class="top-bar fixedTop" v-if="scrollTop">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>店铺</p>
        </div>
        <div class="logo" :style="{backgroundImage:'url(http://image.yaosuce.com'+companyData.company.logo+')'}">
            <i class="icon iconfont icon-fanhui circle-back" @click="$router.go(-1)"></i>
            <h3 v-if="!companyData.company.logo">此处logo可在后台添加</h3>
        </div>
        <div class="pannel company-info h_70">
            <i class="icon iconfont icon-dingwei"></i>
            <div>
                <p>{{companyData.company.qiymc}}</p>
                <p>{{companyData.company.dizhi}}</p>
            </div>
            <button>加入企业</button>
        </div>
        <a :href="'tel:'+companyData.company.tel">
            <div class="pannel call">
                <i class="icon iconfont icon-76"></i>
                <span>详情咨询</span>
                <span>{{companyData.company.tel}}</span>
                <i class="icon iconfont icon-more fr"></i>
            </div>
        </a>
        <div class="goods-list pannel" v-for="goods in goodsData" @click="$router.push({path:'goods_detail',query:{goodsId:goods.goodsid}})">
            <p class="chanpmc"><i class="icon iconfont icon-huo" v-if="goods.isHot==='1'"></i>{{goods.chanpmc}}</p>
            <p class="chund"><i class="icon iconfont icon-shuidi"></i>{{goods.chund}}</p>
            <p class="pinp">品牌：{{goods.pinp}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'shop',
        data(){
            return{
                scrollTop:'',
                companyData:{
                    company:{
                        logo:''
                    }
                },
                goodsData:''
            }
        },
        mounted(){
            document.documentElement.scrollTop = 0;
            window.onscroll = function () {
                _this.scrollTop = document.documentElement.scrollTop !== 0;
            };

            this.fetchData()
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.SHOP_VIEW,{
                    companyid:this.$route.query.companyid,
                    status:1
                })
                    .then(res=>{
                        console.log(res);
                        this.companyData = res.data.data.rows2;
                        this.goodsData = res.data.data.rows;
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            }
        }
    }
</script>
