<template>
  <layout>
    <navbar slot="header"></navbar>

    <!-- <section class="content"> -->
    <v-content>
      <v-container fluid justify-center style="display: flex">
      <!-- <v-card color="white" class="elevation-8 pa-4" style="width: 300px"> -->
      <v-card color="white" class="subtle-bg pa-4 mb-4 elevation-4" style="width: 350px">
        <v-form ref="form" v-model="valid" lazy-validation dark>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="64"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-select
            v-model="reason"
            :items="items"
            :rules="[v => !!v || 'Reason is required']"
            label="Reason"
            required
          ></v-select>
          <v-textarea
            name="message"
            label="Message"
          ></v-textarea>
          <!-- <v-checkbox -->
          <!--   v-model="checkbox" -->
          <!--   :rules="[v => !!v || 'You must agree to continue!']" -->
          <!--   label="Do you agree?" -->
          <!--   required -->
          <!-- ></v-checkbox> -->

          <v-btn
            :disabled="!valid"
            @click="submit"
            color="primary"
          >
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-card>
      </v-container>
    </v-content>
    <!-- </section> -->

    <footer slot="footer">
      <back></back>
    </footer>
  </layout>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Back from '@/components/footers/Back'
import Layout from '@/components/Layout'

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
// @require '../styles/slowbro'

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
