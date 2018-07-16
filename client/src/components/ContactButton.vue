<template>
  <v-btn to="/contact" fab light small ripple color="secondary" slot="activator" class="elevation-4" id="contact-button">
    <v-icon light>chat</v-icon>
  </v-btn>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Back from '@/components/footers/Back'
import Layout from '@/components/Layout'

export default {
  data: () => ({
    valid: true,
    show: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 64) || 'Name must be less than 64 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    reason: 'General',
    items: [
      'General',
      'Opportunity',
      'Resume request'
    ]
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/contact', {
          name: this.name,
          email: this.email,
          select: this.select
        })
      }
    },

    clear () {
      this.$refs.form.reset()
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
#contact-button
  position fixed
  right 0.5em
  bottom 0.5em

  a
    color black
    text-decoration underline

  .application
    padding 1em

  // TODO: figure out why this isn't being applied... arg
  .v-content__wrap
    display flex

  //.v-card
  //  @extends .slowbro
</style>
