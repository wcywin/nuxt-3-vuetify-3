import { TodoStoreState } from '~/stores/todo/types'

export function todoBusyAddingTodoGetter({ busy }: TodoStoreState): boolean {
  return busy.addingTodo
}
