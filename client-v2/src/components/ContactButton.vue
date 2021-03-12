<template>
  <v-tooltip
    top
    open-delay="200"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        to="/contact"
        fab
        light
        small
        ripple
        bottom
        right
        fixed
        color="primary"
        class="elevation-4"
        v-on="on"
        v-bind="attrs"
      >
        <v-icon
          light
          class="black--text"
        >
          chat
        </v-icon>
      </v-btn>
    </template>

    <span>Contact me</span>
  </v-tooltip>
</template>
