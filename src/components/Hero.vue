<template>
  <div style="position: relative; width: 100vw; height: 100vh;">
  <div id="hero">
    <!-- <div class="layer-bg layer parallax" data-depth="0.10"></div>
    <div class="layer-1 layer parallax" data-depth="0.20"></div>
    <div class="layer-2 layer parallax" data-depth="0.50"></div>
    <div class="layer-3 layer parallax" data-depth="0.80"></div>
    <div class="layer-overlay layer parallax" data-depth="0.85"></div>
    <div class="layer-4 layer parallax" data-depth="1.00"></div> -->
    <!-- <div class="trees" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;">
      <v-img src="../../public/img/trees-2.1200x1200.png" width="1200" aspect-ratio="1 / 1"/>
    </div> -->

    <!-- <div class="trees" style="position: absolute; bottom: 0px; left: 0; right: 0; opacity: 0.5">
      <v-img src="../../public/img/trees-1.4000x2666.png" height="100vh" width="100vw" />
    </div> -->

    <div
      v-motion
      :initial="{
        y: 30,
      }"
      :enter="{
        y: 0,
        transition: {
          type: 'spring',
          stiffness: '70',
          delay: 0,
        },
      }"
      :delay="0"
      :duration="1200"
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
    class="text-surface font-weight-thin"
    style="position: absolute; top: 64px; left: 0; right: 0; bottom: 0; display: flex; flex-flow: column wrap; align-items: center; justify-content: center; font-family: Oxygen, sans-serif !important"
    v-motion
    :initial="{
      opacity: 0,
      y: -100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '75',
        delay: 300,
      },
    }"
    :delay="800"
    :duration="100"
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
        variant="outlined"
        color="white"
        class="mr-2"
      >
        Portfolio
      </v-btn>
      <v-btn
        variant="outlined"
        color="white"
      >
        Contact
      </v-btn>
    </div>
  </div>

  </div>
  <!-- <div style="postion: relative; display: block; width: 100%; height: 48px; background: linear-gradient(to bottom, #212a30, transparent); opacity: 0.35" /> -->
</template>

<script setup>
/* import gsap from 'gsap' */

import SlothSvg from '../../public/img/sloth-2.svg'
import CitySvg from '../../public/img/city-1.svg'
import TowersSvg from '../../public/img/towers-1.svg'
import PalmTreesSvg from '../../public/img/palm-trees-1.svg'

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

.landscape
  position: absolute
  bottom: -10px
  left: 0
  right: 0
  opacity: 1.0

  & > .palm-trees
    fill: hsl(204 7% 16% / 1)
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
