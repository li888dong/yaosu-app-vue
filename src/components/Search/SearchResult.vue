<style scoped>
    .result-item{
        height: 55px;
        width: 100%;
        box-sizing: border-box;
        padding: 5px 15px;
        background-color: #fff;
        border-top: 1px solid #ccc;
        font-size: 14px;
    }
    .name{
        line-height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .tags{
        font-size: 12px;
    }
    .tags span{
        border-radius: 4px;
        padding: 1px 5px;
        margin-right: 5px;
    }
    .tags .dosageForm{
        color: #03A657;
        border: 1px solid #03A657;
    }
    .tags .productType{
        background-color: #03A657;
        color: #ffffff;
    }
</style>
<template>
    <div>
        <VueDataLoading :loading="loading" :completed="completed" :init-scroll="true" :listens="['infinite-scroll']" @infinite-scroll="infiniteScroll">
        <ul>
            <li class="result-item" v-for="result in dataList" @click="gotoDetailList(result)">
                <p class="name">{{result.productName}}</p>
                <p class="tags">
                    <span class="productType">{{result.productType}}</span>
                    <span class="dosageForm">{{result.dosageForm}}</span>
                </p>
            </li>

        </ul>
        </VueDataLoading>
    </div>
</template>
<script>
    export default {
        name:'searchresult',
        data(){
            return{
                dataList:[],
                loading: false,
                completed: false,
                page: 2,
                pageSize:20
            }
        },
        computed:{
            resultList(){
                return this.$store.getters.resultList
            },
            keywords(){
                return Array.from(this.$store.getters.keywords)
            }
        },
        watch:{
            resultList(){
                this.dataList = this.resultList.map(i=>this.replaceType(i))
            }
        },
        mounted(){
            this.dataList = this.resultList.map(i=>this.replaceType(i))
        },
        beforeDestroy(){
            this.$store.commit('clear_resultList')
        },
        methods:{
            replaceType(item){
                switch (item.productType){
                    case 'A':
                        return Object.assign({},item,{productType:'制剂'});
                    case 'B':
                        return Object.assign({},item,{productType:'原料药'});
                    case 'C':
                        return Object.assign({},item,{productType:'中药材'});
                    case 'D':
                        return Object.assign({},item,{productType:'现货'});
                    default:
                        return item
                }
            },
            gotoDetailList(result){
                this.$http.get(this.$APIs.HOME_SEARCH_2+'?search='+result.productName)
                    .then(res=>{
                        console.log(res.data);
                        this.$router.push('search_detail_list')

                    })
                    .catch(err=>{
                        console.log(err)
                    });
            },
            fetchData(){
                this.loading = true;
                this.$http.get(this.$APIs.HOME_SEARCH_1+'?search='+this.keywords[0]+'&page='+this.page+'&pageSize='+this.pageSize)
                    .then(res=>{
                        if (res.data.status===200){
                            this.loading = false;
                            this.page++;
                            this.$store.commit('set_resultList',res.data.data.rows);
                        }else if (res.data.status===300){
                            this.completed = true;
                            this.loading = false;
                        }

                    })
                    .catch(err=>{
                        console.log(err)
                    });
            },
            infiniteScroll(){
                this.fetchData();
            }
        }
    }
</script>
