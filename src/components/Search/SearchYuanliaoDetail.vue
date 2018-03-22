<style scoped>
    .data-list {
        padding: 10px 20px;
        font-size: 14px;
    }
    .data-list p{
        line-height: 26px;
        text-align: right;
        position: relative;
    }
    .data-list .title{
        color:#000;
        text-align: left;
        position: absolute;
        left: 0;
    }

    .info-content h4 {
        border-left: 10px solid #03A657;
        border-bottom: 1px solid #eee;
        padding: 10px;
    }
</style>
<template>
    <div>
        <!--标题栏-->
        <div class="top-bar fixedTop">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>{{productName}}</p>
        </div>
        <VueDataLoading :loading="loading" :completed="completed" :init-scroll="true" :listens="['infinite-scroll']"
                        @infinite-scroll="infiniteScroll">
            <div class="info-content pannel" v-for="data in dataList">
                <h4>{{data.apiNameAndType_list[0].productName}}</h4>
                <div class="data-list">
                    <p><span class="title">商品本位码：</span>{{data.apiNameAndType_list[0].productName}}</p>
                    <p><span class="title">剂型：</span>{{replaceType(data.apiNameAndType_list[0].productType)||'--'}}</p>
                    <p><span class="title">规格：</span>{{data.apiNameAndType_list[0].specification||'--'}}</p>
                    <p><span class="title">批准文号：</span>{{data.apiNameAndType_list[0].approvalNumber||'--'}}</p>
                    <p><span class="title">生产厂家：</span>{{data.company.qiymc}}</p>

                </div>
            </div>
        </VueDataLoading>
    </div>
</template>
<script>
    export default {
        name:'yuanliaoyao',
        data(){
            return{
                dataList: [],
                loading: false,
                completed: false,
                page: 1,
                pageSize: 22
            }
        },
        mounted(){

        },
        computed:{
            productName(){
                return this.$route.query.productName
            }
        },
        methods:{
            fetchData() {
                this.loading = true;
                this.$http.post(this.$APIs.QUERY_API, {
                    productName: this.productName,
                    page: this.page,
                    productType:'B',
                    pageSize: this.pageSize
                })
                    .then(res => {
                        if (res.data.status === 200) {
                            this.loading = false;
                            this.page++;
                            this.dataList = this.dataList.concat(res.data.data.rows);
                        } else if (res.data.status === 300) {
                            this.completed = true;
                            this.loading = false;
                        }

                    })
                    .catch(err => {
                        console.log(err)
                    });
            },
            replaceType(item) {
                switch (item) {
                    case 'A':
                        return '制剂';
                    case 'B':
                        return '原料药';
                    case 'C':
                        return '中药材';
                    case 'D':
                        return '现货';
                    default:
                        return item
                }
            },
            infiniteScroll() {
                this.fetchData();
            }
        },
        beforeDestroy(){
            this.dataList.length = 0
        }
    }
</script>
