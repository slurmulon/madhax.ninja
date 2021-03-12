<template>
  <page>
    <v-row
      nowrap
      align="center"
    >
      <v-col>
        <h1 class="light-blue--text text--lighten-4">Profile</h1>
      </v-col>
      <v-spacer />

      <v-col class="text-right">
        <icon-linked-in />
        <icon-github />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        class="pt-0"
      >
        <v-card color="transparent">
          <v-card-text class="white--text font-weight-light">
            <p>Welcome! My name is Erik Vavro.</p>
            <p>I'm a software architect specializing in browser technology with over 18 years of coding experience (10+ working remote).</p>
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
          <v-card-text class="white--text">
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
                <v-row
                  nowrap
                  align="center"
                >
                  <v-col
                    cols="3"
                    sm="4"
                    lg="4"
                    class="text-center"
                  >
                    <icon-tool
                      :value="tool"
                      aspect-ratio="1"
                    />
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
                <span class="white--text font-weight-light">{{ interest }}</span>
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
            <v-row wrap>
              <v-col
                v-for="(philosophy, index) in philosophies"
                :key="index"
                cols="12"
              >
                <i class="white--text font-weight-light">&quot;{{ philosophy.quote }}&quot;</i>&nbsp;
                <span class="grey--text text--lighten-2 font-weight-thin">&mdash; {{ philosophy.credit }}</span>
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
  </page>
</template>

<script>
import { books, interests, philosophies } from '@/use/about'
import { specialties as tools } from '@/use/tools'

import Page from '@/components/Page'
import IconTool from '@/components/icons/Tool'
import IconLinkedIn from '@/components/icons/LinkedIn'
import IconGithub from '@/components/icons/Github'

export default {
  data: () => ({
    tools,
    books,
    interests,
    philosophies
  }),

  components: {
    Page,
    IconTool,
    IconLinkedIn,
    IconGithub
  }
}
</script>
