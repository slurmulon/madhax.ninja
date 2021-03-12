<template>
  <page>
    <v-row>
      <v-col cols="12">
        <h1 class="light-blue--text text--lighten-4">Contact</h1>

        <v-card
          color="transparent"
          class="subtle-bg elevation-4"
        >
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              dark
            >
              <v-text-field
                v-model="name"
                :rules="rules.name"
                :counter="128"
                :disabled="loading"
                label="Name"
                color="secondary"
                solo-inverted
                required
              />
              <v-text-field
                v-model="email"
                :rules="rules.email"
                :disabled="loading"
                label="E-mail"
                color="secondary"
                solo-inverted
                required
              />
              <v-select
                v-model="reason"
                :items="reasons"
                :rules="[v => !!v || 'Reason is required']"
                :disabled="loading"
                label="Reason"
                color="secondary"
                solo-inverted
                required
              />
              <v-textarea
                v-model="message"
                :rules="rules.message"
                name="message"
                label="Message"
                color="secondary"
                rows="7"
                solo-inverted
              />

              <v-row
                nowrap
                justify="end"
              >
                <v-col cols="2">
                  <v-btn
                    @click="clear"
                    text
                    block
                    color="grey lighten-2"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="2">
                  <v-btn
                    :disabled="!valid"
                    :loading="loading"
                    @click="submit"
                    color="light-blue lighten-4"
                    text
                    light
                    block
                  >
                    <v-icon>send</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-dialog
            v-model="sent"
            width="200"
            @input="v => v || (sent = false)"
          >
            <v-icon
              class="cell-shade"
            >
              check_circle_outline
            </v-icon>
            <span class="white--text pt-2" style="display: block">Thanks for reaching out!</span>
          </v-dialog>

          <v-dialog v-model="error" width="200" @input="v => v || (error = false)">
            <v-icon dark class="cell-shade" style="font-size: 100px">error_outline</v-icon>
            <span class="white--text pt-2" style="display: block">Oops! Something went wrong</span>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </page>
</template>

<script>
import { name, email, reason, message, loading, error, sent } from '@/use/contact'

import Page from '@/components/Page'

export default {
  components: { Page },

  data: () => ({
    valid: true,
    // sent: false,
    // loading: false,
    // error: false,
    rules: {
      name: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters'
      ],
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      message: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 1000) || 'Message must be less than 1000 characters'
      ]
    },
    reasons: [
      'General',
      'Opportunity',
      'Collaboration',
      'Resume'
    ]
  }),

  computed: {
    sent: () => sent.value,
    loading: () => loading.value,
    error: () => error.value,

    name: {
      get: () => name.value,
      set: (value) => name.value = value
    },

    email: {
      get: () => email.value,
      set: (value) => email.value = value
    },

    reason: {
      get: () => reason.value,
      set: (value) => reason.value = value
    },

    message: {
      get: () => message.value,
      set: (value) => message.value = value
    }
  },

  methods: {
    async submit () {
      if (this.$refs.form.validate()) {
        send()
      }
    },

    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
