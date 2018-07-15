<template>
  <div>
    <!-- FIXME: why the fuck doesnt this stupid component do anything? ARGH. -->
    :(
    <!-- wtf? {{ wtf }} -->
  <!-- <div v-if="tool"> -->
  <!-- <1!-- <a :href="tool.url" target="tool"> --1> -->
  <!-- <1!--   <img :src="require(`@/assets/img/${tool.icon}`)" :class="{ 'shiny-icon': shiny }" :style="{ 'width': width }" /> --1> -->
  <!-- <1!-- </a> --1> -->
  <!-- </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // props: ['id', 'shiny', 'width'],
  // ready () {
  // mounted () {
  beforeCreate () {
    console.log('DAS ID', this.id)
    console.log('DAS TOOL', this.tool)
  },
  data () {
    console.log('DATA PLZ?')
    return {
      // tool: {},
      wtf: true
    }
  },
  computed: {
    ...mapState('tools', {
      tool: state => state.all.find(tool => tool.id === this.id)
    })
  }
}
