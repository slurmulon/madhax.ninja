<template>
  <v-row
    class="fill-height ma-0"
    align="center"
    justify="center"
    :style="{ 'background': filled ? 'rgba(255,255,255,0.1)' : null }"
  >
    <v-progress-circular
      indeterminate
      color="grey lighten-5"
      style="opacity: 0.25"
    />
  </v-row>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'grey lighten-5'
    },

    filled: Boolean
  }
}
</script>
