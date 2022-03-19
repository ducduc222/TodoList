<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Viec lam</th>
          <th scope="col">Thoi gian</th>
          <th scope="col">Ngay</th>
        </tr>
      </thead>
      <tbody>
        <tr 
        v-for="(task, index) in tasks"
        :key="index"
        :class="{completed: task.completed}"
        >
          <td>{{task.content}}</td>
          <td>{{task.time}}</td>
          <td>{{task.date}}</td>
          <td><font-awesome-icon @click="completed(index)" icon="fa-solid fa-circle-check" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
  mounted() {
    this.getTasks()
  },


  computed: {
    ...mapState(['tasks'])
  },

  methods: {
    ...mapActions(['getTasks', 'completed'])
  },
}
</script>

<style scoped>
.completed {
  background: greenyellow;
}
</style>