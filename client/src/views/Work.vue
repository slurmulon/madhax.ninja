<template>
  <layout>
    <navbar slot="header"></navbar>

    <section class="content">
      :D
    </section>

    <footer slot="footer">
      <back></back>
    </footer>
    <!-- <back slot="footer"></back> -->
  </layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import Back from '@/components/footers/Back'
import Layout from '@/components/Layout'

export default {
  components: {
    Navbar,
    Back,
    Layout
  }
}
</script>

<style lang="stylus" scoped>
.application
  padding 1em
</style>
