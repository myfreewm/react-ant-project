
import axios from 'axios';

axios.defaults.baseURL= process.env.API_ROOT||""; // 设置默认URL

axios.defaults.timeout = 10000;          // 设置超时时间

axios.defaults.headers = {'X-Resquested-With':'XMLHttpRequest'};

// 配置请求拦截

axios.interceptors.request.use(config => {

//    config.setHeaders([]);

    return config;
})

// 配置响应拦截

axios.interceptors.response.use(response => {

    if(response.status === 200){

        return response.data;
    }else{

        throw Error(response.data.msg || '服务异常');
    }
})

export default axios;
