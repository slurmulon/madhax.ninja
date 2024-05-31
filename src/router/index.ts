/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory, RouterScrollBehavior, isNavigationFailure, NavigationFailureType } from 'vue-router/auto'
// import { setupLayouts } from 'virtual:generated-layouts'

import { loading, load } from '@/use/page'

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

// TODO: NotFound/404 route!
const routes = [
  {
    // path: '/:pathMatch(.*)*',
    path: '/404',
    name: 'not-found',
    components: {
      default: () => import(/* webpackChunkName: "not-found" */ '@/pages/404.vue'),
    }
  },
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
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // extendRoutes: setupLayouts,
  scrollBehavior,
})

let timeout

router.beforeEach((to, from, next) => {
  if (!timeout) {
    timeout = setTimeout(() => {
      loading.value = true
    }, 0)
  }

  console.log('das to?', to)

  if (to.matched.length) {
    next()
  } else {
    next({ name: 'not-found' })
  }
})

router.afterEach(() => {
  if (timeout) {
    clearTimeout(timeout)
  }

  loading.value = false
})

export default router
