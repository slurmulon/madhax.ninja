import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import router from '../router'
import store from '../store'
import theme from './theme'

sync(store, router)

Vue.use(Vuetify, { theme })
