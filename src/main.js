// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 滚动刷新
import VueDataLoading from 'vue-data-loading'
// 日期选择
import { DatePicker,Dialog,Radio,RadioGroup,Message } from 'element-ui';
// require styles
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'

import './util/Dataformat'
import APIs from './API'
import qs from 'qs'

const instance = axios.create({
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return qs.stringify(data);
    }],
    baseURL: "http://localhost:3000",
    // baseURL: "https://yxrhome.com",
    timeout: 15000
});
Vue.APIs = Vue.prototype.$APIs = APIs;
Vue.http = Vue.prototype.$http = instance;
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.component('VueDataLoading', VueDataLoading);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.prototype.$message = Message;
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
