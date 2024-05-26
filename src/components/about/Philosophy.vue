<template>
  <v-row wrap>
    <v-col
      v-for="(philosophy, index) in philosophies"
      :key="index"
      cols="12"
    >
      <i class="white--text font-weight-light">&quot;{{ philosophy.quote }}&quot;</i>&nbsp;
      <span class="grey--text text--lighten-2 font-weight-thin">&mdash; {{ philosophy.credit }}</span>
    </v-col>
  </v-row>
</template>

<script setup>
import { philosophies } from '@/use/about'
</script>
