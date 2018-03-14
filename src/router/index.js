import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Search from '../components/Search/Search.vue'
import SearchHistory from '../components/Search/SearchHistory.vue'
import SearchResult from '../components/Search/SearchResult.vue'
import Procurement from '../components/Procurement/Procurement.vue'
import Goods from '../components/Goods/Goods.vue'
import GoodsDetail from '../components/Goods/GoodsDetail.vue'
import Finance from '../components/Finance/Finance.vue'
import ServiceList from '../components/Service/ServiceList.vue'
import ServiceDetail from '../components/Service/ServiceDetail.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
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
        }
    ]
})
