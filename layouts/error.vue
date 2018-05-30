<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="mui--text-display1">
        {{ error.statusCode }}
      </h1>
      <h2 class="headline">
        {{ error.message }}
      </h2>
      <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  props: ['error']
}
</script>
