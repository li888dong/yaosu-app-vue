<style scoped>
    .list-item{
        font-size: 14px;
        padding: 10px;
        line-height: 22px;
    }
    .list-item .title{

    }
    .productName{
        color: #cc0000;
    }
    .black{
        color: #000;
    }
    .price{
        display: inline-block;
        width: 50%;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>{{type}}参考价格</p>
            <i class="icon iconfont icon-search right" @click="$router.push('search')"></i>
        </div>
        <!--采购列表-->
        <VueDataLoading
            :loading="loading"
            :completed="completed"
            :listens="['infinite-scroll']"
            :init-scroll="true"
            @infinite-scroll="infiniteScroll">
            <div class="list-item pannel" v-for="item in dataList">
                <p class="title"><span class="productName">{{item.productName}}</span> <span>{{item.tbProductTcmOriginplace[0].specification}}</span></p>
                <p class="black">参考价格： <span class="fr">{{new Date(item.tbProductTcmOriginplace[0].updatedate).Format('yyyy-MM-dd')}}</span>
                </p>
                <div class="price" v-for="goods in item.tbProductTcmOriginplace">
                    {{goods.markets}}：{{goods.price}}
                </div>

            </div>
            <div slot="infinite-scroll-loading">加载中...</div>
        </VueDataLoading>

    </div>
</template>
<script>
    export default {
        name: 'caigou',
        data() {
            return {
                dataList: [],
                page: 1,
                pageSize: 15,
                loading: false,
                completed: false,
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

                this.$http.post(this.$APIs.TCM_PRICE_LIST,reqData)
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
                    });
            },
            infiniteScroll() {
                this.fetchData();
                this.page++

            }
        }
    }
</script>
