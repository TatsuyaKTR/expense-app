<template>
  <div id="app">
    <nav v-if="showNav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/income">Income</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    showNav() {
      //パスが/loginなら非表示
      return this.$route.path !== "/login";
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
