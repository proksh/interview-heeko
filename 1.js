const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  getTasksToDo: () => {
    console.log(this.tasks.filter((task) => {
      return !task.completed
    }))
  }
}

console.log(tasks.getTasksToDo())