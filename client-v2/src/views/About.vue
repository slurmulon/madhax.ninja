<template>
  <page>
    <v-row>
      <section-card title="Profile">
        <template #title-items>
          <icon-linked-in />
          <icon-github />
        </template>

        <template #default>
          <v-card-text class="white--text font-weight-light">
            <p>Welcome! My name is Erik Vavro.</p>
            <p>I'm a software architect specializing in web browser technology with over 18 years of coding experience.</p>
            <p>I'm absolutely passionate about learning all things web and creating elegant applications that are built to grow.</p>
            <p>I believe in life-long learning, embracing quality from the beginning and taking a people-first approach to development.</p>
            <span>If you're interested in collaboration or have an opportunity, please feel free to <router-link to="/contact" class="white--text underline">reach out</router-link>.</span>&nbsp;
            <span>Also be sure to see my <router-link to="/work" class="white--text">past and current work</router-link>.</span>
          </v-card-text>
        </template>
      </section-card>

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
