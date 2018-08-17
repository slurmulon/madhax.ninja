<template>
  <div>
    <v-content>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3 pt-2>
          <v-container grid-list-xl fluid>
            <h1 class="light-blue--text text--lighten-4">Contact</h1>

            <v-flex xs12 pt-2>
              <v-form ref="form" v-model="valid" lazy-validation dark>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="128"
                  label="Name"
                  color="secondary"
                  dark
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  color="secondary"
                  dark
                  required
                ></v-text-field>
                <v-select
                  v-model="reason"
                  :items="reasons"
                  :rules="[v => !!v || 'Reason is required']"
                  label="Reason"
                  color="secondary"
                  dark
                  required
                ></v-select>
                <v-textarea
                  v-model="message"
                  name="message"
                  label="Message"
                  color="secondary"
                  dark
                  rows="7"
                ></v-textarea>

                <v-layout row nowrap justify-end>
                  <v-flex xs4 md3>
                    <v-btn
                      @click="clear"
                      color="white"
                      block
                      outline
                    >
                      <v-icon>clear</v-icon>
                      <!-- <v-icon>fao fa-trash</v-icon> -->
                    </v-btn>
                  </v-flex>
                  <v-flex xs4 md3>
                    <v-btn
                      :disabled="!valid"
                      :loading="loading"
                      @click="submit"
                      color="light-blue lighten-4"
                      light
                      block
                      outline
                    >
                      <v-icon>send</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-flex>

            <v-dialog v-model="sent" width="200" @input="v => v || (sent = false)">
              <v-icon dark class="cell-shade" style="font-size: 100px">check_circle_outline</v-icon>
              <span class="white--text pt-2" style="display: block">Thanks for reaching out!</span>
            </v-dialog>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios'

// TODO: integrate Service Worker for when messages are sent offline
export default {
  data: () => ({
    valid: true,
    sent: false,
    loading: false,
    error: false,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 128) || 'Name must be less than 128 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    reasons: [
      'General',
      'Opportunity',
      'Collaboration',
      'Resume'
    ]
  }),

  computed: {
    name: {
      get () {
        return this.$store.state.contact.name
      },

      set (name) {
        this.$store.commit('contact/update', { name })
      }
    },

    email: {
      get () {
        return this.$store.state.contact.email
      },

      set (email) {
        this.$store.commit('contact/update', { email })
      }
    },

    reason: {
      get () {
        return this.$store.state.contact.reason
      },

      set (reason) {
        this.$store.commit('contact/update', { reason })
      }
    },

    message: {
      get () {
        return this.$store.state.contact.message
      },

      set (message) {
        this.$store.commit('contact/update', { message })
      }
    }
  },

  methods: {
    async submit () {
      if (this.$refs.form.validate()) {
        const url = `${process.env.API_BASE_URL}/contact`

        this.loading = true

        await axios.post(url, {
          name: this.name,
          email: this.email,
          reason: this.reason,
          message: this.message
        })

        this.loading = false
        this.sent = true

        this.clear()
      }
    },

    clear () {
      this.$refs.form.reset()
    }
  },

  beforeDestroy () {
    this.clear()
  }
}
</script>

<style lang="stylus">
@require '../styles/transitions'

div.v-dialog__content > div
  text-align center !important
  box-shadow none !important
</style>
