<template>
  <section-card
    light
    color="rgba(255,255,255,0.8)"
    class="job-card mb-4"
    v-bind="$attrs"
  >
    <v-img
      :src="require(`../../../public/img/${job.banner}`)"
      height="200"
    >
      <template #placeholder>
        <placeholder
          filled
          color="grey"
          opacity="1"
        />
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
          <span class="text-body-2 font-weight-thin">{{ job.time }}</span></div>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text>
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

        <!-- TODO: Consider re-enabling. Feels like it adds to much clutter right now. -->
        <!-- <v-col -->
        <!--   cols="12" -->
        <!--   class="pt-0" -->
        <!-- > -->
        <!--   <v-row -->
        <!--     align="center" -->
        <!--     justify="center" -->
        <!--   > -->
        <!--     <v-col -->
        <!--       v-for="tool in job.tools" -->
        <!--       :key="tool.id" -->
        <!--       class="d-flex shrink px-4 text-center" -->
        <!--     > -->
        <!--       <icon-tool :value="tool" /> -->
        <!--     </v-col> -->
        <!--   </v-row> -->
        <!-- </v-col> -->
      </v-row>
    </v-card-text>
  </section-card>
</template>

<script>
import SectionCard from '@/components/SectionCard'
import Placeholder from '@/components/Placeholder'

import IconTool from '@/components/icons/Tool'
import IconLinkedIn from '@/components/icons/LinkedIn'

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
    IconTool,
    IconLinkedIn
  }
}
</script>

<style lang="sass">
//.jobs-section .job-card
//  .v-card
//    background-color: rgba(255,255,255,0.15) !important
</style>
