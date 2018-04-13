<style scoped>
    .detail-container{
        width: 100%;
        position: absolute;
        top: 50px;
        bottom: 0;
        padding: 15px;
        background-color: #fff;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 28px;
        color: #000;
    }
    .detail-container .title{
        background-color: #03A657;
        color: white;
        height: 28px;
        padding-left: 5px;
    }
    .detail-container span{
        color: #666;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>{{catorageType}}详情</p>
            <span class="right">分享</span>
        </div>
        <div class="detail-container">
            <p>编号：<span>{{itemData[itemNo]}}</span></p>
            <p>公司名称：<span>{{itemData.companyname}}</span></p>
            <p>联系方式：
                <span v-if="userId">{{itemData.contactphone}}</span>
                <span v-else>*******</span>
                <span v-if="!userId" style="float: right;color: #03A657" @click="$router.push('login')">登陆查看联系方式</span>
            </p>
            <div class="title">需求描述</div>
            <p>{{itemData.requirementdescription}}</p>
            <div class="title">我的优势</div>
            <p>{{itemData.advantage}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'servicedetail',
        data() {
            return {

            }
        },
        methods: {

        },
        computed:{
            itemData(){
                return this.$route.query.itemData
            },
            itemNo(){
                switch (this.$route.query.itemData.servicecategory.servicetype){
                    case 'PNO':
                        return 'projectno';
                    case 'FTN':
                        return 'foreigntradeno';
                    case 'ANN':
                        return 'approvalnumberno';
                    case 'TNO':
                        return 'technologyno'
                }
            },
            catorageType(){
                return this.$route.query.catorageType
            },
            userId(){
                return localStorage.getItem('uid')
            }
        },
        mounted() {
            console.log(this.itemData.servicecategory.servicetype)
        }
    }
</script>
