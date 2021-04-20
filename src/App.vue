<template>
  <h1>Mo<img class="img-logo" alt="Vue logo" src="./assets/logo.png" />ies</h1>
  <HomePage />
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>

.img-logo {
  height: .75em;
}
h1 {
  color: green
}
</style>
