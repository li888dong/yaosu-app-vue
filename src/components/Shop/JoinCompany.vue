<style scoped>
    input {
        border: none;
        outline: none;
        color: #000;
        height: 38px;
        width: 220px;
        line-height: 38px;
        float: right;
        text-align: right;
        padding-right: 10px;
    }

    .name-container{
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
    }
    .company-name{
        font-size: 12px;
        color: #03A657;
        margin: 10px 0;
    }

    .confirm-btn{
        background-color: #03A657;
        color: white;
        border-radius: 4px;
        width: 90%;
        height: 40px;
        margin-top: 40px;
        margin-left: 5%;
    }
    .tips{
        font-size: 12px;
        color: #df5000;
        margin-left: 10px;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>加入企业</p>
        </div>
        <div class="tabbar-container finace">
            <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">人工审核</span>
            <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">邀请码加入</span>
        </div>
        <div class="animate-container">

            <transition name="slide-fade1">
                <div class="animate-item" v-if="curSelected==='supply'">
                    <div class="name-container">
                        <p>您要加入的企业是：</p>
                        <p class="company-name">{{companyName}}</p>
                    </div>
                    <div class="form-item">
                        <span class="required">* </span>邀请码：<input type="text" placeholder="请输入邀请码" v-model="name">
                    </div>
                    <p class="tips">*企业邀请码由企业管理员管理，输入正确后可直接加入该企业</p>
                    <button class="confirm-btn" @click="submitByCode">提交审核</button>
                </div>
            </transition>
            <transition name="slide-fade2">
                <div class="animate-item" v-if="curSelected==='demand'">
                    <div class="name-container">
                        <p>您要加入的企业是：</p>
                        <p class="company-name">{{companyName}}</p>
                    </div>
                    <div class="form-item">
                        <span class="required">* </span>姓名：<input type="text" placeholder="请输入姓名" v-model="name">
                    </div>
                    <div class="form-item">
                        <span class="required">* </span>联系电话：<input type="tel" placeholder="请输入联系方式" v-model="tel">
                    </div>
                    <div class="form-item">
                        任职部门：<input type="text" placeholder="请输入所在部门" v-model="bumen">
                    </div>
                    <div class="form-item">
                        公司职务：<input type="text" placeholder="公司职务" v-model="zhiwu">
                    </div>
                    <button class="confirm-btn" @click="submitByPerson">提交审核</button>
                </div>
            </transition>
        </div>

    </div>
</template>
<script>
    export default {
        name:'joincompany',
        data(){
            return{
                curSelected:'demand',
                name:'',
                tel:'',
                bumen:'',
                zhiwu:'',
                code:''
            }
        },
        computed:{
            companyId(){
                return this.$route.query.companyId
            },
            companyName(){
                return this.$route.query.companyName
            }
        },
        methods:{
            changeCur(type){
                this.curSelected = type
            },
            submitByPerson(){
                this.$http.post(this.$APIs.JOIN_COMPANY_BY_PERSON,{
                    userId:localStorage.getItem('uid'),
                    companyId:this.companyId,
                    phone:this.tel,
                    bum:this.bumen,
                    zhiw:this.zhiwu
                })
                    .then(res=>{
                        if(res.data.status===200){
                            this.$message.info('加入成功');
                            this.$router.go(-1)
                        }else {
                            this.$message.error(res.data.msg)
                        }
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            },
            submitByCode(){
                this.$http.post(this.$APIs.JOIN_COMPANY_BY_CODE,{
                    userId:localStorage.getItem('uid'),
                    companyId:this.companyId,
                    phone:this.tel,
                    code:this.code
                })
                    .then(res=>{
                        if(res.data.status===200){
                            this.$message.info('加入成功');
                            this.$router.go(-1)
                        }else {
                            this.$message.error(res.data.msg)
                        }
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            }
        }
    }
</script>
