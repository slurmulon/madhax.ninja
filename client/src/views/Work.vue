<template>
  <layout>
    <navbar slot="header"></navbar>

    <!-- <section class="content"> -->
    <v-content>
      <v-layout row wrap>
        <v-flex xs1 offset-sm3>
          <h1 class="mt-4">Employment</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 v-for="job in jobs" :key="job.company" class="mb-4">
          <!-- TODO: employmemt, projects, approach, process, philosophy -->
          <v-card>
            <!-- <v-card-media -->
            <!--   src="https://s3.amazonaws.com/vuetify-docs/images/cards/sunshine.jpg" -->
            <!--   height="200px" -->
            <!-- > -->
            <!-- </v-card-media> -->

            <v-card-media
              :src="require(`@/assets/img/${job.banner}`)"
              height="200px"
            ></v-card-media>

            <v-card-title primary-title>
              <!-- <v-layout row wrap> -->
              <!--   <v-flex xs1 sm8> -->
                  <v-layout column nowrap>
                    <v-flex class="text-xs-center pb-3">
                      <img :src="require(`@/assets/img/${job.logo}`)" style="width: 150px">
                    </v-flex>
                    <v-flex xs1>
                      <!-- <div class="headline blocky-flat">{{ job.company }}</div> -->
                      <div class="grey--text">{{ job.title }} <span class="blue-grey--text">{{ job.time }}</span></div>
                    </v-flex>
                    <v-flex xs1 pt-2>
                      {{ job.desc }}
                    </v-flex>
                  </v-layout>
                <!-- </v-flex> -->
              <!-- </v-layout> -->
            </v-card-title>

            <!-- <v-card-actions> -->
            <!--   <v-btn flat>Share</v-btn> -->
            <!--   <v-btn flat color="purple">Explore</v-btn> -->
            <!--   <v-spacer></v-spacer> -->
            <!-- </v-card-actions> -->

            <!-- <v-slide-y-transition> -->
            <!--   <v-card-text v-show="show"> -->
            <!--     I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. -->
            <!--   </v-card-text> -->
            <!-- </v-slide-y-transition> -->
          </v-card>
        <!-- </section> -->
          </v-flex>
          </v-layout>
        </v-content>

        <footer slot="footer">
      <back></back>
    </footer>
  </layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import Back from '@/components/footers/Back'
import Layout from '@/components/Layout'

export default {
  data: () => ({
    jobs: [
      { company: 'Ceres Imaging', logo: 'ceres.png', banner: 'job-ceres.png', title: 'Senior Software Engineer', time: 'Feb. 2017 - Present', desc: 'Blah blah blah' },
      { company: 'Sihten', logo: 'sighten.png', banner: 'job-sighten.png', title: 'Platform Architect', time: 'Oct. 2015 - Mar. 2016' },
      { company: 'Sungevity', logo: 'sungevity.png', banner: 'job-sungevity.jpg', title: 'Senior Software Engineer', time: 'Summer 2013 - Summer 2015', desc: 'Aww yeah' }
    ]
  }),
  components: {
    Navbar,
    Back,
    Layout
  }
}
</script>

<style lang="stylus" scoped>
.application
  padding 1em
</style>
