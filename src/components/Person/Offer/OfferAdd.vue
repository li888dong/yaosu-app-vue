<style scoped>
    .offer-add-container{
        font-size: 14px;

    }
    .offer-add-container input{
        border: none;
        outline: none;
        color: #000;
        height: 38px;
        line-height: 38px;
        float: right;
        text-align: right;
        padding-right: 10px;
    }

    .unit{
        float: right;
        border-left: 1px solid #eee;
        padding-left: 10px;
    }

    .unit-item{
        height: 40px;
    }
    #note{
        border: none;
        outline: none;
        padding: 10px;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>发布{{type}}</p>
            <span class="right" @click="publish">发布</span>
        </div>
        <div class="offer-add-container pannel">
            <p class="form-item"><span class="required">* </span>商品名称：<input type="text" placeholder="请输入商品名称" v-model="goodsName"></p>
            <p class="form-item" v-if="type==='报价'"><span class="required">* </span>单价：<input type="number" placeholder="请输入单价" v-model="price"></p>
            <p class="form-item"><span class="required">* </span>数量：<span class="unit" @click="dialogTableVisible = true">{{unit}} <i class="icon iconfont icon-more rotate_90"></i></span><input type="number" placeholder="请输入数量" v-model="amount"></p>
            <p class="form-item"><span class="required">* </span>联系方式：<input type="tel" placeholder="请输入联系方式" v-model="contact"></p>
            <p class="form-item"><span class="required">* </span>报价有效期至：
                <input type="text" readonly @click="datepicker" v-model="messagevalidity">
                <!--<el-date-picker-->
                    <!--v-model="messagevalidity"-->
                    <!--type="date"-->
                    <!--format="yyyy 年 MM 月 dd 日"-->
                    <!--value-format="yyyy-MM-dd"-->
                    <!--style="float: right"-->
                    <!--placeholder="选择日期">-->
                <!--</el-date-picker>-->
            </p>
            <p>
                <textarea name="note" id="note" cols="40" rows="10" v-model="note" placeholder="备注信息（选填）
提示:商品纯度、是否含税、送货方式、品牌、产地、产新年份、质量等级、期货等可在此备注"></textarea>
            </p>
        </div>
        <el-dialog title="选择单位" :visible.sync="dialogTableVisible" width="80%">
            <el-radio-group v-model="unit">
                 <p class="unit-item"><el-radio :label="'吨'">吨</el-radio></p>
                 <p class="unit-item"><el-radio :label="'千克'">千克</el-radio></p>
                 <p class="unit-item"><el-radio :label="'克'">克</el-radio></p>
                 <p class="unit-item"><el-radio :label="'毫克'">毫克</el-radio></p>
                 <p class="unit-item"><el-radio :label="'升'">升</el-radio></p>
                 <p class="unit-item"><el-radio :label="'毫升'">毫升</el-radio></p>
                 <p class="unit-item"><el-radio :label="'其他'">其他</el-radio></p>
            </el-radio-group>

        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'offerAdd',
        data(){
            return {
                dialogTableVisible:false,
                goodsName:'',
                price:'',
                amount:'',
                unit:'吨',
                contact:'',
                messagevalidity:'',
                note:''
            }
        },
        computed:{
            procurementid(){
                return this.$route.query.procurementid
            },
            type(){
                return this.$route.query.publishType
            }
        },
        methods:{
            datepicker(){
                this.$datepicker({

                }).then((e)=>{
                    this.messagevalidity = e.join('-');
                    console.log('11',e)

                }).catch(()=>{

                })
            },
            publish(){
                if (this.goodsName&&this.price&&this.amount&&this.unit&&this.contact&&this.messagevalidity){
                    if (this.type === '报价'){
                        this.$http.post(this.$APIs.OFFER_ADD,{
                            userId:localStorage.getItem('uid'),
                            procurementid:this.procurementid,
                            goodname:this.goodsName,
                            price:this.price,
                            quantity:this.amount,
                            messagevalidity:this.messagevalidity,
                            contactphone:this.contact,
                            note:this.note,
                            unit:this.unit
                        })
                            .then(res=>{
                                if (res.data.status===200){

                                    this.$router.push('offer')
                                }else {
                                    this.$message.error({message:res.data.msg});
                                }
                            })
                            .catch(err=>{
                                this.$message.error({message:'网络错误'});
                            })
                    }else {
                        this.$http.post(this.$APIs.PROCUREMENT_PUBLISH,{
                            userId:localStorage.getItem('uid'),
                            goodname:this.goodsName,
                            quantity:this.amount,
                            messagevalidity:this.messagevalidity,
                            contactphone:this.contact,
                            otherrequests:this.note,
                            unit:this.unit
                        })
                            .then(res=>{
                                if (res.data.status===200){

                                    this.$router.go(-1)
                                }else {
                                    this.$message.error({message:res.data.msg});
                                }
                            })
                            .catch(err=>{
                                this.$message.error({message:'网络错误'});
                            })
                    }

                }else {
                    this.$message.error({message:'请填写完整信息'});
                }

            }
        }
    }
</script>
