<template>
  <v-container fluid class="position-relative fill-height w-100 mx-0" style="background: radial-gradient(ellipse at bottom, rgb(23 26 65 / 30%), transparent)">
    <v-empty-state
      headline="404"
      title="Page not found"
      text="The page you were looking for does not exist"
      width="100%"
    >
      <template #media>
        <emoji-thinking
          height="200"
          width="200"
          class="mb-4"
          style="color: #a6c5bc !important; stroke-width: 1px; stroke-linejoin: round;"
        />
      </template>
    </v-empty-state>

    <!-- <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <div class="text-center">
        <emoji-thinking
          height="250"
          width="250"
          class="mb-4"
          style="color: #a6c5bc !important; stroke: rgba(0,0,0,0.75) !important; stroke-width: 1px; stroke-linejoin: round;"
        />

        <h1 class="text-h1 font-weight-light" style="color: #a6c5bc">
          Page not found
        </h1>
      </div>
    </v-responsive> -->
  </v-container>
</template>

<route lang="yaml">
name: not-found
path: /404
</route>
