<template>
  <section-card
    light
    color="rgba(255,255,255,0.8)"
    class="mb-3"
    v-bind="$attrs"
  >
    <v-hover v-slot="{ hover }">
      <v-img
        :src="require(`../../../public/img/${job.banner}`)"
        height="200"
      >
        <template #placeholder>
          <placeholder
            filled
            color="grey darken-2"
            opacity="1"
          />
        </template>

        <template #default>
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
        </template>
      </v-img>
    </v-hover>

    <v-card-title primary-title>
      <v-row>
        <v-col
          cols="12"
          class="text-center pb-3"
        >
          <a :href="job.url">
            <img
              :src="require(`../../../public/img/${job.logo}`)"
              style="width: 150px"
            >
          </a>
        </v-col>

        <v-col
          cols="12"
          class="text-center pt-0"
        >
          <div class="font-weight-bold text-subtitle-1">{{ job.title }}<br/>
          <span class="text-body-2 font-weight-light">{{ job.time }}</span></div>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="12" class="job-details">
          <p
            v-for="detail in job.details"
            :key="detail"
            style="word-break: break-word"
          >
            {{ detail }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </section-card>
</template>

<script>
import SectionCard from '@/components/SectionCard'
import Placeholder from '@/components/Placeholder'

import IconTool from '@/components/icons/Tool'
/* import IconLinkedIn from '@/components/icons/LinkedIn' */

export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    expand: false
  }),

  components: {
    SectionCard,
    Placeholder,
    IconTool
    /* IconLinkedIn */
  }
}
</script>

<style lang="sass" scoped>
.job-details
  > p:last-child
    margin-bottom: 0
</style>
