<template>
  <!-- <nav slot="header" class="header"> -->
  <!--   <div class="logo"> -->
  <!--     <a @click="$router.push('/')"> -->
  <!--       <h1>Erik Vavro</h1> -->
  <!--     </a> -->
  <!--     <span>Software (engineer + architect)</span> -->
  <!--   </div> -->
  <!--   <div class="menu"> -->
  <!--     <1!-- <a href="https://github.com/slurmulon" target="git">Projects</a> --1> -->
  <!--     <1!-- <a href="http://blog.evavro.com" target="blog">Blog</a> --1> -->
  <!--     <1!-- <a href="#">Work</a> --1> -->
  <!--     <router-link to="/work">Work</router-link> -->
  <!--     <a href="#">Reading</a> -->
  <!--     <router-link to="/contact">Contact</router-link> -->
  <!--     <1!-- <a href="mailto:evavro@gmail.com">Contact</a> --1> -->
  <!--   </div> -->
  <!-- </nav> -->
  <v-toolbar class="header">
    <!-- <div class="logo"> -->
    <v-toolbar-title class="logo">
      <a @click="$router.push('/')" class="headline">
        <h1>Erik Vavro</h1>
      </a>
      <span class="title">Software (engineer + architect)</span>
    </v-toolbar-title>
    <!-- </div> -->
    <div class="menu">
      <!-- <a href="https://github.com/slurmulon" target="git">Projects</a> -->
      <!-- <a href="http://blog.evavro.com" target="blog">Blog</a> -->
      <!-- <a href="#">Work</a> -->
      <router-link to="/work">Work</router-link>
      <a href="#">Reading</a>
      <router-link to="/contact">Contact</router-link>
      <!-- <a href="mailto:evavro@gmail.com">Contact</a> -->
    </div>
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
