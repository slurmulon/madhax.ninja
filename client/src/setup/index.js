import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import router from '../router'
import store from '../store'
import theme from './theme'
import './analytics'
import '@fortawesome/fontawesome-free/css/all.css'

sync(store, router)

Vue.use(Vuetify, { theme, iconfont: 'fa' })
