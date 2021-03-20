<template>
  <page>
    <section-card title="Career">
      <template #title-items>
        <icon-linked-in />
      </template>

      <template #default>
        <v-card-text>
          <jobs />
          <projects />
        </v-card-text>
      </template>
    </section-card>
  </page>
</template>

<script>
import Jobs from '@/components/work/Jobs'
import Projects from '@/components/work/Projects'

import Page from '@/components/Page'
import SectionCard from '@/components/SectionCard'
import IconLinkedIn from '@/components/icons/LinkedIn'

export default {
  components: {
    Jobs,
    Projects,
    Page,
    SectionCard,
    IconLinkedIn
  }
}
</script>
