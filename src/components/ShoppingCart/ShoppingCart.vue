<style scoped>
    @import "ShoppingCart.css";
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>购物车({{cartList.length}})</p>
        </div>
        <div class="cartList" v-for="cart in cartList" :key="cart.companyid">
            <div class="goods-company">
                <i class="icon iconfont icon-gouxuan"></i>
                <i class="icon iconfont icon-dianpu"></i>
                {{cart.company}}
                <i class="icon iconfont icon-fanhui rotate_180"></i>
            </div>
            <div class="goods-info" v-for="goods in cart.shoppingCarts" :key="goods.id">
                <div class="check-box"><i class="icon iconfont icon-gouxuan"></i></div>
                <div class="goods-img" :style="{backgroundImage:'url(http://image.yaosuce.com'+goods.url+')'}"></div>
                <!--商品编辑器-->
                <div class="goods-amout-selector" v-if="curEditId === goods.id">
                    <div class="selector">
                        <p class="amount-selector"><span class="decrease-btn" @click="decreaseAmount">-</span><input v-model="goodsAmount" readonly><span class="increase-btn" @click="increaseAmount">+</span></p>
                        <p class="goods-specification">规格：{{goods.specification}}</p>
                    </div>
                    <div class="btn-group">
                        <button class="delete-btn" @click="deleteGoods">删除</button><button class="complete-btn" @click="changeGoodsAmount">完成</button>
                    </div>
                </div>
                <!--商品信息-->
                <div class="goods-desription" v-if="curEditId !== goods.id">
                    <p class="goods-name">{{goods.chanpmc}}</p>
                    <p class="goods-specification">规格：{{goods.specification}}</p>
                    <p class="goods-price">￥{{goods.unitPrice}}</p>
                </div>
                <div class="eidt-container" v-if="curEditId !== goods.id">
                    <p class="edit-button" @click="editGoods(goods)"><i  class="icon iconfont icon-zan"></i><span>编辑</span></p>
                    <p class="goods-amount"><span>x{{goods.goodsNum}}</span></p>
                </div>
            </div>
        </div>
        <!--底部购买按钮-->
        <div class="footer">
            <span class="select-all"><i class="icon iconfont icon-gouxuan"></i>全选</span>
            <span class="goods-price">合计￥{{totalPrice}}<span></span></span>
            <span class="go-pay">去支付</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:'shoppingcart',
        data(){
            return {
                cartList:[],
                curEditId:'',
                goodsAmount:''
            }
        },
        mounted(){
           this.getCartList()
        },
        computed:{
            totalPrice(){
                let price = 0;
                this.cartList.map(i=>{
                    i.shoppingCarts.map(j=>{
                        price+=j.totalPrice
                    })
                });
                return price
            }
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
            },
            editGoods(goods){
                this.curEditId = goods.id;
                this.goodsAmount = goods.goodsNum
            },
            decreaseAmount(){
                this.goodsAmount = Math.max(1,this.goodsAmount-1)
            },
            increaseAmount(){
                this.goodsAmount++
            },
            changeGoodsAmount(){
                this.$http.post(this.$APIs.CART_UPDATE,{
                    goodsNum:this.goodsAmount,
                    id:this.curEditId,
                    userid:localStorage.getItem('uid')
                })
                    .then(res=>{
                        console.log(res);
                        this.getCartList()
                    })
                    .catch(err=>{
                        alert(err)
                    })
            },
            deleteGoods(){
                this.$http.post(this.$APIs.CART_DELETE,{
                    id:this.curEditId,
                    userid:localStorage.getItem('uid')
                })
                    .then(res=>{
                        console.log(res);
                        this.getCartList()
                    })
                    .catch(err=>{
                        alert(err)
                    })
            }
        }
    }
</script>
