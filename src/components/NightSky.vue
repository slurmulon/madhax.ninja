<template>
  <div
    class="background-cover"
  >
  </div>
</template>

<style lang="sass" scoped>
@use '../styles/backgrounds'
@use '../styles/transitions'

.background-cover
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 0

  @extend .bg-raisin-radial

  &::after
    content: ""
    opacity: 0.25
    top: 0
    left: 0
    bottom: 0
    right: 0
    position: absolute
    z-index: 1
    background: url("https://www.toptal.com/designers/subtlepatterns/uploads/ep_naturalblack.png") repeat

    background-attachment: fixed
    transition: background 0.5s ease-in
</style>
