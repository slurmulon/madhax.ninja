<template>
  <v-app light> <!-- dark looks crazy! -->
    <!-- <v-content> -->
    <!--   <v-container fluid fill-height> -->
    <!--     <v-layout column nowrap> -->
    <!-- <slot name="header"></slot> -->
    <navbar></navbar>

    <!-- <main> -->
      <slot></slot>
    <!-- </main> -->

    <slot name="footer"></slot>
        <!-- </v-layout> -->
      <!-- </v-container> -->
    <!-- </v-content> -->
  </v-app>
</template>

<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="stylus">
@require '../styles/main'

//#app, .application--wrap
//  display flex
//  flex 1
//  flex-flow column nowrap !important
//  justify-content center

.application.theme--light
  //display block flow
  padding 0 !important

// .application--wrap
//   padding 1em 0

.application.theme--light
  background none
</style>
