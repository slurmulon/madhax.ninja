<template>
  <v-app>
    <slot name="header"></slot>

    <main>
      <slot></slot>
    </main>

    <slot name="footer"></slot>
  </v-app>
</template>

<style lang="stylus">
@require '../styles/main'

#app, .application--wrap
  display flex
  flex 1
  flex-flow column wrap
</style>
