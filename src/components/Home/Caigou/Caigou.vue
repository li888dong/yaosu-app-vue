<style>
    @import "Caigou.css";
</style>
<template>
    <div id="caigou" class="item-container pannel caigou">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more" @click="$router.push({path:'procurement',query:{type:'采购'}})">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item"
                 :data-procurementid="item.procurementid"
                 :key="item.procurementid"
                 v-for="item in procurement"
                 @click="$router.push({path:'procurement',query:{type:'采购'}})">
                <div class="item-title">{{item.goodname}}</div>
                <div class="item-company">{{item.companyname||'个人用户'}}</div>
                <div class="item-info">{{item.messagevalidity}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'caigou',
        data(){
            return{

            }
        },
        computed:{
            procurement(){
                return this.$store.getters.procurement
            }
        }
    }
</script>
