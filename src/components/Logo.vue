<template>
  <a
    @click.stop="$router.push('/')"
    href="/"
    class="logo text-h4 text-decoration-none"
  >
    <div class="name d-none d-sm-flex">
      <span>Erik</span><span class="ml-3">V</span><span style="margin-left: -6px">avro</span>
    </div>
    <div class="name hidden-sm-and-up pr-2">
      <span>Erik </span><span class="ml-2">V.</span>
    </div>
  </a>
</template>

<style lang="sass" scoped>
.logo .name
  font-family: 'Lazer84' !important
  text-shadow: 2px 2px 1px #000
  letter-spacing: 2px //5px
  margin-top: -5px
  color: #96ffd8
</style>
