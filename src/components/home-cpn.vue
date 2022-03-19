<template>
  <div >
    <nav>
      <ul>
        <li><router-link :to="{name:'List'}">Home</router-link></li>
        <li><router-link :to="{name:'List'}">Account</router-link></li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
nav {
  background: rgb(129, 121, 121);
}
li {

  list-style: none;
  display: inline-block;
  padding: 20px;
  text-align: center;
}
li:hover {
  background: white;
  box-shadow: rgba(129, 121, 121, 0.5);
}
</style>