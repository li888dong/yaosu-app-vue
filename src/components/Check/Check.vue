<style scoped>
    .data-list{
        background-color: #fff;
        padding: 10px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
    .icon-search{
        position: fixed;
        left: 2%;
        top: 72px;
        z-index:14;
    }
    .search-container .search-input{
        border: none;
        outline: none;
        width:100%;
        background-color: #fff;
        height: 40px;
        padding: 10px 10px 10px 40px;
        position: fixed;
        left: 0;
        right: 0;
        top: 60px;
        box-shadow: 0 0 1px #999;
        z-index: 13;
    }
    .item-list{
        margin-top: 30px;
    }
</style>
<template>

    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>检测</p>
        </div>
        <div>
            <div class="search-container">
                <i class="icon iconfont icon-search"></i>
                <form style="display: inline-block">
                    <input
                        type="search"
                        class="search-input"
                        autofocus
                        ref="searchInput"
                        placeholder="请输入药材名或拼音"
                        v-model="keyword"
                    >
                </form>
            </div>
        </div>
        <ul class="item-list">

            <li
                class="data-list"
                v-if="keyword"
                v-for="data in filterList"
                :key="data.testingproductid"
                data-testid="data.testingproductid"
                @click="gotoMakeTesting(data)">
                {{data.testingproduct}}
            </li>
            <li
                class="data-list"
                v-if="keyword===''"
                v-for="data in dataList"
                :key="data.testingproductid"
                data-testid="data.testingproductid"
                @click="gotoMakeTesting(data)">
                {{data.testingproduct}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'jiance',
        data(){
            return{
                dataList:[],
                filterList:[],
                keyword:''
            }
        },
        mounted(){
            this.$http.get(this.$APIs.DETECTION_LIST)
                .then(res=>{
                    if (res.data.status === 200){
                        this.dataList = res.data.data;
                        console.log(res.data)
                    }else {
                        this.$message.error({message:res.data.msg});
                    }

                })
                .catch(err=>{
                    this.$message.error({message:'网络错误'});
                })
        },
        watch:{
            'keyword'(){
                this.filterList = this.dataList.filter(i=>{
                    return this.keyword === i.testingproduct
                })
            }
        },
        methods:{
            onSearch(){
                this.filterList = this.dataList.filter(i=>{
                    this.keyword = i.testingproduct
                })
            },
            gotoMakeTesting(data){
                this.$router.push({path:'make_testing',query:{goodsName:data.testingproduct,testingproductid:data.testingproductid}})
            }
        }
    }
</script>
