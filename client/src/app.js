import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './setup'

const app = new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  ...App
})

export { app, router, store }
