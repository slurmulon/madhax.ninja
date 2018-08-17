<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap id="work-container">
      <v-flex xs12 md6 offset-md3 pb-0> <!-- sm3 -->
        <h1 class="light-blue--text text--lighten-4">Career</h1>
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
            <v-layout column nowrap>
              <v-flex class="text-xs-center pb-3">
                <a :href="job.url">
                  <img :src="require(`@/assets/img/${job.logo}`)" style="width: 150px">
                </a>
              </v-flex>
              <v-flex xs1 class="text-xs-center pt-0">
                <!-- <div class="headline blocky-flat">{{ job.company }}</div> -->
                <div class="blue-grey--text subheading">{{ job.title }}<br/><span class="grey--text body-2 font-weight-thin">{{ job.time }}</span></div>
              </v-flex>
              <v-flex xs1 pt-2 pl-4 pr-4>
                <!-- {{ job.desc }} -->
                <p v-for="detail in job.details" :key="detail" class="font-weight-thin">{{ detail }}</p>
              </v-flex>
              <v-flex xs1 pt-2>
                <v-layout row wrap justify-end>
                  <v-flex
                    xs2
                    v-for="tool in job.tools"
                    :key="tool.id"
                    class="text-xs-center"
                  >
                    <!-- {{ tool.icon }} -->
                    <a :href="tool.url" target="tool">
                      <img :src="require(`@/assets/img/${tool.icon}`)" class="shiny-icon" style="width: 40px">
                    </a>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 md6 offset-md3 pt-0 pb-0> <!-- sm3 -->
        <h1 class="light-blue--text text--lighten-4">Projects</h1>
        <!-- <h1 class="grey--text text--lighten-2">Projects</h1> -->
        <!-- <h1 class="primary--text">Projects</h1> -->
      </v-flex>
      <v-flex xs12 md6 offset-md3 pt-4>
        <v-layout row wrap>
          <v-flex xs12 xl6 v-for="project in projects" :key="project.title" v-if="project.active">
            <v-layout row nowrap align-start pa-2>
              <v-flex xs3 class="text-xs-center" pa-0>
                <a :href="project.url" target="project">
                  <img v-if="project.logo" :src="require(`@/assets/img/${project.logo}`)" style="max-width: 65px">
                  <span v-if="project.emoji" class="display-3 secondary--text cell-shade">{{ project.emoji }}</span>
                </a>
              </v-flex>
              <v-flex xs9>
                <v-layout column wrap>
                  <v-flex xs1 pt-0 pb-0>
                    <span class="headline white--text">{{ project.title }}</span>
                  </v-flex>
                  <v-flex xs1>
                    <span class="caption white--text">{{ project.desc }}</span>
                  </v-flex>
                  <v-flex xs1>
                    <v-layout row nowrap justify-end>
                      <v-flex xs3 v-for="tool in project.tools" :key="tool.id" class="text-xs-right">
                        <a v-if="tool.icon" :href="tool.url" target="tool" class="cell-shade">
                          <img :src="require(`@/assets/img/${tool.icon}`)" class="shiny-icon" style="width: 40px">
                        </a>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AOS from 'aos'
import { mapState } from 'vuex'

// DOCUMENT: `data` is called before `created` and `mounted`, therefore `methods` and `getters` are not available in this context
// DOCUMENT: one Vue gotcha is that you always need to provide high-level object keys for data that will be used, even if that data is `null` or `[]` or `{}` initially and is populated asynchronously or in some other defered way. this has to do with how Vue's property data synchronization system works
//   - one way around this is to instead change your `data` properties into `computed` properties
//   - write a blog article about this

export default {
  data: () =>  ({
    jobs: [],
    projects: []
  }),

  computed: {
    ...mapState('tools', {
      tools: 'all'
    })
  },

  mounted () {
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
            'Integrated an API Blueprint-based mock server that enabled orthogonal yet transparent development of the client and API.',
            'Created a partner application for Climate Corp that allowed shared customers to view their imagery in both FieldView and Ceres Imaging.'
          ],
          tools: this.toolsById(['vue', 'vuetify', 'django', 'postgres', 'webpack', 'api-blueprint'])
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
          tools: this.toolsById(['angular', 'semantic-ui', 'django', 'json-schema', 'webpack', 'postgres'])
        },
        {
          company: 'Sungevity',
          url: 'https://oursungevity.com',
          logo: 'sungevity.png',
          banner: 'job-sungevity.jpg',
          title: 'Senior Software Engineer',
          time: 'Summer 2013 - Summer 2015',
          details: [
            'Lead the development of an AngularJS single page application (known as OurSungevity) that allowed potential customers to experiment with a variety of customizations to their solar system, especially their various financing options, and to monitor their system\'s energy performance after it went live. The application was fully internationalized and could be customized for partners to nearly any degree.',
            'Regularly contributed to the the hypermedia-driven RESTful platform API and layed the groundwork for an aggregated/cross-partner financing service based on Akka and Drools.',
            'Contributed towards a mock development environment that supported dynamic and conditional stubbing, decoupling the development of APIs and their clients.'
          ],
          tools: this.toolsById(['angular', 'd3', 'scala', 'play', 'akka', 'siren', 'vagrant'])
        }
      ],

      projects: [
        {
          title: 'bach',
          logo: 'bach.gif',
          active: true,
          desc: 'Semantic musical notation focused on readability and productivity',
          url: 'https://github.com/slurmulon/bach',
          tools: this.toolsById(['clojure']) // ebnf
        },
        {
          title: 'hyper-mesh',
          emoji: '🌐',
          active: true,
          tools: ['js', 'json-schema'],
          desc: 'Semantic JSON Hyper-Schema interactions via Axios',
          url: 'https://github.com/slurmulon/hyper-mesh',
          tools: this.toolsById(['js', 'json-schema'])
        },
        {
          title: 'blot',
          emoji: '☔',
          active: true,
          desc: 'A DRY and dynamic build tool for API Blueprint supporting transclusion, scripting and data generation',
          url: 'https://github.com/slurmulon/blot',
          tools: this.toolsById(['js', 'api-blueprint'])
        },
        {
          title: 'flap',
          emoji: '🗿',
          active: false,
          tools: ['js'],
          desc: 'Functional guard clauses in JS',
          url: 'https://github.com/slurmulon/flap',
          tools: this.toolsById(['js'])
        },
        {
          title: 'grapple',
          emoji: '🍏',
          active: true,
          desc: 'Pragmatic and flexible Webhook API for Elixir',
          url: 'https://github.com/camirmas/grapple',
          tools: this.toolsById(['elixir'])
        },
        {
          title: 'virtual-web-dev',
          emoji: '⚡',
          active: true,
          desc: 'Low-friction development process for modern web applications',
          url: 'https://github.com/slurmulon/virtual-web-dev',
          tools: this.toolsById(['api-blueprint', 'vagrant'])
        },
        {
          title: 'tasty-commits',
          emoji: '🍭',
          active: true,
          desc: 'Commit message convention for easily digestable history streams',
          url: 'https://github.com/slurmulon/tasty-commits',
          tools: this.toolsById(['git'])
        }
        // {
        //  title: 'fractule',
        //  active: false,
        //  desc: 'Abstract fractal generator based on Playing with Chaos',
        //  tools: ['js']
        // }
      ]
    })
  },

  methods: {
    toolsById (tools) {
      return (this.tools || []).filter(tool => tools.includes(tool.id))
    }
  }
}
</script>

<style lang="stylus" scoped>
.application
  padding 1em
</style>
