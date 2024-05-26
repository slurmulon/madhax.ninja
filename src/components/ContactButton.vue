<template>
  <v-tooltip
    top
    color="grey-darken-3"
    aria-label="Contact me"
    open-delay="200"
  >
    <template #activator="{ on, attrs }">
      <v-fab
        to="/contact"
        ripple
        icon="mdi-chat"
        position="fixed"
        location="bottom right"
        variant="elevated"
        color="amber-lighten-3"
        aria-label="Contact me"
        class="elevation-4"
      />
    </template>

    <span>Contact me</span>
  </v-tooltip>
</template>
