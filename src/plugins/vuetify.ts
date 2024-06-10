/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'

const brandTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // background: '#FFFFFF',
    // surface: '#FFFFFF',
    primary: '#96FFD8',
    'primary-darken-1': '#78ccad',
    'primary-darken-2': '#5a9982',
    secondary: colors.lightBlue.lighten4,
    accent: colors.lightGreen.lighten4,
    anchor: '#ffffff',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    error: colors.red.lighten1,
    // EXPERIMENT - use light-hue instead of white for text (probably is a11y contrast violation, has to be 100 luminosity)
    // 'on-surface': 'hsla(175, 85%, 100%, 1)',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'brandTheme',
    themes: {
      brandTheme
    },
  },
})
