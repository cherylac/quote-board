<template>
  <div id="app">
    <v-app>
      <v-toolbar dark-color="primary">
        <header class="app-header">
          <ul class="nav">
            <li>
              <v-toolbar-title><router-link to="/">Quote Board</router-link></v-toolbar-title>
            </li>
            <li>
              <router-link to="/add">Add a Quote</router-link>
            </li>
            <li>
              <router-link to="/about">About this App</router-link>
            </li>
          </ul>
        </header>
      </v-toolbar>
      <main class="container">
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  font-family: 'Roboto', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  font-size: 2.0rem;
}
</style>
