<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <input type="text" @focus="change" /> 姓名
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <About /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // About,
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    change() {
      console.log("chag");
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
  margin-top: 60px;
}
</style>
