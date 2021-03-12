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
          <v-card-text class="font-weight-light">
            <p>Welcome! My name is Erik Vavro.</p>
            <p>I'm a software architect specializing in browser technology with over 18 years of coding experience (10+ working remote).</p>
            <p>I'm absolutely passionate about learning all things web and creating elegant applications that are built to grow.</p>
            <p>I believe in life-long learning, embracing quality from the beginning and taking a people-first approach to development.</p>
            <span>If you're interested in collaboration or have an opportunity, please feel free to <router-link to="/contact" class="white--text underline">reach out</router-link>.</span>&nbsp;
            <span>Also be sure to see my <router-link to="/work" class="white--text">past and current work</router-link>.</span>
          </v-card-text>
        </v-card>
      </v-col>

      <section-card title="Tools">
        <v-card-text class="white--text">
          <tools />
        </v-card-text>
      </section-card>

      <section-card title="Interests">
        <v-card-text class="white--text">
          <interests />
        </v-card-text>
      </section-card>

      <section-card title="Philosophy">
        <v-card-text class="white--text">
          <philosophy />
        </v-card-text>
      </section-card>

      <section-card title="Bookshelf">
        <v-card-text>
          <bookshelf />
        </v-card-text>
      </section-card>
    </v-row>
  </page>
</template>

<script>
import Tools from '@/components/about/Tools'
import Interests from '@/components/about/Interests'
import Philosophy from '@/components/about/Philosophy'
import Bookshelf from '@/components/about/Bookshelf'

import Page from '@/components/Page'
import SectionCard from '@/components/SectionCard'
import IconLinkedIn from '@/components/icons/LinkedIn'
import IconGithub from '@/components/icons/Github'

export default {
  components: {
    Tools,
    Interests,
    Philosophy,
    Bookshelf,
    Page,
    SectionCard,
    IconLinkedIn,
    IconGithub
  }
}
</script>
