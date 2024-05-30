<template>
  <v-app>
    <navbar />

    <night-sky />

    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition
          name="page"
          mode="out-in"
        > 
          <keep-alive>
            <component
              :is="Component"
              :key="route.path"
            />
          </keep-alive>
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar'
/* import Layout from '@/components/Layout' */
</script>

<style lang="sass">
@use './styles/main.sass'
</style>
