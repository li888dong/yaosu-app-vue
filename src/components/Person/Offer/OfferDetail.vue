<style scoped>
    .status-title{
        font-size: 12px;
        float: right;
    }
    .data-list {
        padding: 10px 20px;
        font-size: 14px;
    }
    .data-list p{
        line-height: 26px;
    }
    .data-list .title{
        color:#000;
    }
    .info-content h4 {
        border-left: 10px solid #03A657;
        border-bottom: 1px solid #eee;
        padding: 10px;
    }
    .status0{
        color: #03A657!important;
    }
    .statusbg0{
        background-color: #03A657!important;
    }
    .status1{
        color: #cc0000!important;
    }
    .statusbg1{
        background-color: #cc0000!important;
    }
    .status2{
        color: #666666!important;
    }
    .status3{
        color: #f97433!important;
    }
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .footer button{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
    }
</style>
<template>
    <div class="offer-detail-container">
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>报价详情</p>
        </div>
        <div class="info-content pannel">
            <h4>报价信息</h4>
            <div class="data-list">
                <p><span class="title">编号：</span><span class="content">{{offerData.offerno}}</span></p>
                <p><span class="title">商品名称：</span><span class="content">{{offerData.goodname}}</span></p>
                <p><span class="title">单价：</span><span class="content">{{offerData.price}}</span></p>
                <p><span class="title">数量：</span><span class="content">{{offerData.quantity}}{{offerData.unit}}</span></p>
                <p><span class="title">联系方式：</span><span class="content">{{offerData.contactphone}}</span></p>
                <p><span class="title">信息有效期至：</span><span class="content">{{offerData.messagevalidity}}</span></p>
                <p><span class="title">备注信息：</span><span class="content">{{offerData.note}}</span></p>
            </div>
        </div>
        <div class="info-content pannel">
            <h4>采购信息
                <span class="status-title" :class="{'status0':procurementData.status=='0'}" v-if="procurementData.status=='0'">报价中</span>
                <span class="status-title" :class="{'status1':procurementData.status=='1'}" v-if="procurementData.status=='1'">已删除</span>
                <span class="status-title" :class="{'status2':procurementData.status=='2'}" v-if="procurementData.status=='2'||procurementData.status=='5'">已过期</span>
                <span class="status-title" :class="{'status3':procurementData.status=='3'}" v-if="procurementData.status=='3'">已撤回</span>
            </h4>
            <div class="data-list">
                <p><span class="title">编号：</span><span class="content">{{procurementData.offerno}}</span></p>
                <p><span class="title">商品名称：</span><span class="content">{{procurementData.goodname}}</span></p>
                <p><span class="title">采购数量：</span><span class="content">{{procurementData.quantity}}{{procurementData.unit}}</span></p>
                <p><span class="title">联系方式：</span><span class="content">{{procurementData.contactphone}}</span></p>
                <p><span class="title">信息有效期至：</span><span class="content">{{procurementData.messagevalidity}}</span></p>
                <p><span class="title">备注信息：</span><span class="content">{{procurementData.otherrequests}}</span></p>
            </div>
        </div>
        <div class="footer">
            <button class="statusbg0" v-if="offerData.status=='0'" @click="operationOffer(3)">撤销报价</button>
            <button class="statusbg1" v-if="offerData.status=='3'" @click="operationOffer(1)">删除报价</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'offerDetail',
        data() {
            return {
                offerData: '',
                procurementData: ''
            }
        },
        mounted() {
            this.fetchData();
        },
        computed: {
            offerid() {
                return this.$route.query.offerid
            },
            procurementid() {
                return this.$route.query.procurementid
            },
        },
        methods: {
            fetchData() {
                this.$http.post(this.$APIs.OFFER_DETAIL, {
                    offerId: this.offerid,
                    procurementId: this.procurementid
                })
                    .then(res => {
                        console.log(res);
                        this.offerData = res.data.data.offer;
                        this.procurementData = res.data.data.procurement;
                    })
                    .catch(err => {
                        this.$message.error({message:'网络错误'});
                    })
            },
            operationOffer(status){
                console.log(status,this.offerData.offerid)
                this.$http.post(this.$APIs.OFFER_OPERATION,{
                    userId:localStorage.getItem('uid'),
                    status:status,
                    offerId:this.offerData.offerid
                })
                    .then(res=>{
                        this.$router.go(-1)
                    })
                    .catch(err=>{
                        this.$message.error({message:'网络错误'});
                    })
            }

        }
    }
</script>
