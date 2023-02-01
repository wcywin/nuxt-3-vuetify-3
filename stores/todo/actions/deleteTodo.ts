import { TodoStore } from '~/stores/todo/types'
import { TodoApi } from '~/api/TodoApi'

export async function deleteTodoAction(this: TodoStore, todoId: number): Promise<void> {
  try {
    this.busy.deletingTodo = true

    const response = await TodoApi.deleteTodo(todoId)

    if (response) {
      this.todosByUserId = [...this.todosByUserId.filter(todo => todo.id !== todoId)]
    }
  } catch (err) {
    console.log(err, 'err deleteTodoAction')
  } finally {
    this.busy.deletingTodo = false
  }
}
