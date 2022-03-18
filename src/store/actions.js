export default {
  getTasks({commit}, tasks) {
    commit('setTasks', tasks)
  }
}