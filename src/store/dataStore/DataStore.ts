import RootStore from '../RootStore'
import TodoStore from './TodoStore'
import UserStore from './UserStore'

export default class DataStore {
  todoStore: TodoStore
  userStore: UserStore

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.todoStore = new TodoStore(rootStore)
    this.userStore = new UserStore(rootStore)
  }
}
