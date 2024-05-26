/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import gsap from 'gsap'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  scrollBehavior (to, from, savedPosition) {
    // return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   console.log('scrolling to top!')
      //   // gsap.to('#app > .v-layout', { duration: 2, scrollTo: 0 })
      //   // window.scrollTo(0)
      //   resolve({ left: 0, top: 0 })
      // }, 1200)
    // })
    console.log('saved pos', savedPosition, to, from)
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { top: 0 }
    // }
  },
  afterEach() {
    console.log('scrolling!')
    window.scrollTo(0)
  }
})

export default router
