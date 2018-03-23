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
</style>
<template>
    <div>
        <div class="top-bar">
            <i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>我的商品</p>
            <span class="right">发布</span>
        </div>
        <div class="publish-goods-container pannel">
            <p class="form-item"><span class="required">* </span>产品分类：<span class="catorage"
                                                                            @click="dialogTableVisible = true">{{GoodsApi.categoryname}} <i
                class="icon iconfont icon-more rotate_90"></i></span></p>
            <p class="form-item"><span class="required">* </span>上传产品图片
                <input type="file" id="img" ref="img" accept="image/*" hidden @change="preview()"></p>
            <label class="img-selector" for="img">
                <i class="icon iconfont icon-plus-add"></i>
            </label>
            <div id="preview-container"></div>
            <p>
            <p class="form-item"><span class="required">* </span>产品中文名称：<input type="text" v-model="GoodsApi.chanpmc">
            </p>
            <p class="form-item">产品中文别名：<input type="text" v-model="GoodsApi.biem"></p>
            <p class="form-item">产品英文名称：<input type="text" v-model="GoodsApi.yingwm"></p>
            <p class="form-item">产品英文别名：<input type="text" v-model="GoodsApi.yingwbm"></p>
            <p class="form-item"><span class="required">* </span>CAS：<input type="text" v-model="GoodsApi.cas"></p>
            <p class="form-item">所在地：<input type="text" v-model="GoodsApi.suozd"></p>
            <p class="form-item"><span class="required">* </span>纯度/含量：<input type="text" v-model="GoodsApi.chund"></p>
            <p class="form-item"><span class="required">* </span>质量标准：<input type="text" v-model="GoodsApi.zhilbz"></p>
            <p class="form-item">分子量：<input type="text" v-model="GoodsApi.fenzl"></p>
            <p class="form-item">分子式：<input type="text" v-model="GoodsApi.fenzs"></p>
            <p class="form-item">货号：<input type="text" v-model="GoodsApi.huoh"></p>
            <p class="form-item">品牌：<input type="text" v-model="GoodsApi.pinp"></p>
            <p class="form-item">有关物质：<input type="text" v-model="GoodsApi.yougwz"></p>
            <p class="form-item">规格：<input type="text" v-model="GoodsApi.tbGoodsSpecifications"></p>
            <p>
                <textarea name="note" id="xingzms" cols="40" rows="10" placeholder="请输入商品性状描述，最多500个字符（选填）"
                          v-model="GoodsApi.xingzms"></textarea>
            </p>
            <p>
                <textarea name="note" id="note" cols="40" rows="10" placeholder="请输入商品描述，最多500个字符（选填）"
                          v-model="GoodsApi.xingzms"></textarea>
            </p>
        </div>
        <el-dialog title="请选择产品分类" :visible.sync="dialogTableVisible" width="80%">
            <el-radio-group v-model="GoodsApi.categoryname">
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
                GoodsApi: {
                    categoryname: '原料药',
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
                    tbGoodsSpecifications: {},
//                性状描述
                    xingzms: '',
//                商品描述

                }

            }
        },
        methods: {

            preview() {
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
                formData.append(this.$refs.img.files[0].name, this.$refs.img.files[0]);
                xhr.open('post', 'http://localhost:3000' + this.$APIs.GOODS_PICTURE_ADD);
                xhr.send(formData);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        console.log(JSON.parse(xhr.responseText))
                    } else {

                    }
                }
            }
        }
    }
</script>
