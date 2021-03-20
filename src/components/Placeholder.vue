<template>
  <v-row
    class="fill-height ma-0"
    align="center"
    justify="center"
    :style="{ 'background': filled ? 'rgba(255,255,255,0.2)' : null }"
  >
    <v-progress-circular
      indeterminate
      width="3"
      :color="color"
      :style="{ opacity }"
      v-bind="$attrs"
    />
  </v-row>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'grey lighten-4'
    },

    opacity: {
      type: [Number, String],
      required: false,
      default: 0.25
    },

    filled: Boolean
  }
}
</script>
