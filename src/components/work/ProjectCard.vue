<template>
  <v-card
    :title="project.title"
    :subtitle="project.desc"
    :href="project.url"
    :aria-label="project.title"
    target="_blank"
    rel="noopener noreferrer"
    color="secondary"
    height="100%"
    rounded="lg"
    append-icon="mdi-open-in-new"
    variant="tonal"
  >
    <template #prepend-icon>
      <div
        v-if="project.emoji"
        class="text-h2 mt-4 text-secondary cell-shade"
      >
        {{ project.emoji }}
      </div>
    </template>

    <v-overlay
      opacity=".06"
      scrim="primary"
      contained
      model-value
      persistent
    />
  </v-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Project } from '@/use/work'

const props = defineProps({
  project: Object as PropType<Project>
})
</script>
