<template>
  <div
    v-show="loading"
    class="loading-cover"
  >
    <v-progress-circular
      :size="100"
      :width="7"
      color="primary"
      indeterminate
      class="loading-spinner"
    />
  </div>
</template>

<script setup lang="ts">
import { loading } from '@/use/page'
</script>

<style lang="sass" scoped>
.loading-cover
  $height: 100lvh
  $width: 100lvw

  position: fixed
  top: 32px
  left: 0
  height: $height
  width: $width
  z-index: 1

  display: flex
  flex-flow: row wrap
  justify-content: center
  align-content: center

@media only screen and (max-width: 480px)
  .loading-spinner
    transform: translateY(calc(calc(100lvh - 100svh) * -0.5))
</style>
