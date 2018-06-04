<template>
  <div id="app">
    <div>
      <b-navbar id="navbar" toggleable="md" type="light" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand tag="h1" class="mb-0">Megan's Quote Board</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#/">Quote Board</b-nav-item> . 
            <b-nav-item href="#/add">Add a Quote</b-nav-item> .
            <b-nav-item href="#/about">About this App</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
      <main class="container">
        <router-view></router-view>
      </main>
  </div> <!-- #app -->
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

h1 {
  font-size: 2.4rem;
}

</style>
