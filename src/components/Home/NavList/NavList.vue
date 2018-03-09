<style>
    @import "NavList.css";
</style>
<template>
    <div class="nav-list pannel">
        <div class="nav-item" data-name="caigou">
            <div class="nav-item-img nav-img01"></div>
            <div class="nav-title">要采购</div>
        </div>
        <div class="nav-item" data-name="xianhuo" @click="$router.push({path:'service_list',query:{type:'现货',demand:'要产品',support:'要渠道'}})">
            <div class="nav-item-img nav-img02"></div>
            <div class="nav-title">要现货</div>
        </div>
        <div class="nav-item" data-name="xiangmu" @click="$router.push({path:'service_list',query:{type:'项目',demand:'要项目',support:'项目供应'}})">
            <div class="nav-item-img nav-img03"></div>
            <div class="nav-title">要项目</div>
        </div>
        <div class="nav-item" data-name="waimao" @click="$router.push({path:'service_list',query:{type:'外贸',demand:'要产品',support:'要渠道'}})">
            <div class="nav-item-img nav-img04"></div>
            <div class="nav-title">要外贸</div>
        </div>
        <div class="nav-item" data-name="jiance">
            <div class="nav-item-img nav-img05"></div>
            <div class="nav-title">要检测</div>
        </div>
        <div class="nav-item" data-name="jishu" @click="$router.push({path:'service_list',query:{type:'技术',demand:'要技术',support:'技术供应'}})">
            <div class="nav-item-img nav-img06"></div>
            <div class="nav-title">要技术</div>
        </div>
        <div class="nav-item" data-name="piwen" @click="$router.push({path:'service_list',query:{type:'批文',demand:'要批文',support:'批文转让'}})">
            <div class="nav-item-img nav-img07"></div>
            <div class="nav-title">要批文</div>
        </div>
        <div class="nav-item" data-name="caigou">
            <div class="nav-item-img nav-img08"></div>
            <div class="nav-title">要金融</div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'navlist',
        data(){
            return{

            }
        }
    }
</script>
