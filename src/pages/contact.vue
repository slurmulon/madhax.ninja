  <template>
    <page v-once>
      <section-card title="Contact">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          dark
          @submit.prevent="submit"
        >
          <v-card-text class="pb-0">
            <v-text-field
              v-model="name"
              :rules="rules.name"
              :counter="100"
              :disabled="loading"
              label="Name"
              color="primary"
              tabindex="1"
              variant="solo"
              required
              class="mb-1"
            />
            <v-text-field
              v-model="email"
              :rules="rules.email"
              :disabled="loading"
              label="E-mail"
              color="primary"
              tabindex="2"
              variant="solo"
              required
              class="mb-1"
            />
            <v-select
              v-model="reason"
              :items="reasons"
              :rules="[v => !!v || 'Reason is required']"
              :disabled="loading"
              label="Reason"
              color="primary"
              tabindex="3"
              variant="solo"
              required
              class="mb-1"
            />
            <v-textarea
              v-model="message"
              :rules="rules.message"
              name="message"
              label="Message"
              color="primary"
              rows="7"
              tabindex="4"
              variant="solo"
            />
          </v-card-text>

          <v-card-actions class="pa-4 pt-0">
            <v-btn
              @click="clear"
              variant="outlined"
              color="surface-variant"
              size="large"
              prepend-icon="mdi-delete"
              :slim="false"
            >
              Clear
            </v-btn>
            <v-spacer />
            <v-btn
              :disabled="!valid"
              :loading="loading"
              :slim="false"
              @click="submit"
              type="submit"
              color="primary"
              variant="outlined"
              prepend-icon="mdi-send"
              size="x-large"
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-form>

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

        <v-snackbar
          v-model="error"
          lazy
          color="error"
          width="300"
          @input="v => v || (error = false)"
          background-opacity="0.5"
        >
          <template #text>
            <v-icon
              color="white"
              class="mr-2"
              left
            >
              mdi-alert-circle-outline
            </v-icon>
            Oops! Something went wrong...
          </template>
          <template #actions>
            <v-btn
              icon="mdi-close"
              color="white"
              variant="text"
              @click="error = false"
            />
          </template>
        </v-snackbar>
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

        if (!this.error) {
          this.clear()
        }
      }
    },

    clear () {
      this.$refs.form.reset()

      clear()
    }
  },
}
</script>
