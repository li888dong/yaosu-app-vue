<style>

</style>
<template>
    <div id="xiangmu" class="item-container pannel xiangmu">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more" @click="$router.push({path:'service_list',query:{type:'项目',demand:'要项目',supply:'项目供应'}})">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">要项目</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">项目供应</span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :data-projectid="item.projectid" :key="item.projectid" v-for="item in curData" @click="gotoService(item.projectid)">
                <p><span class="item-title">{{item.companyname}}</span></p>
                <p><span class="item-info">{{new Date(item.addtime).Format('yyyy-MM-dd')}}</span></p>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'xiangmu',
        data(){
            return{
                curSelected:'demand'
            }
        },
        mounted(){

        },
        computed:{
            demandData(){
                return this.$store.getters.PNO1
            },
            supplyData(){
                return this.$store.getters.PNO2
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
                this.$http.post(this.$APIs.PROJECT_DETAIL,{
                    projectid:id
                })
                    .then(res=>{
                        this.$router.push({path:'service_detail',query:{itemData:res.data.data,catorageType:'项目'}})
                    })
                    .catch(err=>{
                        this.$message.error({message:'网络错误'});
                    })
            }
        }
    }
</script>
