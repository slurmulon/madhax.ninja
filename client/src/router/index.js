import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Work from '@/views/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
