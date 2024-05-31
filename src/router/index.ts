/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory, RouterScrollBehavior, isNavigationFailure, NavigationFailureType } from 'vue-router/auto'
// import { setupLayouts } from 'virtual:generated-layouts'

type ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior']
  left: number
  top: number
}

declare module 'vue-router' {
  interface RouteMeta {
    scrollPos?: ScrollPositionNormalized,
    reveal: boolean
  }
}

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.name === from.name) {
    to.meta?.scrollPos && (to.meta.scrollPos.top = 0)

    return { left: 0, top: 0, behavior: 'smooth' }
  }

  // const scrollPosition = savedPosition || to.meta?.scrollPosition || { left: 0, top: 0 }
  const scrollPosition = to.meta?.scrollPosition || { left: 0, top: 0 }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(scrollPosition)
    }, 650)
  })
}

const routes = [
  {
    path: '/',
    name: 'about',
    meta: {
      reveal: true
    },
    components: {
      default: () => import(/* webpackChunkName: "about" */ '@/pages/index.vue'),
    }
  },
  {
    path: '/work',
    name: 'work',
    components: {
      default: () => import(/* webpackChunkName: "work" */ '@/pages/work.vue'),
    }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: () => import(/* webpackChunkName: "contact" */ '@/pages/contact.vue'),
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // extendRoutes: setupLayouts,
  scrollBehavior,
})

export default router
