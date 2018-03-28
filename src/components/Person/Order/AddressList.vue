<style scoped>
    .pannel{
        padding: 8px 15px;
        height: 70px;
    }
    .pannel>span{
        position: absolute;
    }
    .shouhr{
        left: 5%;
        top: 10px;
        color: #000000;
    }
    .phone{
        right: 5%;
        top: 10px;
        color: #000000;
    }
    .dizhi{
        left: 5%;
        top: 36px;
        font-size: 14px;
        border-bottom: 1px solid #eeeeee;
        width: 90%;
    }
    .isMor{
        left: 5%;
        bottom: 5px;
        color: #03A657;
        font-size: 14px;
    }
    .eidt-btn{
        bottom: 5px;
        right: 5%;
        font-size: 14px;
    }
    .footer>button{
        background-color: #03A657;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>{{type=='0'?'收货地址':'收票地址'}}</p>
        </div>
        <div class="pannel" v-for="address in addressList">
            <span class="shouhr">{{address.shouhr}}</span>
            <span class="dizhi">{{address.dizhi}}</span>
            <span class="phone">{{address.phone}}</span>
            <span class="eidt-btn" @click="gotoNext(address)"><i class="icon iconfont icon-zan"></i>编辑</span>
            <span class="isMor">{{address.isMor=='0'?'':'默认地址'}}</span>
        </div>
        <div class="footer">
            <button v-if="this.type == 0" @click="$router.push('receiveAddress')">添加新地址</button>
            <button v-else @click="$router.push('invoiceAddress')">添加新地址</button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'addresslist',
        data(){
            return{
                addressList:[]
            }
        },
        mounted(){
            this.fetchData()
        },
        computed:{
            type(){
                return this.$route.query.addressType
            }
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.ADDRESS_LIST,{
                    userid:localStorage.getItem('uid'),
                    type:this.type
                })
                    .then(res=>{
                        console.log(res);
                        this.addressList = res.data.data
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            },
            gotoNext(address){
                if (this.type === '0'){
                    this.$router.push({path:'receiveAddress',query:{addressData:address}})
                }else {
                    this.$router.push({path:'invoiceAddress',query:{addressData:address}})
                }
            }
        }
    }
</script>
