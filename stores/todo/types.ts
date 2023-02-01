import { Todo } from '~/types/todo'

export interface TodoBusyState {
  gettingTodos: boolean
  gettingTodosByUserId: boolean
  addingTodo: boolean
  updatingTodoStatus: boolean
  updatingTodoTitle: boolean
  deletingTodo: boolean
}

export interface TodoStoreState {
  todos: Array<Todo>
  todosByUserId: Array<Todo>
  busy: TodoBusyState
}

export interface TodoStoreGetters {
  todoBusyGettingTodosGetter: (state: TodoStoreState) => boolean
  todoBusyGettingTodosByUserIdGetter: (state: TodoStoreState) => boolean
  todoBusyUpdatingTodoStatusGetter: (state: TodoStoreState) => boolean
  todoBusyUpdatingTodoTitleGetter: (state: TodoStoreState) => boolean
  todoBusyDeletingTodoGetter: (state: TodoStoreState) => boolean
  todoBusyAddingTodoGetter: (state: TodoStoreState) => boolean
}

export type TodoStore = ReturnType<typeof import('./index')['useTodoStore']>
