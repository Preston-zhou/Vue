<template>
  <div id="app">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/News">新闻</router-link>
      <router-link to="/About">关于</router-link>
    </p>


    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
