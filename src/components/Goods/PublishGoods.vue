<style scoped>
    @import "PublishGoods.css";

</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>我的商品</p>
            <span class="right" @click="editGoods" v-if="from === 'edit_goods'">保存</span>
            <span class="right" @click="publishGoods" v-else>发布</span>
        </div>
        <div class="publish-goods-container pannel">
            <p class="form-item"><span class="required">* </span>产品分类：<span class="catorage"
                                                                            @click="dialogTableVisible = true">{{goodsApi_json.categoryname.split('-')[0]}} <i
                class="icon iconfont icon-more rotate_90"></i></span></p>
            <p class="form-item"><span class="required">* </span>上传产品图片
                <input type="file" id="img" ref="img" accept="image/*" hidden @change="preview()"></p>
            <label class="img-selector" for="img">
                <i class="icon iconfont icon-plus-add"></i>
            </label>
            <div id="preview-container">
                <img v-for="img in imgList" :src="'http://image.yaosuce.com'+img.url">
            </div>
            <p>
            <p class="form-item"><span class="required">* </span>产品中文名称：<input type="text"
                                                                               v-model="goodsApi_json.chanpmc">
            </p>
            <p class="form-item">产品中文别名：<input type="text" v-model="goodsApi_json.biem"></p>
            <p class="form-item">产品英文名称：<input type="text" v-model="goodsApi_json.yingwm"></p>
            <p class="form-item">产品英文别名：<input type="text" v-model="goodsApi_json.yingwbm"></p>
            <p class="form-item"><span class="required">* </span>CAS：<input type="text" v-model="goodsApi_json.cas"></p>
            <p class="form-item">所在地：<input type="text" v-model="goodsApi_json.suozd"></p>
            <p class="form-item"><span class="required">* </span>纯度/含量：<input type="text" v-model="goodsApi_json.chund">
            </p>
            <p class="form-item"><span class="required">* </span>质量标准：<input type="text" v-model="goodsApi_json.zhilbz">
            </p>
            <p class="form-item">分子量：<input type="text" v-model="goodsApi_json.fenzl"></p>
            <p class="form-item">分子式：<input type="text" v-model="goodsApi_json.fenzs"></p>
            <p class="form-item"><span class="required">* </span>货号：<input type="text" v-model="goodsApi_json.huoh"></p>
            <p class="form-item"><span class="required">* </span>品牌：<input type="text" v-model="goodsApi_json.pinp"></p>
            <p class="form-item">有关物质：<input type="text" v-model="goodsApi_json.yougwz"></p>
            <p class="form-item"><span class="required">* </span>规格：<i class="icon iconfont icon-plus-add circle-border"
                                                                       @click="dialogTableVisible1 = true"></i>
            </p>
            <p class="form-item" v-if="tbGoodsSpecifications.length>0" v-for="(item,index) in tbGoodsSpecifications">
                规格：<span>{{item.guig}}</span>
                单价：<span>{{item.danj}}元</span>
                库存：<span>{{item.kucsl}}{{item.unit2}}</span>
                <span class="delete-circle-btn" @click="deleteTbGoodsSpecifications(index)">-</span>
            </p>
            <p class="form-item">
                性状描述：
            </p>
            <div class="not-container">
                <textarea name="note" id="xingzms" cols="40" rows="10" placeholder="请输入商品性状描述，最多500个字符（选填）"
                          v-model="goodsApi_json.xingzms"></textarea>
            </div>

            <p class="form-item" >
                商品描述：
            </p>
            <div class="not-container">
                <textarea name="note" id="note" cols="40" rows="10" placeholder="请输入商品描述，最多500个字符（选填）"></textarea>
            </div>

        </div>

        <!--产品分类弹出选择框-->
        <el-dialog title="请选择产品分类" :visible.sync="dialogTableVisible" width="80%">
            <el-radio-group v-model="goodsApi_json.categoryname" @change="catorageChange">
                <p class="catorage-item">
                    <el-radio :label="'原料药-1'">原料药</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'特色原料药及试剂-2'">特色原料药及试剂</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'中间体及精细化学品-3'">中间体及精细化学品</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'中药材-4'">中药材</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'天然提取物-5'">天然提取物</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'基础化工产品及溶剂-6'">基础化工产品及溶剂</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'药用辅料及包材-7'">药用辅料及包材</el-radio>
                </p>
            </el-radio-group>

        </el-dialog>

        <!--产品规格弹出选择框-->
        <el-dialog :visible.sync="dialogTableVisible1" class="dialog2" width="80%" :show-close="false">
            <p>

                <input type="text" placeholder="请输入规格" v-model="guigsl">
                <select name="unit1" id="unit1" v-model="danw">
                    <option value="吨">吨</option>
                    <option value="千克">千克</option>
                    <option value="克">克</option>
                    <option value="毫克">毫克</option>
                    <option value="升">升</option>
                    <option value="毫升">毫升</option>
                    <option value="其他">其他</option>
                </select>/
                <select name="unit2" id="unit2" v-model="jildw">
                    <option value="桶">桶</option>
                    <option value="盒">盒</option>
                    <option value="瓶">瓶</option>
                    <option value="袋">袋</option>
                </select>
            </p>
            <p><input type="text" placeholder="请输入单价" class="price" v-model="danj">元
            </p>
            <p><input type="text" placeholder="请输入库存数量" class="unit"
                      v-model="kucsl">桶</p>
            <span slot="footer" class="dialog-footer">
                <button @click="dialogTableVisible1 = false" class="cancel-btn">取 消</button><button
                @click="confirmTbGoodsSpecifications" class="confirm-btn">确 定</button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import ImgPrevirewer from '../../util/upload_preview'

    export default {
        name: 'publish',
        data() {
            return {
                dialogTableVisible: false,
                dialogTableVisible1: false,
//                规格 吨/桶
                guigsl: '',
                danw:'吨',
                jildw:'桶',
//                单价
                danj: '',
//                库存数量
                kucsl: '',
//                现有规格列表
                tbGoodsSpecifications: [],
//                上传的图片路径
                savePath: '',
//                规格id
                specificationsids:'',
//                产品实体
                goodsApi_json: {
                    categoryname: '原料药',
                    categoryid: '1',
//                    图片地址
//                中文名称
                    chanpmc: '',
//                别名
                    biem: '',
//                英文名称
                    yingwm: '',
//                英文别名
                    yingwbm: '',
//                CAS
                    cas: '',
//                所在地
                    suozd: '',
//                纯度含量
                    chund: '',
//                质量标准
                    zhilbz: '',
//                分子量
                    fenzl: '',
//                分子式
                    fenzs: '',
//                货号
                    huoh: '',
//                品牌
                    pinp: '',
//                有关物质
                    yougwz: '',
//                规格
                    tbGoodsSpecifications: [],
//                性状描述
                    xingzms: '',
//                商品描述
                    adduserid: ''
                },
                imgList:[]

            }
        },
        computed: {
            adduserid() {
                return localStorage.getItem('uid')
            },
            from(){
                return this.$route.query.from
            }
        },
        methods: {

            preview() {
                let _this = this;
//                图片上传预览
                let config = {
                    tip: "请上传格式为png, gif或者jpg的图片",
                    fileId: "img",
                    containerId: "preview-container",
                    imgStyle: "width:60px;height:45px;border-radius:0;"
                };
                let previewer = new ImgPrevirewer(config);
                previewer.preview();
//                 图片上传预览结束

//                图片上传ajax   返回上传后的地址
                let xhr = new XMLHttpRequest(),
                    formData = new FormData();
                formData.append('files', this.$refs.img.files[0]);
                xhr.open('post', 'http://localhost:3000' + this.$APIs.GOODS_PICTURE_ADD);
                xhr.send(formData);
                xhr.onreadystatechange = function () {
                    if (xhr.status === 200) {
                        if (xhr.readyState === 4) {
                            let data = JSON.parse(xhr.responseText);
                            _this.savePath += data.data + ',';
                        }
                    } else {
                        _this.$message.error('上传失败')
                    }
                }
                //                图片上传ajax结束
            },
//            产品编辑
            editGoods(){
                this.$http.post(this.$APIs.GOODS_UPDATE, {
                    goodsApi_json: JSON.stringify(this.goodsApi_json),
                    savePath: this.savePath,
                    specificationsids:this.specificationsids
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
//            产品发布
            publishGoods() {
                this.goodsApi_json.adduserid = this.adduserid;
//                this.goodsApi_json.adduserid = 'a6631c56-00ff-4be5-b18a-2122cc22e702';

                this.goodsApi_json.tbGoodsSpecifications = this.tbGoodsSpecifications;
                this.goodsApi_json.categoryname = this.goodsApi_json.categoryname.split('-')[0];
                this.$http.post(this.$APIs.GOODS_ADD, {
                    goodsApi_json: JSON.stringify(this.goodsApi_json),
                    savePath: this.savePath
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
//选择产品类别
            catorageChange(val) {
                this.goodsApi_json.categoryid = val.split('-')[1];
            },
//确认填规格
            confirmTbGoodsSpecifications(){
                this.dialogTableVisible1 = false;
                this.tbGoodsSpecifications.push({
                    danj:this.danj,
                    kucsl:this.kucsl,
                    guig:this.guigsl+this.danw+'/'+this.jildw,
                    guigsl:this.guigsl,
                    danw:this.danw,
                    jildw:this.jildw
                })
            },
//            删除一天所填规格
            deleteTbGoodsSpecifications(index){
                this.tbGoodsSpecifications.splice(index,1)
            },
//            当页面为编辑时展现的数据
            mergeData(){
                this.goodsApi_json = Object.assign({},this.goodsApi_json,this.$store.getters.goodsApi_json)
            }
        },
        mounted(){

            if (this.from === 'edit_goods'){
                this.imgList = this.$route.query.imgList;
                this.imgList.map(i=>{
                    this.savePath+=i.url+','
                });

                this.mergeData();
                this.tbGoodsSpecifications = this.goodsApi_json.tbGoodsSpecifications;
                console.log('+++',this.tbGoodsSpecifications)
                this.tbGoodsSpecifications.map(i=>{
                    this.specificationsids+=i.specificationsid+','
                })
//
            }
        }
    }
</script>
