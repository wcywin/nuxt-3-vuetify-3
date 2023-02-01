import { UserStoreState } from '~/stores/user/types'

export function userBusyGettingUsersGetter({ busy }: UserStoreState): boolean {
  return busy.gettingUsers
}
