<style scoped>

</style>
<template>
    <div class="item-content goods-list" v-if="$route.path==='/goods_list'">
        <div v-for="good in goodsList" @click="$router.push({path:'goods_detail',query:{goodsId:good.goodId}})">
            <p>{{good.goodName}} <i class="icon iconfont icon-more"></i></p>
            <p>纯度:{{good.purity}}</p>
            <p><span>{{good.qiymc}}</span></p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'SearchDetailList',
        data(){
            return{
                goodsList:[]
            }
        },

        mounted(){

        },
        methods:{

        }
    }
</script>
