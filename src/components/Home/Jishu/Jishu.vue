<style>

</style>
<template>
    <div id="jishu" class="item-container pannel jishu">
        <div class="item-header">
            <div class="title">
                <span class="logo"></span>
                <span class="more" @click="$router.push({path:'service_list',query:{type:'技术',demand:'要技术',supply:'技术供应'}})">查看全部 <i class="icon iconfont icon-more"></i></span>
            </div>
            <div class="tabbar-container">
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='demand'}" @click="changeCur('demand')">要技术</span>
                <span class="tabbar" :class="{ 'tabbar-selected':curSelected==='supply'}" @click="changeCur('supply')">技术供应</span>
            </div>
        </div>
        <div class="item-content">
            <div class="product-item" :data-technologyid="item.technologyid" :key="item.technologyid" v-for="item in curData" @click="gotoService(item.technologyid)">
                <div class="item-title">{{item.companyname || ''}}</div>
                <div class="item-date">{{new Date(item.addtime).Format('yyyy-MM-dd')|| ''}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'jishu',
        data(){
            return{
                curSelected:'demand'
            }
        },
        mounted(){

        },
        computed:{
            demandData(){
              return this.$store.getters.TNO1
            },
            supplyData(){
              return this.$store.getters.TNO2
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
                this.$http.post(this.$APIs.TECHNOLOGY_DETAIL,{
                    technologyid:id
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
