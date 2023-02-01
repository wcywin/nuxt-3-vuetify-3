import { TodoStoreState } from '~/stores/todo/types'

export function todoBusyUpdatingTodoStatusGetter({ busy }: TodoStoreState): boolean {
  return busy.updatingTodoStatus
}
