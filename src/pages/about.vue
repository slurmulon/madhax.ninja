<template>
  <page>
    <template #hero>
      <hero />
    </template>

    <div
      v-motion
      :initial="{
        opacity: 0
      }"
      :enter="{
        opacity: 1,
        transition: {
          type: 'keyframes',
          duration: 200,
          delay: 600,
          ease: 'easeIn'
        }
      }"
      :leave="{
        opacity: 1
      }"
    >

    <section-card
      title="Profile"
    >
      <template #title-items>
        <icon-linked-in class="mr-2" />
        <icon-github />
      </template>

      <template #default>
        <v-card-text class="font-weight-light">
          <p class="mb-4">Welcome! My name is Erik Vavro.</p>
          <p class="mb-4">I'm a software architect specializing in web and browser technology with over {{ yearsActive }} years of coding experience.</p>
          <p class="mb-4">I'm absolutely passionate about using everything the web has to offer to create elegant applications that are built to grow.</p>
          <p>I believe in life-long learning, embracing quality from the beginning and taking a people-first approach to development.</p>
          <!-- <span>If you're interested in collaboration or have an opportunity, please feel free to <router-link to="/contact" class="underline">reach out</router-link>.</span>&nbsp;
          <span>Also be sure to see my <router-link to="/work">past and current work</router-link>.</span> -->
        </v-card-text>
      </template>
    </section-card>

    <section-card title="Tools">
      <v-card-text>
        <tools />
      </v-card-text>
    </section-card>

    <section-card title="Interests">
      <v-card-text>
        <interests />
      </v-card-text>
    </section-card>

    <section-card title="Philosophy">
      <v-card-text>
        <philosophy />
      </v-card-text>
    </section-card>

    <section-card title="Bookshelf">
      <v-card-text>
        <bookshelf />
      </v-card-text>
    </section-card>

    <!-- <contact-button /> -->
    </div>
  </page>
</template>

<script setup>
import Tools from '@/components/about/Tools'
import Interests from '@/components/about/Interests'
import Philosophy from '@/components/about/Philosophy'
import Bookshelf from '@/components/about/Bookshelf'
import ContactButton from '@/components/ContactButton'

import Page from '@/components/Page'
import Hero from '@/components/Hero'
import SectionCard from '@/components/SectionCard'
import IconLinkedIn from '@/components/icons/LinkedIn'
import IconGithub from '@/components/icons/Github'

const yearsActive = computed(() => new Date().getFullYear() - 2005)
</script>
