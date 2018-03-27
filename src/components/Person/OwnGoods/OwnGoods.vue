<style scoped>
    @import "../../Procurement/Procurement.css";
    .status0{
        background-color: #666666!important;
    }
    .status1{
        background-color: #03A657!important;
    }
    .status2{
        background-color: #cc0000!important;
    }
    .status3{
        background-color: #f97433!important;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.push('person')"></i>
            <p>我的产品</p>
            <span class="right" @click="$router.push('publish_goods')">发布产品</span>
        </div>
        <div class="list-container">
            <VueDataLoading :loading="loading" :completed="completed" :listens="['infinite-scroll']" :init-scroll="true" @infinite-scroll="infiniteScroll">
                <div class="list-item pannel" v-for="item in dataList" @click="$router.push({path:'goods_detail',query:{goodsId:item.goodId,from:'own_goods'}})">
                    <!--状态     0未上架   1已上架  2已删除 3已下架-->
                    <div class="status" :class="{'status0':item.status==='0','status1':item.status==='1','status2':item.status==='2'||item.status=='5','status3':item.status==='3'}">
                        <span v-if="item.status=='0'">未上架 </span>
                        <span v-if="item.status=='1'">已上架</span>
                        <span v-if="item.status=='2'||item.status=='5'">已删除</span>
                        <span v-if="item.status=='3'">已下架</span>
                    </div>
                    <h4 class="name">{{item.goodName}}</h4>
                    <p><span class="title">产品分类：</span><span class="content">{{item.categoryName}}</span></p>
                    <p><span class="title">货号：</span><span class="content">{{item.huoh}}</span></p>
                    <p><span class="title">CAS：</span><span class="content">{{item.cas}}</span></p>
                    <p><span class="title">品牌：</span><span class="content">{{item.band}}</span></p>
                    <p><span class="title">质量标准：</span><span class="content">{{item.qualitystandard}}</span></p>
                    <p><span class="title">纯度/含量：</span><span class="content">{{item.purity}}</span></p>
                    <p><span class="title">规格：</span><span class="content">{{item.goodsSpecifications?item.goodsSpecifications[0].guig:''}}</span></p>
                    <p><span class="title">单价：</span><span class="content">{{item.goodsSpecifications?item.goodsSpecifications[0].danj:''}}</span></p>
                </div>
                <div slot="infinite-scroll-loading">加载中...</div>
            </VueDataLoading>

        </div>
    </div>
</template>
<script>
    export default {
        name:'owngoods',
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
                this.$http.post(this.$APIs.GOODS_LIST,{
                    page:this.page,
                    pageSize:this.pageSize,
                    userid:localStorage.getItem('uid')
                })
                    .then(res=>{
                        if (res.data.status===200){
                            this.dataList = this.dataList.concat(res.data.data.rows);
                            console.log(this.dataList);
                            this.page++;
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
            },
        },
        beforeDestroy(){
            this.dataList.length = 0
        }
    }
</script>
