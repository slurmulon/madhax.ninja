<template>
  <layout>
    <router-view name="header"></router-view>

    <transition name="page">
      <router-view></router-view>
    </transition>

    <router-view name="footer"></router-view>
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
