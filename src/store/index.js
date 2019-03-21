import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import order from './module/order'
import returnOrderDetail from './module/returnOrderDetail'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
export default new Vuex.Store({
	plugins: [createPersistedState({
      storage: window.sessionStorage
  })],
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    order,
    returnOrderDetail
  }
})
