<style scoped>
    .person-container{
        margin: 0!important;
    }
    .header-container{
        height: 180px;
        overflow: hidden;
        background-color: #03A657;
        color: #ffffff;
        text-align: center;
    }
    .header-container .icon-fanhui{
        position: absolute;
        left: 10px;
        top: 20px;
    }
    .head{
        margin-top: 40px;
    }
    .icon-touxiang2{
        font-size: 80px;
    }
    .item-list>div{
        background-color: #fff;
        height: 40px;
        margin-top: 5px;
        line-height: 40px;
        font-size: 14px;
    }
    .item-list .icon-more{
        float: right;
        margin-right: 15px;
    }
    .logout{
        width: 200px;
        background-color: #df5000;
        color: #ffffff;
        margin-left: 50%;
        transform: translate(-50%);
        padding: 5px 10px;
        margin-top: 15px;
        border-radius: 4px;
    }
</style>
<template>
    <div class="person-container">
        <div class="header-container">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p class="head"><i class="icon iconfont icon-touxiang2"></i></p>
            <p>{{uname}}</p>
        </div>
        <div class="item-list">
            <div class="cart" @click="$router.push('shopping_cart')">购物车<i class="icon iconfont icon-more"></i></div>
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
