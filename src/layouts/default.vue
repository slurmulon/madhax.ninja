<template>
  <v-app>
    <!-- <navbar /> -->

    <v-main>
      <router-view />
      <!-- <router-view v-slot="{ Component, route }">
        <transition
          name="page"
          mode="out-in"
        >
          <component
            :is="Component"
            :key="route.path"
          />
        </transition>
      </router-view> -->
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar'
  //
</script>
