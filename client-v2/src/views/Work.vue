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
          <v-col class="pb-1">
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
import Jobs from '@/components/work/Jobs'
import Projects from '@/components/work/Projects'
import Page from '@/components/Page'
import IconLinkedIn from '@/components/icons/LinkedIn'
export default {
  components: {
    Jobs,
    Projects,
    Page,
    IconLinkedIn
  }
}
</script>
