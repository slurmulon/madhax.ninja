<template>
  <section-card
    color="rgba(255,255,255,0.7)"
    class="job-card mt-4"
  >
    <v-hover v-slot="{ hover }">
      <v-img
        :src="`../../../public/img/${job.banner}`"
        cover
        color="#111"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        rounded="lg"
        height="250"
        alt=""
        position="center 50%"
      >
        <template #placeholder>
          <placeholder
            filled
            cover
            color="primary"
            opacity="1"
          />
        </template>
      </v-img>
    </v-hover>

    <v-card-title
      primary-title
      class="position-relative text-surface rounded-t-lg mt-n8"
      style="background: #ddd"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="order-0 flex-shrink-1 flex-grow-0 text-center mt-2 mt-sm-0"
        >
          <a
            :href="job.url"
            :aria-label="`Visit ${job.company}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              :src="`../../../public/img/${job.logo}`"
              :alt="`${job.company} Logo`"
              :height="job.logoHeight ?? null"
              :width="job.logoWidth ?? 150"
            />
          </a>
        </v-col>

        <v-divider class="hidden-sm" />

        <v-col
          class="order-last order-sm-first flex-grow-1 text-left pt-0 mt-3"
        >
          <div class="display-3">{{ job.company }}</div>
          <div class="font-weight-bold text-subtitle-1">{{ job.title }}<br/>
          <div>
            <v-icon
              size="small"
              color="grey-darken-2"
              aria-hidden="false"
            >
              mdi-calendar
            </v-icon>
            <span class="text-body-2">{{ job.time }}</span></div>
          </div>
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

defineOptions({
  inheritAttrs: true
})

defineProps({
  job: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="sass" scoped>
.job-details
  > p:last-child
    margin-bottom: 0
</style>
