import { observable, action, makeObservable } from 'mobx'
import { createTodo } from '../../helpers'
import RootStore from './../RootStore'
import { Todo } from './interfaces/todo'
import { User } from './interfaces/user'

export default class UserStore {
  users: User[]

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.users = []

    makeObservable(this, {
      users: observable,
      addUser: action,
      removeUser: action,
    })
  }

  addUser(user: User) {
    this.users = [...this.users, user]
    const todo: Todo = createTodo('First to do', user.id)

    this.rootStore.dataStore.todoStore.addTodo(todo)
  }

  removeUser(userId: number) {
    const todos = this.rootStore.dataStore.todoStore.getTodosByUserId(userId)
    for (const todo of todos) {
      this.rootStore.dataStore.todoStore.removeTodo(todo.id)
    }
    this.users = this.users.filter(user => user.id !== userId)
  }
}
