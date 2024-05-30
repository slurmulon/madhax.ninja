<template>
  <v-col
    cols="12"
    class="mt-5 pb-1"
  >
    <v-row
      nowrap
      align="center"
    >
      <v-col>
        <h2 class="text-h2 font-weight-medium text-secondary mb-2">
          {{ text }}
        </h2>
      </v-col>

      <v-spacer />

      <v-col class="text-right">
        <slot name="title-items" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
defineOptions({
  inheritAttrs: true
})

defineProps({
  text: {
    type: String,
    required: false,
  },
})
</script>
