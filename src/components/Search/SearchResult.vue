<style scoped>
    .result-item {
        min-height: 55px;
        width: 100%;
        box-sizing: border-box;
        padding: 5px 15px;
        background-color: #fff;
        border-top: 1px solid #ccc;
        font-size: 14px;
        line-height: 24px;
    }

    .name {
        line-height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .tags {
        font-size: 12px;
    }

    .tags span {
        border-radius: 4px;
        padding: 1px 5px;
        margin-right: 5px;
    }

    .tags .dosageForm {
        color: #03A657;
        border: 1px solid #03A657;
    }

    .tags .productType {
        background-color: #03A657;
        color: #ffffff;
    }
    .goods-markets{
        display: inline-block;
        width: 50%;
    }
</style>
<template>
    <div>
        <VueDataLoading :loading="loading" :completed="completed" :init-scroll="true" :listens="['infinite-scroll']"
                        @infinite-scroll="infiniteScroll">
            <ul>
                <li class="result-item" v-for="result in dataList" @click="gotoDetailList(result)">
                    <p class="name">{{result.productName}}</p>
                    <p class="tags">
                        <span class="dosageForm" :class="{productType:result.productTypeDes=='现货'}">{{result.productTypeDes}}</span>
                        <span class="dosageForm">{{result.dosageForm}}</span>
                    </p>
                    <div v-if="result.listProductMarketprice">
                        <p>参考价格：</p>
                        <div class="goods-markets" v-for="market in result.listProductMarketprice">{{market.markets}} {{market.price}}</div>
                    </div>
                    <div v-if="result.productApiPrice">
                        <p>参考价格：</p>
                        <div>参考价格：{{result.productApiPrice.price}}</div>
                        <div>质量标准：{{result.productApiPrice.qualitystandard}}</div>
                    </div>
                </li>
            </ul>
        </VueDataLoading>
    </div>
</template>
<script>
    export default {
        name: 'searchresult',
        data() {
            return {
                dataList: [],
                loading: false,
                completed: false,
                page: 1,
                pageSize: 22
            }
        },
        computed: {
            resultList() {
                return this.$store.getters.resultList
            },
            keywords() {
                return Array.from(this.$store.getters.keywords)
            }
        },
        watch: {
            resultList() {
                this.dataList = this.resultList.map(i => this.replaceType(i))
            }
        },
        mounted() {
            this.dataList = this.resultList.map(i => this.replaceType(i))
        },
        beforeDestroy() {
            this.$store.commit('clear_resultList')
        },
        methods: {
            replaceType(item) {
                switch (item.productType) {
                    case 'A':
                        return Object.assign({}, item, {productTypeDes: '制剂'});
                    case 'B':
                        return Object.assign({}, item, {productTypeDes: '原料药'});
                    case 'C':
                        return Object.assign({}, item, {productTypeDes: '中药材'});
                    case 'D':
                        return Object.assign({}, item, {productTypeDes: '现货'});
                    default:
                        return item
                }
            },
            gotoDetailList(result) {
                switch (result.productType) {
                    case 'A':
                        this.$router.push({path:'search_yuanliao_detail_list',query:{productName:result.productName}});
                        break;
                    case 'B':
                        this.$router.push({path:'search_yuanliao_detail_list',query:{productName:result.productName}});
                        break;
                    case 'C':
                        this.$router.push({path:'search_zhongyao_detail_list',query:{tcmId:result.id}});
                        break;
                    case 'D':
                        this.$router.push({path:'search_xianhuo_detail_list',query:{productName:result.productName}});
                }
            },
            fetchData() {
                this.loading = true;
                this.$http.post(this.$APIs.HOME_SEARCH_1, {
                    search: this.keywords[0],
                    page: this.page,
                    pageSize: this.pageSize
                })
                    .then(res => {
                        if (res.data.status === 200) {
                            this.loading = false;
                            this.$store.commit('set_resultList', res.data.data.rows);
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
                this.page++;
                console.log(this.page)
            }
        }
    }
</script>
