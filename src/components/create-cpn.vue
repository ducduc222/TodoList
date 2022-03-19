<template>
<div class="container">
  <form @submit.prevent="createNewTask" >
    <table class="">
      <tbody>
        <tr>
          <td>
            <input type="text" v-model="Task.content" placeholder="Nhap noi dung cong viec">
          </td>
          <td>
            <input type="time" v-model="Task.time" default="t">
          </td>
          <td>
            <input type="date" v-model="Task.date">
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-outline-success">Them</button>
  </form>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {

  data() {
    return {
      Task: {
          content:'',
          time:'',
          date:'',
          completed: false
        }
      
    }
  },
  methods: {
    ...mapActions(['addTask']),
    createNewTask() {
      this.addTask({...this.Task}),
      this.Task = []
    }
  }
}
</script>

<style scoped>
td {
  height: 20px;
}
</style>