<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import VueRouter from "vue-router";



//전역 수준 네비게이션 보호
router.beforeEach((to, from, next) => {
  console.log("** beforeEach!!");
  console.log(to, from);
  next();
});

router.afterEach((to, from) => {
  console.log("** afterEach!!");
  console.log(to, from);
});

export default {
  name: "app",
  router
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
}
</style>
