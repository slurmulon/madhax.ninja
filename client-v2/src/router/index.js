import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About'
import Work from '@/views/Work'
import Contact from '@/views/Contact'
import Navbar from '@/components/Navbar'
import ContactButton from '@/components/ContactButton'
import BackButton from '@/components/BackButton'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'about',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    components: {
      default: About,
      header: Navbar,
      footer: ContactButton
    }
  },
  {
    path: '/work',
    name: 'work',
    components: {
      default: Work,
      header: Navbar,
      footer: ContactButton
    }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      // default: Contact,
      default: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
      header: Navbar,
      footer: BackButton
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
