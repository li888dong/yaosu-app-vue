<style scoped>
    .catorage-selector {
        width: 100%;
        height: 30px;
        font-size: 14px;
        background-color: #fff;
        text-align: center;
        line-height: 30px;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
    }

    .icon-more {
        position: absolute;
        right: 5px;
        font-size: 10px;
        font-weight: bold;
        transform: rotate(90deg);
        transition: all 0.5s ease;
    }

    .reverse {
        transform: rotate(-90deg);
    }

    .fade-enter-active {
        transition: all .8s;
    }

    .fade-enter {
        opacity: 0;
    }

    .catorage-list {
        width: 100%;
        background-color: #fff;
        text-align: center;
        font-size: 12px;
        line-height: 30px;
        position: absolute;
    }
    .catorage-list p{
        border-bottom: 1px solid #ccc;
    }
    .curCatorage{
        color: #03A657;
        background-color: #f1f1f1;
    }
    .greenFont{
        color: #03A657;
    }

    .list-item{
        width: 96%;
        height: 82px;
        margin: 8px 2% 0 2%;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px #888888;
        font-size: 12px;
        color: #000;
    }
    .list-item>div{
        float: left;
    }
    .list-item p{
        line-height: 28px;
    }
    .list-item .type{
        padding: 10px;
        margin: 1px;
        border-radius: 4px;
        width: 20px;
        height: 60px;
        vertical-align: middle;
        background-color: #019117;
        color: #ffffff;
        font-size: 14px;
        text-align: center;
    }
    .list-item .content{
        margin-left: 10px;
    }
</style>
<template>
    <div>
        <div>
            <div class="catorage-selector" @click="selectorIsShow = !selectorIsShow" :class="{greenFont:selectorIsShow}">
                <span>全部分类</span>
                <i class="icon iconfont icon-more" :class="{reverse:selectorIsShow}"></i>
            </div>
            <div class="catorage-list">
                <transition name="fade">
                    <div v-if="selectorIsShow">
                        <p :class="{curCatorage:curCatorage==='all'}" @click="changeCatorageType('all')">全部分类</p>
                        <p :class="{curCatorage:curCatorage==='demand'}" @click="changeCatorageType('demand')">要产品</p>
                        <p :class="{curCatorage:curCatorage==='support'}" @click="changeCatorageType('support')">要渠道</p>
                    </div>
                </transition>
            </div>
            <ul class="list-container">
                <li class="list-item" v-for="x in 10">
                    <div class="type">要渠道</div>
                    <div class="content">
                        <p class="hs-code">HS号 : <span>1301299099</span> </p>
                        <p class="hs-code">需求描述 : <span>绿原酸 asidjakljd</span> </p>
                        <p class="hs-code">编号 : <span>FAJIOOAJF00000</span><span>2018-02-08</span> </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'service',
        data() {
            return {
                selectorIsShow: false,
                curCatorage:'all'
            }
        },
        methods:{
            changeCatorageType(type){
                this.curCatorage = type
            }
        }
    }
</script>
