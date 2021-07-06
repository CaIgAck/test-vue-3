<template>
  <div class="nav">
    <div class="nav-logo">Test vue 3</div>
    <div>
      <RouterLink to="/" class="nav-tab">To do list</RouterLink>
      <RouterLink to="/about" class="nav-tab">хуй</RouterLink>
    </div>
  </div>
  <router-view />
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:regular@1&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
.nav {
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  background-color: #a3e6e6;
}
.nav-logo {
  font-size: 32px;
  font-weight: bolder;
}
.nav-tab {
  text-decoration: none;
  padding: 15px 15px;
  color: black;
}
.nav-tab:hover {
  text-decoration: none;
  padding: 15px 15px;
  background-color: #a3e0e6;
  color: white;
}
</style>
