<template>
  <page>
    <section-title text="Career">
      <template #title-items>
        <icon-linked-in />
      </template>
    </section-title>

    <jobs />
    <projects />
  </page>
</template>

<script>
import Jobs from '@/components/work/Jobs'
import Projects from '@/components/work/Projects'
import Page from '@/components/Page'
import SectionTitle from '@/components/SectionTitle'
import IconLinkedIn from '@/components/icons/LinkedIn'

export default {
  components: {
    Jobs,
    Projects,
    Page,
    SectionTitle,
    IconLinkedIn
  }
}
</script>
