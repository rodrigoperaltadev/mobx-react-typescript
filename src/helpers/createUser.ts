import { User } from '../store/dataStore/interfaces/user'

export const createUser = (name: string): User => {
  return new User(name)
}
