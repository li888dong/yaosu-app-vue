import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
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
          component: Home
        },
        {
          path: '/procurement',
          name: 'caigou',
          component: Procurement
        },
        {
            path:'/goods_list',
            name:'goods_list',
            component:Goods
        },
        {
            path:'/goods_detail',
            name:'goods_detail',
            component:GoodsDetail
        },
        {
            path:'/finance',
            name:'finance',
            component:Finance
        },
        {
          path: '/service_list',
          name: 'service_list',
          component: ServiceList
        },
        {
          path: '/service_detail',
          name: 'service_detail',
          component: ServiceDetail
        }
    ]
})
