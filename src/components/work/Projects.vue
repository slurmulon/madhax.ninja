<template>
  <section-card title="Projects">
    <template #title-items>
      <icon-github />
    </template>

    <template #default>
      <v-card-text>
        <v-row
          wrap
          justify="start"
        >
          <v-col
            v-for="project in projects"
            :key="project.title"
            cols="12"
            sm="6"
            xl="4"
          >
            <v-row
              nowrap
              align="start"
              class="pa-2"
            >
              <v-col
                class="shrink text-center"
                style="flex: 0 0 72px"
              >
                <a
                  :href="project.url"
                  target="project"
                  class="text-decoration-none"
                >
                  <v-img
                    v-if="project.logo"
                    :src="require(`../../../public/img/${project.logo}`)"
                    max-width="65"
                  />
                  <span
                    v-if="project.emoji"
                    class="display-2 secondary--text cell-shade"
                  >
                    {{ project.emoji }}
                </span>
                </a>
              </v-col>

              <v-col>
                <v-row>
                  <v-col
                    cols="12"
                    class="pb-0"
                  >
                    <a
                      :href="project.url"
                      target="_blank"
                      class="headline text-decoration-none white--text"
                    >
                      {{ project.title }}
                    </a>
                  </v-col>
                  <v-col cols="12">
                    <span class="caption font-weight-regular">{{ project.desc }}</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </template>
  </section-card>
</template>

<script>
import { projects } from '@/use/work'

import SectionCard from '@/components/SectionCard'
import IconGithub from '@/components/icons/Github'

export default {
  data: () => ({
    projects: projects.filter(({ active }) => active)
  }),

  components: {
    SectionCard,
    IconGithub
  }
}
</script>
