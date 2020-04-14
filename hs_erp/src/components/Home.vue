<template>
  <div>
    <div class="header">
      <div class="headerText">Rich Star</div>
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
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.header {
  background-color: white;
}
.headerText {
  text-align: center;
  padding: 30px 16px 20px 16px;
  color: #21272b;
  font-size: 30px;
  font-weight: bold;
  margin: 0;

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #21272b;
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
  background-color: #6e6c77;
  color: white;
}
</style>
