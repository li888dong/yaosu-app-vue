<style scoped>
    @import "../SearchContainer.css";

    .list-item{
        font-size: 14px;
        padding: 10px;
        line-height: 22px;
    }
    .productname{
        color: #cc0000;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>{{type}}参考价格</p>
            <i class="icon iconfont icon-search right" @click="toggle=true"></i>
        </div>
        <div v-if="toggle" class="empty-panel">
            <div class="top-bar">
                <i class="icon iconfont icon-search "></i>
                <input type="search" v-model="keyword"><span class="search-btn" v-if="keyword" @click="doSearch">搜索</span><span class="search-btn" v-else @click="toggle=false">取消</span>
            </div>
        </div>
        <!--采购列表-->
        <VueDataLoading
            :loading="loading"
            :completed="completed"
            :listens="['infinite-scroll']"
            :init-scroll="true"
            @infinite-scroll="infiniteScroll">
            <div class="list-item pannel" v-for="item in dataList">
                <p><span class="productname">{{item.productname}}</span></p>
                <p><span class="qualitystandard">质量标准：{{item.qualitystandard}}</span></p>
                <p><span class="qualitystandard">参考价格：{{item.price}}</span><span class="fr">{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span></p>
            </div>
            <div slot="infinite-scroll-loading">加载中...</div>
        </VueDataLoading>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                dataList: [],
                page: 1,
                pageSize: 15,
                loading: false,
                completed: false,
                toggle:false,
                keyword:''
            }
        },
        mounted() {

        },
        computed:{
            type(){
                return this.$route.query.type
            }
        },
        methods: {
            fetchData() {
                let reqData= {
                    page:this.page,
                    pageSize:this.pageSize
                };

                this.$http.post(this.$APIs.API_PRICE_LIST,reqData)
                    .then((res) => {
                        if (res.data.status===200){
                            console.log(res);
                            this.dataList = this.dataList.concat(res.data.data.rows);
                        } else if(res.data.status===300){
                            this.completed = true
                        }else {
                            this.$message.error({message:res.data.msg});
                        }

                    })
                    .catch((err) => {
                        this.$message.error({message:'网络错误'});
                    })
            },
            infiniteScroll() {
                this.fetchData();
                console.log('0000',this.page);
                this.page++

            },
            doSearch(){
                this.page = 1;
                let reqData= {
                    page:this.page,
                    pageSize:this.pageSize,
                    productname:this.keyword
                };
                this.$http.post(this.$APIs.API_PRICE_LIST,reqData)
                    .then((res) => {
                        if (res.data.status===200){
                            console.log(res);
                            this.dataList.length = 0;
                            this.dataList = res.data.data.rows;
                            this.toggle = false;
                        } else {
                            this.$message.error({message:res.data.msg});
                        }

                    })
                    .catch((err) => {
                        this.$message.error({message:'网络错误'});
                    })
            }
        }
    }
</script>
