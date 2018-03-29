<style scoped>
    .fr{
        margin-right: 20px;
        font-size: 14px;
        color: #03A657;
    }
    .cartList {
        margin-top: 5px;
        position: relative;
    }

    .goods-company {
        height: 24px;
        padding: 10px 0 10px 20px;
        background-color: #fff;
    }

    .goods-info {
        height: 160px;
        padding: 5px 10px;
        margin-top: 1px;
        background-color: #fff;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;

    }

    .goods-img {
        width: 100px;
        height: 100px;
        margin: 10px;
        background-size: 100% 120px;
        background-repeat: no-repeat;
    }

    .goods-desription {
        font-size: 14px;
        margin-top: 20px;
    }

    .goods-name {
        color: #000000;
    }

    .goods-specification {
        margin-top: 20px;
        font-size: 14px;
    }

    .goods-price {
        margin-top: 10px;
        color: #f97433;
    }

    .goods-amount {
        position: absolute;
        right: 20px;
        bottom: 60px;
        color: #000000;
        font-size: 16px;
    }

    .goods-price-container {
        position: absolute;
        border-top: 1px solid #eeeeee;
        bottom: 0;
        left: 0;
        right: 0;
        height: 40px;
        line-height: 40px;
        text-align: right;
        padding-right: 20px;
        font-size: 14px;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>我的订单</p>
        </div>
        <div class="list-container">
            <VueDataLoading :loading="loading" :completed="completed" :listens="['infinite-scroll']" :init-scroll="true" @infinite-scroll="infiniteScroll">
                <div class="cartList" v-for="cart in dataList">
                    <div class="goods-company">
                        <!--<i class="icon iconfont icon-gouxuan" :class="{'icon-selected':false}"-->
                        <!--@click="selectCompany(cart.shoppingCarts)"></i>-->
                        <i class="icon iconfont icon-dianpu"></i>
                        {{cart.companyname}}
                        <i class="icon iconfont icon-more"></i>
                        <span class="fr">{{switchStatus(cart.status)}}</span>
                    </div>
                    <div class="goods-info" v-for="goods in cart.tbOrderDetials" :key="goods.id">
                        <div class="goods-img" :style="{backgroundImage:'url(http://image.yaosuce.com'+goods.url+')'}"></div>

                        <!--商品信息-->
                        <div class="goods-desription">
                            <p class="goods-name">{{goods.goodsname}}</p>
                            <p class="goods-specification">{{goods.specifications}}</p>
                            <p class="goods-price">￥{{goods.price}}</p>
                        </div>
                        <div class="goods-amount">
                            <span>x{{goods.totalamount}}</span>
                        </div>
                        <div class="goods-price-container">
                            共{{goods.totalamount}}件商品 小计：￥{{goods.price}}
                        </div>
                    </div>
                </div>
                <div slot="infinite-scroll-loading">加载中...</div>
            </VueDataLoading>

        </div>
    </div>
</template>
<script>
    export default {
        name:'order_list',
        data(){
            return{
                dataList: [],
                page: 1,
                pageSize: 15,
                loading: false,
                completed: false,
            }
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.ORDER_LIST,{
                    page:this.page,
                    pageSize:this.pageSize,
                    userid:localStorage.getItem('uid'),
                    type:'B'
                })
                    .then(res=>{
                        if (res.data.status===200){
                            this.dataList = this.dataList.concat(res.data.data.rows);
                            console.log(this.dataList);
                            this.page++
                        } else if(res.data.status===300){
                            this.completed = true
                        }else {
                            this.$message.error({message:this.data.msg});
                        }

                    })
                    .catch(err=>{
                        this.$message.error({message:'网络错误'});
                    })
            },
//                A 待签合同  B待发货 C 已发货 D已完成 E已取消 F已删除
            switchStatus(status){
                switch (status){
                    case 'A':
                        return '待签合同';
                    case 'B':
                        return '待发货';
                    case 'C':
                        return '已发货';
                    case 'D':
                        return '已完成';
                    case 'E':
                        return '已取消';
                    case 'F':
                        return '已删除'
                }
            },
            infiniteScroll() {
                this.fetchData();
            },
        }
    }
</script>
