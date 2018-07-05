<template>
  <layout>
    <navbar slot="header"></navbar>

    <section class="content">
      <v-card>
        <v-card-media
          src="https://s3.amazonaws.com/vuetify-docs/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-card-media>

        <v-card-title primary-title>
          <div>
            <div class="headline">Top western road trips</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </section>

    <footer slot="footer">
      <back></back>
    </footer>
  </layout>
</template>

<script>
import Navbar from '@/components/Navbar'
import Back from '@/components/footers/Back'
import Layout from '@/components/Layout'

export default {
  components: {
    Navbar,
    Back,
    Layout
  }
}
</script>

<style lang="stylus" scoped>
.application
  padding 1em
</style>
