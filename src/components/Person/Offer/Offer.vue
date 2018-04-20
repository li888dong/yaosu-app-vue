<style scoped>
    @import "../../Procurement/Procurement.css";

    .focus{
        float: right;
        color: red;
    }
    .status0{
        background-color: #03A657!important;
    }
    .status1{
        background-color: #cc0000!important;
    }
    .status2{
        background-color: #666666!important;
    }
    .status3{
        background-color: #f97433!important;
    }
</style>
<template>
    <div class="offer-container">
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.push('person')"></i>
            <p>我的报价</p>
        </div>
        <div class="list-container">
            <VueDataLoading :loading="loading" :completed="completed" :listens="['infinite-scroll']" :init-scroll="true" @infinite-scroll="infiniteScroll">
                <div class="list-item pannel" v-for="item in dataList" @click="$router.push({path:'offer_detail',query:{offerid:item.offerid,procurementid:item.procurementid}})">
                    <div class="status" :class="{'status0':item.status==='0','status1':item.status==='1','status2':item.status==='2'||item.status=='5','status3':item.status==='3'}">
                        <span v-if="item.status=='0'">报价中</span>
                        <span v-if="item.status=='1'">已删除</span>
                        <span v-if="item.status=='2'||item.status=='5'">已过期</span>
                        <span v-if="item.status=='3'">已撤回</span>
                    </div>
                    <h4 class="name">{{item.goodname}}</h4>
                    <p><span class="title">单价：</span><span class="content">{{item.price}}</span></p>
                    <p><span class="title">采购数量：</span><span class="content">{{item.quantity}}{{item.unit}}</span></p>
                    <p><span class="title">联系方式：</span><span class="content">{{item.contactphone}}</span></p>
                    <p><span class="title">信息有效期至：</span><span class="content">{{item.messagevalidity}}</span>
                    </p>
                    <p class="no-code"><span>编号：{{item.offerno}}</span><span v-if="item.isFocus==='1'" class="focus">已被关注</span></p>
                </div>
                <div slot="infinite-scroll-loading">加载中...</div>
            </VueDataLoading>

        </div>
    </div>
</template>
<script>
    export default {
        name:'offer',
        data(){
            return{
                dataList: [],
                page: 1,
                pageSize: 15,
                loading: false,
                completed: false,
            }
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.OFFER_LIST,{
                    page:this.page,
                    pageSize:this.pageSize,
                    userId:localStorage.getItem('uid')
                })
                    .then(res=>{
                        if (res.data.status===200){
                            this.dataList = this.dataList.concat(res.data.data.rows);
                            console.log(this.dataList);
                        } else if(res.data.status===300){
                            this.completed = true
                        }else {
                            this.$message.error({message:this.data.msg});
                        }

                    })
                    .catch(err=>{
                        this.$message.error({message:'网络错误'});
                    })
            },
            infiniteScroll() {
                this.fetchData();
                this.page++
            },
        }
    }
</script>
