<template>
  <retro-grid></retro-grid>
</template>

<script>
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import RetroGrid from '@/components/RetroGrid'

export default {
  components: {
    Navbar,
    Layout,
    RetroGrid
  }
}
</script>

<style lang="stylus" scoped>
// .application
//   padding 1em
.home
  display flex
  flex-flow column wrap
  flex 1

main.v-content > .v-content__wrap
  display flex
  background pink

  & > .container
    display flex
    flex 1
    align-items center
    justify-content center
</style>
