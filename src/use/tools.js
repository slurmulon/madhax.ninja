export const all = [
  { id: 'js', title: 'JavaScript', url: 'https://nodejs.org', icon: 'js.png', level: 95, specialty: true },
  { id: 'ts', title: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'typescript.png', level: 75, specialty: true },
  { id: 'html5', title: 'HTML5', url: 'https://www.w3.org/TR/html52/', icon: 'html5.png', level: 85, specialty: true },
  { id: 'css3', title: 'CSS3', url: 'http://css-tricks.com', icon: 'css3.png', level: 80, specialty: true },
  { id: 'sass', title: 'SASS', url: 'https://sass-lang.com/', icon: 'sass.png', level: 75, specialty: true },
  { id: 'svg', title: 'SVG', url: 'https://www.w3.org/Graphics/SVG/', icon: 'svg.png', level: 75, specialty: true },
  { id: 'canvas', title: 'Canvas', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API', icon: 'canvas.png', level: 50, specialty: false },
  { id: 'vue', title: 'Vue (2/3)', url: 'https://vuejs.org', icon: 'vuejs.png', level: 90, specialty: true },
  { id: 'vuetify', title: 'Vuetify (1/2/3)', url: 'https://vuetifyjs.com', icon: 'vuetify.png', level: 85, specialty: true },
  { id: 'react', title: 'React (16/17/18)', url: 'https://react.dev', icon: 'react.png', level: 45, specialty: true },
  { id: 'angular', title: 'Angular (1.X)', url: 'https://angularjs.org', icon: 'angular.png', level: 85 },
  { id: 'semantic-ui', title: 'Semantic UI', url: 'https://semantic-ui.com', icon: 'semantic-ui.png', level: 45 },
  { id: 'elixir', title: 'Elixir', url: 'https://elixir-lang.org', icon: 'elixir.png', level: 70, specialty: true },
  { id: 'clojure', title: 'Clojure', url: 'https://clojure.org', icon: 'clojure.png', level: 40, specialty: true },
  { id: 'python', title: 'Python', url: 'https://python.org', icon: 'python.png', level: 65, specialty: true },
  { id: 'scala', title: 'Scala', url: 'https://scala-lang.org', icon: 'scala.png', level: 55, width: 75 },
  { id: 'phoenix', title: 'Phoenix', url: 'http://phoenixframework.org', icon: 'phoenix.png', level: 70, specialty: true },
  { id: 'django', title: 'Django', url: 'https://djangoproject.com', icon: 'django.png', level: 50, specialty: true },
  // TODO: Add Ecto
  { id: 'play', title: 'Play!', url: 'https://playframework.com', icon: 'play.png', level: 65, width: 60 },
  // TODO: Add Express
  { id: 'akka', title: 'Akka', url: 'https://akka.io/', icon: 'akka.png', level: 50, width: 60 },
  { id: 'postgres', title: 'PostgreSQL', url: 'https://postgresql.org', icon: 'postgresql.png', level: 75, specialty: true },
  { id: 'json-schema', title: 'JSON Schema', url: 'http://json-schema.org', icon: 'json-schema.png', level: 90, specialty: true },
  // { id: 'gsap', title: 'GSAP', url: 'https://greensock.com', icon: '', level: 65 },
  { id: 'npm', title: 'NPM', url: 'https://npmjs.com', icon: 'npm.png', level: 90 },
  { id: 'webpack', title: 'Webpack', url: 'https://webpack.js.org', icon: 'webpack.png', level: 75, specialty: true },
  { id: 'rollup', title: 'Rollup', url: 'https://rollupjs.org', icon: 'rollup.png', level: 70, specialty: true },
  // { id: 'd3', title: 'D3', url: 'https://d3js.org', icon: 'd3.png', level: 60, specialty: true },
  { id: 'd3', title: 'D3', url: 'https://d3js.org', icon: 'd3.png', level: 60, specialty: false },
  { id: 'mapbox', title: 'Mapbox', url: 'https://mapbox.com', icon: 'mapbox.png', level: 75, specialty: false },
  { id: 'leaflet', title: 'Leaflet', url: 'https://leafletjs.com', icon: 'leaflet.png', level: 70 },
  { id: 'vim', title: 'Vim', url: 'https://www.vim.org', icon: 'vim.png', level: 75, specialty: true },
  { id: 'git', title: 'Git', url: 'https://git-scm.com', icon: 'git.png', level: 90, specialty: true },
  { id: 'nginx', title: 'Nginx', url: 'https://nginx.com', icon: 'nginx.png', level: 65 },
  { id: 'jira', title: 'Jira', url: 'https://jira.com', icon: 'jira.png', level: 65 },
  { id: 'jest', title: 'Jest', url: 'https://jestjs.io', icon: 'jest.png', level: 65, specialty: true },
  { id: 'cypress', title: 'Cypress', url: 'https://www.cypress.io', icon: 'cypress.png', level: 65, specialty: true },
  { id: 'stripe', title: 'Stripe', url: 'https://stripe.com', icon: 'stripe.png', level: 80, specialty: false },
  { id: 'docker', title: 'Docker', url: 'https://docker.com', icon: 'docker.png', level: 50, specialty: true },
  { id: 'aws', title: 'AWS', url: 'https://aws.amazon.com', icon: 'aws.png', level: 40, specialty: true },
  // ffmpeg
]

export const specialties = all.filter(tool => tool.specialty)

export const each = tools => all.filter(tool => tools.includes(tool.id))

export const resolve = value => typeof tool === 'string'
  ? all.find(tool => tool.id === value)
  : value
