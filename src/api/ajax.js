/*ajax请求函数模块*/

import axios from 'axios';
import { MessageBox} from 'mint-ui';
export default function ajax(url='',data={},type='GET') {

  return new Promise (function (resolve,reject) {
    //执行异步ajax请求
    let promise
    if(type === "GET"){
      //准备url query参数数据
      let dataStr = ''  //数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else{
      // 发送post请求
      promise = axios.post(url,data)
    }

    promise.then(function (response) {
      //成功了调用resolve
      resolve(response.data)
      // this.reload()
      console.log(response.status+'请求正常')
    }).catch(function (error) {
      //失败了调用reject
      reject(error)
      console.log(error.request.status + '网络超时')
      if(error.request.status === 403){
        MessageBox('提示','拒绝访问，请联系管理员')
      }else if (error.request.status === 504) {
        MessageBox('提示', '网络超时,请与管理员联系');
      }else if(error.request.status === 401){//过期
        if(window.webkit){
          // window.webkit.messageHandlers.popVC.postMessage({name:'popVC'})
        }else{
          interaction.token_past_due();
          MessageBox('提示', 'token过期');
        }
      }
      if (error) {
        console.log('error')
      } else if (error.response) {
        console.log('error.response')
      }
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误(400)';
            break;
          case 401:
            error.message = '未授权，请重新登录(401)';
            break;
          case 403:
            error.message = '拒绝访问(403)';
            break;
          case 404:
            error.message = '请求出错(404)';
            break;
          case 408:
            error.message = '请求超时(408)';
            break;
          case 500:
            error.message = '服务器错误(500)';
            break;
          case 501:
            error.message = '服务未实现(501)';
            break;
          case 502:
            error.message = '网络错误(502)';
            break;
          case 503:
            error.message = '服务不可用(503)';
            break;
          case 504:
            error.message = '网络超时(504)';
            break;
          case 505:
            error.message = 'HTTP版本不受支持(505)';
            break;
          default:
            error.message = `连接出错(${error.response.status})!`;
        }
      } else {
        error.message = '连接服务器失败!'
      }
      return Promise.reject(error)
    })
  })
}

