<template>
  <v-toolbar class="header">
    <v-toolbar-title>
      <a @click="$router.push('/')" class="logo display-1">
        Erik Vavro
      </a>
      <!-- <span class="title">Software (engineer + architect)</span> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
    <v-toolbar-items>
      <v-btn flat to="/about" class="shiny" color="light-blue lighten-4">
        About
      </v-btn>
      <v-btn flat to="/work" class="shiny" color="light-blue lighten-4">
        Work
      </v-btn>
      <!-- <v-btn flat to="blog" class="shiny" color="light-blue lighten-4"> -->
      <v-btn flat href="http://blog.evavro.com" class="shiny" color="light-blue lighten-4">
        Blog
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout
  }
}
</script>

<style lang="stylus" scoped>
.header
  //background white //salmon
  background-color rgba(255,255,255, 0.2) !important // 0.3

  &::after
    content ""
    opacity 0.25
    top 0
    left 0
    bottom 0
    right 0
    position absolute
    z-index -1
    background url('/static/img/texture.svg') repeat

  .v-toolbar__title
    margin-top -8px
</style>
