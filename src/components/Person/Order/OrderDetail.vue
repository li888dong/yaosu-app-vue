<style scoped>
    @import "Order.css";
    .invoice-data-container{
        position: static;
        box-sizing: border-box;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>订单详情</p>
        </div>
        <!--收货地址-->
        <div class="address-container pannel">
            <i class="icon iconfont icon-dingwei"></i>
            <span class="shouhr">{{orderData.consignee}}</span>
            <span class="phone">{{orderData.consigneephone}}</span>
            <span class="dizhi">{{orderData.address}}</span>
            <span class="type">收货地址</span>
            <i class="icon iconfont icon-more more"></i>
        </div>
        <!--发票地址-->
        <div class="address-container pannel">
            <i class="icon iconfont icon-dingwei"></i>
            <span class="shouhr">{{orderData.invoicereman}}</span>
            <span class="phone">{{orderData.invoicephone}}</span>
            <span class="dizhi">{{orderData.invoiceaddress}}</span>
            <span class="type">收票地址</span>
            <i class="icon iconfont icon-more more"></i>
        </div>
        <div class="border"></div>
        <div class="cartList">
            <div class="goods-company">
                <i class="icon iconfont icon-dianpu"></i>
                {{orderData.companyname}}
            </div>
            <div class="goods-info" v-for="goods in orderData.tbOrderDetials">
                <div class="goods-img" :style="{backgroundImage:'url(http://image.yaosuce.com'+goods.url+')'}"></div>
                <!--商品信息-->
                <div class="goods-desription">
                    <p class="goods-name">{{goods.goodsname}}</p>
                    <p class="goods-specification">规格：{{goods.specifications}}</p>
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
        <!--发票信息选择框-->
        <div class="invoice-data-container pannel">
            <p>
                <span>订单编号 :</span><span>{{orderData.orderno}}</span><br>
                <span>创建时间 :</span><span>{{orderData.addtimestr}}</span><br>
                <span>发票类型 :</span><span>{{orderData.invoicetype==0?'增值税普通发票':'增值税专用发票'}}</span><br>
                <span>公司名称 :</span><span>{{orderData.companyname}}</span><br>
                <span>税号/信用代码 :</span><span>{{orderData.tfn}}</span><br>
            </p>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'dingdan',
        data() {
            return {
                selectorShow:false,
                orderData:{}
            }
        },
        mounted() {
//            获取订单信息
            this.fetchData();
        },
        computed: {
            orderno() {
                return this.$route.query.orderno
            }
        },
        methods: {
            fetchData() {
                this.$http.post(this.$APIs.ORDER_DETAIL, {
                    orderno:this.orderno
                })
                    .then(res => {
                        console.log(res);
                        this.orderData = res.data.data;
                    })
                    .catch(err => {
                        this.$message.error('网络错误')
                    });
            },

            changeInvoiceType(type){
                this.invoiceType = type;
                this.fetchInvoice()
            }
        }
    }
</script>
