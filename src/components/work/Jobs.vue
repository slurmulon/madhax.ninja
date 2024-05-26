<template>
    <v-row wrap>
      <v-col
        v-for="job in jobs"
        :key="job.company"
        cols="12"
        xl="6"
      >
        <job-card :job="job" />
      </v-col>
    </v-row>
</template>

<script setup>
import { jobs } from '@/use/work'
import JobCard from './JobCard'
</script>
