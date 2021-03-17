<template>
  <page>
    <section-card title="Contact">
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          dark
          @submit.prevent="submit"
        >
          <v-text-field
            v-model="name"
            :rules="rules.name"
            :counter="100"
            :disabled="loading"
            label="Name"
            color="secondary"
            tabindex="1"
            solo-inverted
            required
          />
          <v-text-field
            v-model="email"
            :rules="rules.email"
            :disabled="loading"
            label="E-mail"
            color="secondary"
            tabindex="2"
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
            tabindex="3"
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
            tabindex="4"
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
                type="submit"
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
        width="300"
        @input="v => v || (sent = false)"
        background-opacity="0.5"
      >
        <v-card color="rgba(15,15,15,0.5)">
          <v-card-text class="text-center py-3">
            <v-icon
              color="success"
              style="font-size: 100px"
            >
              check_circle_outline
            </v-icon>
            <div class="white--text text-center block pt-2">
              Thanks for reaching out!
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="error"
        width="300"
        @input="v => v || (error = false)"
        background-opacity="0.5"
      >
        <v-card color="rgba(15,15,15,0.5)">
          <v-card-text class="text-center py-3">
            <v-icon 
              color="error"
              class="cell-shade"
              style="font-size: 100px"
            >
              error_outline
            </v-icon>
            <div class="text-center block pt-2">
              Oops! Something went wrong...
            </div>
          </v-card-text>
          </v-card>
      </v-dialog>
    </section-card>
  </page>
</template>

<script>
import { name, email, reason, message, loading, error, send, sent, clear } from '@/use/contact'

import Page from '@/components/Page'
import SectionCard from '@/components/SectionCard'

export default {
  components: {
    Page,
    SectionCard
  },

  data: () => ({
    valid: false,
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
    },

    sent: {
      get: () => sent.value,
      set: (value) => sent.value = value
    },

    loading: {
      get: () => loading.value,
      set: (value) => loading.value = value
    },

    error: {
      get: () => error.value,
      set: (value) => error.value = value
    }
  },

  methods: {
    async submit () {
      if (this.$refs.form.validate()) {
        await send()

        this.clear()
      }
    },

    clear () {
      this.$refs.form.reset()

      clear()
    }
  },

  beforeRouteEnter (to, from, next) {
    error.value = false
    loading.value = false

    next(vm => vm.$vuetify.goTo(0))
  }
}
</script>
