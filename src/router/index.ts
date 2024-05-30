/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory, RouterScrollBehavior, isNavigationFailure, NavigationFailureType } from 'vue-router/auto'
// import { setupLayouts } from 'virtual:generated-layouts'
// import gsap from 'gsap'

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

  // return scrollPosition
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(scrollPosition)
    }, 650)
  })
}

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '@/pages/about.vue'),
      // header: Navbar,
      // footer: ContactButton
    }
  },
  {
    path: '/work',
    name: 'work',
    components: {
      default: () => import(/* webpackChunkName: "work" */ '@/pages/work.vue'),
      // header: Navbar,
      // footer: ContactButton
    }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: () => import(/* webpackChunkName: "contact" */ '@/pages/contact.vue'),
      // header: Navbar,
      // footer: BackButton
    }
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // extendRoutes: setupLayouts,
  scrollBehavior,
  // scrollBehavior_BAK (to, from, savedPosition) {
  //   console.log('saved pos', savedPosition, to, from)
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('scrolling to top!', savedPosition ? savedPosition.top : 'none')
  //       // gsap.to('#app > .v-layout', { duration: 2, scrollTo: 0 })
  //       // window.scrollTo(0)
  //       // resolve({ left: 0, top: 0 })

  //       resolve(savedPosition ?? { top: 0 })
  //     }, 650)
  //   })
  //   // if (savedPosition) {
  //   //   return savedPosition
  //   // } else {
  //   //   return { top: 0 }
  //   // }
  // },
})

// router.beforeEach(async (to, from, next) => {
//   // console.log(`from "${from.fullPath}" to "${to.fullPath}"`)
//   // console.log('redirect', router.currentRoute.value)
//   await new Promise((resolve, reject) => {
//   setTimeout(() => {
//     next()
//     resolve()
//   }, 92)
//   })


//   return true
//   // console.log('CALLED NEXT')
// })

// router.afterEach((to, from, failure) => {
//   if (isNavigationFailure(failure)) {
//     console.log('failed navigation', failure, NavigationFailureType, JSON.stringify(failure, null, 2));
//   } else {
//     console.log('success!', failure)
//   }

//   return true
// });

// router.beforeResolve((to, from, next) => {
//   next()
// })
// router.beforeEach((to, from, next) => {
//   from.meta?.scrollPos && (from.meta.scrollPos.top = document.documentElement.scrollTop)

//   return next()
// })

export default router
