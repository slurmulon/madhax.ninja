<template>
  <v-layout>
    <!-- <router-view /> -->

    <night-sky />

    <navbar />

    <router-view v-slot="{ Component, route }">
      <transition
        name="page"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>
  </v-layout>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar'
/* import Layout from '@/components/Layout' */
import NightSky from '@/components/NightSky'
</script>

<style lang="sass">
@use './styles/main.sass'
</style>
