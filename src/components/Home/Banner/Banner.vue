<style>
    @import "Banner.css";
</style>
<template>
    <div class="banner">

        <div class="banner-img-container" ref="bannerImgContainer">
            <swiper v-if="imgList.length>0" :options="swiperOption">
                <swiper-slide class="banner-img" :style="{backgroundImage:url}" v-for="(url,index) in imgList" :key="index"></swiper-slide>
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
                return this.$store.getters.banner.map(i=> "url('http://image.yaosuce.com"+i.picture+"')")
            }
        }
    }
</script>
