<template>
  <div id="app">
    <div class="header">
      <div class="headerText">Hs ERP - V 1.0</div>
      <nav>
        <ul>
          <li>
            <router-link :to="{name:'home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name:'about'}">About</router-link>
          </li>
          <li>
            <router-link :to="{name:'contacts'}">Contacts</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/home", name: "home", component: Home },
    { path: "/home", name: "home", component: Home },
    { path: "/home", name: "home", component: Home },
  ]
});

//전역 수준 네비게이션 보호
router.beforeEach((to, from, next) => {
  console.log("** beforeEach!!");
  console.log(to,from)
  next();
});

router.afterEach((to, from) => {
  console.log("** afterEach!!");
  console.log(to,from)
});

export default {
  name: "app",
  router
};
</script>

<style>
.header {
  background-color: white;
}
.headerText {
  padding: 30px 16px 20px 16px;
  color: #34a88f;
  font-weight: bold;
  margin: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #34a88f;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: #177e68;
  color: white;
}
</style>
