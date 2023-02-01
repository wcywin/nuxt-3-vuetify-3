import { UserStore } from '~/stores/user/types'
import { UserApi } from '~/api/UserApi'
import UserModel from '~/models/User'
import { User } from '~/types/user'

export async function getUserByIdAction(this: UserStore, userId: number): Promise<void> {
  try {
    this.busy.gettingUsers = true

    const response = await UserApi.getUserById(userId) as any | unknown | User

    this.user = { ...new UserModel(response.address,
        response.company,
        response.email,
        response.id,
        response.name,
        response.phone,
        response.username,
        response.website
      )}

  } catch (err) {
    console.log(err, 'error getUserByIdAction')
  } finally {
    this.busy.gettingUsers = false
  }
}
