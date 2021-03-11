import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    // dark: true,
    themes: {
      // dark: {
      light: {
        primary: '#96FFD8',
        secondary: '#8CCEFF',
        accent: '#9EA8A4'
      }
    }
  }
})
