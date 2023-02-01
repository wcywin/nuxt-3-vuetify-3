import { TodoStore } from '~/stores/todo/types'
import { TodoApi } from '~/api/TodoApi'
import { Todo } from '~/types/todo'

export async function addTodoAction(this: TodoStore, todo: Partial<Todo>): Promise<void> {
  try {
    this.busy.addingTodo = true

    const response = await TodoApi.addTodo(todo)

    if (response) {
      // @ts-ignore
      this.todosByUserId.push(todo)
    }
  } catch (err) {
    console.log(err, 'err addTodoAction')
  } finally {
    this.busy.addingTodo = false
  }
}
