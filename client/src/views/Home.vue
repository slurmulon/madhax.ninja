<template>
  <layout pa-2>
    <navbar slot="header"></navbar>

    <v-content>
      <v-container fluid>
        <!-- <v-layout row wrap> -->
        <!-- <v-flex xs1> -->
        <section>
          <strong class="shout text-xs-center">Progressive Web Applications, RESTful APIs, Hypermedia + More</strong>
        </section>
        <!-- </v-flex> -->
        <!-- </v-layout> -->
      </v-container>
    </v-content>

    <footer slot="footer">
      <section class="status">
        <h2 class="head">Status</h2>
        <div class="entry">
          <span class="label">Employment:</span> Ceres Imaging
        </div>
        <div class="entry">
          <span class="label">Open-Source:</span> Busy
        </div>
        <div class="entry">
          <span class="label">Location:</span> Remote
        </div>
        <!-- <div class="entry"> -->
        <!--   <span class="title">PGP Key:</span> 2C0B 78CC EA05 A274 -->
        <!-- </div> -->
      </section>
      <section class="tools">
        <h2 class="head">Tools</h2>
        <div class="card">
          <v-tooltip bottom>
            <a href="https://nodejs.org/" target="tool" slot="activator">
              <img src="../assets/img/node-js.png">
            </a>
            <span>JavaScript</span>
          </v-tooltip>
        </div>
        <div class="card">
          <a href="https://clojure.org/" target="tool"><img src="../assets/img/clojure.png"></a>
        </div>
        <div class="card">
          <a href="https://elixir-lang.org/" target="tool"><img src="../assets/img/elixir.png"></a>
        </div>
        <div class="card">
          <a href="https://vuejs.org/" target="tool"><img src="../assets/img/vuejs.png"></a>
        </div>
        <div class="card">
          <a href="http://json-schema.org/" target="tool"><img src="../assets/img/json-schema.png"></a>
        </div>
        <div class="card">
          <a href="https://webpack.js.org/" target="tool"><img src="../assets/img/webpack.png"></a>
        </div>
        <div class="card">
          <a href="https://apiblueprint.org/" target="tool"><img src="../assets/img/api-blueprint.png"></a>
        </div>
      </section>
    </footer>
  </layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'

export default {
  components: {
    Navbar,
    Layout
  }
}
</script>

<style lang="stylus" scoped>
// .application
//   padding 1em
</style>
