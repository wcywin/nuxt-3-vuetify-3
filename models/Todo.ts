import { Todo } from '~/types/todo'

class TodoModel implements Todo {
  public readonly userId: number
  public readonly id: number
  public readonly title: string
  public readonly completed: boolean

  constructor(userId: number, id: number, title: string, completed: boolean) {
    this.userId = userId
    this.id = id
    this.title = title
    this.completed = completed
  }
}

export default TodoModel
