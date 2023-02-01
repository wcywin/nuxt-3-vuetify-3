import User from '~/models/User'

const { users } = useUser()

const searchPhrase = ref<string>('')
const searchResults = ref<Array<User>>([])

export const useSearch = () => {

  const setSearchPhrase = (phrase: string): string => (searchPhrase.value = phrase)

  const setSearchResults = (): void => {
    searchResults.value = []

    searchResults.value = users.value.filter((user: User): boolean => user.name.includes(searchPhrase.value))
  }

  const resetSearch = () => {
    setSearchPhrase('')
    searchResults.value = []
  }

  return {
    searchPhrase,
    searchResults,
    setSearchPhrase,
    setSearchResults,
    resetSearch
  }
}
