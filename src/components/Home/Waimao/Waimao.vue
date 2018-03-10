<style>
    @import "Waimao.css";
</style>
<template>
    <div id="waimao" class="item-container pannel waimao">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">要产品</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">要渠道</span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :data-foreigntradeid="item.foreigntradeid" :key="item.foreigntradeid" v-for="item in curData">
                <p><span class="item-title">{{item.companyname}}</span></p>
                <p><span class="item-info">HS号：{{item.hs}}</span></p>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'waimao',
        data(){
            return{
                curSelected:'demand'
            }
        },
        computed:{
            demandData(){
                return this.$store.getters.FTN1
            },
            supplyData(){
                return this.$store.getters.FTN2
            },
            curData(){
                return this.curSelected === 'demand'?this.demandData:this.supplyData
            }
        },
        methods:{
            changeCur(cur){
                this.curSelected = cur
            }
        }
    }
</script>
