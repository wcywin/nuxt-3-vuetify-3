import { defineStore } from 'pinia'
import { UserStoreGetters, UserStoreState} from '~/stores/user/types'
import { getUsersAction } from '~/stores/user/actions/getUsers'
import { getUserByIdAction } from '~/stores/user/actions/getUserById'
import { setUserAction } from '~/stores/user/actions/setUser'
import { userBusyGettingUsersGetter } from '~/stores/user/getters/busy/gettingUsers'

export const state = (): UserStoreState => ({
  users: [], // widok 1
  user: null, // widok 2
  busy: {
    gettingUsers: false
  }
})

const getters: UserStoreGetters = {
  userBusyGettingUsersGetter,
}

const actions = {
  getUsersAction,
  getUserByIdAction,
  setUserAction
}

export const useUserStore = defineStore('user', {
  state,
  getters: { ...getters },
  actions
})
