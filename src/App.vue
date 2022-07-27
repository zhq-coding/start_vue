<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/">首页</router-link> -->
        <!-- <router-link to="/helloworld">helloworld</router-link> -->
        <!-- <router-link to="/city">city</router-link> -->

        <!-- <router-link to="/home">home</router-link>
        <router-link to="/axios">axios</router-link>
        <router-link to="/store">store</router-link>
        <router-link to="/table">table</router-link> -->

        <!-- <router-link to="/grid">grid</router-link> -->


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: auto;
  /* margin-top: 60px; */
}
</style>
