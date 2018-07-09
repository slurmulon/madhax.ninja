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
      <v-btn flat to="/about" class="shiny" color="primary">
        About
      </v-btn>
      <v-btn flat to="/work" class="shiny" color="primary">
        Work
      </v-btn>
      <!-- <v-btn flat class="shiny" color="primary"> -->
      <!--   <router-link to="/blog">Blog</router-link> -->
      <!-- </v-btn> -->
      <v-btn flat to="/contact" class="shiny" color="primary">
        Contact
      </v-btn>
    </v-toolbar-items>
    <!-- </div> -->
    <!-- <div class="menu"> -->
    <!--   <1!-- <a href="https://github.com/slurmulon" target="git">Projects</a> --1> -->
    <!--   <1!-- <a href="http://blog.evavro.com" target="blog">Blog</a> --1> -->
    <!--   <1!-- <a href="#">Work</a> --1> -->
    <!--   <router-link to="/work">Work</router-link> -->
    <!--   <a href="#">Reading</a> -->
    <!--   <router-link to="/contact">Contact</router-link> -->
    <!--   <1!-- <a href="mailto:evavro@gmail.com">Contact</a> --1> -->
    <!-- </div> -->
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
