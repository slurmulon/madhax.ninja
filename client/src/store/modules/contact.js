export default {
  namespaced: true,
  state: {
    name: '',
    email: '',
    reason: '',
    message: ''
  },
  mutations: {
    update (state, updates) {
      Object.assign(state, updates)
    }
  },
  actions: {
    update ({ commit }, updates) {
      commit('update', updates)
    }
  }
}
