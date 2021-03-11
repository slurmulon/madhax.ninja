<template>
  <v-container>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" pt-2>
          <v-row row nowrap>
            <v-col xs6>
              <h1 class="light-blue--text text--lighten-4">Profile</h1>
            </v-col>
            <v-col xs6 class="text-xs-right">
              <v-btn icon light href="https://github.com/slurmulon">
                <v-icon light color="black">fab fa-github</v-icon>
              </v-btn>
              <v-btn icon light href="https://linkedin.com/in/evavro">
                <v-icon light color="black">fab fa-linkedin-in</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-card class="pb-4">
            <v-row column wrap>
              <v-col cols="12" class="font-weight-light">
                <p>Welcome! My name is Erik Vavro.</p>
                <p>I'm a remote software engineer specializing in progressive web applications with over 18 years of coding experience.</p>
                <p>I'm absolutely passionate about learning all things web and creating elegant applications that are built to grow.</p>
                <p>I also believe in life-long learning, focusing on quality from the beginning and taking a people-first approach to development.</p>
                <span>If you're interested in collaboration or have an opportunity, please feel free to <router-link to="/contact" class="white--text underline">reach out</router-link>.</span>
                <span>Also be sure to see my <router-link to="/work" class="white--text underline">past and current work</router-link>.</span>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12">
          <h1 class="light-blue--text text--lighten-4 mt-4">Tools</h1>

          <v-card class="pt-4 pb-4">
            <v-row row wrap>
              <v-col
                v-for="tool in tools"
                :key="tool.id"
                xs6
                md4>
                <v-row row nowrap>
                  <v-col xs4 sm6 lg4 class="text-xs-center">
                    <a :href="tool.url" target="tool" class="cell-shade">
                      <!-- <img :src="`/static/img/${tool.icon}`" class="shiny-icon" style="width: 40px"> -->
                      <v-img :src="require(`../../public/img/${tool.icon}`)" width="40" />
                    </a>
                  </v-col>
                  <v-col xs8 sm6 lg8>
                    <span class="font-weight-light">{{ tool.title }}</span>
                    <v-progress-linear v-model="tool.level" color="cyan lighten-4"></v-progress-linear>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <h1 class="light-blue--text text--lighten-4 mt-4">Interests</h1>
        <v-col cols="12">
          <v-card class="pt-4 pb-4">
            <v-row row wrap>
              <v-col
                v-for="interest in interests"
                :key="interest"
                xs6
                md4
                class="text-xs-center"
              >
                <span class="font-weight-light">{{ interest }}</span>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <h1 class="light-blue--text text--lighten-4 mt-4">Philosophy</h1>
        <v-col cols="12">
          <v-card class="pt-4 pb-4">
            <v-row column wrap>
              <v-col
                v-for="(philosophy, index) in philosophies"
                :key="index"
                cols="12"
              >
                <i class="font-weight-light">&quot;{{ philosophy.quote }}&quot;</i> <span class="grey--text text-darken-2 font-weight-thin">&mdash; {{ philosophy.credit }}</span>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <h1 class="light-blue--text text--lighten-4 mt-4">Bookshelf</h1>
        <v-row row wrap>
          <v-col
            v-for="book in books"
            :key="book.title"
            xs6
            md4
          >
            <v-card flat tile class="elevation-4">
              <v-img
                class="white--text align-end"
                height="200px"
                max-width="150px"
                :src="require(`../../public/img/book-${book.file}`)"
              />
              <!-- <v-card-media -->
              <!--   :src="`/static/img/book-${book.file}`" -->
              <!--   height="200px" -->
              <!-- ></v-card-media> -->
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { books, interests, philosophies } from '@/use/about'
import { all as tools } from '@/use/tools'

export default {
  data: () => ({
    tools,
    books,
    interests,
    philosophies
  })
}
</script>
