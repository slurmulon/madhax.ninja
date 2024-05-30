<template>
  <v-row
    wrap
    justify="start"
  >
    <v-col
      v-for="(book, index) in books"
      :key="book.title"
      cols="6"
      sm="4"
      lg="3"
      xl="2"
    >
      <v-card
        :href="book.url"
        :aria-label="book.title"
        target="_blank"
        rel="noopener noreferrer"
        height="100"
        rounded="lg"
        elevation="2"
        hover
        variant="outlined"
        color="primary"
        v-motion
        :initial="{
          opacity: 0,
          scale: 0.825,
        }"
        :leave="{
          opacity: 1,
          scale: 1,
        }"
        :visible="{
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: '150',
            delay: (index * 10),
            duration: 400,
          },
        }"
        :hovered="{
          scale: 1.075,
          transition: {
            type: 'spring',
            stiffness: '100',
            delay: 100,
          },
        }"
        class="d-flex align-center justify-center text-center font-weight-regular pa-3"
      >
        <!-- color="hsla(270.77deg, 15.11%, 55%, 0.15)" -->
        <!-- color="hsla(200.77deg, 18.11%, 35%, 0.2)" -->
        <!-- color="hsla(270.77deg, 15.11%, 55%, 0.15)" -->
        <!-- color="hsla(220.77deg, 10.11%, 35%, 0.7)" -->
        <!-- color="rgba(22,22,22,0.25)" -->
        <!-- color="rgba(22,22,22,0.2)" -->
        {{ book.title }}
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { books } from '@/use/about'

/* import Placeholder from '@/components/Placeholder' */
</script>
