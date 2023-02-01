import { User } from '~/types/user'
import { Nullable } from '~/types/nullable'

export interface UserBusyState {
  gettingUsers: boolean
}

export interface UserStoreState {
  users: Array<User>
  user: Nullable<User>
  busy: UserBusyState
}

export interface UserStoreGetters {
  userBusyGettingUsersGetter: (state: UserStoreState) => boolean
}

export type UserStore = ReturnType<typeof import('./index')['useUserStore']>
