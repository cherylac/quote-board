<template>
  <div id="app">
    <header class="app-header">
      <app-nav></app-nav>
    </header>
    <main class="container">
      <h1>Megan's Quote Board App</h1>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  name: 'app',
  components: {
    AppNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
