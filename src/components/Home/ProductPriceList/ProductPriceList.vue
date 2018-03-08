<style>
    @import "ProductPriceList.css";
</style>
<template>
    <!--参考价格-->
    <div id="price" class="product-container pannel">
        <div class="tabbar-container">
            <span class="tabbar" :class="{'tabbar-selected':show==='yuanliao'}" @click="show='yuanliao'">原料药</span>
            <span class="tabbar" :class="{'tabbar-selected':show==='zhongyao'}" @click="show='zhongyao'">中药材</span>
        </div>
        <div class="product-price">
            <h4 class="price-title">参考价格</h4>
            <div class="product-info" v-show="show === 'yuanliao'">
                <div class="slide-container yuanliao">

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
            <div class="product-info" v-show="show === 'zhongyao'">
                <div class="slide-container zhongyao">
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
        props: ['yuanliaos', 'zhongyaos'],
        data() {
            return {
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
            yuanliaoData() {
                const temp = [];
                for (let i = 0; i < this.yuanliaos.length; i += 2) {
                    temp.push([this.yuanliaos[i], this.yuanliaos[i + 1]])
                }
                return temp
            },
            zhongyaoData() {
                return this.zhongyaos
            },
            $zhongyao(){
                return $('.slide-container.zhongyao')
            },
            $yuanliao(){
                return $('.slide-container.yuanliao')
            }
        },
        mounted() {

            setTimeout(()=>{
                lunbo(this.$zhongyao, this.$zhongyao.find('div'), 50, 2000, 'top', 1000);
                lunbo(this.$yuanliao, this.$yuanliao.find('div'), 50, 2000, 'top', 1000);
            },1000)
        }
    }
</script>
