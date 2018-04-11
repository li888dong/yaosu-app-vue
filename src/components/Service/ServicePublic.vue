<style scoped>
@import "../Goods/PublishGoods.css";
    input[type=radio]{
        width: 16px;
        height: 16px;
        float: none;
        vertical-align: -2px;
    }
    .demand,
    .supply{
        width: 120px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>发布{{type}}需求</p>
            <span class="right" @click="publish">发布</span>
        </div>
        <div class="publish-goods-container pannel">
            <p class="form-item"><span class="required">* </span>我的需求
                <label class="demand"><input type="radio" name="ra1" v-model="reqData.type" value="A">要{{type}}</label>
                <label class="supply"><input type="radio" name="ra1" v-model="reqData.type" value="B">{{type}}转让</label>
            </p>
            <p class="form-item"><span class="required">* </span>公司名称<input type="text" placeholder="请输入公司名称" v-model="reqData.companyname"></p>
            <p class="form-item"><span class="required">* </span>联系方式<input type="text" placeholder="请输入联系方式" v-model="reqData.contactphone"></p>
            <p class="form-item" v-if="type==='外贸'">
                HS号<span class="required">* </span>：
            </p>
            <div class="not-container" v-if="type==='外贸'">
                <textarea name="note" cols="40" rows="10" placeholder="不同的HS号之间请以分号隔开（例：2302500000；4811900000；6913100000）" v-model="reqData.hs "></textarea>
            </div>
            <p class="form-item">
                需求描述<span class="required">* </span>：
            </p>
            <div class="not-container">
                <textarea name="note" id="xingzms" cols="40" rows="10" placeholder="请输入商品性状描述，最多500个字符（选填）" v-model="reqData.requirementdescription"></textarea>
            </div>

            <p class="form-item" >
                我的优势：
            </p>
            <div class="not-container">
                <textarea name="note" id="note" cols="40" rows="10" placeholder="请输入商品描述，最多500个字符（选填）" v-model="reqData.advantage"></textarea>
            </div>

        </div>

    </div>
</template>
<script>
    export default {
        name:'service_public',
        data(){
            return{
                reqData:{
                    companyname:'',
                    contactphone:'',
                    requirementdescription:'',
                    advantage:'',
                    hs:null,
                    userid:localStorage.getItem('uid'),
                    type:''
                }
            }
        },
        computed:{
            type(){
                return this.$route.query.type
            }
        },
        methods:{
            publish(){
                this.$http.post(this.getUrl(this.type),this.reqData)
                    .then(res=>{
                        console.log(res);
                        if (res.data.status===200){
                            this.$message.success('发布成功');
                            this.$router.go(-1)
                        }else {
                            this.$message.success(res.data.msg);
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                        this.$message.error('网络错误')
                    })
            },
            getUrl(type){
                switch (type){
                    case '项目':
                        return this.$APIs.PROJECT_SAVE;
                    case '技术':
                        return this.$APIs.TECHNOLOGY_SAVE;
                    case '外贸':
                        return this.$APIs.FOREIGNTRADE_SAVE;
                    case '批文':
                        return this.$APIs.APPROVAL_NUMBER_SAVE;
                    default:
                        return
                }
            }
        }
    }
</script>
