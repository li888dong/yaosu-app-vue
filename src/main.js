// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// 轮播图工具
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 滚动刷新
import VueDataLoading from 'vue-data-loading'
// 日期选择
import {DatePicker, Dialog, Radio, RadioGroup, Message, Select} from 'element-ui';
// 日期 城市 仿ios选择器
import vuePicker from './util/vue-picker'
// require styles
// icon图标
import './assets/iconfont/iconfont.css'
// 日期格式化函数
import './util/Dataformat'
// 接口
import APIs from './API'
// ajax请求数据格式化
import qs from 'qs'
// 配置ajax请求
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
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('请求发送之前')
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


Vue.APIs = Vue.prototype.$APIs = APIs;
Vue.http = Vue.prototype.$http = instance;
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.component('VueDataLoading', VueDataLoading);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(vuePicker);
Vue.prototype.$message = Message;
Vue.config.productionTip = false

// 路由跳转规则
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.meta.access && !localStorage.getItem('uid')) {
        Message.warning('请登录')
    }
    // if (to.access ==='access'&&){
    //
    // }
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
