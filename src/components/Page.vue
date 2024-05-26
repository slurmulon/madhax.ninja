<template>
  <v-container
    v-if="hasSlot('hero')"
    no-gutters
    fluid
    class="pa-0"
  >
    <v-col
      cols="12"
      class="pa-0 mb-n4"
      style="z-index: 0"
    >
      <slot name="hero" />
    </v-col>
  </v-container>

  <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="pb-3 mb-3"
        style="z-index: 1"
      >
        <v-row>
          <slot />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const slots = useSlots()

const hasSlot = (name) => {
  return !!slots[name]
}
</script>
