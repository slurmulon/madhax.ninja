<template>
  <page>
    <v-row>
      <!-- TODO: Create SectionCardTitle to remove this duplication -->
      <v-col
        cols="12"
        class="pb-0"
      >
        <v-row
          nowrap
          align="center"
        >
          <v-col>
            <h1 class="light-blue--text text--lighten-4">Career</h1>
          </v-col>
          <v-spacer />
          <v-col class="text-right">
            <icon-linked-in />
          </v-col>
        </v-row>
      </v-col>

      <jobs />
      <projects />
    </v-row>
  </page>
</template>

<script>
import { jobs, projects } from '@/use/work'

// import Career from '@/components/work/Career'
import Jobs from '@/components/work/Jobs'
import Projects from '@/components/work/Projects'

import Page from '@/components/Page'
import SectionCard from '@/components/SectionCard'
import Placeholder from '@/components/Placeholder'
import IconTool from '@/components/icons/Tool'
import IconLinkedIn from '@/components/icons/LinkedIn'
import IconGithub from '@/components/icons/Github'

export default {
  data: () => ({
    jobs,
    projects
  }),

  components: {
    // Career,
    Jobs,
    Projects,
    Page,
    SectionCard,
    Placeholder,
    IconTool,
    IconLinkedIn,
    IconGithub
  }
}
</script>
