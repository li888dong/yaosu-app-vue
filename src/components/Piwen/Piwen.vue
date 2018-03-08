<style>

</style>
<template>
    <div id="piwen" class="item-container pannel piwen">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">要批文</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">批文转让</span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :data-technologyid="item.approvalnumberid" :key="item.approvalnumberid" v-for="item in curData">
                <div class="item-title">{{item.companyname || ''}}</div>
                <div class="item-date">{{item.addtime || ''}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'piwen',
        props:['demandData','supplyData'],
        data(){
            return{
                curSelected:'demand'
            }
        },
        mounted(){

        },
        computed:{
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
