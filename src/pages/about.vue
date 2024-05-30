<template>
  <page offset v-once>
    <template #hero>
      <hero />
    </template>

    <!-- <div v-show="renderContent"> -->
    <!-- <div
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
        opacity: 0
      }"
    > -->

    <article ref="content">

    <section-card title="Profile">
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
    </article>
  </page>
</template>

<script setup lang="ts">
/* import { onBeforeRouteUpdate } from 'vue-router/auto' */

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
import { whenever, useWindowScroll, useWindowSize } from '@vueuse/core'

/* const { y } = useWindowScroll() */
/* const { height } = useWindowSize() */

/* console.log('win height', height.value) */

/* const renderContent = computed(() => y.value > 4) */
/* const renderContent = ref(false) */

const yearsActive = computed(() => new Date().getFullYear() - 2005)

/* const reset = () => { */
/*   renderContent.value = false */

/*   setTimeout(() => { */
/*     queueMicrotask(() => { */
/*       renderContent.value = true */
/*     }) */
/*   }, 1500) */
/* } */

/* onMounted(reset) */
/* onUpdated(reset) */

/* whenever(() => y.value <= 0, () => { */
/*   /1* console.log('DAS SCROLLED', y.value) *1/ */
/*   queueMicrotask(() => { */
/*     renderContent.value = false */
/*   }) */
/* }) */

/* whenever(() => y.value > 1, () => { */
/*   /1* console.log('DAS SCROLLED', y.value) *1/ */
/*   queueMicrotask(() => { */
/*     renderContent.value = true */
/*   }) */
/* }) */

import { useMotion } from '@vueuse/motion'
import { whenever } from '@vueuse/core'
import { useRoute } from 'vue-router'

const content = ref<HTMLElement>()

const route = useRoute()

whenever(() => route.name === '/about', async () => {
  motion.stop()

  await motion.set('initial')
  await motion.apply('enter')
})


const motion = useMotion(content, {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      type: 'keyframes',
      stiffness: '75',
      duration: 200,
      delay: 1000,
      ease: 'easeIn',
      onComplete: () => {
        console.log('enter complete')
      }
    },
  },
})

      /* v-motion */
      /* :initial="{ */
      /*   opacity: 0 */
      /* }" */
      /* :enter="{ */
      /*   opacity: 1, */
      /*   transition: { */
      /*     type: 'keyframes', */
      /*     duration: 200, */
      /*     delay: 0 * 600, */
      /*     ease: 'easeIn' */
      /*   } */
      /* }" */
      /* :leave="{ */
      /*   opacity: 0 */
      /* }" */

</script>

<!-- <route lang="json">
{
  "name": "about",
  "path": "/about",
  "meta": {
    "isLayout": true,
  }
}
</route> -->
