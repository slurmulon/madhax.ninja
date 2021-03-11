export const each = tools => all.filter(tool => tools.includes(tool.id))

export const all = [
  { id: 'js', title: 'JavaScript', url: 'https://nodejs.org', icon: 'js.png', level: 95 },
  { id: 'html5', title: 'HTML5', url: 'https://www.w3.org/TR/html52/', icon: 'html5.png', level: 85 },
  { id: 'css3', title: 'CSS3', url: 'http://css-tricks.com', icon: 'css3.png', level: 80 },
  { id: 'elixir', title: 'Elixir', url: 'https://elixir-lang.org', icon: 'elixir.png', level: 65 },
  { id: 'clojure', title: 'Clojure', url: 'https://clojure.org', icon: 'clojure.png', level: 40 },
  { id: 'python', title: 'Python', url: 'https://python.org', icon: 'python.png', level: 75 },
  // REMOVE
  // TODO: Add SVG
  { id: 'scala', title: 'Scala', url: 'https://scala-lang.org', icon: 'scala.png', level: 55 },
  { id: 'vue', title: 'Vue', url: 'https://vuejs.org', icon: 'vuejs.png', level: 75 },
  { id: 'vuetify', title: 'Vuetify', url: 'https://vuetifyjs.com', icon: 'vuetify.png', level: 75 },
  { id: 'angular', title: 'AngularJS (1.X)', url: 'https://angularjs.org', icon: 'angular.png', level: 85 },
  { id: 'semantic-ui', title: 'Semantic UI', url: 'https://semantic-ui.com', icon: 'semantic-ui.png', level: 45 },
  { id: 'phoenix', title: 'Phoenix', url: 'http://phoenixframework.org', icon: 'phoenix.png', level: 65 },
  { id: 'django', title: 'Django', url: 'https://djangoproject.com', icon: 'django.png', level: 60 },
  // REMOVE
  // TODO: Add Ecto
  { id: 'play', title: 'Play!', url: 'https://playframework.com', icon: 'play.png', level: 65 },
  // REMOVE
  // TODO: Add Express
  { id: 'akka', title: 'Akka', url: 'https://akka.io/', icon: 'akka.png', level: 50 },
  { id: 'postgres', title: 'PostgreSQL', url: 'https://postgresql.org', icon: 'postgresql.png', level: 75 },
  { id: 'json-schema', title: 'JSON Schema', url: 'http://json-schema.org', icon: 'json-schema.png', level: 90 },
  // { id: 'gsap', title: 'GSAP', url: 'https://greensock.com', icon: '', level: 65 },
  { id: 'npm', title: 'NPM', url: 'https://npmjs.com', icon: 'npm.png', level: 90 },
  { id: 'webpack', title: 'Webpack', url: 'https://webpack.js.org', icon: 'webpack.png', level: 75 },
  { id: 'd3', title: 'D3', url: 'https://d3js.org', icon: 'd3.png', level: 60 },
  // { id: 'mapbox', title: 'Mapbox', url: 'https://mapbox.com', icon: '', level: 75 },
  { id: 'leaflet', title: 'Leaflet', url: 'https://leafletjs.com', icon: 'leaflet.png', level: 70 },
  { id: 'vim', title: 'Vim', url: 'https://www.vim.org', icon: 'vim.png', level: 75 },
  { id: 'git', title: 'Git', url: 'https://git-scm.com', icon: 'git.png', level: 90 },
  { id: 'nginx', title: 'Nginx', url: 'https://nginx.com', icon: 'nginx.png', level: 65 },
]
