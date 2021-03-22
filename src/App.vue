<template>
  <div id="app">
    <Login/> 
  </div>
</template>

<script>
import Layout from './layout'
import Login from './view/login'

export default {
  name: 'App',
  components: {
    Layout,
    Login
  }
}
</script>
<style lang="scss">
@import "./style/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
