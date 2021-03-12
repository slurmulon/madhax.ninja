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
      <v-sheet color="transparent">
        <v-img
          class="white--text"
          height="200px"
          max-width="200px"
          aspect-ratio="1"
          :src="require(`../../../public/img/book-${book.file}`)"
        >
          <template #placeholder>
            <placeholder filled />
          </template>
        </v-img>
      </v-sheet>
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
