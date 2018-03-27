import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Login from '../components/Login/Login.vue'
import Person from '../components/Person/Person.vue'
import ShoppingCart from '../components/Person/ShoppingCart/ShoppingCart.vue'
import Shop from '../components/Shop/Shop.vue'
import Order from '../components/Person/Order/Order.vue'
import ReceiveAddress from '../components/Person/Order/ReceiveAddress.vue'
import InvoiceAddress from '../components/Person/Order/InvoiceAddress.vue'
import Offer from '../components/Person/Offer/Offer.vue'
import OfferDetail from '../components/Person/Offer/OfferDetail.vue'
import OfferAdd from '../components/Person/Offer/OfferAdd.vue'
import OwnGoods from '../components/Person/OwnGoods/OwnGoods.vue'
import PublishGoods from '../components/Goods/PublishGoods.vue'
import Search from '../components/Search/Search.vue'
import SearchHistory from '../components/Search/SearchHistory.vue'
import SearchResult from '../components/Search/SearchResult.vue'
import SearchZhongyaoDetailList from '../components/Search/SearchZhongyaoDetail.vue'
import SearchYuanliaoDetailList from '../components/Search/SearchYuanliaoDetail.vue'
import SearchXianhuoDetailList from '../components/Search/SearchXianhuoDetailList.vue'
import Supplier from '../components/Search/Supplier.vue'
import Procurement from '../components/Procurement/Procurement.vue'
import Goods from '../components/Goods/Goods.vue'
import GoodsDetail from '../components/Goods/GoodsDetail.vue'
import Finance from '../components/Finance/Finance.vue'
import Check from '../components/Check/Check.vue'
import ServiceList from '../components/Service/ServiceList.vue'
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
