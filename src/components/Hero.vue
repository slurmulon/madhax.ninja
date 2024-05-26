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
      style="position: absolute; bottom: -10px; left: 0; right: 0; opacity: 1.0"
    >
      <!-- <towers-svg height="100%" width="100%" style="fill: #212a30; stroke: #212a30;" /> -->
      <palm-trees-svg id="palm-trees" height="100%" width="100%" style="fill: #212a30;" />
    </div>

    <!-- <div class="desert" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; opacity: 0.5; filter: hue-rotate(165deg) contrast(150%) grayscale(20%)">
      <v-img src="../../public/img/desert-1.2896x2060.jpg" width="100%" max-height="100%" cover />
    </div> -->


    <div class="sloth" style="position: absolute; left: -34px; top: -68px; transform: scaleX(-1); visibility: hidden">
      <!-- <v-img src="../../public/img/sloth-2.svg" height="500" width="500" aspect-ratio="1 / 1" /> -->
      <sloth-svg id="sloth-svg" height="65vh" width="65vh" style="fill: #212a30; stroke: #212a30; " />
    </div>
    <!-- <div class="sun" style="position: absolute; left: -68px; top: -34px;">
      <v-img src="../../public/img/sun-face-1.svg" height="250" width="250" aspect-ratio="1 / 1" />
    </div> -->
    <!-- <div class="country" style="position: absolute; bottom: -25vh; left: 0; right: 0;">
      <v-img src="../../public/img/country-1.1500x1000.png" width="1500" cover aspect-ratio="3 / 2"  style="margin: 0 auto" />
    </div> -->
    <!-- <div class="city" style="position: absolute; bottom: -20px; left: 0; right: 0;">
      <city-svg height="100vh" width="100vw" style="fill: rgb(var(--v-theme-surface))" />
    </div> -->

  </div>

  <div
    class="text-h4 text-surface font-weight-thin"
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
    :delay="600"
    :duration="200"
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
    <div class="pa-4 d-block">
      <v-btn
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
import gsap from 'gsap'

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

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })

  gsap.utils.toArray('.parallax').forEach(layer => {
    const depth = layer.dataset.depth
    const movement = -(layer.offsetHeight * depth)

    tl.to(layer, { y: movement, ease: 'none' }, 0)
  })
})
</script>

<style lang="sass" scoped>
@use '../styles/backgrounds'

/* $heroHeight: 800px */
/* $heroHeight: calc(100vh / 2) */
/* $heroHeight: 75vh */
$heroHeight: 100vh
/* $heroHeight: calc(100vh - 48px) */
/* $heroHeight: 600px */
/* $heroHeight: 400px */

#hero
  @extend .bg-sunset-radial
  /* @extend .bg-sunburst-radial */
  /* @extend .bg-haze-radial */
  /* @extend .bg-glow-radial */
  /* @extend .bg-metapolis-radial */
  /* @extend .bg-anwar-radial */
  /* @extend .bg-grapefruit-radial */
  /* @extend .bg-sun-radial */
  /* @extend .bg-burning-orange-diag */
  /* @extend .bg-aura-diag */
  /* @extend .bg-dawn-radial */

  opacity: 0.2
  height: $heroHeight
  /* overflow: hidden */
  /* overflow-y: clip */
  /* overflow-x: clip */
  position: relative
  /* max-width: 1920px */
  /* margin: 0 auto */
  width: 100vw
  /* background-image: url('../../public/img/trees-2.1200x1200.png') */
  /* background-repeat: no-repeat */
  /* background-attachment: bottom center */

.layer
  background-position: bottom center
  background-size: auto
  background-repeat: no-repeat
  width: 100%
  height: $heroHeight
  position: fixed
  z-index: -1

#hero-mobile
  display: none
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/full_illustration.png") no-repeat center bottom / cover
  height: 320px

.first-section
  padding: 50px 0 20px 0

.text-header
  font-size: 50px
  text-align: center

h1
  line-height: 120%
  margin-bottom: 30px

p
  color: #ede0d5
  font-size: 18px
  line-height: 150%

#hero, .layer
  /* min-height: 800px */
  min-height: $heroHeight

.layer-bg
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg')

.layer-1
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png')
  background-position: left bottom

.layer-2
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png')

.layer-3
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png')
  background-position: right bottom

.layer-4
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png')

.layer-overlay
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png')

@media only screen and (max-width: 768px)
  .layer-1
    background-position: 26% bottom

  .layer-3
    background-position: 35% bottom
</style>
