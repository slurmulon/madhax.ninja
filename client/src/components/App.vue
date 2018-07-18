<template>
  <layout>
    <navbar slot="header"></navbar>

    <transition name="page">
      <router-view></router-view>
    </transition>
  </layout>
</template>

<script>
import Navbar from './Navbar'
import Layout from './Layout'

export default {
  components: {
    Navbar,
    Layout
  }
}
</script>

<style lang="stylus">
@require '../styles/main'
@require '../styles/transitions'
</style>
