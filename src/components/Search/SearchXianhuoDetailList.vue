<style scoped>
    .item-content.goods-list {
        padding: 15px 20px;
        font-size: 14px;
        color: #000;
        background-color: #fff;
    }

    .item-content.goods-list > div {
        border-bottom: 1px solid #eee;
        position: relative;
        padding-top: 4px;
        line-height: 22px;
    }

    .item-content.goods-list .icon-more {
        transform: rotate(0);
        position: absolute;
        right: 0;
        font-weight: bolder;
        font-size: 16px;
    }

    .item-content.goods-list span {
        color: #999;
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
            <div class="item-content goods-list">
                <div v-for="goods in dataList" @click="$router.push({path:'goods_detail',query:{goodsId:goods.goodId}})">
                    <p>{{goods.goodName}} <i class="icon iconfont icon-more"></i></p>
                    <p>纯度:{{goods.purity}}</p>
                    <p><span>{{goods.qiymc||'个人卖家'}}</span></p>
                </div>
            </div>
        </VueDataLoading>
    </div>


</template>
<script>
    export default {
        name: 'SearchXianhuoDetailList',
        data() {
            return {
                dataList: [],
                loading: false,
                completed: false,
                page: 1,
                pageSize: 22
            }
        },
        computed:{
            productName(){
                return this.$route.query.productName
            },
            productType(){
                return this.$route.query.productType
            }
        },
        mounted() {

        },
        methods: {
            fetchData() {
                this.loading = true;
                this.$http.post(this.$APIs.GOODS_LIST, {
                    search: this.productName,
                    queryType:"A",
                    page: this.page,
                    pageSize: this.pageSize
                })
                    .then(res => {
                        if (res.data.status === 200) {
                            this.loading = false;
                            this.page++;
                            this.dataList = res.data.data.rows
                        } else if (res.data.status === 300) {
                            this.completed = true;
                            this.loading = false;
                        }

                    })
                    .catch(err => {
                        console.log(err)
                    });
            },
            infiniteScroll() {
                this.fetchData();
            }
        }
    }
</script>
