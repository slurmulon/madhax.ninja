<template>
  <v-app>
    <!-- <nav class="header"> -->
      <slot name="header"></slot>
    <!-- </nav> -->
    <main>
      <slot></slot>
    </main>
    <!-- <footer> -->
      <slot name="footer"></slot>
    <!-- </footer> -->
  </v-app>
</template>

<style lang="stylus">
@require '../styles/main'

#app, .application--wrap
  display flex
  flex 1
  flex-flow column wrap
</style>
