import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
Vue.use(Vuex)
require('whatwg-fetch')
export const state = () => ({
  counter: 0
})
const store = () => new Vuex.Store({
  modules: {
    User
  }
})
export default store
