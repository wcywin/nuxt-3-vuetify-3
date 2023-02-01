import { TodoStoreState } from '~/stores/todo/types'

export function todoBusyGettingTodosByUserIdGetter({ busy }: TodoStoreState): boolean {
  return busy.gettingTodosByUserId
}
