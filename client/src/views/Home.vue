<template>
  <layout>
    <navbar slot="header"></navbar>

    <section class="content">
      <strong class="shout">Progressive Web Applications, RESTful APIs, Hypermedia + More</strong>
    </section>

    <footer slot="footer">
      <section class="status">
        <h2 class="head">Status</h2>
        <div class="entry">
          <span class="title">Employment:</span> Ceres Imaging
        </div>
        <div class="entry">
          <span class="title">Open-Source:</span> Busy
        </div>
        <div class="entry">
          <span class="title">Location:</span> http://127.0.0.1
        </div>
        <!-- <div class="entry"> -->
        <!--   <span class="title">PGP Key:</span> 2C0B 78CC EA05 A274 -->
        <!-- </div> -->
      </section>
      <section class="tools">
        <h2 class="head">Tools</h2>
        <div class="card">
          <a href="https://nodejs.org/" target="tool"><img src="../assets/img/node-js.png"></a>
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
