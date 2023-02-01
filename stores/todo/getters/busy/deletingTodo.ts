import { TodoStoreState } from '~/stores/todo/types'

export function todoBusyDeletingTodoGetter({ busy }: TodoStoreState): boolean {
  return busy.deletingTodo
}
