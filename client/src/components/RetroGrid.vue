<template>
  <div class="retro-grid"></div>
</template>

<script>

</script>

<style lang="stylus" scoped>
// @credit https://codepen.io/George-Payne/pen/qOrxao
.retro-grid
  color-space = transparent //#000
  color-lazer = pink

  top -400px
  bottom -400px
  left -400px
  right -400px
  position absolute

  background-repeat repeat
  background-color color-space
  background-image linear-gradient(color-lazer 1px, transparent 2px), linear-gradient(90deg, color-lazer 1px, transparent 2px)
  background-size 3% 3%, 3% 3%
  background-position 0 0, 0 0

  transform perspective(300px) rotateX(80deg)
  animation through-space 2s linear
  animation-iteration-count infinite

@keyframes through-space
  0%
    transform perspective(300px) rotateX(80deg) translateY(0%)

  100%
    transform perspective(300px) rotateX(80deg) translateY(5.8%)
</style>
