const APIs = {
    // 主页列表
    INDEX_LIST: '/app/index/list',
    // 主页搜索一级
    HOME_SEARCH_1:'/app/goods/queryGoodsName',
    // 主页搜索二级
    HOME_SEARCH_2:'/app/goods/queryGoodsNameAbsolute',
    // 中药材精确查询
    QUERY_TCM:'/app/map/queryTcm',
    // 原料药制剂
    QUERY_API:'/app/goods/queryApi',
    // 商品图片上传接口
    GOODS_PICTURE_ADD:'/app/goods/picture/add',

    // 发布采购
    PROCUREMENT_PUBLISH:'/app/member/procurementPublish',
    // 要采购
    PROCUREMENT_LIST:'/app/member/procurementList',


    // 要现货
    GOODS_LIST:'/app/goods/list',
    // 商品详情
    GOODS_DETAIL:'/app/goods/details',
    // 商品发布接口
    GOODS_ADD:'/app/goods/add',
    // 商品修改接口
    GOODS_UPDATE:'/app/goods/update',
    // 店铺
    SHOP_VIEW:'/app/shop/shopView',

    // 人工加入企业
    JOIN_COMPANY_BY_PERSON:'/app/user/saveEntryFirm',
    // 验证码加入企业
    JOIN_COMPANY_BY_CODE:'/app/user/saveEntryFirmCode',


    // 参考价格
    API_PRICE_LIST:'/app/index/price_api/list',
    TCM_PRICE_LIST:'/app/index/price_tcm/list',


    // 要项目
    PROJECT_LIST: '/app/project/list',
    // 项目新增
    PROJECT_SAVE: '/app/project/save',
    // 要项目详情
    PROJECT_DETAIL: '/app/project/details',


    // 要外贸
    FOREIGNTRADE_LIST: '/app/foreigntrade/list',
    // 外贸新增
    FOREIGNTRADE_SAVE: '/app/foreigntrade/save',
    // 外贸详情
    FOREIGNTRADE_DETAIL:'/app/foreigntrade/details',


    // 要技术
    TECHNOLOGY_LIST: '/app/technology/list',
    // 技术新增
    TECHNOLOGY_SAVE: '/app/technology/save',
    // 技术详情
    TECHNOLOGY_DETAIL:'/app/technology/details',


    // 要批文
    APPROVAL_NUMBER_LIST: '/app/approvalNumber/list',
    // 批文新增
    APPROVAL_NUMBER_SAVE: '/app/approvalNumber/save',
    // 要批文详情
    APPROVAL_NUMBER_DETAIL: '/app/approvalNumber/details',


    // 要检测
    DETECTION_LIST: '/app/detection/listProduct',
    // 检测机构列表
    ORGANIZATION_LIST: '/app/detection/listOrganization',
    // 检测项目列表
    TESTING_ITEM_LIST: '/app/detection/listItem',
    // 检测订单生产
    TESTING_SAVE_ORDER: '/app/detection/saveOrder',
    // 检测订单列表
    TESTING_LIST_ORDER: '/app/detection/listOrder',
    // 要检测详情
    DETECTION_DETAIL: '/app/detection/detailsOrder',


    // 注册
    REGISTER:'/app/register',
    // 密码登陆
    LOGIN:'/app/login',
    // 短信登陆
    MSG_LOGIN:'/app/passwordLessForLogin',
    // 请求短信验证码
    MSG_CODE:'/app/code',
    // 注册并登陆
    REGISTER_AND_LOGIN:'/app/registerAndLogin',


    // 购物车新增
    CART_ADD:'/app/cart/add',
    // 购物车列表
    CART_LIST:'/app/cart/list',
    // 购物车删除
    CART_DELETE:'/app/cart/delete',
    // 修改购物车数量
    CART_UPDATE:'/app/cart/update/goodsNum',


    // 生成订单
    CREATE_ORDER:'/app/order/createOrder',
    GO_BOOKING:'/app/order/go-booking',
    // 订单列表
    ORDER_LIST:'/app/order/list',
    // 订单详情
    ORDER_DETAIL:'/app/order/detail',

    // 新增地址
    CREATE_ADDRESS:'/member/createAddress',
    // 地址列表
    ADDRESS_LIST:'/member/address',
    // 获取发票信息
    INVOICE_INFO:'/member/invoiceInfo',
    // 获取发票信息
    CREATE_INVOICE:'/member/createInvoiceInfo',

    // 报价列表
    OFFER_LIST:'/app/member/offerList',
    // 报价详情
    OFFER_DETAIL:'/app/member/offerDetails',
    // 报价添加
    OFFER_ADD:'/app/member/offerSave',
    // 报价更改
    OFFER_OPERATION:'/app/member/offerOperation'
};
export default APIs
