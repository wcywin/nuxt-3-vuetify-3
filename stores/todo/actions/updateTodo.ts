import { TodoStore } from '~/stores/todo/types'
import { TodoApi } from '~/api/TodoApi'

export async function updateTodoAction(
  this: TodoStore,
  todoId: number,
  { title }: { title: string }
): Promise<void> {
  try {
    this.busy.updatingTodoTitle = true

    const response = await TodoApi.updateTodo(todoId, { title }) as Array<unknown>

    if (response) {
      const updatedTodos = this.todosByUserId.map(todo => {
        if (todo.id !== todoId) {
          return todo
        }

        todo['title'] = title
        return todo
      })

      this.todosByUserId = [...updatedTodos]
    }
  } catch (err) {
    console.log(err, 'err updateTodoAction')
  } finally {
    this.busy.updatingTodoTitle = false
  }
}
