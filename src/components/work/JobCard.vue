<template>
  <section-card
    light
    color="rgba(255,255,255,0.7)"
    class="job-card mt-4"
  >
    <!-- color="rgba(255,255,255,0.7)" -->
    <!-- color="rgba(91,83,94,0.65)" -->
    <!-- color="rgba(91,83,94,0.4)" -->

    <!-- <v-card-title primary-title class="">
      <a :href="job.url">
        <img
          :src="`../../../public/img/${job.logo}`"
          :height="48"
        />

        <span class="ml-3">{{ job.company }}</span>
      </a>

    </v-card-title>
    <v-divider /> -->

    <v-hover v-slot="{ hover }">
      <v-img
        :src="`../../../public/img/${job.banner}`"
        color="black"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        cover
        height="250"
        alt=""
      >
        <template #placeholder>
          <placeholder
            filled
            color="surface"
            opacity="1"
          />
        </template>

        <!-- <template #default>
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text"
              style="height: 100%; background: rgba(50,50,50,0.8);"
            >
              <v-row
                align="center"
                justify="center"
              >
                <v-col
                  v-for="tool in job.tools"
                  :key="tool.id"
                  class="d-flex shrink px-4 text-center"
                >
                  <icon-tool :value="tool" />
                </v-col>
              </v-row>

            </div>
          </v-expand-transition>
        </template> -->
      </v-img>
    </v-hover>

    <v-card-title
      primary-title
      class="position-relative text-surface rounded-t-lg"
      style="margin-top: -8px; background: #ddd; "
    >
      <!-- class="position-relative rounded-t-lg bg-light-blue-lighten-5"
      style="margin-top: -8px; background: #b5ccd5; " -->
      <!-- class="position-relative rounded-t-lg bg-raisin-surface" -->
      <!-- style="margin-top: -8px; background: hsla(250,6%,22%,1)" -->
      <v-row align="center">
        <v-col
          class="flex-shrink-1 flex-grow-0 order-0 text-left pb-3"
        >
          <a
            :href="job.url"
            :aria-label="`Visit ${job.company}`"
            rel="noopener noreferrer"
          >
            <v-img
              :src="`../../../public/img/${job.logo}`"
              :alt="`${job.company} Logo`"
              :height="job.logoHeight ?? null"
              :width="job.logoWidth ?? 150"
            />

            <!-- <img
              :src="require(`../../../public/img/${job.logo}`)"
              style="width: 150px"
            > -->
          </a>
        </v-col>

        <v-col
          class="order-first flex-grow-1 text-left pt-0 mt-3"
        >
          <div class="display-3">{{ job.company }}</div>
          <div class="font-weight-bold text-subtitle-1">{{ job.title }}<br/>
          <span class="text-body-2 font-weight-light">{{ job.time }}</span></div>
        </v-col>
      </v-row>
    </v-card-title>

    <!-- <v-divider color="surface" opacity="1" thickness="1" /> -->

    <v-card-text class="text-surface" style="outline: 1px solid black">
      <v-row>
        <v-col cols="12" class="job-details">
          <p
            v-for="detail in job.details"
            :key="detail"
            class="mt-4"
            style="word-break: break-word"
          >
            {{ detail }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </section-card>
</template>

<script setup>
import SectionCard from '@/components/SectionCard'
import Placeholder from '@/components/Placeholder'

import IconTool from '@/components/icons/Tool'
/* import IconLinkedIn from '@/components/icons/LinkedIn' */

defineOptions({
  inheritAttrs: true
})

defineProps({
  job: {
    type: Object,
    required: true,
  }
})

const expand = ref(false)

/* export default { */
/*   props: { */
/*     job: { */
/*       type: Object, */
/*       required: true */
/*     } */
/*   }, */

/*   data: () => ({ */
/*     expand: false */
/*   }), */

/*   components: { */
/*     SectionCard, */
/*     Placeholder, */
/*     IconTool */
/*     /1* IconLinkedIn *1/ */
/*   } */
/* } */
</script>

<style lang="sass" scoped>
.job-details
  > p:last-child
    margin-bottom: 0
</style>
