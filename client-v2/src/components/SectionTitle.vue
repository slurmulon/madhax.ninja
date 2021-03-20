<template>
  <v-col
    cols="12"
    class="pb-0"
  >
    <v-row
      nowrap
      align="center"
    >
      <v-col class="pb-1">
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
