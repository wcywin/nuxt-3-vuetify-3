import { TodoStore } from '~/stores/todo/types'
import { TodoApi } from '~/api/TodoApi'

export async function toggleTodoAction(
  this: TodoStore,
  todoId: number,
  { completed }: { completed: boolean }
): Promise<void> {
  try {
    this.busy.updatingTodoStatus = true

    const response = await TodoApi.updateTodo(todoId, { completed }) as Array<unknown>

    if (response) {
      const updatedTodos = this.todosByUserId.map(todo => {
        if (todo.id !== todoId) {
          return todo
        }

        todo['completed'] = completed
        return todo
      })

      this.todosByUserId = [...updatedTodos]
    }
  } catch (err) {
    console.log(err, 'err toggleTodoAction')
  } finally {
    this.busy.updatingTodoStatus = false
  }
}
