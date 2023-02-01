import { TodoStoreState } from '~/stores/todo/types'

export function todoBusyUpdatingTodoTitleGetter({ busy }: TodoStoreState): boolean {
  return busy.updatingTodoTitle
}
