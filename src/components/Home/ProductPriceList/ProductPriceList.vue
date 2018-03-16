<style>
    @import "ProductPriceList.css";
</style>
<template>
    <!--参考价格-->
    <div id="price" class="product-container pannel">
        <div class="tabbar-container">
            <span class="tabbar" :class="{'tabbar-selected':show==='yuanliao'}" @click="changeShow('yuanliao')">原料药</span>
            <span class="tabbar" :class="{'tabbar-selected':show==='zhongyao'}" @click="changeShow('zhongyao')">中药材</span>
        </div>
        <div class="product-price" @click="gotoGoods">
            <h4 class="price-title">参考价格</h4>
            <div class="product-info" v-show="show === 'yuanliao'">
                <div class="slide-container yuanliao" ref="yuanliao" v-if="zhongyaoData.length>0">

                    <div v-for="yuanliao in yuanliaoData" :key="yuanliao[0].productname">
                        <p>
                            <span class="product-name">{{yuanliao[0].productname}}</span>
                            <span class="price">{{yuanliao[0].price}}</span>
                            <span>{{yuanliao[0].qualitystandard}}</span>
                        </p>
                        <p>
                            <span class="product-name">{{yuanliao[1] ? yuanliao[1].productname : ''}}</span>
                            <span class="price">{{yuanliao[1] ? yuanliao[1].price : ''}}</span>
                            <span>{{yuanliao[1] ? yuanliao[1].qualitystandard : ''}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="product-info" v-show="show === 'zhongyao'" v-if="zhongyaoData.length>0">
                <div class="slide-container zhongyao" ref="zhongyao">
                    <div v-for="zhongyao in zhongyaoData" :key="zhongyao.productName">
                        <p><span class="product-name">{{zhongyao.productName}}</span><span>{{zhongyao.specification}}</span>
                        </p>
                        <p class="markets-group">
                            <template v-for="originPlace in zhongyao.tbProductTcmOriginplace">
                                <span class="markets">{{originPlace.markets}} :</span><span
                                class="price">{{originPlace.price}}</span>
                            </template>

                        </p>
                    </div>
                </div>
            </div>
            <div class="product-list">
                <div class="btn-image"></div>
                <div>产品列表</div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    import lunbo from '../../../util/lunbo'

    export default {
        name: 'productpricelist',
        data() {
            return {
                timerzy:0,
                timeryl:0,
                timerdelay:0,
                show: 'yuanliao',
                swiperOption: {
                    direction: 'vertical',
                    speed: 1000,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    }
                }
            }
        },
        computed: {
            yuanliaos(){
                return this.$store.getters.api
            },
            yuanliaoData() {
                const temp = [];
                for (let i = 0; i < this.yuanliaos.length; i += 2) {
                    temp.push([this.yuanliaos[i], this.yuanliaos[i + 1]])
                }
                return temp
            },
            zhongyaoData() {
                return this.$store.getters.tcm
            },
            $zhongyao(){
                return $(this.$refs.zhongyao)
            },
            $yuanliao(){
                return $(this.$refs.yuanliao)
            }
        },
        mounted() {
            this.timerdelay = setTimeout(()=>{
                this.$zhongyao.append(this.$zhongyao.find('div').eq(0).clone());
                this.$yuanliao.append(this.$yuanliao.find('div').eq(0).clone());
                this.changeShow('yuanliao');
            },2000)
        },
        methods:{
            changeShow(type){
                this.show = type;
                if (type === 'zhongyao'){
                    clearInterval(this.timerzy);
                    clearInterval(this.timeryl);
                    this.timerzy = lunbo(this.$zhongyao, this.$zhongyao.find('div'), 50, 2000, 'top', 1000);
                }else {
                    clearInterval(this.timeryl);
                    clearInterval(this.timerzy);
                    this.timeryl = lunbo(this.$yuanliao, this.$yuanliao.find('div'), 50, 2000, 'top', 1000);
                }
            },
            gotoGoods(e) {
                this.$http.get(this.$APIs.GOODS_LIST+'?categoryID=1')
                    .then((res) => {
                        if (res.data.status === 200){
                            this.$store.dispatch('set_goodsList', res.data.data.rows);
                            this.curSelected = e.srcElement.dataset.type;
                        }else {
                            alert(res.data.msg)
                        }
                    })
                    .catch((err) => {
//                        alert(err.msg)
                        console.log(err)
                    });
                this.$router.push({path: 'goods_list', query: {type: '现货', demand: '要产品', supply: '要渠道'}})
            }
        },
        beforeDestroy(){
            clearInterval(this.timerzy);
            clearInterval(this.timeryl);
            clearTimeout(this.timerdelay)
        }
    }
</script>
