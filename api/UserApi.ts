// import { apiUrl } from '~/api/urls'
import { ApiClient } from '~/api/ApiClient'

export class UserApi extends ApiClient {
  public static getUsers = async<T>(): Promise<T> => {
    return await $fetch(`${this.config.public.apiUrl}/users`)
  }

  public static getUserById = async<T>(userId: number): Promise<T> => {
    return await $fetch(`${this.config.public.apiUrl}/users/${userId}`)
  }

  // // SSR
  // public static getUsers = async<T>(): Promise<T> => {
  //   return await $fetch(`${apiUrl}/users`)
  // }
  //
  // public static getUserById = async<T>(userId: number): Promise<T> => {
  //   return await $fetch(`${apiUrl}/users/${userId}`)
  // }
}

