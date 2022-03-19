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
    </table>
    <Task 
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :index="index"
    />
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import Task from './task-cpn.vue'

export default {
  mounted() {
    this.getTasks()
  },

  components: {
    Task
  },

  computed: {
    ...mapState(['tasks'])
  },

  methods: {
    ...mapActions(['getTasks'])
  },
}
</script>

<style scoped>

</style>