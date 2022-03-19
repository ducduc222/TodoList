export default {
  setTasks(state, tasks) {
    state.tasks = tasks
  },

  addTask(state, task) {
    state.tasks.push(task)
  },

  completeTask(state, index) {
    state.tasks[index].completed = !state.tasks[index].completed
  },

  deleteTask(state, index) {
    state.tasks.splice(index, 1)
  }
}