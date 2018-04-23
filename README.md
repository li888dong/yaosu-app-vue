# 药素网 wap

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev （开发模式指令）

# build for production with minification
npm run build （项目打包指令）

# build for production and view the bundle analyzer report
npm run build --report

# 目录结构
    -build 开发环境配置
    -config 开发环境配置
    -dist 项目打包之后生成的文件
        -static 打包后的js css 图片 字体图标等
        -打包后的入口文件
    -node_modules 依赖包
    -src 源文件
        -assets 一些本地资源 图片和字体图标
        -components 页面和组件
            -Check 要检测
            -Finance 要金融
            -Goods 要现货
            -Home 首页
                -Banner 首页顶部banner
                -Caigou 首页的采购
                -jishu 首页的技术
                -navlist 导航按钮
                -piwen 首页的批文
                -ProductPriceList 原料药和中药的价格滚动
                -waimao 首页的外贸
                -xiangmu 首页的项目
                -xianhuo 首页的现货
            -Loading 加载中
            -Login 登陆注册
            -Person 个人中心
                -Address 收货地址/收票地址
                -Invoice 发票信息
                -Offer 我的报价
                -Order 订单
                -OwnGoods 我的商品
                -OwnProcurement 我的采购
                -ShoppingCart 购物车
                Person.vue 个人中心页
            -Procurement 要采购
            -Search 搜索
            -Service 服务（要技术，要项目，要外贸，要文号）
            -Shop 商铺
        -router 路由
        -store 在vuex中定义的全局变量
        -util 一些工具包
        -APIs.js 项目中用到的接口
        -App.vue 根节点
        -common.css 全局css
        -main.js 全局配置的js
    -static 静态文件
    -index.html 页面入口
    -package.json 依赖包配置
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
