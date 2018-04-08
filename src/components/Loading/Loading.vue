<style>
    .loading_container{
        background-color: #000;
        border-radius: 4px;
        opacity: 0.7;
        position: fixed;
        width: 80px;
        height: 80px;
        top: 30%;
        left: 50%;
        transform: translate(-50%);
        z-index: 999;
    }
    .loading_container>img{
        position: absolute;
        width: 80px;
        height: 80px;
    }
    .loading_circle{
        animation: run 3s linear infinite;
    }
    @keyframes run {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }
</style>
<template>
    <div>
        <div class="loading_container" v-if="loading">
            <img src="../../assets/ajax_loading_bg.png">
            <img class="loading_circle" src="../../assets/ajax_loading_circle.png">
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            loading(){
                return this.$store.getters.loading
            }
        }
    }
</script>
