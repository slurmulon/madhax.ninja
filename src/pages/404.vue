<template>
  <page v-once>
    <v-container class="fill-height">
      <v-responsive
        class="align-center fill-height mx-auto"
        max-width="900"
      >
        <div class="text-center">
          <!-- <div class="text-body-2 font-weight-light mb-n1">Page not found</div> -->
          <v-icon
            icon="mdi-alert-circle-outline"
            size="150"
            color="error"
          />


          <h1 class="text-h2 font-weight-bold">Page not found</h1>
        </div>

      </v-responsive>
    </v-container>
  </page>
</template>

<route lang="yaml">
name: not-found
path: /404
</route>
