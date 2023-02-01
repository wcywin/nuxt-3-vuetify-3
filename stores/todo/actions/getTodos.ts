import { TodoStore } from '~/stores/todo/types'
import { TodoApi } from '~/api/TodoApi'
import { Todo } from '~/types/todo'
import TodoModel from '~/models/Todo'

export async function getTodosAction(this: TodoStore): Promise<void> {
  try {
    this.busy.gettingTodos = true

    const response = await TodoApi.getTodos() as Array<unknown>

    this.todos = response.map((todo: any): Todo => new TodoModel(todo.userId,
        todo.id,
        todo.title,
        todo.completed
      ))
  } catch (err) {
    console.log(err, 'error getTodosAction')
  } finally {
    this.busy.gettingTodos = false
  }
}
