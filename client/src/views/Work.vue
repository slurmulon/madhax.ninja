<template>
  <layout>
    <navbar slot="header"></navbar>

    <v-content>
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex xs12 md6 offset-md3 pb-0> <!-- sm3 -->
            <h1 class="light-blue--text text--lighten-4">Employment</h1>
            <!-- <h1 class="grey--text text--lighten-2">Employment</h1> -->
            <!-- <h1 class="primary--text">Employment</h1> -->
          </v-flex>
          <v-flex xs12 md6 offset-md3 v-for="job in jobs" :key="job.company" class="mb-4"> <!-- sm3 -->
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
                        <!-- {{ job.desc }} -->
                        <p v-for="detail in job.details" :key="detail">{{ detail }}</p>
                      </v-flex>
                      <v-flex xs1 pt-2>
                        <v-layout column wrap d-inline-flex>
                          <v-flex
                            v-for="tool in job.tools"
                            :key="tool.id"
                          >
                            <!-- <img :src="require(`@/assets/img/${tool.icon}`)" class="shiny-icon" style="width: 50px"> -->
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  <!-- </v-flex> -->
                <!-- </v-layout> -->
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 offset-md3 pb-0> <!-- sm3 -->
            <h1 class="light-blue--text text--lighten-4 mt-4">Projects</h1>
            <!-- <h1 class="grey--text text--lighten-2">Projects</h1> -->
            <!-- <h1 class="primary--text">Projects</h1> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!-- <footer slot="footer"> -->
    <!--   <back></back> -->
    <!-- </footer> -->
  </layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import Back from '@/components/footers/Back'
import Layout from '@/components/Layout'
import { mapState } from 'vuex'

// TODO: create a centralized bank / store of tools that's shared between About.vue and Work.vue
// TODO: add relevant links to each job (such as news articles, demos, etc.)

// DOCUMENT: `data` is called before `created` and `mounted`, therefore `methods` and `getters` are not available in this context
// DOCUMENT: one Vue gotcha is that you always need to provide high-level object keys for data that will be used, even if that data is `null` or `[]` or `{}` initially and is populated asynchronously or in some other defered way. this has to do with how Vue's property data synchronization system works

export default {
  data () {
    console.log('data this', this, this.tools, this.tools === undefined)
    // return

    return {
      jobs: [],
      projects: []
    }
  },

  computed: {
    ...mapState('tools', {
      tools: 'all'
      // tools: state => state.all
    })
  },

  mounted () {
    console.log('mounted yo', this, this.tools, this.tools === undefined)

    Object.assign(this, {
      jobs: [
        {
          company: 'Ceres Imaging',
          url: 'https://ceresimaging.net',
          logo: 'ceres.png',
          banner: 'job-ceres.png',
          title: 'Senior Software Engineer',
          time: 'Feb. 2017 - Present',
          details: [
            'Architected and implemented a VueJS progressive web application for viewing advanced aerial imagery over agriculture fields, allowing farmers to obtain detailed insights into the status and health of their crops.',
            'Contributed greatly to the design and implementation of a RESTful platform API that unified a highly diverse engineering team and its services.',
            'Created a partner application for Climate Corp that allowed shared customers to view their imagery in both FieldView and Ceres Imaging.'
          ],
          // tools: ['vue', 'vuetify', 'leaflet', 'django', 'webpack', 'cordova', 'nginx', 'api-blueprint']
          // tools: this.tools.filter(tool => ['vue', 'django', 'webpack', 'nginx', 'api-blueprint'].includes(tool.id))
          tools: this.toolsById(['vue', 'django', 'webpack', 'nginx', 'api-blueprint'])
        },
        {
          company: 'Sighten',
          url: 'https://www.sighten.io',
          logo: 'sighten.png',
          banner: 'job-sighten.jpg',
          title: 'Platform Architect',
          time: 'Oct. 2015 - Feb. 2017',
          details: [
            'Architected and implented an AngularJS single page application that enabled solar companies to manage everything from quoting and finances to system design and energy production estimations.',
            'Levereged hypermedia and application-level semantics in order to achieve a high degree of flexibility and customization.',
            'Made significant contributions to the RESTful API and its design, particularly around the incorporation of hypermedia.'
          ],
          tools: ['angular', 'semantic-ui', 'django', 'json-schema', 'webpack', 'nginx', 'api-blueprint']
        },
        {
          company: 'Sungevity',
          url: 'https://oursungevity.com',
          logo: 'sungevity.png',
          banner: 'job-sungevity.jpg',
          title: 'Senior Software Engineer',
          time: 'Summer 2013 - Summer 2015',
          details: [
            'Designed and implemented an AngularJS single page application (known as OurSungevity) that allowed potential customers to experiment with a variety of customizations to their solar system, especially their various financing options, and to monitor their system\'s energy performance after it went live.',
            'The application was fully internationalized and could be customized for partners to nearly any degree.',
            'Regularly contributed to the the hypermedia-driven RESTful platform API and layed the groundwork for an aggregated/cross-partner financing service based on Akka and Drools.'
          ],
          tools: ['angular', 'd3', 'scala', 'play', 'akka', 'siren', 'nginx', 'vagrant']
        }
      ],

      projects: [
        {
          title: 'bach',
          logo: 'bach.gif',
          active: true,
          tools: ['clojure', 'ebnf'],
          desc: 'A semantic musical notation with a focus on readability and productivity'
        },
        {
          title: 'hyper-mesh',
          active: true,
          tools: ['js', 'json-schema'],
          desc: 'Automagical JSON Hyper-Schema interactions'
        },
        {
          title: 'blot',
          active: true,
          tools: ['js', 'api-blueprint'],
          desc: 'A DRY and dynamic build tool for API Blueprint'
        },
        {
          title: 'flap',
          active: false,
          tools: ['js'],
          desc: 'Functional guard clauses in JS'
        },
        {
          title: 'grapple',
          active: true,
          tools: ['elixir'],
          dsec: 'Pragmatic and flexible Webhook API for Elixir'
        },
        {
          title: 'virtual-web-dev',
          active: true,
          desc: 'Low-friction development process for modern web applications'
        },
        {
          title: 'tasty-commits',
          active: true,
          desc: 'Commit message convention for easily digestable history streams'
        },
        {
          title: 'fractule',
          active: false,
          desc: 'Abstract fractal generator based on Playing with Chaos',
          tools: ['js']
        }
      ]
    })
  },

  methods: {
    toolsById (tools) {
      const res = (this.tools || []).filter(tool => tools.includes(tool.id))

      console.log('tools result', res, this.tools, this)

      return res
    }
  },

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
