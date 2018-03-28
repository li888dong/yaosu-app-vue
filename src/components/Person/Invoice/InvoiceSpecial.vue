<style scoped>
    @import "Invoice.css";
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>专用发票</p>
        </div>
        <div class="form-container pannel">
            <p class="form-item"><span class="title">发票类型</span><input type="text" value="增值税专用发票" readonly></p>
            <p class="form-item"><span class="title">公司名称</span><input type="text" placeholder="必填" v-model="invoiceData.companyname"></p>
            <p class="form-item"><span class="title">税号/信用代码</span><input type="text" placeholder="必填" v-model="invoiceData.tfn"></p>
            <p class="form-item"><span class="title">注册地址</span><input type="text" placeholder="必填" v-model="invoiceData.address"></p>
            <p class="form-item"><span class="title">注册电话</span><input type="text" placeholder="必填" v-model="invoiceData.tel"></p>
            <p class="form-item"><span class="title">开户银行</span><input type="text" placeholder="必填" v-model="invoiceData.bank"></p>
            <p class="form-item"><span class="title">银行账号</span><input type="text" placeholder="必填" v-model="invoiceData.cardno"></p>
        </div>
        <div class="footer">
            <button @click="saveInvoice">保存发票信息</button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'invoicespecial',
        data(){
            return{
                invoiceData:{
                    userid:localStorage.getItem('uid'),
//                   发票类型
                    invoicetype:1,
//                    公司 名称
                    companyname:'',
//                    纳税人识别号
                    tfn:'',
//                    地址
                    address:'',
//                    电话
                    tel:'',
//                    开户行
                    bank:'',
//                    账号
                    cardno:'',
                }

            }
        },
        methods:{
            saveInvoice(){
                this.$http.post(this.$APIs.CREATE_INVOICE,this.invoiceData)
                    .then(res=>{
                        console.log(res);
                        this.$router.go(-1)
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            }
        }
    }
</script>
