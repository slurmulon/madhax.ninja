<template>
  <div>
    <v-content>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-container grid-list-xl fluid>
            <v-flex xs12 pt-2>
              <v-layout row nowrap>
                <v-flex xs6>
                  <h1 class="light-blue--text text--lighten-4">Profile</h1>
                </v-flex>
                <v-flex xs6 class="text-xs-right">
                  <v-btn icon light href="https://github.com/slurmulon">
                    <v-icon light color="black">fab fa-github</v-icon>
                  </v-btn>
                  <v-btn icon light href="https://linkedin.com/in/evavro">
                    <v-icon light color="black">fab fa-linkedin-in</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-card class="pb-4">
                <v-layout column wrap>
                  <v-flex xs12 class="font-weight-light">
                    <p>Welcome! My name is Erik Vavro.</p>
                    <p>I'm a remote software engineer specializing in progressive web applications with over 15 years of coding experience.</p>
                    <p>I'm passionate about learning all things web, creating beautiful apps and writing high-quality code that's built to last.</p>
                    <p>I believe in life-long learning, focusing on quality from the beginning and taking a people-first approach to development.</p>
                    <span>If you're interested in collaboration or have an opportunity, please feel free to <router-link to="/contact" class="white--text underline">reach out</router-link>.</span>
                    <span>Also be sure to see my <router-link to="/work" class="white--text underline">past and current work</router-link>.</span>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <h1 class="light-blue--text text--lighten-4 mt-4">Tools</h1>
            <v-flex xs12>
              <v-card class="pt-4 pb-4">
                <v-layout row wrap>
                  <v-flex
                    v-for="tool in tools"
                    :key="tool.id"
                    xs6
                    md4>
                    <v-layout row nowrap>
                      <v-flex xs4 sm6 lg4 class="text-xs-center">
                        <a :href="tool.url" target="tool" class="cell-shade">
                          <!-- <img :src="`/static/img/${tool.icon}`" class="shiny-icon" style="width: 40px"> -->
                          <img :src="`/static/img/${tool.icon}`" style="width: 40px">
                        </a>
                      </v-flex>
                      <v-flex xs8 sm6 lg8>
                        <span class="font-weight-light">{{ tool.title }}</span>
                        <v-progress-linear v-model="tool.level" color="cyan lighten-4"></v-progress-linear>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <h1 class="light-blue--text text--lighten-4 mt-4">Interests</h1>
            <v-flex xs12>
              <v-card class="pt-4 pb-4">
                <v-layout row wrap>
                  <v-flex
                    v-for="interest in interests"
                    :key="interest"
                    xs6
                    md4
                    class="text-xs-center"
                  >
                    <span class="font-weight-light">{{ interest }}</span>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <h1 class="light-blue--text text--lighten-4 mt-4">Philosophy</h1>
            <v-flex xs12>
              <v-card class="pt-4 pb-4">
                <v-layout column wrap>
                  <v-flex
                    v-for="(philosophy, index) in philosophies"
                    :key="index"
                    xs12
                  >
                    <i class="font-weight-light">&quot;{{ philosophy.quote }}&quot;</i> <span class="grey--text text-darken-2 font-weight-thin">&mdash; {{ philosophy.credit }}</span>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <h1 class="light-blue--text text--lighten-4 mt-4">Bookshelf</h1>
            <v-layout row wrap>
              <v-flex
                v-for="book in books"
                :key="book.title"
                xs6
                md4
              >
                <v-card flat tile class="elevation-4">
                  <v-card-media
                    :src="`/static/img/book-${book.file}`"
                    height="200px"
                  ></v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
    interests: [
      'Hypermedia', 'Streaming', 'Decentralization', 'Semantics', 'Timers', 'Synchronization', 'Music',
      'Fractals', 'Imagery', 'Self-improvement', 'Health', 'Ergonomics'
    ],
    philosophies: [
      { quote: 'Humility, respect, trust.', credit: 'Team Geek' },
      { quote: 'Perfection is achieved not when there is nothing left to add, but when there is nothing left to take away.', credit: 'Antoine de Saint-Exupéry' },
      { quote: 'Quality software takes the least amount of time to develop. If you have code that is simple as possible, tests that are complete and a design that fits just right, additions and changes happen in the fastest possible way because the impact is lowest.', credit: 'Cunningham & Cunningham' },
      { quote: 'You don\'t have to write it now, just don\'t prevent it from happening later.', credit: 'Andy Hull' },
      { quote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', credit: 'Brian W. Kernighan' }
    ]
  }),
  computed: {
    ...mapState('tools', {
      tools: state => state.all.filter(tool => !(['npm', 'angular', 'leaflet', 'semantic-ui', 'scala', 'akka', 'siren', 'vagrant', 'play'].includes(tool.id)))
    })
  }
}
</script>

<style lang="stylus" scoped>
// TODO: remove the need for this (easy)
.v-card
  background none !important
  box-shadow none !important
  color white
</style>
