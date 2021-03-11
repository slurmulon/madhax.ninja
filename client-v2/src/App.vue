<template>
  <layout>
    <router-view name="header" />

    <transition name="page">
      <router-view />
    </transition>

    <router-view name="footer" />
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

<style lang="sass">
@use './styles/main.sass'
</style>
