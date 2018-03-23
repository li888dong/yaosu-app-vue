<style>

</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.push('person')"></i>
            <p>我的产品</p>
            <span class="right" @click="$router.push('publish_goods')">发布产品</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:'owngoods',

    }
</script>
