<template>
  <page v-once>
    <section-card title="Contact">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-card-text class="pb-0">
          <v-text-field
            v-model="name"
            :color="color"
            :bg-color="bg"
            :variant="variant"
            :rules="inputs.rules.name"
            :counter="100"
            :disabled="loading"
            label="Name"
            tabindex="0"
            required
            class="mb-1"
          />
          <v-text-field
            v-model="email"
            :color="color"
            :bg-color="bg"
            :variant="variant"
            :rules="inputs.rules.email"
            :disabled="loading"
            label="E-mail"
            tabindex="0"
            required
            class="mb-1"
          />
          <v-select
            v-model="reason"
            :items="inputs.reasons"
            :color="color"
            :bg-color="bg"
            :variant="variant"
            :rules="[v => !!v || 'Reason is required']"
            :disabled="loading"
            label="Reason"
            tabindex="0"
            required
            class="mb-1"
          />
          <v-textarea
            v-model="message"
            :color="color"
            :bg-color="bg"
            :variant="variant"
            :rules="inputs.rules.message"
            :disabled="loading"
            name="message"
            label="Message"
            rows="7"
            tabindex="0"
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

      <v-snackbar
        v-model="sent"
        color="success"
        @input="v => v || (sent = false)"
      >
        <template #text>
          <v-icon
            color="white"
            class="mr-2"
          >
            mdi-check-circle-outline
          </v-icon>
          Thanks for reaching out!
        </template>
        <template #actions>
          <v-btn
            icon="mdi-close"
            color="white"
            variant="text"
            @click="sent = false"
          />
        </template>
      </v-snackbar>

      <v-snackbar
        v-model="error"
        color="error"
        @input="v => v || (error = false)"
      >
        <template #text>
          <v-icon
            color="white"
            class="mr-2"
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

<script setup lang="ts">
import { name, email, reason, message, loading, error, send, sent, clear as erase } from '@/use/contact'
import { usePageTitle } from '@/use/page'

import Page from '@/components/Page'
import SectionCard from '@/components/SectionCard'

const form = ref<HTMLElement>()
const valid = ref(false)
const color = ref('primary')
/* const bg = ref('rgba(0,0,0,0.25)') */
const bg = ref('rgba(0,0,0,0.3)')
const variant = ref('solo')

const title = usePageTitle('Contact')

const inputs = reactive({
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
})

const submit = async () => {
  if (form.value.validate()) {
    await send()

    if (!error.value) {
      clear()
    }
  }
}

const clear = () => {
  form.value.reset()

  erase()
}
</script>

<route lang="yaml">
name: contact
path: /contact
</route>
