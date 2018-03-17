<style scoped>
    .item-content.goods-list {
        padding: 15px 20px;
        font-size: 14px;
        color: #000;
        background-color: #fff;
    }

    .item-content.goods-list > div {
        border-bottom: 1px solid #eee;
        position: relative;
        padding-top: 4px;
        line-height: 22px;
    }

    .item-content.goods-list .icon-more {
        transform: rotate(0);
        position: absolute;
        right: 0;
        font-weight: bolder;
        font-size: 16px;
    }

    .item-content.goods-list span {
        color: #999;
    }

</style>
<template>
    <div class="item-content goods-list">
        111
        <div v-for="goods in goodsList" @click="$router.push({path:'goods_detail',query:{goodsId:goods.goodId}})">
            <p>{{goods.goodName}} <i class="icon iconfont icon-more"></i></p>
            <p>纯度:{{goods.purity}}</p>
            <p><span>{{goods.qiymc}}</span></p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SearchDetailList',
        data() {
            return {
                goodsList: [
                    {
                        "goodsSpecifications": [{
                            "danj": 10.00,
                            "danw": "0",
                            "guig": "1kg/件",
                            "specificationsId": "102315030311338217"
                        }],
                        "qualitystandard": "袋",
                        "purity": "99",
                        "goodId": "152108423489082",
                        "itemNo": "mk-2866",
                        "categoryName": "原料药",
                        "userId": "8d67ce56-39b4-4f6d-affd-333d12f67e24",
                        "chanpdj": null,
                        "chand": null,
                        "companyId": "0",
                        "goodName": "MK-2866",
                        "cas": "1202044-20-9",
                        "chanxnf": null,
                        "huoh": "mk-2866",
                        "guigxh": null,
                        "band": "深圳华莱",
                        "jiancff": null,
                        "categoryId": "1",
                        "isHot": "0",
                        "qiymc": null,
                        "status": "1"
                    }, {
                        "goodsSpecifications": [{
                            "danj": 1.00,
                            "danw": "0",
                            "guig": "1kg/件",
                            "specificationsId": "102303698668684324"
                        }],
                        "qualitystandard": "千克",
                        "purity": "99",
                        "goodId": "152108413234441",
                        "itemNo": "S-4",
                        "categoryName": "原料药",
                        "userId": "8d67ce56-39b4-4f6d-affd-333d12f67e24",
                        "chanpdj": null,
                        "chand": null,
                        "companyId": "0",
                        "goodName": "S-4",
                        "cas": "401900-40-1",
                        "chanxnf": null,
                        "huoh": "S-4",
                        "guigxh": null,
                        "band": "深圳华莱",
                        "jiancff": null,
                        "categoryId": "1",
                        "isHot": "1",
                        "qiymc": null,
                        "status": "1"
                    }, {
                        "goodsSpecifications": [{
                            "danj": 100.00,
                            "danw": "0",
                            "guig": "1kg/件",
                            "specificationsId": "102292959161945700"
                        }],
                        "qualitystandard": "袋",
                        "purity": "99",
                        "goodId": "152108396610732",
                        "itemNo": "LGD4033",
                        "categoryName": "原料药",
                        "userId": "8d67ce56-39b4-4f6d-affd-333d12f67e24",
                        "chanpdj": null,
                        "chand": null,
                        "companyId": "0",
                        "goodName": "LGD4033",
                        "cas": "1165910-22-4",
                        "chanxnf": null,
                        "huoh": "LGD4033",
                        "guigxh": null,
                        "band": "深圳华莱",
                        "jiancff": null,
                        "categoryId": "1",
                        "isHot": "1",
                        "qiymc": null,
                        "status": "1"
                    }, {
                        "goodsSpecifications": [{
                            "danj": 385.00,
                            "danw": "0",
                            "guig": "25kg/瓶",
                            "specificationsId": "102092311746859520"
                        }],
                        "qualitystandard": "GP",
                        "purity": "98％",
                        "goodId": "152108102339310",
                        "itemNo": "1",
                        "categoryName": "原料药",
                        "userId": "0d426d7e-20cb-4a5e-a946-cd75621843ef",
                        "chanpdj": null,
                        "chand": null,
                        "companyId": "71b45e78-4de0-4943-b465-0a8e4fef2e17",
                        "goodName": "芦丁",
                        "cas": "153-18-4",
                        "chanxnf": null,
                        "huoh": "1",
                        "guigxh": null,
                        "band": "红惠新",
                        "jiancff": null,
                        "categoryId": "1",
                        "isHot": "0",
                        "qiymc": "北京红惠新医药科技有限公司",
                        "status": "1"
                    }
                ]
            }
        },

        mounted() {

        },
        methods: {}
    }
</script>
