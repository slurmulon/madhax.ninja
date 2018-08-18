import Vue from 'vue'
import Vuex from 'vuex'
import tools from './modules/tools'
import contact from './modules/contact'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tools,
    contact
  }
})

export default store
