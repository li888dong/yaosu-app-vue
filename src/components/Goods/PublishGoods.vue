<style scoped>
    .publish-goods-container {
        font-size: 14px;

    }

    .publish-goods-container input {
        border: none;
        outline: none;
        color: #000;
        height: 38px;
        line-height: 38px;
        float: right;
        text-align: right;
        padding-right: 10px;
    }

    .form-item {
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #eee;
        position: relative;
    }

    .required {
        color: #ff0000;
    }

    .catorage {
        float: right;
    }

    .img-selector {
        display: inline-block;
        width: 60px;
        height: 60px;
        margin: 10px;
        text-align: center;
        border: 1px dashed #ccc;
        font-size: 38px;
        font-weight: 200;
    }

    .catorage-item {
        height: 40px;
    }

    #preview-container {
        display: inline-block;
        vertical-align: middle;
        width: 60px;
        height: 60px;
    }
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>我的商品</p>
            <span class="right" @click="publishGoods">发布</span>
        </div>
        <div class="publish-goods-container pannel">
            <p class="form-item"><span class="required">* </span>产品分类：<span class="catorage"
                                                                            @click="dialogTableVisible = true">{{goodsApi_json.categoryname}} <i
                class="icon iconfont icon-more rotate_90"></i></span></p>
            <p class="form-item"><span class="required">* </span>上传产品图片
                <input type="file" id="img" ref="img" accept="image/*" hidden @change="preview()"></p>
            <label class="img-selector" for="img">
                <i class="icon iconfont icon-plus-add"></i>
            </label>
            <div id="preview-container"></div>
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
            <p class="form-item"><span class="required"></span>货号：<input type="text" v-model="goodsApi_json.huoh"></p>
            <p class="form-item"><span class="required"></span>品牌：<input type="text" v-model="goodsApi_json.pinp"></p>
            <p class="form-item">有关物质：<input type="text" v-model="goodsApi_json.yougwz"></p>
            <p class="form-item"><span class="required"></span>规格：<input type="text"
                                                                         v-model="goodsApi_json.tbGoodsSpecifications">
            </p>
            <p>
                <textarea name="note" id="xingzms" cols="40" rows="10" placeholder="请输入商品性状描述，最多500个字符（选填）"
                          v-model="goodsApi_json.xingzms"></textarea>
            </p>
            <p>
                <textarea name="note" id="note" cols="40" rows="10" placeholder="请输入商品描述，最多500个字符（选填）"
                          v-model="goodsApi_json.xingzms"></textarea>
            </p>
        </div>
        <el-dialog title="请选择产品分类" :visible.sync="dialogTableVisible" width="80%">
            <el-radio-group v-model="goodsApi_json.categoryname">
                <p class="catorage-item">
                    <el-radio :label="'原料药'">原料药</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'特色原料药及试剂'">特色原料药及试剂</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'中间体及精细化学品'">中间体及精细化学品</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'中药材'">中药材</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'天然提取物'">天然提取物</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'基础化工产品及溶剂'">基础化工产品及溶剂</el-radio>
                </p>
                <p class="catorage-item">
                    <el-radio :label="'药用辅料及包材'">药用辅料及包材</el-radio>
                </p>
            </el-radio-group>

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
                savePath: '',
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
                    tbGoodsSpecifications: [{
                        guig: '1g/瓶',
                        danj: '1',
                        kucsl: '10'
                    }],
//                性状描述
                    xingzms: '',
//                商品描述
                    adduserid: 'a6631c56-00ff-4be5-b18a-2122cc22e702'
                }

            }
        },
        methods: {

            preview() {
                let _this = this;
                let config = {
                    tip: "请上传格式为png, gif或者jpg的图片",
                    fileId: "img",
                    containerId: "preview-container",
                    imgStyle: "width:60px;height:auto;border-radius:0;"
                };
                let previewer = new ImgPrevirewer(config);
                previewer.preview();
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
            },
            publishGoods() {
                this.$http.post(this.$APIs.GOODS_ADD, {
                    goodsApi_json: JSON.stringify(this.goodsApi_json),
                    savePath: this.savePath
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>
