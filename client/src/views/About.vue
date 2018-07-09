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
                  <v-layout column wrap>
                    <v-flex xs12 style="font-size: 1.25em">
                      <p>Hi there! My name is Erik Vavro.</p>
                      <p>I am a remote software engineer specializing in progressive web applications with over 15 years of coding experience.</p>
                      <p>I am passionate about learning all things web and writing high-quality code that's built to last.</p>
                      <p>I believe in doing the right things early on and taking a people-first approach to development.</p>
                      <span>If you are interested in collaboration or have an opportunity, please feel free to <router-link to="/contact">contact me</router-link>.</span>
                    </v-flex>
                    <!-- <v-flex xs12 class="text-xs-right"> -->
                    <!--   <v-btn icon light> -->
                    <!--     <v-icon light></v-icon> -->
                    <!--   </v-btn> -->
                    <!-- </v-flex> -->
                  </v-layout>
                  <!-- TODO: github, linkedin, blog -->
                </v-card>
              </v-flex>

              <h1 class="mt-4">Tools</h1>
              <v-flex xs12>
                <v-card class="blocky-flat elevation-4 pa-4">
                  <v-layout row wrap>
                    <v-flex
                      v-for="tool in tools"
                      :key="tool.name"
                      xs6
                      md4>
                      <v-layout row nowrap>
                        <v-flex xs4 sm6 lg4>
                          <a :href="tool.url" target="tool">
                            <img :src="require(`@/assets/img/${tool.icon}`)" class="shiny-icon" style="width: 50px">
                          </a>
                        </v-flex>
                        <v-flex xs8 sm6 lg8>
                          <span>{{ tool.title }}</span>
                          <v-progress-linear v-model="tool.level"></v-progress-linear>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <!-- <span class="title">Projects</span> -->
              <h1 class="mt-4">Approach</h1>
              <h1 class="mt-4">Interests</h1>
              <!-- hypermedia, synchronization, streaming, decentralization, timers, fractals, self-improvement, music -->
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
      { title: 'Thinking in Promises', file: 'thinking-in-promises.jpeg' },
      { title: 'Graph Databases', file: 'graph-databases.jpg' },
      { title: 'Principles of Object-Oriented JavaScript', file: 'principles-object-oriented-js.jpg' },
      { title: 'Programming Elixir', file: 'programming-elixir.jpg' },
      { title: 'Clojure for the Brave and True', file: 'clojure-brave-and-true.jpg' },
      { title: 'Team Geek', file: 'team-geek.jpg' },
      { title: 'Peopleware', file: 'peopleware.jpg' },
      { title: 'Joel on Software', file: 'joel-on-software.jpg' },
      { title: 'The Productive Programmer', file: 'productive-programmer.jpg' },
      { title: 'The Start Up J-Curve', file: 'start-up-j-curve.jpg' },
      { title: 'Soft Skills', file: 'soft-skills.jpg' },
      { title: 'Notes on the Synthesis of Form', file: 'notes-on-form.jpg' }
    ],
    tools: [
      { title: 'JavaScript', url: 'https://nodejs.org', icon: 'node-js.png', level: 100 },
      { title: 'HTML5', url: 'https://www.w3.org/TR/html52/', icon: 'html5.png', level: 80 },
      { title: 'CSS3', url: 'http://css-tricks.com', icon: 'css3.png', level: 75 },
      { title: 'Elixir', url: 'https://elixir-lang.org', icon: 'elixir.png', level: 50 },
      { title: 'Clojure', url: 'https://clojure.org', icon: 'clojure.png', level: 50 },
      { title: 'Python', url: 'https://python.org', icon: 'python.png', level: 75 },
      { title: 'Vue', url: 'https://vuejs.org', icon: 'vuejs.png', level: 75 },
      { title: 'Phoenix', url: 'https://phoenixframework.org', icon: 'phoenix.png', level: 50 },
      { title: 'Django', url: 'https://djangoproject.com', icon: 'django.png', level: 75 },
      { title: 'PostgreSQL', url: 'https://postgresql.org', icon: 'postgresql.png', level: 75 },
      { title: 'JSON Schema', url: 'https://jsonschema.org', icon: 'json-schema-logo.png', level: 90 },
      { title: 'API Blueprint', url: 'https://apiblueprint.org', icon: 'api-blueprint.png', level: 90 },
      { title: 'NPM', url: 'https://npmjs.com', icon: 'npm.png', level: 90 },
      { title: 'Webpack', url: 'https://webpack.js.org', icon: 'webpack.png', level: 75 },
      { title: 'D3', url: 'https://d3js.org', icon: 'd3.png', level: 60 },
      { title: 'Vim', url: 'https://vim.org', icon: 'vim.png', level: 75 },
      { title: 'Git', url: 'https://git-scm.com', icon: 'git.png', level: 90 },
      { title: 'Nginx', url: 'https://nginx.com', icon: 'nginx.png', level: 65 }
    ]
  }),
  components: {
    Navbar,
    Layout
  }
}
</script>
