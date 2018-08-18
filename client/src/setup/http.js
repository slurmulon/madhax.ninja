import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import auth from '../session/auth'
import router from '../router'
import get from 'dlv'

Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = process.env.API_BASE_URL

Vue.axios.interceptors.request.use(
  config => {
    config.headers.common.Accept = 'application/json'

    if (auth.valid) {
      config.headers.common.Authorization = `Bearer ${auth.token}`
    }

    return config
  },

  response => response
)

Vue.axios.interceptors.response.use(
  response => response,
  error => {
    const status = get(error, 'response.status')
    const route  = router.currentRoute.name

    if (status === 401 && route !== 'login') {
      router.push('login')
    }

    return Promise.reject(error)
  }
)
