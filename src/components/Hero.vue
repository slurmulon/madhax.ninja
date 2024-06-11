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
        Crafting happiness with code
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

import PalmTreesSvg from '@/assets/palm-trees.svg?component'

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
  /* @extend .bg-sunset-radial */
  /* @extend .bg-grapefruit-flip-radial */
  /* @extend .bg-glow-radial */
  /* @extend .bg-horizon-radial */
  /* @extend .bg-ruby-radial */
  /* @extend .bg-aura-radial */

  /* background-color: #FBDA61 */
  /* background-image: linear-gradient(315deg, #FBDA61 0%, #FF5ACD 100%) */
  /* background-image: linear-gradient(315deg, #61fbcb 0%, #FF5ACD 100%) */
  background-image: radial-gradient(circle at bottom center, #61fbcb 0%, #ed5aff 100%)


  /* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%) */
  /* background-image: linear-gradient( 135deg, #F6D242 10%, #FF52E5 100%) */
  /* background: radial-gradient(circle at bottom center, #FFC837 15px, #FF8008) */

  /* background-image: url(https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) */
  /* background-size: cover */
  /* background: -webkit-radial-gradient(ellipse at top, #b78ec7, #b7a370, #60b5f2),  -webkit-radial-gradient(ellipse at bottom, #b78ec7, #b7a370, #60b5f2)!important */
  /* background: -webkit-radial-gradient(top left, #b78ec7, #b7a370, #57a6f7) !important */
  /* background: -webkit-radial-gradient(top left, #b78ec7, #b7a370, #80beff) !important */

  animation-name: sky
  animation-duration: 800ms
  animation-iteration-count: 1
  animation-timing-function: ease-in
  animation-direction: normal
  animation-fill-mode: forwards

  position: relative
  /* opacity: 0.125 */
  opacity: 0.175
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
    opacity: 0
    /* background: transparent */

  100%
    opacity: 0.175
    /* background: lighten(#77a3b3, 5%) */
</style>
