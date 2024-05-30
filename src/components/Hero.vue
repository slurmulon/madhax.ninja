<template>
  <div style="position: relative; width: 100vw; height: 100vh;">
  <div id="hero">
    <div
      class="landscape"
    >
      <!-- <palm-trees-svg id="palm-trees" height="100%" width="100%" style="fill: #212a30;" /> -->
      <palm-trees-svg
        height="100%"
        width="100%"
        class="palm-trees"
      />
    </div>
  </div>

  <div
    ref="banner"
    class="banner text-surface font-weight-thin"
    style=""
  >
    <div class="text-h1 w-100 text-center d-block text-primary">
    <!-- <div class="text-h1 w-100 text-center d-block text-accent"> -->
    <!-- <div class="text-h1 w-100 text-center d-block text-deep-purple-lighten-4"> -->
      Software Architect
    </div>
    <div class="text-h4 text-white d-block">
      <!-- Code. Web. Music. -->
      <!-- User Interfaces -->
      <!-- Full-stack Web Applications -->
      <!-- Quality Web Applications -->
      <!-- Quality Is Everything -->
      Crafting happiness with code
      <!-- Quality home-made code -->
      <!-- Changing lives with code -->
      <!-- Some assembly required -->
      <!-- It's just a button -->
      <!-- Wrangling bits on the web -->
      <!-- Quality code with style -->
    </div>
    <div class="d-block px-4 pt-4">
      <v-btn
        to="/work"
        :active="false"
        variant="outlined"
        color="white"
        class="mr-2"
      >
        Portfolio
      </v-btn>
      <v-btn
        to="/contact"
        variant="outlined"
        color="white"
      >
        Contact
      </v-btn>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
/* import gsap from 'gsap' */
import { useMotion } from '@vueuse/motion'
import { whenever } from '@vueuse/core'
import { useRoute } from 'vue-router'

import PalmTreesSvg from '../../public/img/palm-trees-1.svg'

const banner = ref<HTMLElement>()

const route = useRoute()

whenever(() => route.name === '/about', async () => {
  motion.stop()

  await motion.set('initial')
  await motion.apply('enter')
})

const motion = useMotion(banner, {
  initial: {
    opacity: 0,
    y: -100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: '75',
      delay: 300,
      /* onComplete: () => { */
      /*   console.log('enter complete') */
      /* } */
    },
  },
  delay: 800,
  duration: 100
})
/* console.log('hi route', route, motion) */

/* onUpdated(() => { */
/*   console.log('hello') */
/*   motion.apply('enter') */
/* }) */

/* onMounted(() => { */
/*   console.log('hello') */
/*   motion.apply('enter') */
/* }) */

// landscape motion
      /* v-motion */
      /* :initial="{ */
      /*   y: 30, */
      /* }" */
      /* :enter="{ */
      /*   y: 0, */
      /*   transition: { */
      /*     type: 'spring', */
      /*     stiffness: '70', */
      /*     delay: 0, */
      /*   }, */
      /* }" */
      /* :delay="0" */
      /* :duration="1200" */


onMounted(() => {
  /* const v = new Vivus('palm-tr', ees', { */
  /*   type: 'delayed', */
  /*   /1* delay: 1000, *1/ */
  /*   duration: 100, */
  /*   /1* ignoreInvisible: true, *1/ */
  /*   start: 'manual', */
  /*   animTimingFunction: Vivus.EASE, */
  /* }) */

  /* setTimeout(() => { */
  /*   v.play(() => { */
  /*     console.log('vivus done!') */
  /*   }) */
  /*   console.log('vivus playing?', v.getStatus()) */
  /* }, 2000) */

  /* const tl = gsap.timeline({ */
  /*   scrollTrigger: { */
  /*     trigger: "#hero", */
  /*     start: "top top", */
  /*     end: "bottom top", */
  /*     scrub: true */
  /*   } */
  /* }) */

  /* gsap.utils.toArray('.parallax').forEach(layer => { */
  /*   const depth = layer.dataset.depth */
  /*   const movement = -(layer.offsetHeight * depth) */

  /*   tl.to(layer, { y: movement, ease: 'none' }, 0) */
  /* }) */
})
</script>

<style lang="sass" scoped>
@use '../styles/backgrounds'
@use "sass:color"

/* $heroHeight: 800px */
/* $heroHeight: calc(100vh / 2) */
/* $heroHeight: 75vh */
$heroHeight: 100vh
/* $heroHeight: calc(100vh - 48px) */
/* $heroHeight: 600px */
/* $heroHeight: 400px */

#hero
  /* @extend .bg-sunset-radial */
  /* filter: blur(0px) */
  background-repeat: no-repeat

  /* background-color: #346a7e */
  /* background-color: #4389A2 */
  /* background-color: #c9c8a7 */

  background-color: #77a3b3 // teal
  /* background-color: #9e99c7 // purp */
  /* background-color: #99c7b4 // mint */

  animation-name: sky
  animation-duration: 800ms
  animation-iteration-count: 1
  animation-timing-function: ease-in
  animation-direction: normal

  /* transform: translateZ(0) */
  /* @extend .bg-sunburst-radial */
  /* @extend .bg-haze-radial */
  /* @extend .bg-glow-radial */
  /* @extend .bg-metapolis-radial // GREAT */
  /* @extend .bg-anwar-radial */
  /* @extend .bg-grapefruit-radial */
  /* @extend .bg-sun-radial */
  /* @extend .bg-burning-orange-diag */
  /* @extend .bg-aura-diag */
  /* @extend .bg-dawn-radial */

  /* opacity: 0.2 */
  /* opacity: 0.1975 */
  /* opacity: 0.1 */
  opacity: 0.125
  /* opacity: 0.4 */
  height: $heroHeight
  /* overflow: hidden */
  /* overflow-y: clip */
  /* overflow-x: clip */
  position: relative
  /* max-width: 1920px */
  /* margin: 0 auto */
  width: 100vw
  /* background-repeat: no-repeat */
  /* background-attachment: bottom center */

.banner
  position: absolute
  top: var(--v-layout-top)
  left: 0
  right: 0
  bottom: 0
  display: flex
  flex-flow: column wrap
  align-items: center
  justify-content: center
  font-family: Oxygen, sans-serif !important

.landscape
  position: absolute
  bottom: -10px
  left: 0
  right: 0
  opacity: 1.0
  overflow: hidden

  & > .palm-trees
    fill: hsl(204 7% 16% / 1)
    /* margin-bottom: -12px */
    /* fill: #212a30 */

/* $color-clock-6: #4389a2 */
/* $color-clock-12: #c9c8a7 */
/* $color-clock-18: #77a3b3 */

@keyframes sky
  0%
    background: transparent
    /* background-color: #779db3 // mid-hue blue */
    /* @extend .bg-kye-radial */
    // bg-dawn
    /* background: -moz-radial-gradient(top left, $bg-from, $bg-to) !important */
    /* background: -webkit-radial-gradient(top left, $bg-from, $bg-to) !important */
    /* background: radial-gradient(top left, color.scale(#3B4371, $saturation: -50%), #F3904F) */


  /* 25% */
    /* background-color: #b39b77 // pale orange */
    /* @extend .bg-sunset-radial */

  /* 50% */
  100%
    background: #77a3b3
    // bg-sunset
    /* background: radial-gradient(top left, darken(#4389A2, 10%), color.scale(#cbcaa5, $saturation: -10%)) */
    /* background-color: #aa77b3 // purple */
</style>
