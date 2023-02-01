import { useTodoStore } from '~/stores/todo'
import { storeToRefs } from 'pinia'
import { Todo } from '~/types/todo'

export const useTodo = () => {
  const todoStore = useTodoStore()

  const {
    todos,
    todosByUserId,
    todoBusyAddingTodoGetter,
    todoBusyUpdatingTodoStatusGetter,
    todoBusyUpdatingTodoTitleGetter,
    todoBusyDeletingTodoGetter,
  } = storeToRefs(todoStore)

  const getTodosPerUser = (userId: number): number => todos.value.filter((todo: Todo): boolean => todo.userId === userId).length

  return {
    todos,
    todosByUserId,
    todoStore,
    getTodosPerUser,
    todoBusyAddingTodoGetter,
    todoBusyUpdatingTodoStatusGetter,
    todoBusyUpdatingTodoTitleGetter,
    todoBusyDeletingTodoGetter
  }
}
