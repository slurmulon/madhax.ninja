<template>
  <layout>
    <navbar slot="header"></navbar>

    <v-content>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <!-- <v-card> -->
            <v-container grid-list-xl fluid>
              <v-layout row wrap>
                <v-flex
                  v-for="book in books"
                  :key="book.title"
                  xs4
                >
                  <v-card flat tile class="elevation-4">
                    <v-card-media
                      :src="require(`@/assets/img/book-${book.file}`)"
                      height="200px"
                    ></v-card-media>
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
      { title: 'Restful Web APIs', file: 'restful-web-apis.jpg' },
      { title: 'High-Performance Browser Networking', file: 'browser-networking.jpg' },
      { title: 'Design Patterns', file: 'design-patterns.jpg' },
      { title: 'Fundamentals of Database Systems', file: 'fundementals-of-database-systems.jpeg' },
      { title: '7 Concurrency Models in 7 Weeks', file: 'concurrency-models.jpg' },
      { title: 'Graph Databases', file: 'graph-databases.jpg' },
      { title: 'Principles of Object-Oriented JavaScript', file: 'principles-object-oriented-js.jpg' },
      { title: 'Programming Elixir', file: 'programming-elixir.jpg' },
      { title: 'Clojure for the Brave and True', file: 'clojure-brave-and-true.jpg' },
      { title: 'Team Geek', file: 'team-geek.jpg' },
      { title: 'Peopleware', file: 'peopleware.jpg' },
      { title: 'Joel on Software', file: 'joel-on-software.jpg' },
      { title: 'The Productive Programmer', file: 'productive-programmer.jpg' },
      { title: 'The Start Up J-Curve', file: 'start-up-j-curve.jpg' }
    ]
  }),
  components: {
    Navbar,
    Layout
  }
}
</script>
