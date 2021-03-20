import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#96FFD8',
        secondary: colors.lightBlue.lighten4,
        accent: colors.lightGreen.lighten4,
        error: colors.red.lighten1
      }
    }
  }
})
