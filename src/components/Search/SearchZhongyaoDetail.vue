<style scoped>
    .zhongyao-detail-container{
        font-size: 14px;
    }
    .zhongyao-detail-container h3{
        font-size: 20px;
        font-weight:normal;
        padding-left: 10px;
    }
    .pannel{
        padding: 10px 20px;
    }
    .title{
        color: #03A657;
        font-size: 16px;
        margin: 10px 0;
    }

    .footer button{
        width: 50%;
        height: 40px;
        background-color: #03A657;
        border-left: 1px solid #fff;
        line-height: 40px;
        text-align: center;
        color: white;
    }
</style>
<template>
    <div class="zhongyao-detail-container">
        <!--标题栏-->
        <div class="top-bar fixedTop">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>药材百科</p>
        </div>
        <div class="pannel">
            <h3>{{tcmData.ycmc}}</h3>
            <p class="title">药材别名：</p>
            <p>{{tcmData.ycbm}}</p>
            <p class="title">摘录：</p>
            <p>{{tcmData.zl}}</p>
            <p class="title">药材基源</p>
            <p>{{tcmData.ycjy}}</p>
            <p class="title">采收和存储</p>
            <p>{{tcmData.cscc}}</p>
            <p class="title">产新时间</p>
            <p>{{tcmData.cxsj}}</p>
            <p class="title">性味归经</p>
            <p>{{tcmData.xwgj}}</p>
            <p class="title">拉丁名</p>
            <p>{{tcmData.ldm}}</p>
            <p class="title">分布</p>
            <p>{{tcmData.fb}}</p>
            <p class="title">化学成分</p>
            <p>{{tcmData.hxcf}}</p>
            <p class="title">用法用量</p>
            <p>{{tcmData.yfyl}}</p>
            <p class="title">主治</p>
            <p>{{tcmData.zz}}</p>
            <p class="title">名家论述</p>
            <p>{{tcmData.mjls}}</p>
            <p class="title">注意事项</p>
            <p>{{tcmData.zysx}}</p>
            <p class="title">临床应用</p>
            <p>{{tcmData.lcyy}}</p>
            <p class="title">品种特点</p>
            <p>{{tcmData.pztd}}</p>
        </div>
        <div class="footer">
            <button @click="$router.push({path:'supplier',query:{productName:tcmData.ycmc}})">查看供应商</button><button @click="$router.push({path:'offer_add',query:{publishType:'采购'}})">发布采购</button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'zhongyaodetail',
        data(){
          return{
              tcmData:''
          }
        },
        mounted(){
            this.fetchData()
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.QUERY_TCM,{
                    tcmid:this.$route.query.tcmId
                })
                    .then(res=>{
                        console.log(res);
                        this.tcmData = res.data.data.rows[0]
                    })
                    .catch(err=>{
                        this.$message.error('网络错误')
                    })
            }
        }
    }
</script>
