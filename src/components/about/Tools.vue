<template>
  <v-row
    wrap
    align="start"
  >
    <v-col
      v-for="tool in tools"
      :key="tool.id"
      cols="6"
      sm="4"
      xl="3"
    >
      <v-row
        nowrap
        align="center"
      >
        <v-col
          style="flex: 0 0 64px"
          class="text-center"
        >
          <icon-tool
            :value="tool"
            aspect-ratio="1"
          />
        </v-col>
        <v-col
          class="flex-grow-1"
        >
          <div class="font-weight-regular mb-2">{{ tool.title }}</div>
          <v-progress-linear
            v-model="tool.level"
            color="primary"
            :aria-label="`${tool.title} Experience`"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { specialties as tools } from '@/use/tools'

import IconTool from '@/components/icons/Tool'

export default {
  data: () => ({ tools }),
  components: { IconTool }
}
</script>
