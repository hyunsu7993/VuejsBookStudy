<template>
  <div id="app">
    <div class="header">
      <h1 class="headerText">(주) 리치 스타</h1>
      <nav>
        <ul>
          <!-- <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contacts">Contacts</router-link>
          </li> -->
          <li>
            <router-link to="{name:'home'}">Home</router-link>
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
import About from "./components/About.vue";
import Contacts from "./components/Contacts.vue";
import ContactByNo from "./components/ContactByNo.vue";
import VueRouter from "vue-router";

  // { path: "/contacts", component: Contacts },
  // { path: "/contacts/:no", component: ContactByNo },
const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/home", name:'home', component: Home },
    { path: "/about", name:'about', component: About },
    { 
      path: "/contacts", name:'contacts', component: Contacts,
      children:[{
        path: ':no', name:'contactbyno', component:ContactByNo
      }]
    },
  ]
});

export default {
  name: 'app',
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
