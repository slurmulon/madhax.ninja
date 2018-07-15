<template>
  <v-toolbar class="header">
    <!-- <div class="logo"> -->
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
      <v-btn flat to="blog" class="shiny" color="light-blue lighten-4">
        Blog
      </v-btn>
      <!-- <v-btn flat to="/contact" class="shiny" color="light-blue lighten-4"> -->
      <!--   Contact -->
      <!-- </v-btn> -->
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
  background rgba(255,255,255, 0.3)

  .v-toolbar__title
    margin-top -8px
</style>
