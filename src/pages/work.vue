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

<script setup lang="ts">
import Jobs from '@/components/work/Jobs'
import Projects from '@/components/work/Projects'
import Page from '@/components/Page'
import SectionTitle from '@/components/SectionTitle'
import IconLinkedIn from '@/components/icons/LinkedIn'

import { usePageTitle } from '@/use/page'

const title = usePageTitle('Work Portfolio')
</script>

<route lang="yaml">
name: work
path: /work
</route>
