<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
      >
        <v-row>
          <v-col cols="12">
            <h1 class="light-blue--text text--lighten-4">Career</h1>
          </v-col>

          <v-col
            v-for="job in jobs"
            :key="job.company"
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
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
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
                    />
                  </v-row>
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
                    <div class="text-subheading">{{ job.title }}<br/>
                    <span class="grey--text text--lighten-3 text-body-2 font-weight-thin">{{ job.time }}</span></div>
                  </v-col>

                  <v-col cols="12">
                    <p
                      v-for="detail in job.details"
                      :key="detail"
                      class="font-weight-thin"
                      style="word-break: break-word"
                    >
                      {{ detail }}
                    </p>
                  </v-col>

                  <v-col
                    cols="12"
                    pt-2
                  >
                    <v-row
                      wrap
                      justify="end"
                    >
                      <v-col
                        v-for="tool in job.tools"
                        :key="tool.id"
                        class="text-xs-center"
                      >
                        <a
                          :href="tool.url"
                          target="_blank"
                        >
                          <img
                            :src="require(`../../public/img/${tool.icon}`)"
                            width="40"
                          >
                        </a>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-title>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            class="pb-0"
          >
            <h1 class="light-blue--text text--lighten-4">Projects</h1>
          </v-col>

          <v-col
            cols="12"
            class="pb-0"
          >
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
                    >
                      <v-img
                        v-if="project.logo"
                        :src="require(`../../public/img/${project.logo}`)"
                        max-width="65"
                      />
                      <span
                        v-if="project.emoji"
                        class="display-3 secondary--text cell-shade"
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
                        <span class="caption white--text">{{ project.desc }}</span>
                      </v-col>

                      <!-- <v-col cols="12"> -->
                      <!--   <v-row -->
                      <!--     nowrap -->
                      <!--     justify="end" -->
                      <!--   > -->
                      <!--     <v-col -->
                      <!--       v-for="tool in project.tools" -->
                      <!--       :key="tool.id" -->
                      <!--       cols="3" -->
                      <!--       md="2" -->
                      <!--       class="text-center" -->
                      <!--     > -->
                      <!--       <a -->
                      <!--         v-if="tool.icon" -->
                      <!--         :href="tool.url" -->
                      <!--         target="tool" -->
                      <!--         class="cell-shade" -->
                      <!--       > -->
                      <!--         <v-img -->
                      <!--           :src="require(`../../public/img/${tool.icon}`)" -->
                      <!--           width="40" -->
                      <!--         /> -->
                      <!--       </a> -->
                      <!--     </v-col> -->
                      <!--   </v-row> -->
                      <!-- </v-col> -->
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { jobs, projects } from '@/use/work'
import { all as tools } from '@/use/tools'

export default {
  data: () => ({
    jobs,
    projects,
    tools
  })
}
</script>
