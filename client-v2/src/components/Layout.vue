<template>
  <v-app>
    <slot name="header" />
    <v-main>
      <slot />
    </v-main>
    <slot name="footer" />
  </v-app>
</template>
