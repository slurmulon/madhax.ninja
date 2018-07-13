<template>
  <layout>
    <navbar slot="header"></navbar>

    <v-content>
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex xs1 offset-sm3>
            <h1>Employment</h1>
          </v-flex>
          <v-flex xs12 sm6 offset-sm3 v-for="job in jobs" :key="job.company" class="mb-4">
            <!-- TODO: employmemt, projects, approach, process, philosophy -->
            <v-card class="subtle-bg elevation-4">
              <v-card-media
                :src="require(`@/assets/img/${job.banner}`)"
                height="200px"
              ></v-card-media>

              <v-card-title primary-title>
                <!-- <v-layout row wrap> -->
                <!--   <v-flex xs1 sm8> -->
                    <v-layout column nowrap>
                      <v-flex class="text-xs-center pb-3">
                        <a :href="job.url">
                          <img :src="require(`@/assets/img/${job.logo}`)" style="width: 150px">
                        </a>
                      </v-flex>
                      <v-flex xs1>
                        <!-- <div class="headline blocky-flat">{{ job.company }}</div> -->
                        <div class="blue-grey--text">{{ job.title }} <span class="grey--text">{{ job.time }}</span></div>
                      </v-flex>
                      <v-flex xs1 pt-2>
                        {{ job.desc }}
                      </v-flex>
                    </v-layout>
                  <!-- </v-flex> -->
                <!-- </v-layout> -->
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs1 offset-sm3>
            <h1 class="mt-4">Projects</h1>
          </v-flex>
        </v-layout>
      </v-container>
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

// TODO: create a centralized bank / store of tools that's shared between About.vue and Work.vue
// TODO: add relevant links to each job (such as news articles, demos, etc.)

export default {
  data: () => ({
    jobs: [
      {
        company: 'Ceres Imaging',
        url: 'https://ceresimaging.net',
        logo: 'ceres.png',
        banner: 'job-ceres.png',
        title: 'Senior Software Engineer',
        time: 'Feb. 2017 - Present',
        desc: 'Architected and implemented a VueJS progressive web application for viewing advanced aerial imagery over agriculture fields, allowing farmers to obtain detailed insights into the status and health of their crops. Contributed greatly to the design and implementation of a RESTful platform API that helped to unify a highly diverse engineering team and its services. Created a partner application for Climate Corp that allowed shared customers to view their imagery in both FieldView and Ceres Imaging.',
        tools: [
          { name: 'VueJS' },
          { name: 'Vuetify' },
          { name: 'Leaflet' },
          { name: 'Django' },
          { name: 'Webpack' },
          { name: 'Cordova' },
          { name: 'Nginx' }
        ]
      },
      {
        company: 'Sighten',
        url: 'https://www.sighten.io',
        logo: 'sighten.png',
        banner: 'job-sighten.jpg',
        title: 'Platform Architect',
        time: 'Oct. 2015 - Feb. 2017',
        desc: 'Architected and implented an AngularJS single page application that enabled solar companies to manage everything from quoting and finances to system design and energy production estimations. Levereged hypermedia and application-level semantics in order to achieve a high degree of flexibility and customization. Also made significant contributions to the RESTful API and its design, particularly around the incorporation of hypermedia.',
        tools: [
          { name: 'Angular' },
          { name: 'Semantic UI' },
          { name: 'Django' },
          { name: 'JSON Hyper-Schema' },
          { name: 'Webpack' },
          { name: 'Nginx' }
        ]
      },
      {
        company: 'Sungevity',
        url: 'https://oursungevity.com',
        logo: 'sungevity.png',
        banner: 'job-sungevity.jpg',
        title: 'Senior Software Engineer',
        time: 'Summer 2013 - Summer 2015',
        desc: 'Designed and implemented an AngularJS single page application (known as the iQuote) that allows potential customers to experiment with a variety of customizations to their solar system, especially their various financing options, and to monitor their system\'s energy performance after it has gone live. The iQuote was fully internationalized and supported nearly limitless partner-specific customizations. Also made significant contributions to the the RESTful platform API and layed the groundwork for an aggregated/cross-partner financing service based on Akka and Drools.',
        tools: [
          { name: 'AngularJS' },
          { name: 'D3' },
          { name: 'Scala' },
          { name: 'Play!' },
          { name: 'Akka' },
          { name: 'Siren' },
          { name: 'Nginx' },
          { name: 'Vagrant' }
        ]
      }
    ],

    projects: [
      { title: 'bach', logo: 'bach.gif', active: true },
      { title: 'blot', active: false },
      { title: 'flap', active: false },
      { title: 'virtual-web-dev', active: true },
      { title: 'tasty-commits', actie: true },
      { title: 'fractule', active: false }
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
