import { action, makeObservable, observable } from 'mobx'

let runningUserId = 0

export class User {
  id: number
  name: string
  constructor(name: string) {
    runningUserId++
    this.id = runningUserId
    this.name = name

    makeObservable(this, {
      name: observable,
      updateName: action,
    })
  }

  updateName(name: string) {
    this.name = name
  }
}
