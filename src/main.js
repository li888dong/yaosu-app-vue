// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueDataLoading from 'vue-data-loading'
// require styles
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'

import './util/Dataformat'
import APIs from './API'

const instance = axios.create({
    baseURL: "http://localhost:3000",
    // baseURL: "https://yxrhome.com",
    timeout: 15000
});
Vue.APIs = Vue.prototype.$APIs = APIs;
Vue.http = Vue.prototype.$http = instance;
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.component('VueDataLoading', VueDataLoading)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
   next()
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
