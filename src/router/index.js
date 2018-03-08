import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
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
