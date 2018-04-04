import axios from 'axios'
import {Loading} from 'element-ui'
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
    // 开发地址
    // baseURL: "http://192.168.10.4:8086",
    // 线上地址
    baseURL: "https://yxrhome.com",
    timeout: 15000
});
let loadingInstance;
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    loadingInstance = Loading.service({ fullscreen: true });
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    loadingInstance.close();
    // 开发数据
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default instance
