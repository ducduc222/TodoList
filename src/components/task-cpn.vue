<template>
  <div class="task">
    <div :class="{completed: task.completed}" class="content">
      <p>{{task.content}}</p>
      <p>{{task.time}}</p>
      <p>{{task.date}}</p>
    </div>
    <button class="btn btn-outline-success" @click="completeTask(index)" >
      <font-awesome-icon icon="fa-solid fa-circle-check" />
    </button>

    <button class="btn btn-outline-success" @click="deleteTask(index)">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
  </div>
</template>

<script>

import { mapActions} from 'vuex'
export default {
  props: ['task', 'index'],

  methods: {
      ...mapActions(['completeTask' ,'deleteTask'])
  },
}

</script>

<style scoped>

div.task {
  width: 100%;
}
div.content {
  width: 80%;
  display: inline-block;
}
p {
  display: inline-block;
  width: calc(100%/3);
  text-align: center;
  padding: auto;
}
button {
  margin-right: 10px;
}
.completed {
  background: greenyellow;
}

</style>