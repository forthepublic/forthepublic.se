<template>
  <section class="section is-medium has-text-centered">
    <img class="logo" src="~/assets/img/for_the_public_logo.svg">
    <p class="intro">{{ page.intro }}</p>
  </section>
</template>

<script>
import page from '~/content/pages/start.json'

export default {
  data () {
    return { page }
  }
}
</script>

<style lang="scss">
.logo {
	width: 240px;
}
.intro {
	font-size: 2em;
	max-width: 400px;
	font-style: italic;
	margin: 1.5em auto;
}
</style>
