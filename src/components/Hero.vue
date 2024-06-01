<template>
  <div class="hero__container">
    <div id="hero">
      <div class="landscape">
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
    >
      <div class="text-h1 w-100 text-center text-primary d-block px-4">
        Software Architect
      </div>
      <div class="text-h4 text-white text-center d-block">
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
          :active="false"
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
import { useRouteMotion } from '@/use/motions'

import PalmTreesSvg from '/src/assets/palm-trees.svg?component'

const banner = ref<HTMLElement>()

const motion = useRouteMotion(banner, {
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
    },
  },
  delay: 800,
  duration: 100
})
</script>

<style lang="sass" scoped>
@use '../styles/backgrounds'

.hero__container
  position: relative
  width: 100lvw
  height: 100lvh

#hero
  @extend .bg-sunset-radial
  /* @extend .bg-horizon-radial */
  /* @extend .bg-ruby-radial */
  /* background: -webkit-radial-gradient(top left, #b78ec7, #b7a370, #60b5f2) !important */
  /* background: -webkit-radial-gradient(top left, #b78ec7, #b7a370, #57a6f7) !important */
  /* background: -webkit-radial-gradient(top left, #b78ec7, #b7a370, #80beff) !important */


  /* background-color: #77a3b3 // teal */
  /* background-color: #9e99c7 // purp */
  /* background-color: #99c7b4 // mint */

  animation-name: sky
  animation-duration: 800ms
  animation-iteration-count: 1
  animation-timing-function: ease-in
  animation-direction: normal
  animation-fill-mode: forwards

  position: relative
  opacity: 0.125
  height: 100lvh
  width: 100lvw

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

  // Center perfectly on mobile when HUD is included
  @media only screen and (max-width: 480px)
    margin-top: calc(calc(100lvh - 100svh) * -1)

.landscape
  position: absolute
  bottom: 0
  left: 0
  right: 0
  opacity: 1.0
  display: flex
  overflow: hidden

  & > .palm-trees
    fill: hsl(204 7% 16% / 1)
    transform-box: fill-box
    transform: translateY(12px)
    /* margin-bottom: -12px */
    /* fill: #212a30 */

@keyframes sky
  0%
    background: transparent

  100%
    background: lighten(#77a3b3, 5%)
</style>
