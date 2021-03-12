<template>
  <v-row class="ma-0 pa-0">
    <v-col
      v-if="title"
      cols="12"
      class="pb-0"
    >
      <v-row
        nowrap
        align="center"
      >
        <v-col>
          <h1 class="light-blue--text text--lighten-4">
            {{ title }}
          </h1>
        </v-col>

        <v-spacer />

        <v-col class="text-right">
          <slot name="title-items" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-card color="transparent">
        <slot />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
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
