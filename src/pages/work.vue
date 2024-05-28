<template>
  <page>
    <section-title text="Career" style="padding-top: 4.5em">
      <template #title-items>
        <icon-linked-in />
      </template>
    </section-title>

    <!-- <v-row>
      <v-col
        v-for="i in 4"
        :key="i"
        cols="6"
      >
        <skill-card />
      </v-col>
    </v-row> -->

    <jobs />
    <projects />
  </page>
</template>

<script setup>
import Jobs from '@/components/work/Jobs'
import Projects from '@/components/work/Projects'
import Page from '@/components/Page'
import SectionTitle from '@/components/SectionTitle'
import IconLinkedIn from '@/components/icons/LinkedIn'
import SkillCard from '@/components/work/SkillCard'
</script>
