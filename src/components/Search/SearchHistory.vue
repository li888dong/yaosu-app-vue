<style scoped>
    .history{
        height: 40px;
        line-height: 40px;
        padding:0 20px ;
    }
    .icon-shanchu{
        float: right;
        font-size: 18px;
    }
</style>
<template>
    <div>
        <div class="history pannel">
            <span>历史记录</span><i class="icon iconfont icon-shanchu" @click="clearHistory"></i>
        </div>
        <div>

        </div>
    </div>

</template>
<script>
    export default {
        name:'searchhistory',
        methods:{
            clearHistory(){

            },
        }
    }
</script>
