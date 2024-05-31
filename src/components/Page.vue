<template>
  <div
    class="page"
    :style="{ 'margin-top': offset ? 'calc(var(--v-layout-top) * -1)' : 0 }"
  >
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

    <v-container class="fill-height">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="8"
          offset-md="2"
          class="pb-3"
          style="z-index: 1"
        >
          <v-row>
            <slot />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const slots = useSlots()

const hasSlot = (name) => {
  return !!slots[name]
}

defineProps({
  fixed: {
    type: Boolean,
    required: false,
    default: false,
  },

  offset: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="sass" scoped>
.page.fixed
  position: fixed

</style>
