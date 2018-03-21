<style>

</style>
<template>
    <div id="piwen" class="item-container pannel piwen">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more" @click="$router.push({path:'service_list',query:{type:'批文',demand:'要批文',supply:'批文转让'}})">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">要批文</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">批文转让</span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :data-approvalnumberid="item.approvalnumberid" :key="item.approvalnumberid" v-for="item in curData" @click="gotoService(item.approvalnumberid)">
                <div class="item-title">{{item.companyname || ''}}</div>
                <div class="item-date">{{new Date(item.addtime).Format('yyyy-MM-dd')|| ''}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'piwen',
        data(){
            return{
                curSelected:'demand'
            }
        },
        mounted(){

        },
        computed:{
            demandData(){
                return this.$store.getters.ANN1
            },
            supplyData(){
                return this.$store.getters.ANN2
            },
            curData(){
                return this.curSelected === 'demand'?this.demandData:this.supplyData
            }
        },
        methods:{
            changeCur(cur){
                this.curSelected = cur
            },
            gotoService(id){
                this.$http.post(this.$APIs.APPROVAL_NUMBER_DETAIL,{
                    approvalnumberid:id
                })
                    .then(res=>{
                        this.$router.push({path:'service_detail',query:{itemData:res.data.data,catorageType:'技术'}})
                    })
                    .catch(err=>{
                        this.$message.error({message:'网络错误'});
                    })
            }
        }
    }
</script>
