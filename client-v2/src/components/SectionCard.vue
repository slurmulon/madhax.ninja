<template>
  <v-row class="ma-0 pa-0">
    <section-title
      v-if="title"
      :text="title"
    >
      <template #title-items>
        <slot name="title-items" />
      </template>
    </section-title>

    <v-col cols="12">
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
import SectionTitle from '@/components/SectionTitle'

export default {
  components: { SectionTitle },

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
