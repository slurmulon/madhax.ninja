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
            <v-row
              nowrap
              justify="end"
            >
              <v-col
                cols="3"
                sm="2"
              >
                <v-btn
                  @click="clear"
                  text
                  block
                  variant="outlined"
                  color="surface-variant"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
              <v-col
                cols="4"
                sm="3"
              >
                <v-btn
                  :disabled="!valid"
                  :loading="loading"
                  @click="submit"
                  type="submit"
                  color="primary"
                  text
                  light
                  block
                  variant="outlined"
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
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

  /* beforeRouteEnter (to, from, next) { */
  /*   error.value = false */
  /*   loading.value = false */

  /*   /1* next(vm => vm.$vuetify.goTo(0)) *1/ */
  /*   next() */
  /* } */
}
</script>
