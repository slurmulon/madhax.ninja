<template>
  <section class="section-card d-flex flex-fill">
    <v-row class="ma-0 pa-0" >
      <section-title
        v-if="title"
        :text="title"
      >
        <template #title-items>
          <slot name="title-items" />
        </template>
      </section-title>

      <v-col
        cols="12"
        class="pt-0 pb-1"
      >
        <v-card
          :color="color"
          rounded="lg"
          variant="elevated"
          elevation="3"
          v-bind="$attrs"
          class="section-card--inner"
        >
          <slot />
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle'
import { VCard } from 'vuetify/components'

defineOptions({
  inheritAttrs: true
})

defineProps({
  ...VCard.props,
  color: { 
    type: String,
    required: false,
    default: () => 'rgba(255,255,255,0.065)'
    /* default: () => 'rgba(255,255,255,0.06)' */
    /* default: () => 'rgba(255,255,255,0.05)' */
    /* default: () => 'rgba(150,150,150,0.1)' */
  },
})
</script>

<style lang="sass" scoped>
.section-card--inner.v-card.v-theme--brandTheme
  background-color: v-bind(color) !important
  // LAST
  /* background-color: rgba(150,150,150,0.1) !important */
</style>
