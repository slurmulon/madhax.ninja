<template>
  <v-layout>
    <!-- <router-view /> -->

    <navbar />

    <night-sky />

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
</script>

<style lang="sass">
@use './styles/main.sass'
</style>
