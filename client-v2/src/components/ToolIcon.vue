<template>
  <a
    :href="tool.url"
    :class="classes"
    target="_blank"
  >
    <v-img
      :src="require(`../../public/img/${tool.icon}`)"
      width="40"
      v-bind="$attrs"
    >
      <template #placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
            style="opacity: 0.25"
          />
        </v-row>
      </template>
    </v-img>
  </a>
</template>

<script>
import { resolve } from '@/use/tools'

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
  }
}
</script>
