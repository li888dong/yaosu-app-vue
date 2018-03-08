<style>

</style>
<template>
    <div id="xiangmu" class="item-container pannel xiangmu">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">要项目</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">项目供应</span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :data-foreigntradeid="item.projectid" :key="item.projectid" v-for="item in curData">
                <p><span class="item-title">{{item.companyname}}</span></p>
                <p><span class="item-info">{{item.addtime}}</span></p>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'xiangmu',
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
