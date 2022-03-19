<template>
  <div>
    <table>
      <tbody>
        <tr :class="{completed: task.completed}">
          <td>{{task.content}}</td>
          <td>{{task.time}}</td>
          <td>{{task.date}}</td>
        </tr>
      </tbody>
    </table>
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
button {
  margin-right: 10px;
}

.completed {
  background: greenyellow;
}
</style>