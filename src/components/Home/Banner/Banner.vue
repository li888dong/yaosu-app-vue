<style>
    @import "Banner.css";
</style>
<template>
    <div class="banner">
        <div class="banner-img-container" ref="bannerImgContainer">
            <swiper v-if="imgList.length>0" :options="swiperOption">
                <swiper-slide
                    class="banner-img"
                    :style="{backgroundImage:item.imgUrl}"
                    v-for="(item,index) in imgList"
                    :key="index">
                    <div class="banner-img" @click="gotoBusiness(item.href)"
                    ></div>
                </swiper-slide>
            </swiper>

        </div>

    </div>
</template>
<script>
    export default {
        name: 'banner',
        data() {
            return {
                swiperOption: {
                    speed: 1000,
                    spaceBetween: 0,
                    loop: true,
                    centeredSlides: true,
                    preventLinksPropagation : false,//默认true
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                }

            }
        },
        mounted() {
            console.log('asd', this.$store.getters.banner)
        },
        computed: {
            imgList() {
                return this.$store.getters.banner.map(i => {
                    return {
                        imgUrl: "url('http://image.yaosuce.com" + i.picture + "')",
                        href: i.url
                    }
                })
            }
        },
        methods: {
            gotoBusiness(url) {
                location.href = url+'&ua=broswer'
            }
        }
    }
</script>
