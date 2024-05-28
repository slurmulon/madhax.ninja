/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory, RouterScrollBehavior } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import gsap from 'gsap'

type ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior']
  left: number
  top: number
}

declare module 'vue-router' {
  interface RouteMeta {
    scrollPos?: ScrollPositionNormalized
  }
}

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.name === from.name) {
    to.meta?.scrollPos && (to.meta.scrollPos.top = 0)

    return { left: 0, top: 0, behavior: 'smooth' }
  }

  // const scrollPosition = savedPosition || to.meta?.scrollPosition || { left: 0, top: 0 }
  const scrollPosition = to.meta?.scrollPosition || { left: 0, top: 0 }
  // console.log('scrollPosition', savedPosition, scrollPosition)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(scrollPosition)
    }, 650)
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  scrollBehavior,
  scrollBehavior_BAK (to, from, savedPosition) {
    console.log('saved pos', savedPosition, to, from)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('scrolling to top!', savedPosition ? savedPosition.top : 'none')
        // gsap.to('#app > .v-layout', { duration: 2, scrollTo: 0 })
        // window.scrollTo(0)
        // resolve({ left: 0, top: 0 })

        resolve(savedPosition ?? { top: 0 })
      }, 650)
    })
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { top: 0 }
    // }
  },
})

router.beforeEach((to, from, next) => {
  from.meta?.scrollPos && (from.meta.scrollPos.top = document.documentElement.scrollTop)

  return next()
})

export default router
