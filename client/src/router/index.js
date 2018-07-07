import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Work from '@/views/Work'
import Reading from '@/views/Reading'
import Contact from '@/views/Contact'

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
    },
    {
      path: '/reading',
      name: 'Reading',
      component: Reading
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
