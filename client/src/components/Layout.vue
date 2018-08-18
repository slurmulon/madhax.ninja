<template>
  <v-app> <!-- dark looks crazy! -->
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </v-app>
</template>

<style lang="stylus">
@require '../styles/main'

.application.theme--light
  padding 0 !important
  background none
</style>
