<template>
  <layout>
    <navbar slot="header"></navbar>

    <v-content>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <!-- <v-card> -->
            <v-container grid-list-xl fluid>
              <h1>Summary</h1>
              <v-flex xs12>
                <v-card class="blocky-flat elevation-4 pa-4">
                  <p>Hi there! My name is Erik Vavro.</p>
                  <p>I'm a remote software engineer specializing in progressive web applications.</p>
                  <p>I love learning about all things web and writing beautiful code.</p>
                  <p>I believe in doing the right thing early on and take a people-first approach to development.</p>
                  <span>If you are interested in collaborating or have an opportunity, please feel free to <router-link to="/contact">contact me</router-link>.</span>
                  <!-- TODO: github, linkedin, blog -->
                </v-card>
              </v-flex>

              <h1 class="mt-4">Skills</h1>
              <v-flex xs12>
                <v-card class="blocky-flat elevation-4 pa-4">
                  <v-layout row wrap>
                    <v-flex
                      v-for="skill in skills"
                      :key="skill.name"
                      xs4>
                      <a :href="skill.url" target="tool">
                        <img :src="require(`@/assets/img/${skill.icon}`)" style="height: 50px">
                      </a>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <!-- <span class="title">Projects</span> -->
              <h1 class="mt-4">Interests</h1>
              <!-- synchronization, streaming, decentralization, fractals -->
              <!-- <span class="philosophy">Philosophy</span> -->

              <h1 class="mt-4">Bookshelf</h1>
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
    ],
    skills: [
      { title: 'JavaScript', url: 'https://nodejs.org', icon: 'node-js.png', level: 100 },
      { title: 'Elixir', url: 'https://elixir-lang.org', icon: 'elixir.png', level: 50 },
      { title: 'Clojure', url: 'https://clojure.org', icon: 'clojure.png', level: 60 }
    ]
  }),
  components: {
    Navbar,
    Layout
  }
}
</script>
