<style scoped>
    @import "ShoppingCart.css";
    .dialog-footer button{
        background-color: #fff;
        color: #03A657;
    }
</style>
<template>
    <div class="cart-container">
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>购物车({{cartList.length}})</p>
        </div>
        <div class="cartList" v-for="cart in cartList">
            <div class="goods-company">
                <!--<i class="icon iconfont icon-gouxuan" :class="{'icon-selected':false}"-->
                <!--@click="selectCompany(cart.shoppingCarts)"></i>-->
                <i class="icon iconfont icon-dianpu"></i>
                {{cart.company}}
                <i class="icon iconfont icon-more"></i>
            </div>
            <div class="goods-info" v-for="goods in cart.shoppingCarts" :key="goods.id">
                <div class="check-box"><i class="icon iconfont icon-gouxuan"
                                          :class="{'icon-selected':selectedList.has(goods)}"
                                          @click="selectGoods(goods)"></i></div>
                <div class="goods-img" :style="{backgroundImage:'url(http://image.yaosuce.com'+goods.url+')'}"></div>
                <!--商品编辑器-->
                <div class="goods-amout-selector" v-if="curEditId === goods.id">
                    <div class="selector">
                        <p class="amount-selector"><span class="decrease-btn" @click="decreaseAmount">-</span><input
                            v-model="goodsAmount" readonly><span class="increase-btn" @click="increaseAmount">+</span>
                        </p>
                        <p class="goods-specification">规格：{{goods.specification}}</p>
                    </div>
                    <div class="btn-group">
                        <button class="delete-btn" @click="deleteGoods">删除</button>
                        <button class="complete-btn" @click="changeGoodsAmount">完成</button>
                    </div>
                </div>
                <!--商品信息-->
                <div class="goods-desription" v-if="curEditId !== goods.id">
                    <p class="goods-name">{{goods.chanpmc}}</p>
                    <p class="goods-specification">规格：{{goods.specification}}</p>
                    <p class="goods-price">￥{{goods.unitPrice}}</p>
                </div>
                <div class="eidt-container" v-if="curEditId !== goods.id">
                    <p class="edit-button" @click="editGoods(goods)"><i
                        class="icon iconfont icon-zan"></i><span>编辑</span></p>
                    <p class="goods-amount"><span>x{{goods.goodsNum}}</span></p>
                </div>
            </div>
        </div>
        <!--底部购买按钮-->
        <div class="footer">
            <span class="select-all" @click="selectAll"><i class="icon iconfont icon-gouxuan"
                                                           :class="{'icon-selected':isSelectAll}"></i>全选</span>
            <span class="goods-price">合计￥{{totalPrice}}<span></span></span>
            <span class="go-pay" @click="confirmDialog=true">去支付</span>
        </div>

        <!--确认生成订单的弹窗-->
        <el-dialog title="确认订单" :visible.sync="confirmDialog" width="80%">
            合计：{{selectedList.size}}件商品，共{{totalPrice}}元
            <span slot="footer" class="dialog-footer">
                <button @click="confirmDialog = false" class="cancel-btn">取 消</button><button
                @click="gotoOrder" class="confirm-btn">确 定</button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'shoppingcart',
        data() {
            return {
//                购物车列表
                cartList: [],
//                当前编辑的购物车id
                curEditId: '',
//                编辑的商品数量
                goodsAmount: '',
//                已选择的商品
                selectedList: new Set(),
//                已选择的商品id
                ids:'',
//                总价
                totalPrice: 0,
//                是否全选
                isSelectAll: false,
//                显示确认框
                confirmDialog:false
            }
        },
        mounted() {
            this.getCartList()
        },
        methods: {
//            获取购物车列表
            getCartList() {
                this.$http.post(this.$APIs.CART_LIST, {
                    userid: localStorage.getItem('uid')
                })
                    .then(res => {
                        console.log(res);
                        if (res.data.status ===200){
                            this.cartList = res.data.data;
                            console.log(res)
                        }else {
                            this.$message.error({message:res.data.msg});
                        }
                    })
                    .catch(err => {
                        this.$message.error({message:'网络错误'});
                    })
            },
            editGoods(goods) {
                this.curEditId = goods.id;
                this.goodsAmount = goods.goodsNum
            },
            decreaseAmount() {
                this.goodsAmount = Math.max(1, this.goodsAmount - 1)
            },
            increaseAmount() {
                this.goodsAmount++
            },
//            提交更改数量
            changeGoodsAmount() {
                this.$http.post(this.$APIs.CART_UPDATE, {
                    goodsNum: this.goodsAmount,
                    id: this.curEditId,
                    userid: localStorage.getItem('uid')
                })
                    .then(res => {
                        console.log(res);
                        this.curEditId = '';
                        this.getCartList();
                    })
                    .catch(err => {
                        this.$message.error({message:'网络错误'});
                    })
            },
            deleteGoods() {
                this.$http.post(this.$APIs.CART_DELETE, {
                    id: this.curEditId,
                    userid: localStorage.getItem('uid')
                })
                    .then(res => {
                        console.log(res);
                        this.getCartList()
                    })
                    .catch(err => {
                        this.$message.error({message:'网络错误'});
                    })
            },
//            选择商品
            selectGoods(goods) {
                let temArr = [];
                if (this.selectedList.has(goods)) {
                    this.selectedList.delete(goods)
                } else {
                    this.selectedList.add(goods)
                }
                temArr = Array.from(this.selectedList);
//                价格求和
                this.totalPrice = temArr.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice, 0)
            },
//            选择全部
            selectAll() {
                let temArr = [];

                if (this.isSelectAll) {
                    this.selectedList.clear()
                } else {
                    this.cartList.map(i => {
                        i.shoppingCarts.map(j => {
                            this.selectedList.add(j);
                        })
                    });
                }
//                Set转Array
                temArr = Array.from(this.selectedList);
//                价格求和
                this.totalPrice = temArr.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice, 0);
                this.isSelectAll = !this.isSelectAll;
            },
            gotoOrder(){
                let temArr;
//                Set转Array
                temArr = Array.from(this.selectedList);
                temArr.map(i=>{
                    this.ids+=i.id+','
                });

                this.$router.push({path:'order',query:{ids:this.ids}})
            }

        }
    }
</script>
