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
            v-for="project in list"
            :key="project.title"
            cols="12"
            sm="6"
            xl="4"
          >
            <project-card :project="project" />
            <!-- <v-row
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
                  :aria-label="project.title"
                  target="project"
                  class="text-decoration-none"
                  rel="noopenner noreferrer"
                >
                  <div
                    v-if="project.emoji"
                    class="text-h2 mt-4 text-secondary cell-shade"
                  >
                    {{ project.emoji }}
                  </div>
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
                      class="text-h5 text-white text-decoration-none"
                      style="font-family: Oxygen, sans-serif !important"
                    >
                      {{ project.title }}
                    </a>
                  </v-col>
                  <v-col cols="12">
                    <span class="caption font-weight-regular">{{ project.desc }}</span>
                  </v-col>
                </v-row>
              </v-col>
            <!-- </v-row> -->
          </v-col>
        </v-row>
      </v-card-text>
    </template>
  </section-card>
</template>

<script setup>
import { projects } from '@/use/work'

import SectionCard from '@/components/SectionCard'
import ProjectCard from '@/components/work/ProjectCard'
import IconGithub from '@/components/icons/Github'

const list = projects.filter(({ active }) => active)
</script>
