<style scoped>
    .form-item{
        height: 24px;
        padding: 10px;
        border-bottom: 1px solid #eeeeee;
    }
    .form-item .title{
        display: inline-block;
        width: 100px;
    }
    .form-item input[type=text]{
        float: right;
        text-align: right;
        padding-right: 10px;
        width: 220px;
    }
    .mor{
        margin-top: 50px;
    }
    .footer .confirm-btn{
        background-color: #03A657;
        color: white;
    }
</style>
<template>
    <div class="pannel">
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>新增地址</p>
        </div>
        <div>
            <p class="form-item">
                <span class="title">地址类型：</span>
                <label>
                    <input type="radio" name="type" value="1" v-model="addressType">收货地址
                </label>
                <label>
                    <input type="radio" name="type" value="2" v-model="addressType" disabled>收票地址
                </label>
            </p>
            <p class="form-item">
                <span class="title">收货人：</span>
                <input type="text" v-model="consignee">
            </p>
            <p class="form-item">
                <span class="title">收货人电话：</span>
                <input type="text" v-model="consigneephone">
            </p>
            <p class="form-item" @click='citypicker'>
                <span class="title">所在地区：</span>
                <span>{{area}}</span>
                <i class="icon iconfont icon-more" style="float: right"></i>
            </p>
            <p class="form-item">
                <span class="title">详细地址：</span>
                <input type="text" v-model="detailaddress">
            </p>
            <p class="form-item mor">
                <label>
                    <input type="checkbox" :value="1" v-model="isMor">
                    默认地址
                </label>
            </p>

        </div>
        <div class="footer">
            <button class="confirm-btn" @click="submitAddress">保存地址</button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'address',
        data(){
            return{
//                地址类型
                addressType:'1',
//                收货人
                consignee:'',
//                收货人联系电话
                consigneephone:'',
//                收货地址
                deliveryaddress:'',
//                所在区域
                area:'',
//                省
                province:'',
//                市
                city:'',
//                区
                district:'',
//                详细地址
                detailaddress:'',
//                是否默认地址
                isMor:0
            }
        },
        methods:{
            citypicker(){
                this.$citypicker({
                    value:this.city,
                    change:(e)=>{

                    }
                }).then((e)=>{
                    this.province = e[0];
                    this.city = e[1]||'';
                    this.district = e[2]||'';
                    this.area=e.join('-');
                    console.log('11',e)

                }).catch(()=>{

                })
            },
            submitAddress(){
                this.$http.post(this.$APIs.CREATE_ADDRESS,{
                    adduserid:localStorage.getItem('uid'),
                    type:0,
                    shouhr:this.consignee,
                    phone:this.consigneephone,
                    quh:'',
                    tel:this.consigneephone,
                    you:'',
                    dizhi:this.area+this.detailaddress,
                    isMor:this.isMor,
                    province:this.province,
                    city:this.city,
                    district:this.district
                })
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
