let taskss = [
  {
    content: "Viec lam", 'time':'00h00', date: '01/03/2022', completed: false
  },
  {
    content: "Viec lam", 'time':'00h00', date: '01/03/2022', completed: true
  },
  {
    content: "Viec lam", 'time':'00h00', date: '01/03/2022', completed: false
  },
  {
    content: "Viec lam", 'time':'00h00', date: '01/03/2022', completed: false
  }
]

export default {
  getTasks({commit}) {
    commit('setTasks', taskss)
  },

  addTask({commit}, task) {
    commit('addTask', task)
  },

  completeTask({commit}, index) {
    commit('completeTask', index)
  },

  deleteTask({commit}, index) {
    commit('deleteTask', index)
  }
}