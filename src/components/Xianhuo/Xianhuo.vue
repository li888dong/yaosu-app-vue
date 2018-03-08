<style>
    @import "Xianhuo.css";
</style>
<template>
    <div id="xianhuo" class="item-container pannel xianhuo">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-list">
                <table cellspacing="0" cellpadding="5" width="100%">
                    <tbody>
                    <tr>
                        <td data-type="api" :class="{selected:curSelected==='api'}" @click="changeSelected">原料药</td>
                        <td data-type="featureApi" :class="{selected:curSelected==='featureApi'}" @click="changeSelected">特色原料药及制剂</td>
                        <td data-type="midbody" :class="{selected:curSelected==='midbody'}" @click="changeSelected">中间体及精细化学品</td>
                        <td data-type="tcm" :class="{selected:curSelected==='tcm'}" @click="changeSelected">中药材</td>
                    </tr>
                    <tr>
                        <td data-type="natural" :class="{selected:curSelected==='natural'}" @click="changeSelected">天然提取物</td>
                        <td data-type="basics" :class="{selected:curSelected==='basics'}" @click="changeSelected">基础化工产品及溶剂</td>
                        <td data-type="ingredients" :class="{selected:curSelected==='ingredients'}" @click="changeSelected">药用辅料及包材</td>
                        <td data-type="selfSupport" :class="{selected:curSelected==='selfSupport'}" @click="changeSelected">自营产品</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :key="good.goodsID" v-for="good in curGoods">
                <h4 class="item-title">{{good.chanpmc}}</h4>
                <div class="item-info">{{good.chund}}</div>
                <div class="item-company">{{good.qiymc}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'xianhuo',
        props:['goods'],
        data(){
            return{
                curSelected:'api'
            }
        },
        computed:{
            curGoods(){
                return this.goods[this.curSelected]
            }
        },
        methods:{
            changeSelected(e){
                console.log(e.srcElement.dataset.type)
                this.curSelected = e.srcElement.dataset.type
            }
        }
    }
</script>
