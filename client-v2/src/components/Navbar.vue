<template>
  <v-toolbar class="header">
    <v-toolbar-title>
      <logo />
    </v-toolbar-title>
    <v-spacer />

    <v-toolbar-items>
      <v-btn
        text
        to="/about"
        class="shiny"
        color="light-blue lighten-4"
      >
        About
      </v-btn>
      <v-btn
        text
        to="/work"
        class="shiny"
        color="light-blue lighten-4"
      >
        Work
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: { Logo }
}
</script>

<style lang="sass" scoped>
.header
  background-color: rgba(255,255,255, 0.2) !important // 0.3

  &::after
    content: ""
    opacity: 0.25
    top: 0
    left: 0
    bottom: 0
    right: 0
    position: absolute
    z-index: -1
    background: url('../../public/img/texture.svg') repeat

  .v-toolbar__title
    margin-top: -8px
</style>
