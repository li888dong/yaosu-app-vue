<style>
    @import "Banner.css";
</style>
<template>
    <div class="banner">
        <div class="search-container">
            <i class="icon iconfont icon-search "></i>
            <input type="text" placeholder="搜索产品/企业" v-model="keyword" class="search-input">
        </div>
        <div class="banner-img-container" ref="bannerImgContainer">
            <swiper v-if="imgList.length>0" :options="swiperOption">
                <swiper-slide class="banner-img" :style="{backgroundImage:url}" v-for="url in imgList" :key="url"></swiper-slide>
            </swiper>

        </div>

    </div>
</template>
<script>
    export default {
        name:'banner',
        props:['bannerData'],
        data(){
            return{
                keyword:'',
                swiperOption: {
                    speed:1000,
                    spaceBetween: 0,
                    loop: true,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                }

            }
        },
        mounted(){

        },
        computed:{
            imgList(){
                return this.bannerData.map(i=> "url('http://image.yaosuce.com"+i.picture+"')")
            }
        }
    }
</script>
