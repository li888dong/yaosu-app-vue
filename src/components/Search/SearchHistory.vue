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
    .history-list{
        border:1px solid #ccc;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
        width: 50%;
        background-color: #fff;
    }
    .history-list:nth-child(even){
        border-left-color:transparent ;
    }
    .top-transparent{
        border-top-color: transparent;
    }

</style>
<template>
    <div>
        <div class="history pannel">
            <span>历史记录</span><i class="icon iconfont icon-shanchu" @click="clearHistory"></i>
        </div>
        <div>
            <ul>
                <li class="history-list" v-for="(keyword,index) in Array.from(keywords)" :class="{'top-transparent':index>1}" @click="onSearch(keyword)">{{keyword}}</li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default {
        name:'searchhistory',
        data(){
            return{
                keywords:[]
            }
        },
        mounted(){
            this.keywords = Array.from(this.$store.getters.keywords)
        },
        methods:{
            clearHistory(){
                this.$store.commit('clear_keywords');
                this.keywords = 0;
            },
            onSearch(keyword){
                this.$store.dispatch('set_keywords',this.keyword);
                this.$http.get(this.$APIs.HOME_SEARCH_1+'?search='+keyword)
                    .then(res=>{
                        console.log(res.data.data.rows);
                        this.$store.dispatch('set_resultList',res.data.data.rows);
                        this.$router.push('search_result')

                    })
                    .catch(err=>{

                    });
            }
        }
    }
</script>
