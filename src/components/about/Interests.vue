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
      <span class="white--text font-weight-regular">{{ interest }}</span>
    </v-col>
  </v-row>
</template>

<script>
import { interests } from '@/use/about'

export default {
  data: () => ({ interests })
}
</script>
