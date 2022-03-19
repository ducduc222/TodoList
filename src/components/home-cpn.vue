<template>
  <div >
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Account</a></li>
      </ul>
    </nav>
    <List />
    <Create />
  </div>
</template>

<script>
import List from './list-cpn.vue'
import Create from './create-cpn.vue'
export default {
  components: {
    List, Create
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
a {
  display: block;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 20px;
}

li:hover {
  background: white;
  box-shadow: rgba(129, 121, 121, 0.5);
}
li:hover a{
  color: black;
}
</style>