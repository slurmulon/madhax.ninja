<template>
  <a
    :href="tool.url"
    :alt="tool.title"
    :aria-label="`Visit ${tool.title}`"
    :class="classes"
    target="_blank"
    rel="noopener noreferrer"
  >
    <v-img
      :src="`../../../public/img/${tool.icon}`"
      :alt="tool.title"
      width="40"
      v-bind="$attrs"
    >
      <template #placeholder>
        <placeholder />
      </template>
    </v-img>
  </a>
</template>

<script>
import { resolve } from '@/use/tools'

import Placeholder from '@/components/Placeholder'

export default {
  props: {
    value: {
      type: [String, Object],
      required: true
    },

    classes: {
      type: [String, Array],
      required: false
    }
  },

  computed: {
    tool: ({ value }) => resolve(value)
  },

  components: { Placeholder }
}
</script>
