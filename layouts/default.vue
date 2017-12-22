<template>
  <div>
    <nuxt/>
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from '~/components/Footer.vue'
import netlifyIdentity from 'netlify-identity-widget';

export default {
  components: {
    SiteFooter
  },
  mounted() {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.init()
  }
}
</script>

<style lang="scss">
html {
  background-color: #000;
}
body {
  background-color: #000;
  background: url('~/assets/img/bg.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #fff;
  font-family: 'Lato', sans-serif;
}
</style>
