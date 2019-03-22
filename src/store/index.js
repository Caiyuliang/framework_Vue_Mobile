import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions' 
import * as getters from './getters' 
import mutations from './mutations'
Vue.use(Vuex)

const state = {
  titleName:'增值中心',
}
export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})