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
            <table cellspacing="5" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <div class="cart" @click="$router.push('own_goods')">
                                <span class="list-icon chanpin"><i class="icon iconfont icon-shujuku1"></i></span><p>我的产品 </p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push('shopping_cart')">
                                <span class="list-icon gouwuche"><i class="icon iconfont icon-gouwuche"></i> </span><p>购物车 </p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push({path:'order_list',query:{orderType:'in'}})">
                                <span class="list-icon dingdan"><i class="icon iconfont icon-shenhe"></i> </span><p>我的订单</p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push({path:'order_list',query:{orderType:'out'}})">
                                <span class="list-icon dingdanc"><i class="icon iconfont icon-ruku"></i> </span><p>卖出的订单</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart" @click="$router.push('offer')">
                                <span class="list-icon baojia"></span><p>我的报价</p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push({path:'procurement',query:{procureType:'own'}})">
                                <span class="list-icon xin"></span><p>我的采购</p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push({path:'service_list',query:{type:'项目',demand:'要项目',supply:'项目供应',isOwn:'own'}})">
                                <span class="list-icon xiangmu"></span><p>我的项目</p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push({path:'service_list',query:{type:'外贸',demand:'要产品',supply:'要渠道',isOwn:'own'}})">
                                <span class="list-icon waimao"></span><p>我的外贸</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart" @click="$router.push({path:'check',query:{type:'检测',demand:'检测',supply:'要检测',isOwn:'own'}})">
                                <span class="list-icon jiance"></span><p>我的检测</p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push({path:'service_list',query:{type:'技术',demand:'要技术',supply:'技术供应',isOwn:'own'}})">
                                <span class="list-icon jishu"></span><p>我的技术</p>
                            </div>
                        </td>
                        <td>
                            <div class="cart" @click="$router.push({path:'service_list',query:{type:'批文',demand:'要批文',supply:'批文转让',isOwn:'own'}})">
                                <span class="list-icon piwen"></span><p>我的批文</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
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
