<style scoped>
    .top-bar{
        border-bottom: 5px solid #eeeeee;
    }
    .noaddress-container,
    .address-container
    {
        padding: 10px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
    }
    .address-container>span{
        position: absolute;
    }
    .address-container>.icon-dingwei{
        position: absolute;
        left: 10px;
        top: 10px;
    }
    .address-container>.shouhr{
        color: #000;
        left: 60px;
        top: -10px;
    }
    .address-container>.phone{
        color: #000;
        left: 160px;
        top: -10px;
    }
    .address-container>.dizhi{
        left: 60px;
        top: 10px;
        font-size: 12px;
    }
    .address-container>.isMor{
        right: 40px;
        top: 5px;
        font-size: 12px;
        border: 1px solid #03A657;
        border-radius: 4px;
        height: 20px;
        width: 36px;
        line-height: 20px;
        color: #03A657;
    }
    .address-container>.more{
        position: absolute;
        right: 10px;
    }
    .address-container>.type{
        color: #03A657;
        right: 60px;
        bottom: -10px;
    }
    .cartList{
        margin-top: 5px;
        position: relative;
    }
    .goods-company{
        height: 24px;
        padding: 10px 0 10px 20px;
        background-color: #fff;
    }
    .goods-info{
        height: 160px;
        padding: 5px 10px;
        margin-top: 1px;
        background-color: #fff;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;

    }
    .goods-img{
        width: 100px;
        height: 100px;
        margin: 10px;
        background-size: 100% 120px;
        background-repeat:no-repeat;
    }
    .goods-desription{
        font-size: 14px;
        margin-top: 20px;
    }
    .goods-name{
        color: #000000;
    }
    .goods-specification{
        margin-top: 20px;
        font-size: 14px;
    }
    .goods-price{
        margin-top: 10px;
        color: #f97433;
    }
    .goods-amount{
        position: absolute;
        right: 20px;
        bottom: 60px;
        color: #000000;
        font-size: 16px;
    }
    .goods-price-container{
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
    .footer{
        height: 30px;
        line-height: 30px;
        padding: 5px 10px;
        position: fixed;
        z-index: 14;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid #ccc;
        background-color: #fff;
        font-size: 14px;
    }
    .footer .confirm-btn{
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
    .total-price{
        position: absolute;
        right: 150px;
    }
    .fc-red{
        color: #f97433;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>确认订单</p>
        </div>
        <!--收货地址-->
        <div v-if="receiveAddress.addressid" class="address-container pannel">
            <i class="icon iconfont icon-dingwei"></i>
            <span class="shouhr">{{receiveAddress.shouhr}}</span>
            <span class="phone">{{receiveAddress.phone}}</span>
            <span class="dizhi">{{receiveAddress.dizhi}}</span>
            <span class="isMor">{{receiveAddress.isMor==0?'':'默认'}}</span>
            <span class="type">收货地址</span>
            <i class="icon iconfont icon-more more"></i>
        </div>
        <div v-else>
            <p @click="gotoReceiveAddress" class="noaddress-container pannel">还没有任何收货地址，立即添加 <i class="icon iconfont icon-more"></i></p>
        </div>
        <!--发票地址-->
        <div v-if="invoiceAddress.addressid" class="address-container pannel">
            <i class="icon iconfont icon-dingwei"></i>
            <span class="shouhr">{{invoiceAddress.shouhr}}</span>
            <span class="phone">{{invoiceAddress.phone}}</span>
            <span class="dizhi">{{invoiceAddress.dizhi}}</span>
            <span class="isMor">{{invoiceAddress.isMor==0?'':'默认'}}</span>
            <span class="type">收票地址</span>
            <i class="icon iconfont icon-more more"></i>
        </div>
        <div v-else>
            <p @click="gotoInvoiceAddress" class="noaddress-container pannel">还没有任何发票邮寄地址，立即添加 <i class="icon iconfont icon-more"></i></p>
        </div>
        <div class="cartList" v-for="cart in carts">
            <div class="goods-company">
                <i class="icon iconfont icon-dianpu"></i>
                {{cart.company}}
            </div>
            <div class="goods-info" v-for="goods in cart.shoppingCarts" :key="goods.id">
                <div class="goods-img" :style="{backgroundImage:'url(http://image.yaosuce.com'+goods.url+')'}"></div>
                <!--商品信息-->
                <div class="goods-desription">
                    <p class="goods-name">{{goods.chanpmc}}</p>
                    <p class="goods-specification">规格：{{goods.specification}}</p>
                    <p class="goods-price">￥{{goods.unitPrice}}</p>
                </div>
                <div class="goods-amount">
                    <span>x{{goods.goodsNum}}</span>
                </div>
                <div class="goods-price-container">
                    共{{goods.goodsNum}}件商品 小计：￥{{goods.totalPrice}}
                </div>
            </div>
        </div>
        <div>
            发票信息
        </div>
        <div>
            卖家留言
        </div>
        <div class="footer">
            <span class="total-price">合计：<span class="fc-red">{{totalPrice}}</span></span><button class="confirm-btn">提交订单</button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'dingdan',
        data(){
            return{
                totalPrice:'',
                carts:[],
                invoiceAddress:[],
                receiveAddress:[]
            }
        },
        mounted(){
            this.fetchData()
        },
        computed:{
            ids(){
                return this.$route.query.ids
            }
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.GO_BOOKING,{
                    userid:localStorage.getItem('uid'),
                    ids:this.ids
                })
                    .then(res=>{
                        console.log(res);
                        this.totalPrice = res.data.data.totalPrice;
                        this.carts = res.data.data.carts;
                        this.invoiceAddress = res.data.data.invoiceAddress;
                        this.receiveAddress = res.data.data.receiveAddress;
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    });
            },
            gotoReceiveAddress(){
                this.$router.push('receiveAddress')
            },
            gotoInvoiceAddress(){
                this.$router.push('invoiceAddress')
            }
        }
    }
</script>
