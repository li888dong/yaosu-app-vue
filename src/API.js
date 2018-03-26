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
    // 要项目
    PROJECT_LIST: '/app/project/list',
    // 要项目详情
    PROJECT_DETAIL: '/app/project/details',
    // 要外贸
    FOREIGNTRADE_LIST: '/app/foreigntrade/list',
    // 外贸详情
    FOREIGNTRADE_DETAIL:'/app/foreigntrade/details',
    // 要技术
    TECHNOLOGY_LIST: '/app/technology/list',
    // 技术详情
    TECHNOLOGY_DETAIL:'/app/technology/details',
    // 要批文
    APPROVAL_NUMBER_LIST: '/app/approvalNumber/list',
    // 要批文详情
    APPROVAL_NUMBER_DETAIL: '/app/approvalNumber/details',
    // 要检测
    DETECTION_LIST: '/app/detection/listProduct',
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
