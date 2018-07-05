<template>
  <layout>
    <navbar slot="header"></navbar>

    <section class="content">
      :D
    </section>

    <footer slot="footer"></footer>
  </layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/footers/Back'
import Layout from '@/components/Layout'

export default {
  components: {
    Navbar,
    Footer,
    Layout
  }
}
</script>

<style lang="stylus" scoped>
.application
  padding 1em
</style>
