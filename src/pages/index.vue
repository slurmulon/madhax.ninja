<template>
  <page offset v-once>
    <template #hero>
      <hero />
    </template>

    <div ref="content">
      <section-card title="Profile">
        <template #title-items>
          <icon-linked-in class="mr-2" />
          <icon-github />
        </template>

        <template #default>
          <v-card-text class="font-weight-light">
            <p class="mb-4">Welcome! My name is <span class="font-weight-bold">Erik Vavro</span>.</p>
            <p class="mb-4">I'm a <span class="font-weight-bold">software architect</span> specializing in <span class="font-weight-bold">web and browser technology</span> with over {{ yearsActive }} years of coding experience.</p>
            <p class="mb-4">I'm absolutely passionate about using everything the web has to offer to create elegant applications that are built to grow.</p>
            <p class="mb-4">I believe in life-long learning, embracing quality from the beginning, and taking a people-first approach to development.</p>
            <!-- <p>I especially love working on projects that improve people's lives by giving them new perspectives of the world and/or themselves.</p> -->
            <p>
              <span>If you're interested in collaboration or have an opportunity, please feel free to <router-link to="/contact" class="text-white">reach out</router-link>.</span>&nbsp;
              <span>Also be sure to see my <router-link to="/work" class="text-white">past and current work</router-link>.</span>
            </p>
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
    </div>
  </page>
</template>

<script setup lang="ts">
import Tools from '@/components/about/Tools'
import Interests from '@/components/about/Interests'
import Philosophy from '@/components/about/Philosophy'
import Bookshelf from '@/components/about/Bookshelf'

import Page from '@/components/Page'
import Hero from '@/components/Hero'
import SectionCard from '@/components/SectionCard'
import IconLinkedIn from '@/components/icons/LinkedIn'
import IconGithub from '@/components/icons/Github'

import { useRouteMotion } from '@/use/motions'
import { usePageTitle } from '@/use/page'

const title = usePageTitle()

const content = ref<HTMLElement>()

const yearsActive = computed(() => new Date().getFullYear() - 2005)

const motion = useRouteMotion(content, {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      type: 'keyframes',
      stiffness: '75',
      duration: 200,
      delay: 1200,
      ease: 'easeIn',
    },
  },
})
</script>

<route lang="yaml">
name: about
path: /
meta:
  reveal: true
</route>
