import Vue from 'vue'
import Router from 'vue-router'
// 主页
import Home from '../components/Home/Home.vue'
// 登陆注册
import Login from '../components/Login/Login.vue'
// 个人中心
import Person from '../components/Person/Person.vue'
// 购物车
import ShoppingCart from '../components/Person/ShoppingCart/ShoppingCart.vue'
// 店铺
import Shop from '../components/Shop/Shop.vue'
// 订单
import Order from '../components/Person/Order/Order.vue'
// 地址列标
import AddressList from '../components/Person/Address/AddressList.vue'
// 收货地址
import ReceiveAddress from '../components/Person/Address/ReceiveAddress.vue'
// 收票地址
import InvoiceAddress from '../components/Person/Address/InvoiceAddress.vue'
// 普通发票
import InvoiceNormal from '../components/Person/Invoice/InvoiceNormal.vue'
// 专用发票
import InvoiceSpecial from '../components/Person/Invoice/InvoiceSpecial.vue'
// 报价
import Offer from '../components/Person/Offer/Offer.vue'
// 报价详情
import OfferDetail from '../components/Person/Offer/OfferDetail.vue'
// 添加报价
import OfferAdd from '../components/Person/Offer/OfferAdd.vue'
// 我的商品
import OwnGoods from '../components/Person/OwnGoods/OwnGoods.vue'
// 发布商品
import PublishGoods from '../components/Goods/PublishGoods.vue'
// 搜索
import Search from '../components/Search/Search.vue'
// 搜索历史
import SearchHistory from '../components/Search/SearchHistory.vue'
// 搜索结果
import SearchResult from '../components/Search/SearchResult.vue'
// 搜索中药详情列表
import SearchZhongyaoDetailList from '../components/Search/SearchZhongyaoDetail.vue'
// 搜索原料药详情列表
import SearchYuanliaoDetailList from '../components/Search/SearchYuanliaoDetail.vue'
// 搜索现货列表
import SearchXianhuoDetailList from '../components/Search/SearchXianhuoDetailList.vue'
// 供应商
import Supplier from '../components/Search/Supplier.vue'
// 采购
import Procurement from '../components/Procurement/Procurement.vue'
// 商品
import Goods from '../components/Goods/Goods.vue'
// 商品详情
import GoodsDetail from '../components/Goods/GoodsDetail.vue'
// 金融
import Finance from '../components/Finance/Finance.vue'
// 检测
import Check from '../components/Check/Check.vue'
// 服务列表
import ServiceList from '../components/Service/ServiceList.vue'
// 服务详情
import ServiceDetail from '../components/Service/ServiceDetail.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta:{
                title:'登陆药素网'
            }
        },
        {
            path: '/person',
            name: 'person',
            access:'login',
            component: Person,
            meta:{
                title:'个人中心'
            }
        },
        {
            path: '/shopping_cart',
            name: 'shopping_cart',
            access:'login',
            component: ShoppingCart,
            meta:{
                title:'购物车'
            }
        },
        {
            path: '/shop',
            name: 'shop',
            access:'login',
            component: Shop,
            meta:{
                title:'店铺'
            }
        },
        {
            path: '/order',
            name: 'order',
            access:'login',
            component: Order,
            meta:{
                title:'订单'
            }
        },
        {
            path: '/address_list',
            name: 'address_list',
            access:'login',
            component: AddressList,
            meta:{
                title:'地址'
            }
        },
        {
            path: '/receiveAddress',
            name: 'receiveAddress',
            access:'login',
            component: ReceiveAddress,
            meta:{
                title:'地址'
            }
        },
        {
            path: '/invoiceAddress',
            name: 'invoiceAddress',
            access:'login',
            component: InvoiceAddress,
            meta:{
                title:'地址'
            }
        },
        {
            path: '/invoiceNormal',
            name: 'invoiceNormal',
            access:'login',
            component: InvoiceNormal,
            meta:{
                title:'发票'
            }
        },
        {
            path: '/invoiceSpecial',
            name: 'invoiceSpecial',
            access:'login',
            component: InvoiceSpecial,
            meta:{
                title:'发票'
            }
        },
        {
            path: '/offer',
            name: 'offer',
            access:'login',
            component: Offer,
            meta:{
                title:'报价'
            }
        },
        {
            path: '/offer_detail',
            name: 'offer_detail',
            access:'login',
            component: OfferDetail,
            meta:{
                title:'报价'
            }
        },
        {
            path: '/offer_add',
            name: 'offer_add',
            access:'login',
            component: OfferAdd,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/own_goods',
            name: 'own_goods',
            access:'login',
            component: OwnGoods,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/publish_goods',
            name: 'publish_goods',
            access:'login',
            component: PublishGoods,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
            meta:{
                title:'药素网'
            },
            children:[
                {
                    path: '/search_history',
                    name: 'search_history',
                    component: SearchHistory,
                    meta:{
                        title:'药素网'
                    }
                },
                {
                    path: '/search_result',
                    name: 'search_result',
                    component: SearchResult,
                    meta:{
                        title:'药素网'
                    }
                },

            ]
        },
        {
            path: '/search_xianhuo_detail_list',
            name: 'search_xianhuo_detail_list',
            component: SearchXianhuoDetailList,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/search_zhongyao_detail_list',
            name: 'search_zhongyao_detail_list',
            component: SearchZhongyaoDetailList,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/search_yuanliao_detail_list',
            name: 'search_yuanliao_detail_list',
            component: SearchYuanliaoDetailList,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/supplier',
            name: 'supplier',
            component: Supplier,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/procurement',
            name: 'caigou',
            component: Procurement,
            meta:{
                title:'要采购'
            }
        },
        {
            path: '/goods_list',
            name: 'goods_list',
            component: Goods,
            meta:{
                title:'要现货'
            }
        },
        {
            path: '/goods_detail',
            name: 'goods_detail',
            component: GoodsDetail,
            meta:{
                title:'商品详情'
            }
        },
        {
            path: '/finance',
            name: 'finance',
            component: Finance,
            meta:{
                title:'要金融'
            }
        },
        {
            path: '/check',
            name: 'check',
            component: Check,
            meta:{
                title:'要检测'
            }
        },
        {
            path: '/service_list',
            name: 'service_list',
            component: ServiceList,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '/service_detail',
            name: 'service_detail',
            component: ServiceDetail,
            meta:{
                title:'药素网'
            }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
