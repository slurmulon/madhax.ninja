<template>
  <v-layout column nowrap>
    <v-flex xs1>
      <v-btn icon fab light small color="secondary" @click="$router.go(-1)">
        <v-icon light>chevron_left</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>
