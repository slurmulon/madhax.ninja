<template>
  <div
    class="background-cover"
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
      transition: {
        duration: 400,
        ease: 'easeIn',
      }
    }"
    @touchstart.passive=""
  >
  </div>
</template>

<style lang="sass" scoped>
@use '../styles/backgrounds'

.background-cover
  $height: 100lvh
  $width: 100lvw

  position: fixed
  top: 0
  left: 0
  height: 100lvh
  width: 100lvw
  z-index: 0

  @extend .bg-raisin-radial
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  will-change: transform
  transform: translateZ(0)
  contain: strict

  &::after
    content: ""
    opacity: 0.25
    position: fixed
    top: 0
    left: 0
    height: 100lvh
    width: 100lvw
    z-index: 1
    // TODO: Add to images folder
    background-image: url('../../public/img/nightsky.webp')
    background-repeat: repeat
    /* background-size: contain */
    /* background-position: bottom */

    /* @media only screen and (max-width: 480px) */
    /*   background-attachment: fixed */
</style>
