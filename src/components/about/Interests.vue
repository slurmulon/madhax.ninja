<template>
  <v-row wrap>
    <v-col
      v-for="interest in interests"
      :key="interest"
      cols="6"
      sm="4"
      lg="3"
      xl="2"
      class="text-center"
    >
      <span class="font-weight-regular">{{ interest }}</span>
    </v-col>
  </v-row>
</template>

<script setup>
import { interests } from '@/use/about'
</script>
