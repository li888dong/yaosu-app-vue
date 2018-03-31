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
                    <input type="radio" name="type" value="0" v-model="addressData.addressType">收货地址
                </label>
                <label>
                    <input type="radio" name="type" value="1" v-model="addressData.addressType" disabled>收票地址
                </label>
            </p>
            <p class="form-item">
                <span class="title">收货人：</span>
                <input type="text" v-model="addressData.shouhr">
            </p>
            <p class="form-item">
                <span class="title">收货人电话：</span>
                <input type="text" v-model="addressData.phone">
            </p>
            <p class="form-item" @click='citypicker'>
                <span class="title">所在地区：</span>
                <span>{{addressData.province+'-'+addressData.city+'-'+addressData.district}}</span>
                <i class="icon iconfont icon-more" style="float: right"></i>
            </p>
            <p class="form-item">
                <span class="title">详细地址：</span>
                <input type="text" v-model="addressData.dizhi">
            </p>
            <p class="form-item mor">
                <label>
                    <input type="checkbox" :value="0" v-model="addressData.isMor">
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
                addressData:{

    //                地址类型
                    addressType:'0',
    //                收货人
                    shouhr:'',
    //                收货人联系电话
                    phone:'',
    //                所在区域
                    area:'',
    //                省
                    province:'',
    //                市
                    city:'',
    //                区
                    district:'',
    //                详细地址
                    dizhi:'',
    //                是否默认地址
                    isMor:0
                }

            }
        },
        computed:{
            currentAddressData(){
                return this.$route.query.addressData||{}
            }
        },
        mounted(){
            this.addressData = Object.assign({},this.addressData,this.currentAddressData)
            console.log(this.currentAddressData)
        },
        methods:{
            citypicker(){
                this.$citypicker({

                }).then((e)=>{
                    this.addressData.province = e[0];
                    this.addressData.city = e[1]||'';
                    this.addressData.district = e[2]||'';
                    this.addressData.area=e.join('-');
                    console.log('选择城市',e)

                }).catch(()=>{

                })
            },
            updateAddress(){
                this.$http.post(this.$APIs.CREATE_ADDRESS,{
                    updateuserid:localStorage.getItem('uid'),
                    type:0,
                    addressid:this.addressData.addressid,
                    shouhr:this.addressData.shouhr,
                    phone:this.addressData.phone,
                    quh:'',
                    tel:this.addressData.phone,
                    youb:'',
                    dizhi:this.addressData.dizhi,
                    isMor:this.addressData.isMor,
                    province:this.addressData.province,
                    city:this.addressData.city,
                    district:this.addressData.district
                })
                    .then(res=>{
                        console.log('更新地址',res);
                        this.$router.go(-1)
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            },
            submitAddress(){
                if (this.addressData.addressid){
                    this.updateAddress();
                    return
                }
                this.$http.post(this.$APIs.CREATE_ADDRESS,{
                    adduserid:localStorage.getItem('uid'),
                    type:0,
                    shouhr:this.addressData.shouhr,
                    phone:this.addressData.phone,
                    quh:'',
                    tel:this.addressData.phone,
                    youb:'',
                    dizhi:this.addressData.dizhi,
                    isMor:this.addressData.isMor,
                    province:this.addressData.province,
                    city:this.addressData.city,
                    district:this.addressData.district
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
