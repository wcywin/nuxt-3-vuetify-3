import { TodoStore } from '~/stores/todo/types'
import { TodoApi } from '~/api/TodoApi'
import { Todo } from '~/types/todo'
import TodoModel from '~/models/Todo'

export async function getTodosByUserIdAction(this: TodoStore, userId: number): Promise<void>{
  try {
    this.busy.gettingTodosByUserId = true

    const response = await TodoApi.getTodosByUserId(userId) as Array<unknown>

    this.todosByUserId = response.map((todo: any): Todo => new TodoModel(todo.userId,
      todo.id,
      todo.title,
      todo.completed
    ))
  } catch (err) {
    console.log(err, 'error getTodosByUserIdAction')
  } finally {
    this.busy.gettingTodosByUserId = false
  }
}
