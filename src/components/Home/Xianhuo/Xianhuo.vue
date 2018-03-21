<style>
    @import "Xianhuo.css";
</style>
<template>
    <div id="xianhuo" class="item-container pannel xianhuo">
        <Goods :goods="goods">
            <div class="title">
                <span class="logo"></span>
                <span class="more" @click="gotoGoods">查看全部 <i class="icon iconfont icon-more"></i></span>
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
        },
        methods:{
            gotoGoods(e) {
                this.$http.get(this.$APIs.GOODS_LIST+'?categoryID=1')
                    .then((res) => {
                        if (res.data.status === 200){
                            this.$store.dispatch('set_goodsList', res.data.data.rows);
                            this.curSelected = e.srcElement.dataset.type;
                        }else {
                            this.$message.error({message:res.data.msg});
                        }
                    })
                    .catch((err) => {
//                        alert(err.msg)
                        this.$message.error({message:'网络错误'});
                    });
                this.$router.push({path: 'goods_list', query: {type: '现货', demand: '要产品', supply: '要渠道'}})
            }
        }

    }
</script>
