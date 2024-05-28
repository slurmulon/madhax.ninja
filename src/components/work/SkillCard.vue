<template>
  <v-card
    append-icon="mdi-open-in-new"
    class="py-4"
    color="surface-variant"
    href="https://vuetifyjs.com/"
    prepend-icon="mdi-text-box-outline"
    rel="noopener noreferrer"
    rounded="lg"
    subtitle="Learn about all things Vuetify in our documentation."
    target="_blank"
    title="Documentation"
    variant="text"
  >
    <v-overlay
      opacity=".06"
      scrim="primary"
      contained
      model-value
      persistent
    />
  </v-card>
</template>
