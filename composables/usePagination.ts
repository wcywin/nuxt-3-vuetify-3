import { User } from '~/types/user'

const { users } = useUser()

const pageInitial = ref<number>(1)
const usersToShowPerPage = ref<number>(3)

export const usePagination = () => {
  const pagination = reactive({
    page: pageInitial.value,
    usersPerPage: usersToShowPerPage.value
  })

  const usersToShow = computed<Array<User>>(() => users.value.slice(
    pagination.page * pagination.usersPerPage - pagination.usersPerPage,
    pagination.page * pagination.usersPerPage
  ))

  const pagesCount = computed<number>((): number => {
    return Math.ceil(users.value.length / 3)
  })

  return {
    pagination,
    usersToShow,
    pagesCount
  }
}
