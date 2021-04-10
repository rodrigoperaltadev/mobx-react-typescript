import { Todo } from '../store/dataStore/interfaces/todo'

export const createTodo = (description: string, userId: number): Todo => {
  return new Todo(description, userId)
}
