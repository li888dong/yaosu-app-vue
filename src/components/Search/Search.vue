<style scoped>
    .search-box{
        margin-top: 50px;
    }
    header .search-container form{
        width: 80%;
    }
    header .search-container input{
        width: 100%;
    }
    .cancle,
    .search{
        color: white;
        margin-left: 20px;
    }

</style>
<template>
    <div class="search-box">
        <header>
            <div class="search-container top-bg" @submit.prevent="onSearch">
                <i class="icon iconfont icon-search "></i>
                <form style="display: inline-block">
                    <input
                        type="search"
                        placeholder="搜索产品/企业"
                        class="search-input"
                        autofocus autocomplete="off"
                        v-model="keyword"
                    >
                </form>

                <span class="search" @click="onSearch" v-if="keyword">搜索</span>
                <span class="cancle" @click="cancleSearch" v-else>取消</span>
            </div>
        </header>
        <router-view></router-view>

    </div>
</template>
<script>
    export default {
        name:'search',
        data(){
            return{
                keyword:'',
                resultList:[]
            }
        },
        watch: {
            '$route' (to, from) {
                this.keyword = '';
                this.resultList.length = 0
            }
        },
        methods:{
            cancleSearch(){
                this.$router.go(-1);
                this.keyword = ''
            },

            onSearch(){
                this.$http.get(this.$APIs.HOME_SEARCH_1+'?search='+this.keyword)
                    .then(res=>{
                        console.log(res.data.data.rows);
                        this.resultList = res.data.data.rows||[]
                    })
                    .catch(err=>{

                    });
                this.$router.push('search_result')
            }
        }
    }
</script>
