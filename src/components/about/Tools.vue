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
          cols="3"
          sm="4"
          lg="4"
          class="text-center"
        >
          <icon-tool
            :value="tool"
            aspect-ratio="1"
          />
        </v-col>
        <v-col
          cols="8"
          sm="8"
          lg="8"
        >
          <span class="font-weight-light">{{ tool.title }}</span>
          <v-progress-linear
            v-model="tool.level"
            color="cyan lighten-4"
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
