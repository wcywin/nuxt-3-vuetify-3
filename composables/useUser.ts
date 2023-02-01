import { useUserStore } from '~/stores/user'
import { storeToRefs } from 'pinia'

export const useUser = () => {
  const userStore = useUserStore()

  const { users, user } = storeToRefs(userStore)

  return {
    users,
    user,
    userStore
  }
}
