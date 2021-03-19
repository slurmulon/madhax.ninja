<template>
  <v-row
    wrap
    justify="center"
  >
    <v-col
      v-for="book in books"
      :key="book.title"
      cols="6"
      sm="4"
      lg="3"
      xl="2"
    >
      <a
        :href="book.url"
        target="_blank"
        class="white--text text-decoration-none title-1"
      >
        <v-sheet
          :href="book.url"
          outlined
          rounded
          elevation="2"
          height="100"
          color="rgba(100,100,100,0.25)"
          class="d-flex align-center justify-center text-center font-weight-light pa-3"
        >
            {{ book.title }}
        </v-sheet>
      </a>
    </v-col>
  </v-row>
</template>

<script>
import { books } from '@/use/about'

import Placeholder from '@/components/Placeholder'

export default {
  data: () => ({ books }),
  components: { Placeholder }
}
</script>
