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
        :alt="book.title"
        target="_blank"
        class="white--text text-decoration-none title-1 "
      >
        <v-sheet
          :href="book.url"
          outlined
          rounded
          height="100"
          elevation="2"
          color="rgba(22,22,22,0.2)"
          class="d-flex align-center justify-center text-center font-weight-regular pa-3"
        >
          {{ book.title }}
        </v-sheet>
      </a>
    </v-col>
  </v-row>
</template>

<script>
import { books } from '@/use/about'

/* import Placeholder from '@/components/Placeholder' */

export default {
  data: () => ({ books })
  /* components: { Placeholder } */
}
</script>
