<style>
    @import "Xianhuo.css";
</style>
<template>
    <div id="xianhuo" class="item-container pannel xianhuo">
        <Goods :goods="goods">
            <div class="title">
                <span class="logo"></span>
                <span class="more">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
        </Goods>

    </div>
</template>
<script>
    import Goods from '../../Goods/Goods.vue'
    export default {
        name:'xianhuo',
        components:{
            Goods
        },
        computed:{
            goods(){
                return this.$store.getters.goods
            }
        }
    }
</script>
