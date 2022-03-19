<template>
  <div class="container">
    <table >
      <thead>
        <tr>
          <th>Viec lam</th>
          <th>Thoi gian</th>
          <th>Ngay</th>
        </tr>
      </thead>
    </table>
    <Task 
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :index="index"
    />
  <router-link :to="{name:'Create'}"><button class="btn btn-outline-success"><font-awesome-icon icon="fa-solid fa-circle-plus" /></button></router-link>
  <router-view></router-view>
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
  table {
    width: 80%;
    text-align: center;
  }
  th {
    width: calc(100%/3);
  }
</style>