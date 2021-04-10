import { action, makeObservable, observable } from 'mobx'
import RootStore from '../RootStore'
import { Todo } from './interfaces/todo'

export default class TodoStore {
  todos: Todo[]

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.todos = []

    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      update: action,
    })
  }

  getTodosByUserId(userId: number): Todo[] {
    return this.todos.filter(todo => todo.userId === userId)
  }

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo]
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
  }

  update(description: string, id: number) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.description = description
      }
    }
  }

  get todosCompleted() {
    return this.todos.filter(todo => todo.completed)
  }

  get todosIncompleted() {
    return this.todos.filter(todo => !todo.completed)
  }
}
