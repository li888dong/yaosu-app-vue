<style scoped>
    .search-box{
        margin-top: 50px;
    }
    header .search-container input{
        width: 80%;
    }
    .cancle{
        color: white;
        margin-left: 20px;
    }
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
    <div class="search-box">
        <header>
            <div class="search-container top-bg">
                <i class="icon iconfont icon-search "></i>
                <input type="text" placeholder="搜索产品/企业" v-model="keyword" class="search-input" autofocus>
                <span class="cancle" @click="cancleSearch">取消</span>
            </div>
        </header>
        <div class="history pannel">
            <span>历史记录</span><i class="icon iconfont icon-shanchu" @click="clearHistory"></i>
        </div>
    </div>
</template>
<script>
    export default {
        name:'search',
        data(){
            return{
                keyword:''
            }
        },
        methods:{
            cancleSearch(){
                this.$router.go(-1);
                this.keyword = ''
            },
            clearHistory(){

            }
        }
    }
</script>
