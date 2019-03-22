//import { mapState, mapGetters, mapActions,mapdMutation } from 'vuex';  //每次使用引入
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import $ from 'jquery';	//引入jquery
import Vuex from 'vuex';	//引入xuex
import store from './store';  //引入store文件
import axios from 'axios';		//引入请求方式
import urls from './api/urls';	//引入公共的请求文件地址
import common from './api/common' //引入公共的方法函数
import moment from 'moment';	//引入日期处理控制
import Mint from 'mint-ui';		//引入mint-ui
import 'mint-ui/lib/style.css'	//引入mint-ui样式文件 
import ElementUI from 'element-ui';  //引入element ui
import 'element-ui/lib/theme-chalk/index.css';	//引入element ui	css
   
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(Mint);
Vue.prototype.$urls = urls;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false; 
Vue.prototype.$dateFomate = (t) => {
  if(t == '' || t == null){
    return ''
  }
  return moment(t).format('YYYY-MM-DD')
}
Vue.prototype.$dateFomatem = (t) => {
  if(t == '' || t == null){
    return ''
  }
  return moment(t).format('YYYY-MM')
}

//cookie操作
Vue.prototype.$setCookie = (name, value, m) => {
  var d = new Date;
  d.setTime(d.getTime() + m * 1000);
  // d.setTime(d.getTime())
  // console.log(Date.parse(d))
  window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
Vue.prototype.$getCookie = (name) => {
  var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
Vue.prototype.$delCookie = (name) => {
  Vue.prototype.$setCookie(name, '', -1);
}

//ajax请求组件
let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
	//发起请求时，取消掉当前正在进行的相同请求
	if (promiseArr[config.url]) {
		promiseArr[config.url]('操作取消')
		promiseArr[config.url] = cancel
	} else {
		promiseArr[config.url] = cancel
	}
	return config
}, error => {
	return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
	return response
}, err => {
	if (err && err.response) {
		switch (err.response.status) {
			case 400:
				this.$alert('错误请求', '提示信息');
				//console.log('错误请求')
				break;
			case 401:
				this.$alert('未授权，请重新登录', '提示信息');
				//console.log('未授权，请重新登录')
				break;
			case 403:
				this.$alert('拒绝访问', '提示信息');
				//console.log('拒绝访问') 
				break;
			case 404:
				this.$alert('请求错误,未找到该资源', '提示信息');
				//console.log('请求错误,未找到该资源') 
				break;
			case 405:
				this.$alert('请求方法未允许', '提示信息');
				//console.log('请求方法未允许') 
				break;
			case 408:
				this.$alert('请求超时', '提示信息');
				//console.log('请求超时') 
				break;
			case 500:
				this.$alert('服务器端出错', '提示信息');
				//console.log('服务器端出错') 
				break;
			case 501:
				this.$alert('网络未实现', '提示信息');
				//console.log('网络未实现') 
				break;
			case 502:
				this.$alert('网络错误', '提示信息');
				//console.log('网络错误') 
				break;
			case 503:
				this.$alert('服务不可用', '提示信息');
				//console.log('服务不可用') 
				break;
			case 504:
				this.$alert('网络超时', '提示信息');
				//console.log('网络超时') 
				break;
			case 505:
				this.$alert('http版本不支持该请求', '提示信息');
				//console.log('http版本不支持该请求') 
				break;
			default:
				console.log(`连接错误${err.response.status}`)
		}
	} else {
		//err.message = "连接到服务器失败"
		this.$alert('连接到服务器失败', '提示信息');
	}
	console.log(err.message)
	return Promise.resolve(err.response)
})

axios.defaults.baseURL = 'http://vac.jingcaiwang.cn'
//设置默认请求头
axios.defaults.headers = {
	'X-Requested-With': 'XMLHttpRequest',
	'token': '1273876473264287364'
}
axios.defaults.timeout = 10000;

//get请求 = (name) => {
Vue.prototype.$get = (url, param) => {
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
		})
	})
};
//post请求
Vue.prototype.$post = (url, param) => {
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
		})
	})
};
/* async mounted(){  
 	const result = await this.$post('/vac/imageShowApi/getImageShow',{phone:'15210021753'});
 	console.log(result.data.body)
 }, */


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
