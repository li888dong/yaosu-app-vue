<style scoped>
    @import "Order.css";

</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>确认订单</p>
        </div>
        <!--收货地址-->
        <div v-if="receiveAddress.addressid" class="address-container pannel" @click="$router.push({path:'address_list',query:{addressType:0}})">
            <i class="icon iconfont icon-dingwei"></i>
            <span class="shouhr">{{receiveAddress.shouhr}}</span>
            <span class="phone">{{receiveAddress.phone}}</span>
            <span class="dizhi">{{receiveAddress.dizhi}}</span>
            <span class="isMor">{{receiveAddress.isMor == 0 ? '' : '默认'}}</span>
            <span class="type">收货地址</span>
            <i class="icon iconfont icon-more more"></i>
        </div>
        <div v-else>
            <p @click="gotoReceiveAddress" class="noaddress-container pannel">还没有任何收货地址，立即添加 <i
                class="icon iconfont icon-more"></i></p>
        </div>
        <!--发票地址-->
        <div v-if="invoiceAddress.addressid" class="address-container pannel" @click="$router.push({path:'address_list',query:{addressType:1}})">
            <i class="icon iconfont icon-dingwei"></i>
            <span class="shouhr">{{invoiceAddress.shouhr}}</span>
            <span class="phone">{{invoiceAddress.phone}}</span>
            <span class="dizhi">{{invoiceAddress.dizhi}}</span>
            <span class="isMor">{{invoiceAddress.isMor == 0 ? '' : '默认'}}</span>
            <span class="type">收票地址</span>
            <i class="icon iconfont icon-more more"></i>
        </div>
        <div v-else>
            <p @click="gotoInvoiceAddress" class="noaddress-container pannel">还没有任何发票邮寄地址，立即添加 <i
                class="icon iconfont icon-more"></i></p>
        </div>
        <div class="border"></div>
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
            <span class="total-price">合计：<span class="fc-red">{{totalPrice}}</span></span>
            <button class="confirm-btn">提交订单</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'dingdan',
        data() {
            return {
                totalPrice: '',
                carts: [],
                invoiceAddress: [],
                receiveAddress: []
            }
        },
        mounted() {
            this.fetchData()
        },
        computed: {
            ids() {
                return this.$route.query.ids
            }
        },
        methods: {
            fetchData() {
                this.$http.post(this.$APIs.GO_BOOKING, {
                    userid: localStorage.getItem('uid'),
                    ids: this.ids
                })
                    .then(res => {
                        console.log(res);
                        this.totalPrice = res.data.data.totalPrice;
                        this.carts = res.data.data.carts;
                        this.invoiceAddress = res.data.data.invoiceAddress;
                        this.receiveAddress = res.data.data.receiveAddress;
                    })
                    .catch(err => {
                        this.$message.error('网络错误')
                    });
            },
            gotoReceiveAddress() {
                this.$router.push('receiveAddress')
            },
            gotoInvoiceAddress() {
                this.$router.push('invoiceAddress')
            }
        }
    }
</script>
