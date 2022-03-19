let tasks = [
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
    commit('setTasks', tasks)
  },

  addTask({commit}, task) {
    commit('addTask', task)
  },

  completed({commit}, index) {
    commit('completeTask', index)
  }
}