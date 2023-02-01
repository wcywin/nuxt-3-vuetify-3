import { defineStore } from 'pinia'
import { TodoStoreGetters, TodoStoreState } from '~/stores/todo/types'
import { todoBusyGettingTodosGetter } from '~/stores/todo/getters/busy/gettingTodos'
import { todoBusyGettingTodosByUserIdGetter } from '~/stores/todo/getters/busy/gettingTodosByUserId'
import { todoBusyUpdatingTodoStatusGetter } from '~/stores/todo/getters/busy/updatingTodoStatus'
import { todoBusyUpdatingTodoTitleGetter } from '~/stores/todo/getters/busy/updatingTodoTitle'
import { todoBusyDeletingTodoGetter } from '~/stores/todo/getters/busy/deletingTodo'
import { todoBusyAddingTodoGetter } from '~/stores/todo/getters/busy/addingTodo'
import { getTodosAction } from '~/stores/todo/actions/getTodos'
import { getTodosByUserIdAction } from '~/stores/todo/actions/getTodosByUserId'
import { addTodoAction } from '~/stores/todo/actions/addTodo'
import { toggleTodoAction } from '~/stores/todo/actions/toggleTodo'
import { updateTodoAction } from '~/stores/todo/actions/updateTodo'
import { deleteTodoAction } from '~/stores/todo/actions/deleteTodo'
import { setTodosAction } from '~/stores/todo/actions/setTodos'

export const state = (): TodoStoreState => ({
  todos: [],
  todosByUserId: [],
  busy: {
    gettingTodos: false,
    gettingTodosByUserId: false,
    addingTodo: false,
    updatingTodoStatus: false,
    updatingTodoTitle: false,
    deletingTodo: false
  }
})

const getters: TodoStoreGetters = {
  todoBusyGettingTodosGetter,
  todoBusyGettingTodosByUserIdGetter,
  todoBusyAddingTodoGetter,
  todoBusyUpdatingTodoStatusGetter,
  todoBusyUpdatingTodoTitleGetter,
  todoBusyDeletingTodoGetter,
}

const actions = {
  getTodosAction,
  getTodosByUserIdAction,
  addTodoAction,
  toggleTodoAction,
  updateTodoAction,
  deleteTodoAction,
  setTodosAction
}

export const useTodoStore = defineStore('todo', {
  state,
  getters: { ...getters },
  actions
})
