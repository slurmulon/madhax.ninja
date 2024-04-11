import { each as tools } from '@/use/tools'

export const jobs = [
  {
    company: 'TCGplayer ',
    url: 'https://tcgplayer.com',
    logo: 'tcgplayer.png',
    banner: 'job-tcgplayer.png',
    title: 'Senior Front-end Engineer',
    time: 'Dec. 2021 - Present',
    details: [
      'Helping build the most beloved marketplace of hobbyists and the collectible community using Vue 3.',
      'Primarily focused on ensuring our marketplace front-end will elegantly scale for years to come.',
      'Recently led a complicated and exhaustive migration from Vue 2 to Vue 3.'
      // 'Helping develop and advance the usage of our internal Design Language System.'
    ],
    tools: tools(['vue', 'html5', 'css3', 'postgres', 'webpack', 'git'])
  },
  {
    company: 'Ceres Imaging',
    url: 'https://ceresimaging.net',
    logo: 'ceres.png',
    banner: 'job-ceres.jpg',
    title: 'UI Architect',
    time: 'Feb. 2017 - Nov. 2020',
    details: [
      'Company’s first software engineering hire, architecting and leading the development of a VueJS 2.0 PWA that provides farmers with multispectral aerial imagery of agriculture fields. This helps farmers to identify problematic areas and obtain deep insight into the health and progress of their crops.',
      'Led the development and wrote the core components of a full-featured Mapbox GL library for VueJS. Supports next-level drawing features that are especially useful for farming, such as circles, cutouts and recursive grouping.',
      'Introduced and guided several key development processes as the team grew. Improved communication between engineering, product and other stakeholders through the use of Behavior-Driven Development, Architecture Decision Records, telemetry data, issue resolution archives and documentation.'
    ],
    tools: tools(['vue', 'vuetify', 'django', 'postgres', 'webpack', 'mapbox'])
  },
  {
    company: 'Sighten',
    url: 'https://www.sighten.io',
    logo: 'sighten.png',
    banner: 'job-sighten.jpg',
    title: 'Platform Architect',
    time: 'Oct. 2015 - Feb. 2017',
    details: [
      'Architected and developed an AngularJS single page application that enabled solar companies to manage everything from quoting and finances to system design and energy production estimations.',
      'Levereged hypermedia and application-level semantics in order to achieve a high degree of flexibility and customization.',
      'Contributed to the RESTful API and its design, particularly around the incorporation of hypermedia.'
    ],
    tools: tools(['angular', 'semantic-ui', 'django', 'json-schema', 'webpack', 'postgres'])
  },
  {
    company: 'Sungevity',
    url: 'https://oursungevity.com',
    logo: 'sungevity.png',
    banner: 'job-sungevity.jpg',
    title: 'Senior Software Engineer',
    time: 'Summer 2013 - Summer 2015',
    details: [
      'Led the development of an AngularJS single page application (known as OurSungevity) that allowed potential customers to experiment with a variety of customizations to their solar system, especially their various financing options, and to monitor their system\'s energy performance after it went live.',
      'The application was fully internationalized and could be easily customized for partner companies to a large degree.',
      'Regularly contributed to the the hypermedia-driven RESTful platform API and layed the groundwork for an aggregated/cross-partner financing service based on Akka and Drools.'
    ],
    tools: tools(['angular', 'd3', 'scala', 'play', 'akka', 'siren', 'vagrant'])
  }
]

export const projects = [
  {
    title: 'bach',
    emoji: '🎼',
    active: true,
    desc: 'Semantic music notation',
    url: 'https://github.com/slurmulon/bach',
    tools: tools(['clojure']) // ebnf
  },
  {
    title: 'bach-editor',
    emoji: '🎹',
    active: true,
    desc: 'Web editor and player for bach',
    url: 'https://github.com/slurmulon/bach-editor',
    tools: tools(['vue', 'vuetify'])
  },
  {
    title: 'gig',
    emoji: '🔊',
    active: true,
    desc: 'Real-time bach engine for JS',
    url: 'https://github.com/slurmulon/gig',
    tools: tools(['vue', 'vuetify'])
  },
  {
    title: 'flap',
    emoji: '🗿',
    active: false,
    // tools: ['js'],
    desc: 'Functional guard clauses in JS',
    url: 'https://github.com/slurmulon/flap',
    tools: tools(['js'])
  },
  {
    title: 'grapple',
    emoji: '🍏',
    active: true,
    desc: 'Pragmatic and flexible Webhook API for Elixir',
    url: 'https://github.com/camirmas/grapple',
    tools: tools(['elixir'])
  },
  {
    title: 'json-where',
    emoji: '🔍',
    active: true,
    // tools: ['js'],
    desc: 'Transparent JSON query descriptors',
    url: 'https://github.com/slurmulon/json-where',
    tools: tools(['js'])
  },
  {
    title: 'tasty-commits',
    emoji: '🍭',
    active: true,
    desc: 'Commit message convention for easily digestable history streams',
    url: 'https://github.com/slurmulon/tasty-commits',
    tools: tools(['git'])
  }
]
