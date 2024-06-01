<template>
  <v-app-bar
    app
    class="header"
    style="max-width: 100vw"
  >
    <v-toolbar-title>
      <logo />
    </v-toolbar-title>
    <v-spacer />

    <v-toolbar-items>
      <v-btn
        text
        to="/"
        class="shiny"
        color="secondary"
      >
        About
      </v-btn>
      <v-btn
        text
        to="/work"
        class="shiny"
        color="secondary"
      >
        Work
      </v-btn>
      <v-btn
        text
        to="/contact"
        class="shiny d-none d-sm-flex"
        color="secondary"
      >
        Contact
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script setup>
import Logo from '@/components/Logo'
</script>

<!--
    v-motion
    :initial="{
      y: -128,
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        ease: 'circOut',
        duration: 200,
        delay: 0,
      },
    }"
    :leave="{
      y: 0,
      opacity: 1,
    }"
    :duration="200"
-->


<style lang="sass" scoped>
@use '../styles/backgrounds'

.header
  // ORIG
  /* @extend .bg-sunburst-diag */
  // NEXT
  @extend .bg-kye-diag

  &::after
    content: ""
    opacity: 0.25
    top: 0
    left: 0
    bottom: 0
    right: 0
    position: absolute
    z-index: -1
    background: url('/img/texture.svg') repeat
</style>
