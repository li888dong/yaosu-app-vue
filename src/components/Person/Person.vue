<style scoped>
  @import "Person.css";
</style>
<template>
    <div class="person-container">
        <div class="header-container">
            <i class="icon iconfont icon-fanhui" @click="$router.push('home')"></i>
            <p class="head"><i class="icon iconfont icon-touxiang2"></i></p>
            <p>{{uname}}</p>
        </div>
        <div class="item-list">
            <div class="cart" @click="$router.push('shopping_cart')"><span class="list-icon gouwuche"><i class="icon iconfont icon-gouwuche"></i> </span>购物车 <i class="icon iconfont icon-more"></i></div>
            <div class="cart" @click="$router.push('order')"><span class="list-icon dingdan"><i class="icon iconfont icon-shenhe"></i> </span>我的订单 <i class="icon iconfont icon-more"></i></div>
            <div class="cart" @click="$router.push('offer')"><span class="list-icon baojia"><i class="icon iconfont icon-baojiadan"></i> </span>我的报价 <i class="icon iconfont icon-more"></i></div>
        </div>
        <div>
            <button class="logout" @click="logout">退出登陆</button>
        </div>
    </div>

</template>
<script>
    export default {
        name:'',
        computed:{
            uname(){
                return localStorage.getItem('nic')
            }
        },
        methods:{
            logout(){
                localStorage.removeItem('uid');
                localStorage.removeItem('nic');
                this.$router.push('home')
            }
        }
    }
</script>
