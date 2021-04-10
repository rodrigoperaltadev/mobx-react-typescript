import { action, makeObservable, observable } from 'mobx'

let runningTodoId = 0

export class Todo {
  id: number
  description: string
  completed: boolean
  userId: number
  constructor(description: string, userId: number) {
    runningTodoId++
    this.id = runningTodoId
    this.description = description
    this.completed = false
    this.userId = userId
    makeObservable(this, {
      description: observable,
      completed: observable,
      userId: observable,
      toggleCompleted: action,
      updateDescription: action,
    })
  }
  updateDescription(description: string) {
    this.description = description
  }

  toggleCompleted() {
    this.completed = !this.completed
  }
}
