<template>
  <page>
    <v-row>
      <v-col
        cols="12"
        class="pb-0"
      >
        <v-row
          nowrap
          align="center"
        >
          <v-col>
            <h1 class="light-blue--text text--lighten-4">Career</h1>
          </v-col>
          <v-spacer />
          <v-col class="text-right">
            <icon-linked-in />
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-for="job in jobs"
        :key="job.company"
        cols="12"
        class="mb-4"
      >
        <!-- TODO: approach, process -->
        <v-card
          color="transparent"
          class="subtle-bg elevation-4"
        >
          <v-img
            :src="require(`../../public/img/${job.banner}`)"
            height="200"
          >
            <template #placeholder>
              <placeholder filled />
            </template>
          </v-img>

          <v-card-title primary-title>
            <v-row>
              <v-col
                cols="12"
                class="text-center pb-3"
              >
                <a :href="job.url">
                  <img
                    :src="require(`../../public/img/${job.logo}`)"
                    style="width: 150px"
                  >
                </a>
              </v-col>

              <v-col
                cols="12"
                class="text-center pt-0"
              >
                <div class="font-weight-bold text-subtitle-1">{{ job.title }}<br/>
                <span class="grey--text text--lighten-3 text-body-2 font-weight-thin">{{ job.time }}</span></div>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="white--text">
            <v-row>
              <v-col cols="12">
                <p
                  v-for="detail in job.details"
                  :key="detail"
                  class="font-weight-light"
                  style="word-break: break-word"
                >
                  {{ detail }}
                </p>
              </v-col>

              <v-col
                cols="12"
                class="pt-0"
              >
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col
                    v-for="tool in job.tools"
                    :key="tool.id"
                    class="d-flex shrink px-4 text-center"
                  >
                    <icon-tool :value="tool" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        class="pb-0"
      >
        <v-row
          nowrap
          align="center"
        >
          <v-col>
            <h1 class="light-blue--text text--lighten-4">Profile</h1>
          </v-col>
          <v-spacer />

          <v-col class="text-right">
            <icon-github />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-card color="transparent">
          <v-card-text>
            <v-row wrap>
              <v-col
                v-for="project in projects"
                :key="project.title"
                v-if="project.active"
                cols="12"
                xl="6"
              >
                <v-row
                  nowrap
                  align="center"
                  class="pa-2"
                >
                  <v-col
                    cols="3"
                    class="text-center pa-0"
                  >
                    <a
                      :href="project.url"
                      target="project"
                      class="text-decoration-none"
                    >
                      <v-img
                        v-if="project.logo"
                        :src="require(`../../public/img/${project.logo}`)"
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

                  <v-col cols="9">
                    <v-row>
                      <v-col
                        cols="12"
                        class="pb-0"
                      >
                        <span class="headline white--text">{{ project.title }}</span>
                      </v-col>
                      <v-col cols="12">
                        <span class="caption font-weight-light white--text">{{ project.desc }}</span>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </page>
</template>

<script>
import { jobs, projects } from '@/use/work'

import Page from '@/components/Page'
import Placeholder from '@/components/Placeholder'
import IconTool from '@/components/icons/Tool'
import IconLinkedIn from '@/components/icons/LinkedIn'
import IconGithub from '@/components/icons/Github'

export default {
  data: () => ({
    jobs,
    projects
  }),

  components: {
    Page,
    Placeholder,
    IconTool,
    IconLinkedIn,
    IconGithub
  }
}
</script>
