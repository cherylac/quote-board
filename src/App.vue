<template>
  <div id="app">
    <header class="app-header">
      <ul class="nav">
        <li>
          <router-link to="/">Quote Board</router-link>
        </li>
        <li>
          <router-link to="/add">Add a Quote</router-link>
        </li>
        <li>
          <router-link to="/about">About this App</router-link>
        </li>
      </ul>
    </header>
    <main class="container">
      <h1>Megan's Quote Board App</h1>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
