import { TodoStore } from '~/stores/todo/types'
import { Todo } from '~/types/todo'

export function setTodosAction(this: TodoStore, userId: number): void {
  const todosByUserId = this.todos.filter((todo: Todo): boolean => todo.userId === userId)

  if (todosByUserId.length) {
    this.todosByUserId = todosByUserId
  }
}
