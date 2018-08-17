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
    // name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 128) || 'Name must be less than 128 characters'
    ],
    // email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    // reason: 'General',
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
  }
}
</script>
