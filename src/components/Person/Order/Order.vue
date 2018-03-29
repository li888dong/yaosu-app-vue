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
        <div class="invoice-info pannel" @click="selectorShow = true">
            发票信息
            <i class="icon iconfont icon-more fr"></i>
        </div>

        <!--发票信息选择框-->
        <div class="invoice-selector" v-if="selectorShow" >
            <p class="title">发票信息</p>
            <p class="btn-group">
                <button :class="{selected:invoiceType===0}" @click="changeInvoiceType(0)">增值税普通发票</button>
                <button :class="{selected:invoiceType===1}" @click="changeInvoiceType(1)">增值税专用发票</button>
            </p>
            <i class="icon iconfont icon-guanbi fr" @click="selectorShow=false"></i>
            <div class="invoice-data-container" v-if="invoiceType===0">
                <p v-if="invoiceData.generalInvoice">
                    <span>公司名称 :</span><span>{{invoiceData.generalInvoice.companyname}}</span><br>
                    <span>纳税人识别号 :</span><span>{{invoiceData.generalInvoice.tfn}}</span>
                </p>
                <p v-else @click="$router.push('invoiceNormal')">暂无增值税普通发票信息，点击添加</p>
            </div>
            <div class="invoice-data-container" v-else>
                <p v-if="invoiceData.taxInvoice">
                    <span>公司名称 :</span><span>{{invoiceData.taxInvoice.companyname}}</span><br>
                    <span>纳税人识别号 :</span><span>{{invoiceData.taxInvoice.tfn}}</span><br>
                    <span>注册地址 :</span><span>{{invoiceData.taxInvoice.address}}</span><br>
                    <span>注册电话 :</span><span>{{invoiceData.taxInvoice.tel}}</span><br>
                    <span>开户银行 :</span><span>{{invoiceData.taxInvoice.bank}}</span><br>
                    <span>银行账号 :</span><span>{{invoiceData.taxInvoice.cardno}}</span>
                </p>
                <p v-else @click="$router.push('invoiceSpecial')">暂无增值税专用发票信息，点击添加</p>
            </div>

        </div>
        <!--模态框 用来做遮罩-->
        <div class="model" v-if="selectorShow" @click="selectorShow = false">

        </div>
        <div class="pannel note">
            <p>买家留言：</p>
            <textarea cols="30" rows="10" placeholder="对本次交易的说明（选填）"></textarea>
        </div>
        <div class="footer">
            <span class="total-price">合计：<span class="fc-red">{{totalPrice}}</span></span>
            <button class="confirm-btn" @click="createOrder">提交订单</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'dingdan',
        data() {
            return {
                selectorShow:false,
//                0普通发票  1增值税发票
                invoiceType:0,
                invoiceData:'',
//                总价
                totalPrice: '',
//                购物车信息
                carts: [],
//                发票地址信息
                invoiceAddress: {},
//                收货地址信息
                receiveAddress: {},
//                增值税专用发票信息
                vatSpecialInvoice:{},
//                增值税普通发票信息
                plainInvoice:{}
            }
        },
        mounted() {
//            获取订单信息
            this.fetchData();
//            获取发票信息
            this.fetchInvoice()
        },
        computed: {
            ids() {
                return this.$route.query.ids.replace(/,$/,'')
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
                        this.vatSpecialInvoice = res.data.data.vatSpecialInvoice;
                        this.plainInvoice = res.data.data.plainInvoice;
                    })
                    .catch(err => {
                        this.$message.error('网络错误')
                    });
            },
            fetchInvoice(){
                this.$http.post(this.$APIs.INVOICE_INFO,{
                    userid:localStorage.getItem('uid'),
                    invoiceType:this.invoiceType
                })
                    .then(res=>{
                        console.log('发票信息',res);
                        this.invoiceData = res.data.data
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            },
            createOrder(){
                let invoiceData = null;
                if (this.invoiceType === 0){
                    invoiceData = this.plainInvoice
                }else {
                    invoiceData = this.vatSpecialInvoice
                }
                this.$http.post(this.$APIs.CREATE_ORDER,{
                    userid:localStorage.getItem('uid'),
                    ids:this.ids,
                    consignee:this.receiveAddress.shouhr,
                    consigneephone:this.receiveAddress.phone,
                    deliveryaddress:this.receiveAddress.dizhi,
                    invoicetype:this.invoiceType,
                    companyname:invoiceData.companyname,
                    tfn:invoiceData.tfn,
                    address:invoiceData.address,
                    tel:invoiceData.tel,
                    bank:invoiceData.bank,
                    cardno:invoiceData.cardno,
                    invoicereman:this.invoiceAddress.shouhr,
                    invoicephone:this.invoiceAddress.phone,
                    invoiceaddress:this.invoiceAddress.dizhi,
                    deliveryMethod:0,
                })
                    .then(res=>{
                        console.log(res)
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            },
            gotoReceiveAddress() {
                this.$router.push('receiveAddress')
            },
            gotoInvoiceAddress() {
                this.$router.push('invoiceAddress')
            },
            changeInvoiceType(type){
                this.invoiceType = type;
                this.fetchInvoice()
            }
        }
    }
</script>
