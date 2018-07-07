<template>
  <layout>
    <navbar slot="header"></navbar>

    <v-content>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <!-- <v-card> -->
            <v-container grid-list-md fluid>
              <v-layout row wrap>
                <v-flex
                  v-for="book in books"
                  :key="book.title"
                  xs4
                >
                  <v-card flat tile>
                    <!-- <img src="~@/assets/img/book-graph-databases.jpg" style="height: 150px"> -->
                    <v-card-media
                      :src="require(`@/assets/img/book-${book.file}`)"
                      height="150px"
                    ></v-card-media>
                    <!-- <v-card-media -->
                    <!--   :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" -->
                    <!--   height="150px" -->
                    <!-- > -->
                    <!-- </v-card-media> -->
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          <!-- </v-card> -->
        </v-flex>
      </v-layout>
    </v-content>
  </layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'

export default {
  data: () => ({
    books: [
      { title: 'The Pragmatic Programmer', file: 'pragmatic-programmer.jpg' },
      { title: 'High-Performance Browser Networking', file: 'browser-networking.jpg' }
    ]
  }),
  components: {
    Navbar,
    Layout
  }
}
</script>
