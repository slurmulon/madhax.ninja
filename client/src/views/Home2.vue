<template>
  <div class="home">
    <retro-grid></retro-grid>
  </div>
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

.header
  background pink

//.application.theme--light
//.application--wrap
.home
  overflow hidden
  background: #659999; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #659999, #f4791f); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #659999, #f4791f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background: #8A2387;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


.home
  display flex
  flex-flow column wrap
  flex 1

main.v-content > .v-content__wrap
  display flex

  & > .container
    display flex
    flex 1
    align-items center
    justify-content center
</style>
