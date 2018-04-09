<style>

</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>检测内容</p>
            <span class="right" @click="publish">提交</span>
        </div>
        <div class="form-container pannel">
            <p class="form-item"><span class="required">* </span>检测产品：<input type="text" v-model="goodsName" readonly></p>
            <p class="form-item"><span class="required">* </span>检测机构：<input type="text" v-model="organization" readonly></p>
            <p class="form-item"><span class="required">* </span>联系方式：<input type="tel" placeholder="请输入联系方式" v-model="contact"></p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                organization:'',
                contact:'',
                dataList:''
            }
        },
        computed:{
            goodsName(){
                return this.$route.query.goodsName
            },
            testingproductid(){
                return this.$route.query.testingproductid
            }
        },
        mounted(){
            this.fetchData()
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.ORGANIZATION_LIST,{
                    testingproductid:this.testingproductid
                })
                    .then(res=>{
                        console.log('机构',res);
                        this.organization = res.data.data[0].testingorganization;
                        return this.$http.post(this.$APIs.TESTING_ITEM_LIST,{
                            testingproductid:this.testingproductid,
                            testingorganizationid:res.data.data[0].testingorganizationid
                        })
                    })
                    .then(res=>{
                        console.log('项目',res);
                        this.dataList = res.data.data;
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            },
            publish(){

            }
        }
    }
</script>
