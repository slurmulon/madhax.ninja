<template>
  <v-col cols="12" class="pa-0 ma-0">
    <section-card
      v-for="job in jobs"
      :key="job.company"
      color="transparent"
      class="mb-4"
    >
      <v-img
        :src="require(`../../../public/img/${job.banner}`)"
        height="200"
      >
        <template #placeholder>
          <placeholder filled />
        </template>
      </v-img>

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
            <span class="grey--text text--lighten-3 text-body-2 font-weight-thin">{{ job.time }}</span></div>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="white--text">
        <v-row>
          <v-col cols="12">
            <p
              v-for="detail in job.details"
              :key="detail"
              class="font-weight-light"
              style="word-break: break-word"
            >
              {{ detail }}
            </p>
          </v-col>

          <v-col
            cols="12"
            class="pt-0"
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
          </v-col>
        </v-row>
      </v-card-text>
    </section-card>
  </v-col>
</template>

<script>
import { jobs } from '@/use/work'

import SectionCard from '@/components/SectionCard'
import Placeholder from '@/components/Placeholder'

import IconTool from '@/components/icons/Tool'
import IconLinkedIn from '@/components/icons/LinkedIn'

export default {
  data: () => ({ jobs }),
  components: {
    SectionCard,
    Placeholder,
    IconTool,
    IconLinkedIn
  }
}
</script>
