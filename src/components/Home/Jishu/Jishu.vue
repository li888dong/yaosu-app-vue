<style>

</style>
<template>
    <div id="jishu" class="item-container pannel jishu">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">要技术</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">技术供应</span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :data-technologyid="item.technologyid" :key="item.technologyid" v-for="item in curData">
                <div class="item-title">{{item.companyname || ''}}</div>
                <div class="item-date">{{item.addtime || ''}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'jishu',
        data(){
            return{
                curSelected:'demand'
            }
        },
        mounted(){

        },
        computed:{
            demandData(){
              return this.$store.getters.TNO1
            },
            supplyData(){
              return this.$store.getters.TNO2
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
