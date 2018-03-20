<style scoped>
    .cartList{
        margin-top: 5px;
    }
    .rotate_180{
        display: inline-block;
        transform: rotate(180deg);
    }
    .goods-company{
        height: 24px;
        padding: 10px;
        background-color: #fff;
    }
    .goods-info{
        height: 120px;
        padding: 5px 10px;
        margin-top: 1px;
        background-color: #fff;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

    }
    .goods-img{
        width: 120px;
        height: 120px;
        background-size: 100% 120px;
        background-repeat:no-repeat;
    }
    .goods-desription{
        font-size: 14px;
    }
    .goods-name{
        color: #000000;
    }
    .goods-specification{
        margin-top: 40px;
    }
    .goods-price{
        margin-top: 10px;
        color: #f97433;
    }
    .goods-amount{
        margin-top: 66px;
        color: #000000;
        text-align: right;
        margin-right: 10px;

    }
    .edit-button{
        margin-right: 10px;
    }
    .icon-zan{
        margin-right: 5px;
    }
    .footer{
        height: 30px;
        padding: 5px 10px;
        position: fixed;
        z-index: 14;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid #ccc;
    }
    .footer>.goods-price{
        line-height: 30px;
        margin-left: 100px;
    }
    .select-all{

    }
    .go-pay{
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100px;
        background-color: #03A657;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>购物车({{cartList.length}})</p>
        </div>
        <div class="cartList" v-for="cart in cartList">
            <div class="goods-company">
                <i class="icon iconfont icon-gouxuan"></i>
                <i class="icon iconfont icon-dianpu"></i>
                {{cart.company}}
                <i class="icon iconfont icon-fanhui rotate_180"></i>
            </div>
            <div class="goods-info" v-for="goods in cart.shoppingCarts">
                <div class="check-box"><i class="icon iconfont icon-gouxuan"></i></div>
                <div class="goods-img" :style="{backgroundImage:'url(http://image.yaosuce.com'+goods.url+')'}"></div>
                <div class="goods-desription">
                    <p class="goods-name">{{goods.chanpmc}}</p>
                    <p class="goods-specification">规格：{{goods.specification}}</p>
                    <p class="goods-price">￥{{goods.unitPrice}}</p>
                </div>
                <div class="eidt-container">
                    <p class="edit-button"><i  class="icon iconfont icon-zan"></i><span>编辑</span></p>
                    <p class="goods-amount"><span>x{{goods.goodsNum}}</span></p>
                </div>
            </div>
        </div>
        <div class="footer">
            <span class="select-all"><i class="icon iconfont icon-gouxuan"></i>全选</span>
            <span class="goods-price">合计￥<span></span></span>
            <span class="go-pay">去支付</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:'shoppingcart',
        data(){
            return {
                cartList:[]
            }
        },
        mounted(){
           this.getCartList()
        },
        methods:{
            getCartList(){
                this.$http.post(this.$APIs.CART_LIST,{
                    userid:"f0ae84fc-60a2-48e5-a2f2-75bf26d2ac2a"
                })
                    .then(res=>{
                        console.log(res);
                        this.cartList = res.data.data
                    })
                    .catch(err=>{
                        alert(err)
                    })
            }
        }
    }
</script>
