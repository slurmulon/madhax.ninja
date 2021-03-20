<template>
  <v-col
    cols="12"
    class="pa-0 ma-0"
  >
    <job-card
      v-for="job in jobs"
      :key="job.company"
      :job="job"
    />
  </v-col>
</template>

<script>
import { jobs } from '@/use/work'

import JobCard from './JobCard'

export default {
  data: () => ({ jobs }),
  components: { JobCard }
}
</script>
