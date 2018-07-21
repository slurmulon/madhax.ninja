<template>
  <div>
    <v-content>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-container grid-list-xl fluid>
            <h1 class="light-blue--text text--lighten-4">Contact</h1>

            <v-flex xs12>
              <v-card color="white" class="subtle-bg pa-4 mb-4 elevation-4">
                <!-- <h1 class="light-blue--text text--lighten-4">Contact</h1> -->
                <v-form ref="form" v-model="valid" lazy-validation dark>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="64"
                    label="Name"
                    color="blue-grey"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    color="blue-grey"
                    required
                  ></v-text-field>
                  <v-select
                    v-model="reason"
                    :items="items"
                    :rules="[v => !!v || 'Reason is required']"
                    label="Reason"
                    color="blue-grey"
                    required
                  ></v-select>
                  <v-textarea
                    name="message"
                    label="Message"
                    color="blue-grey"
                    rows="7"
                  ></v-textarea>

                  <v-layout row nowrap>
                    <v-flex xs12>
                      <v-btn
                        @click="clear"
                        block
                      >
                        <v-icon>clear</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn
                        :disabled="!valid"
                        @click="submit"
                        color="secondary"
                        light
                        block
                      >
                        <v-icon>send</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card>
            </v-flex>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
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
      'Collaboration',
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
  }
}
</script>
