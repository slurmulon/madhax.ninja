<template>
  <v-row class="ma-0 pa-0">
    <v-col
      v-if="title"
      cols="12"
      class="pb-0"
    >
      <v-row
        nowrap
        align="center"
      >
        <v-col class="pb-1">
          <h1 class="light-blue--text text--lighten-4">
            {{ title }}
          </h1>
        </v-col>

        <v-spacer />

        <v-col class="text-right">
          <slot name="title-items" />
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
    >
      <v-card
        :color="color"
        v-bind="$attrs"
        class="section-card"
      >
        <slot />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: String,

    color: {
      type: String,
      required: false,
      default: () => 'transparent'
    }
  }
}
</script>

<style lang="sass">
.section-card.v-card.theme--dark
  // background-color: rgba(255,255,255,0.15) !important
  background-color: rgba(255,255,255,0.1) !important
  // background-color: rgba(255,255,255,0.18) !important
  // background-color: rgba(100,100,100,0.1) !important
  // LAST
  // background-color: rgba(150,150,150,0.1) !important
  // background-color: rgba(185,185,185,0.1) !important
  // background-color: rgba(200,200,200,0.1) !important
</style>
