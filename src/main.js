// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 轮播图工具
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


// 无限滚动
import VueDataLoading from 'vue-data-loading'


// element-ui组件
import {DatePicker, Dialog, Radio, RadioGroup, Message,Notification , Select,Loading } from 'element-ui';


// 日期 城市 仿ios选择器
import vuePicker from './util/vue-picker'


// iconfont图标样式
import './assets/iconfont/iconfont.css'


// 日期格式化函数
import './util/Dataformat'


// 接口
import APIs from './API'


// ajax实例
import instance from './util/ajaxConfig'

// 引入过滤器
import './util/filters'

Vue.APIs = Vue.prototype.$APIs = APIs;
Vue.http = Vue.prototype.$http = instance;
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.component('VueDataLoading', VueDataLoading);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Loading);
Vue.use(vuePicker);
Vue.prototype.$message = Notification;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
