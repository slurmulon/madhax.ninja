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
        <v-col>
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
// .theme--dark.v-card
// .section-card.v-card.theme--dark
.section-card.v-card.theme--dark
  // BEST
  // background-color: rgba(255,255,255,0.15) !important
  // background-color: rgba(255,255,255,0.1) !important
  // background-color: rgba(255,255,255,0.08) !important
  // background-color: rgba(255,255,255,0.075) !important
  // ALT
  // background-color: rgba(255,255,255,0.12) !important
  // background-color: rgba(255,255,255,0.14) !important
  // background-color: rgba(255,255,255,0.16) !important
  // BEST 2
  // background-color: rgba(255,255,255,0.18) !important
  // background-color: rgba(15,15,15,0.1) !important
  // background-color: rgba(25,25,25,0.1) !important
  // background-color: rgba(40,40,40,0.1) !important
  // background-color: rgba(80,80,80,0.1) !important
  // background-color: rgba(84,84,84,0.1) !important
  // background-color: rgba(88,88,88,0.1) !important
  // BEST 3
  // background-color: rgba(100,100,100,0.1) !important
  // background-color: rgba(120,120,120,0.1) !important
  // BEST 4
  background-color: rgba(150,150,150,0.1) !important
  // background-color: rgba(185,185,185,0.15) !important
  // LAST
  // background-color: rgba(200,200,200,0.1) !important


</style>
