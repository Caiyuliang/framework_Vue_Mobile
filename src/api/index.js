/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import {Promise} from 'es6-promise';
Promise.polyfill();
import ajax from './ajax'
const BASE_URL = process.env.API_BASE;
// const CASE_URL = 'http://192.168.1.58:15001';
const CASE_URL = 'http://vac.jingcaiwang.cn/'; 

export const USERINFO = (page,limit) => ajax(BASE_URL+'vac/user/userInfo',{page,limit},'POST')
 