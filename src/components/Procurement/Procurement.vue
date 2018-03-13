<style scoped>
    .list-item{
        padding: 10px 20px;
        position: relative;
        font-size: 14px;
    }
    .list-item .status{
        position: absolute;
        right: -44px;
        top: 14px;
        width: 100px;
        font-size: 14px;
        transform: rotate(45deg);
        background-color: #03A657;
        color: white;
        text-align: center;
        padding: 5px 20px;
    }
    .list-item .ck-btn{
        color: #03A657;
        display: inline-block;
        margin-left: 40px;
    }
    .list-item .footer{
        border-top: 1px solid #ccc;
        margin-top: 5px;
        padding-top: 8px;
    }
    .list-item .bj-btn{
        display: inline-block;
        border: 1px solid #03A657;
        border-radius: 4px;
        color: #03A657;
        padding: 2px 4px;
        float: right;
    }
</style>
<template>
    <div>

        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>采购信息</p>
            <i class="icon iconfont icon-search right"></i>
        </div>
        <div class="list-container">
            <div class="list-item pannel" v-for="item in dataList">
                <div class="status">采购中</div>
                <h4 class="name">{{item.procurement.goodname}}</h4>
                <p><span class="title">采购编号：</span><span class="content">{{item.procurement.procurementno}}</span></p>
                <p><span class="title">采购数量：</span><span class="content">{{item.procurement.quantity}}</span></p>
                <p><span class="title">联系方式：</span><span class="content">{{item.procurement.contactphone}}</span><span class="ck-btn">查看联系方式</span></p>
                <p><span class="title">信息有效期至：</span><span class="content">{{item.procurement.messagevalidity}}</span></p>
                <p><span class="title">备注信息：</span><span class="content">{{item.procurement.otherrequests}}</span></p>
                <p class="footer"><span>{{item.procurement.addtime}}</span><span class="bj-btn">立即报价</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'caigou',
        data() {
            return{
                dataList:[]
            }
        },
        mounted(){
            this.$http.get(this.$APIs.PROCUREMENT_LIST)
                .then((res)=>{
                    console.log(res);
                    this.dataList = res.data.data.rows
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
</script>
