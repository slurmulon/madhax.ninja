import Vue from 'vue'
import Vuex from 'vuex'
import tools from './modules/tools'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tools
  }
})

export default store
