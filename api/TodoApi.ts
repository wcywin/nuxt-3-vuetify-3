// import { apiUrl } from '~/api/urls'
import { Methods } from '~/constants/methods'
import { Todo } from '~/types/todo'
import { ApiClient } from '~/api/ApiClient'

export class TodoApi extends ApiClient {
  public static getTodos = async<T>(): Promise<T> => {
    return await $fetch(`${this.config.public.apiUrl}/todos`)
  }

  public static getTodosByUserId = async<T>(userId: number): Promise<T> => {
    return await $fetch(`${this.config.public.apiUrl}/user/${userId}/todos`)
  }

  public static addTodo = async<T>(todo: Partial<Todo>): Promise<T> => {
    return await $fetch(`${this.config.public.apiUrl}/todos`, {
      method: Methods.POST,
      body: JSON.stringify({
        ...todo
      })
    })
  }

  public static deleteTodo = async<T>(todoId: number): Promise<T> => {
    return await $fetch(`${this.config.public.apiUrl}/todos/${todoId}`, {
      method: Methods.DELETE
    })
  }

  public static updateTodo = async<T>(
    todoId: number,
    { title, completed }: { title?: string, completed?: boolean }
  ): Promise<T> => {
    return await $fetch(`${this.config.public.apiUrl}/todos/${todoId}`, {
      method: Methods.PATCH,
      body: JSON.stringify({
        title,
        completed
      })
    })
  }

  // // SSR
  // public static getTodos = async<T>(): Promise<T> => {
  //   return await $fetch(`${apiUrl}/todos`)
  // }
  //
  // public static getTodosByUserId = async<T>(userId: number): Promise<T> => {
  //   return await $fetch(`${apiUrl}/user/${userId}/todos`)
  // }
  //
  // public static addTodo = async<T>(todo: Partial<Todo>): Promise<T> => {
  //   return await $fetch(`${apiUrl}/todos`, {
  //     method: Methods.POST,
  //     body: JSON.stringify({
  //       ...todo
  //     })
  //   })
  // }
  //
  // public static deleteTodo = async<T>(todoId: number): Promise<T> => {
  //   return await $fetch(`${apiUrl}/todos/${todoId}`, {
  //     method: Methods.DELETE
  //   })
  // }
  //
  // public static updateTodo = async<T>(
  //   todoId: number,
  //   { title, completed }: { title?: string, completed?: boolean }
  // ): Promise<T> => {
  //   return await $fetch(`${apiUrl}/todos/${todoId}`, {
  //     method: Methods.PATCH,
  //     body: JSON.stringify({
  //       title,
  //       completed
  //     })
  //   })
  // }
}
