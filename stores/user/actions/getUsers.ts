import { UserStore } from '~/stores/user/types'
import { UserApi } from '~/api/UserApi'
import { User } from '~/types/user'
import UserModel from '~/models/User'

export async function getUsersAction(this: UserStore): Promise<void> {
  try {
    this.busy.gettingUsers = true

    const response = await UserApi.getUsers() as Array<unknown>

    this.users = response.map((user: any): User => new UserModel(user.address,
        user.company,
        user.email,
        user.id,
        user.name,
        user.phone,
        user.username,
        user.website
      ))
  } catch (err) {
    console.log(err, 'error getUsersAction')
  } finally {
    this.busy.gettingUsers = false
  }
}
