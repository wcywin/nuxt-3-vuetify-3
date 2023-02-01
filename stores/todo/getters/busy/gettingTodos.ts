import { TodoStoreState } from '~/stores/todo/types'

export function todoBusyGettingTodosGetter({ busy }: TodoStoreState): boolean {
  return busy.gettingTodos
}
