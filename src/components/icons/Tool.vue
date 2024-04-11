<template>
  <a
    :href="tool.url"
    :alt="tool.title"
    :class="classes"
    target="_blank"
  >
    <v-img
      :src="require(`../../../public/img/${tool.icon}`)"
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
