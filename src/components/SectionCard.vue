<template>
  <v-row class="section-card__container ma-0 pa-0" >
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
        class="section-card"
      >
        <slot />
      </v-card>
    </v-col>
  </v-row>
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
    /* default: () => 'rgba(255,255,255,0.05)' */
    default: () => 'rgba(255,255,255,0.065)'
  },
})

/* export default { */
/*   components: { SectionTitle }, */

/*   props: { */
/*     ...VCard.props, */

/*     /1* title: String, *1/ */

/*     /1* color: { *1/ */
/*     /1*   type: String, *1/ */
/*     /1*   required: false, *1/ */
/*     /1*   default: () => 'transparent' *1/ */
/*     /1* } *1/ */
/*   } */
/* } */
</script>

<style lang="sass">
/* .section-card.v-card.theme--dark */
.section-card.v-card.v-theme--brandTheme
  /* background-color: rgba(255,255,255,0.025) !important */
  // LAST SUBTLE
  /* background-color: rgba(255,255,255,0.05) !important */
  background-color: v-bind(color) !important
  // NEXT SUBTLE
  /* background-color: rgba(255,255,255,0.045) !important */
  /* background-color: rgba(255,255,255,0.1) !important */

  /* background-color: rgba(255,255,255,0.1) !important */
  // background-color: rgba(255,255,255,0.15) !important
  // background-color: rgba(255,255,255,0.18) !important
  // background-color: rgba(100,100,100,0.1) !important
  // LAST
  // background-color: rgba(150,150,150,0.1) !important
  // background-color: rgba(185,185,185,0.1) !important
  // background-color: rgba(200,200,200,0.1) !important
  // box-shadow: 1px 1px 0px rgba(255,255,255,0.5) !important
</style>
