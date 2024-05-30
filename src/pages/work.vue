<template>
  <page v-once>
    <section-title text="Career">
    <!-- <section-title text="Career" style="padding-top: 4.5em"> -->
      <template #title-items>
        <icon-linked-in />
      </template>
    </section-title>

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
/* import SkillCard from '@/components/work/SkillCard' */

/* import { definePage } from 'vue-router/auto' */

/* definePage({ */
/*   alias: ['/work'], */
/*   /1* meta: { *1/ */
/*   /1*   requiresAuth: true, *1/ */
/*   /1* }, *1/ */
/* }) */
</script>

<!-- <route lang="json">
{
  "name": "work",
  "path": "/work",
  "meta": {
    "isLayout": true,
  }
}
</route> -->
