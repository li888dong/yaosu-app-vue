<style scoped>
    .tabbar-container{
        background-color: #fff;
        padding-top: 10px;
        margin: 0;
    }
    .animate-container{
        position: absolute;
        left: 0;
        right: 0;
        top: 92px;
        bottom: 0;
    }
    .animate-item{
        position: absolute;
        left: 0;
        top: 2px;
        right: 0;
        bottom: 0;
        vertical-align: top;
        background-color: #fff;
    }

    .slide-fade1-enter{
        transform: translateX(100%);
        opacity: 0;
    }

    .slide-fade1-enter-active,
    .slide-fade2-enter-active{
        transition: all .2s ease;
    }
    .slide-fade2-enter{
        transform: translateX(-100%);
        opacity: 0;
    }
    .animate-item>img{
        width: 100%;
    }

</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>金融</p>
            <i class="icon iconfont icon-search right"></i>
        </div>
        <div class="tabbar-container finace">
            <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">资金方</span>
            <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">资产方</span>
        </div>
        <div class="animate-container">

            <transition name="slide-fade1">
                <div class="animate-item supply" v-if="curSelected==='supply'">
                    <img src="http://yaosuce.com/image/jinrong_zichan_app.jpg">
                </div>
            </transition>
            <transition name="slide-fade2">
                <div class="animate-item demand" v-if="curSelected==='demand'">
                    <img src="http://yaosuce.com/image/jinrong_zijin_app.jpg">
                </div>
            </transition>
        </div>

    </div>
</template>
<script>
    export default {
        name:'finance',
        data(){
          return{
              curSelected:'demand'
          }
        },
        methods:{
            changeCur(type){
                this.curSelected = type
            }
        }
    }
</script>
