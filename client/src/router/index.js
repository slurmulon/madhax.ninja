import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Work from '@/views/Work'
import About from '@/views/About'
import Contact from '@/views/Contact'
import Navbar from '@/components/Navbar'
import ContactButton from '@/components/ContactButton'
import BackButton from '@/components/BackButton'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/about',
      // name: 'Home',
      // // component: Home
      // components: {
      //   default: Home,
      //   header: Navbar
      // }
    },
    {
      path: '/work',
      name: 'Work',
      // component: Work
      components: {
        default: Work,
        header: Navbar,
        footer: ContactButton
      }
    },
    {
      path: '/about',
      name: 'About',
      // component: About
      components: {
        default: About,
        header: Navbar,
        footer: ContactButton
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      // component: Contact
      components: {
        default: Contact,
        header: Navbar,
        footer: BackButton
      }
    }
  ]
})
