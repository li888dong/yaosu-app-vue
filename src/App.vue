<template>
    <div id="app">
        <router-view></router-view>
        <Loading></Loading>
    </div>
</template>

<script>
    import Loading from './components/Loading/Loading.vue'
    export default {
        name: 'App',
        components:{
            Loading
        }
    }
</script>

<style>
@import "common.css";
</style>

