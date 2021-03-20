<template>
  <v-col
    cols="12"
    class="mt-3 pb-1"
  >
    <v-row
      nowrap
      align="center"
    >
      <v-col>
        <h1 class="light-blue--text text--lighten-4">
          {{ text }}
        </h1>
      </v-col>

      <v-spacer />

      <v-col class="text-right">
        <slot name="title-items" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>
