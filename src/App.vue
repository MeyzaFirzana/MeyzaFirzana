<template>
  <div id="app">
    <NavBarComponent />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';

export default {
  name: 'App',
  components: {
    NavBarComponent,
  },
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  text-align: center;
}

h1, h2, h3, h4, h5, h6 {
  margin: 10px 0;
}

p {
  margin: 10px 0;
  line-height: 1.6;
}
</style>
