import { action, computed, makeObservable, observable } from 'mobx'
import RootStore from '../RootStore'

export enum Views {
  TASKS = 'TASKS',
  USERS = 'USERS',
}

export default class UIStore {
  private rootStore: RootStore

  currentView: Views = Views.TASKS

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      currentView: observable,
      totalUsers: computed,
      getcurrentView: computed,
      setCurrentView: action,
    })
  }

  get totalUsers(): number {
    return this.rootStore.dataStore.userStore.users.length
  }

  get totalTodos(): number {
    return this.rootStore.dataStore.todoStore.todos.length
  }

  get getcurrentView() {
    return this.currentView
  }
  setCurrentView(view: Views) {
    this.currentView = view
  }
}
