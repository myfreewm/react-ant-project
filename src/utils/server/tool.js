/**
 * 作者:lixiang
 * 基于axios进行二次封装暴露 fetch 和 post 方法
 * 备注：针对axios post请求不兼容，添加URLSearchParams polyfill
 *
 * */
import http from './http';
import 'url-search-params-polyfill';

/**
 * 封装get方法
 * @params url
 * @params data
 *
 * @return {Promise} 
 * */

export function fetch(url,params={}){

    return new Promise((resolve,reject) => {

        http.get(url,{params:params})
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}
/**
 * 封装post方法
 * @params url [string]
 * @params data[object]
 *
 * @return {Promise}
 * */
export function post(url,params={}){

    return new Promise((resolve,reject)=>{

        let myParams = new URLSearchParams();

        Object.keys(params).forEach(function(item){
            myParams.append(item,params[item]);
        })

        http.post(url,myParams)
        .then(res => resolve(res))
        .catch(err => reject(err))

    })
}
