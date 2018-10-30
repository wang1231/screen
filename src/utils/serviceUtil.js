//引入axios
import axios from 'axios'
import { Message } from "element-ui"  // 弹框组件

let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;
axios.defaults.baseURL = BM_config.api;

//设置默认请求头
axios.defaults.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
}
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    // if (promiseArr[config.url]) {
    //     promiseArr[config.url]('操作取消')
    //     promiseArr[config.url] = cancel
    // } else {
    //     promiseArr[config.url] = cancel
    // }
    // console.log('封装的配置',config);
    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    // console.log("response", response);
    let data;
    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
    if (response.data == undefined) {
        data = JSON.parse(response.request.responseText);
    } else {
        data = response.data;
    }
    return data;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '错误请求'
                break;
            case 401:
                err.message = '未授权，请重新登录'
                break;
            case 403:
                err.message = '拒绝访问'
                break;
            case 404:
                err.message = '请求错误,未找到该资源'
                break;
            case 405:
                err.message = '请求方法未允许'
                break;
            case 408:
                err.message = '请求超时'
                break;
            case 500:
                err.message = '服务器端出错'
                break;
            case 501:
                err.message = '网络未实现'
                break;
            case 502:
                err.message = '网络错误'
                break;
            case 503:
                err.message = '服务不可用'
                break;
            case 504:
                err.message = '网络超时'
                break;
            case 505:
                err.message = 'http版本不支持该请求'
                break;
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        err.message = "连接到服务器失败"
    }
    Message({
        showClose: true,
        message: err.message,
        type: "error"
    })
    console.log("err.message", err.message);
    return Promise.resolve(err.response)
})

export default {
    //get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch((error) => {
                reject(error);
            })
        })
    },
    //post请求
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch((error) => {
                reject(error);
            })
        })
    }
}