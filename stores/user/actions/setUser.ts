import { UserStore } from '~/stores/user/types'
import User from '~/models/User'

export function setUserAction(this: UserStore, userId: number): void {
  const user = this.users.find((user: User) => user.id === userId)

  if (user) {
    this.user = user
  }
}
