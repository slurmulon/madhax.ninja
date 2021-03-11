<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
      >
        <v-row nowrap>
          <v-col>
            <h1 class="light-blue--text text--lighten-4">Profile</h1>
          </v-col>
          <v-spacer />

          <v-col class="text-right">
            <v-btn
              icon
              light
              href="https://github.com/slurmulon"
            >
              <v-icon
                light
                color="black"
              >
                mdi-github
              </v-icon>
            </v-btn>
            <v-btn
              icon
              light
              href="https://linkedin.com/in/evavro"
            >
              <v-icon
                light
                color="black"
              >
                mdi-linkedin
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            class="pt-0"
          >
            <v-card color="transparent">
              <v-card-text class="font-weight-light">
                <p>Welcome! My name is Erik Vavro.</p>
                <p>I'm a remote software architect specializing in browser technology with over 18 years of coding experience (10+ working remote).</p>
                <p>I'm absolutely passionate about learning all things web and creating elegant applications that are built to grow.</p>
                <p>I believe in life-long learning, embracing quality from the beginning and taking a people-first approach to development.</p>
                <span>If you're interested in collaboration or have an opportunity, please feel free to <router-link to="/contact" class="white--text underline">reach out</router-link>.</span>&nbsp;
                <span>Also be sure to see my <router-link to="/work" class="white--text">past and current work</router-link>.</span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            class="pb-0"
          >
            <h1 class="light-blue--text text--lighten-4 mt-4">Tools</h1>
          </v-col>

          <v-col cols="12">
            <v-card color="transparent">
              <v-card-text>
                <v-row
                  wrap
                  align="start"
                >
                  <v-col
                    v-for="tool in tools"
                    :key="tool.id"
                    cols="6"
                    sm="4"
                    xl="3"
                  >
                    <v-row align="center" nowrap>
                      <v-col
                        cols="3"
                        sm="4"
                        lg="4"
                        class="text-center"
                      >
                        <a
                          :href="tool.url"
                          target="_blank"
                          class="cell-shade"
                        >
                          <v-img
                            :src="require(`../../public/img/${tool.icon}`)"
                            width="40"
                          />
                        </a>
                      </v-col>
                      <v-col
                        cols="8"
                        sm="8"
                        lg="8"
                      >
                        <span class="font-weight-light">{{ tool.title }}</span>
                        <v-progress-linear v-model="tool.level" color="cyan lighten-4"></v-progress-linear>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            class="pb-0"
          >
            <h1 class="light-blue--text text--lighten-4 mt-4">Interests</h1>
          </v-col>

          <v-col cols="12">
            <v-card color="transparent">
              <v-card-text>
                <v-row wrap>
                  <v-col
                    v-for="interest in interests"
                    :key="interest"
                    cols="6"
                    sm="4"
                    lg="3"
                    xl="2"
                    class="text-center"
                  >
                    <span class="font-weight-light">{{ interest }}</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            class="pb-0"
          >
            <h1 class="light-blue--text text--lighten-4 mt-4">Philosophy</h1>
          </v-col>

          <v-col cols="12">
            <v-card color="transparent">
              <v-card-text>
                <v-row
                  wrap
                  justify="column"
                >
                  <v-col
                    v-for="(philosophy, index) in philosophies"
                    :key="index"
                    cols="12"
                  >
                    <i class="font-weight-light">&quot;{{ philosophy.quote }}&quot;</i>&nbsp;
                    <span class="grey--text text--lighten-1 font-weight-thin">&mdash; {{ philosophy.credit }}</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            class="pb-0"
          >
            <h1 class="light-blue--text text--lighten-4 mt-4">Bookshelf</h1>
          </v-col>

          <v-col cols="12">
            <v-card color="transparent">
              <v-card-text>
                <v-row justify="center" wrap>
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
                        :src="require(`../../public/img/book-${book.file}`)"
                      >
                        <template #placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                            style="background: rgba(255,255,255,0.1)"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            />
                          </v-row>
                        </template>
                      </v-img>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { books, interests, philosophies } from '@/use/about'
import { specialties as tools } from '@/use/tools'

export default {
  data: () => ({
    tools,
    books,
    interests,
    philosophies
  })
}
</script>
