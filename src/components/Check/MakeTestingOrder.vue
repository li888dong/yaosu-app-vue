<style scoped>
    .form-item input{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: right;
        margin-left: 20px;
        width: 220px;
    }
    .item-list-container{
        position: absolute;
        left: 0;
        right: 0;
        top: 170px;
        bottom: 0;
        overflow-y: scroll;
        padding: 15px;
        box-sizing: border-box;
    }
    .item-list-container .title{
        position: relative;
        left: 20px;
        top: 5px;
    }
    .item-list-container .title::before{
        content: '';
        position: absolute;
        left: -15px;
        width: 10px;
        height: 20px;
        border-radius: 3px;
        background-color: #03A657;

    }
    .item-list-container .fr{
        font-size: 14px;
        margin-top: 5px;
    }
    .item-container{
        font-size: 14px;
        padding:15px 10px;
        border-bottom: 1px solid #eeeeee;
    }
    .icon-gouxuan{
        width: 24px;
        height: 24px;
        font-size: 20px;
        position: absolute;
        right: 15px;
    }
    .green{
        color: #03A657;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>检测内容</p>
            <span class="right" @click="publish">提交</span>
        </div>
        <div class="form-container pannel">
            <p class="form-item"><span class="required">* </span>检测产品：<input type="text" v-model="goodsName" readonly></p>
            <p class="form-item"><span class="required">* </span>检测机构：<input type="text" v-model="organization" readonly></p>
            <p class="form-item"><span class="required">* </span>联系方式：<input type="tel" placeholder="请输入联系方式" v-model="contact"></p>
        </div>
        <div class="item-list-container pannel">
            <div v-for="(items,key) in itemList">
                <p>
                    <span class="title">{{key}}</span>
                    <span class="fr" @click="addItem(items)">全选</span>
                    <span class="fr" @click="removeItem(items)">取消全选 &nbsp;&nbsp;</span>
                </p>
                <p class="item-container" v-for="item in items">
                    <span>{{item.item}}</span>
                    <i class="icon iconfont icon-gouxuan green" v-if="item.isChecked"  @click="removeItem([item])"></i>
                    <i class="icon iconfont icon-gouxuan" v-else  @click="addItem([item])"></i>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
//                检测机构
                organization:'',
//                检测机构id
                testingorganizationid:'',
//                联系方式
                contact:'',
//                检测产品
                testingproduct:'',
//                请求回来的检测数据
                dataList:[],
//                已选择的检测项
                selectedList:new Set()
            }
        },
        computed:{
            goodsName(){
                return this.$route.query.goodsName
            },
            testingproductid(){
                return this.$route.query.testingproductid
            },
            itemList(){
                let temObj = {};
                this.dataList.map(i=>{
                    if (Array.isArray(temObj[i.testingtype])){
                        temObj[i.testingtype].push({
                            item:i.testingitem,
                            isChecked:i.ischeck
                        })
                    }else {
                        temObj[i.testingtype] = [{
                            item:i.testingitem,
                            isChecked:i.ischeck
                        }]
                    }
                });
                return temObj
            }
        },
        mounted(){
            this.fetchData()
        },
        methods:{
            fetchData(){
                this.$http.post(this.$APIs.ORGANIZATION_LIST,{
                    testingproductid:this.testingproductid
                })
                    .then(res=>{
                        console.log('机构',res);
                        this.organization = res.data.data[0].testingorganization;
                        this.testingorganizationid = res.data.data[0].testingorganizationid;
                        return this.$http.post(this.$APIs.TESTING_ITEM_LIST,{
                            testingproductid:this.testingproductid,
                            testingorganizationid:this.testingorganizationid
                        })
                    })
                    .then(res=>{
                        console.log('项目',res);
                        this.dataList = res.data.data;
                    })
                    .catch(err=>{
                        console.log(err);
                        this.$message.error('网络错误')
                    })
            },
            publish(){
                this.$http.post(this.$APIs.TESTING_SAVE_ORDER,{
                    testingproductid:this.testingproductid,
                    testingstatus:'A',
                    testingproduct:this.goodsName,
                    testingorganizationid:this.testingorganizationid,
                    contactphone:this.contactphone,
                    testingproductitem:Array.from(this.selectedList).join(','),
                    userid:localStorage.getItem('uid')
                })
                    .then(res=>{
                        console.log(res);
                        this.$router.push('person')
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
//            添加检测项目
            addItem(items){
                items.map(i=>{
                    this.selectedList.add(i.item);
                });
                this.changeSelected();
            },
//            移除检测项目
            removeItem(items){
                items.map(i=>{
                    this.selectedList.delete(i.item);
                });
                this.changeSelected();
            },
//            全选检测项目
            changeSelected(){
                if (this.dataList.length>0){
                    this.dataList.map(i=>{
                        i.ischeck = this.selectedList.has(i.testingitem);
                    });
                }

            }
        }
    }
</script>
