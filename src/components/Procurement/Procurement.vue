<style scoped>
    @import "Procurement.css";
</style>
<template>
    <div>

        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>采购信息</p>
            <i class="icon iconfont icon-search right"></i>
        </div>
        <!--采购列表-->
        <div class="list-container">
            <VueDataLoading :loading="loading" :completed="completed" :listens="['infinite-scroll']" :init-scroll="true" @infinite-scroll="infiniteScroll">
                <div class="list-item pannel" v-for="item in dataList" @click="gotoAdd(item)">
                    <div class="status">采购中</div>
                    <h4 class="name">{{item.procurement.goodname}}</h4>
                    <p><span class="title">采购编号：</span><span class="content">{{item.procurement.procurementno}}</span></p>
                    <p><span class="title">采购数量：</span><span class="content">{{item.procurement.quantity}}</span></p>
                    <p><span class="title">联系方式：</span><span class="content">{{item.procurement.contactphone}}</span><span
                        class="ck-btn">查看联系方式</span></p>
                    <p><span class="title">信息有效期至：</span><span class="content">{{item.procurement.messagevalidity}}</span>
                    </p>
                    <p><span class="title">备注信息：</span><span class="content">{{item.procurement.otherrequests}}</span></p>
                    <p class="item-footer"><span>{{new Date(item.procurement.addtime).Format('yyyy-MM-dd')}}</span><span
                        class="bj-btn">立即报价</span></p>
                </div>
                <div slot="infinite-scroll-loading">加载中...</div>
            </VueDataLoading>

        </div>
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
        methods: {
            fetchData() {
                let reqData;
                if (this.$route.query.procureType === 'own'){
                    reqData = {
                        page:this.page,
                        pageSize:this.pageSize,
                        userId:localStorage.getItem('uid')
                    }
                }else {
                    reqData = {
                        page:this.page,
                        pageSize:this.pageSize,
                        userId:null
                    }
                }
                this.$http.post(this.$APIs.PROCUREMENT_LIST,reqData)
                    .then((res) => {
                        if (res.data.status===200){

                            console.log(res);
                            this.dataList = this.dataList.concat(res.data.data.rows);
                            this.page++
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
            },
            gotoAdd(item){
                if (this.$route.query.procureType ==='own'){
                    return
                }
                this.$router.push({path:'offer_add',query:{procurementid:item.procurement.procurementid,publishType:'报价'}})
            }
        }
    }
</script>
