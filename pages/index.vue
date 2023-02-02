<template>
  <v-container class="p-home">
    <v-row>
      <v-col class="mx-auto">
        <h1 class="mx-auto text-center">Users</h1>

        <v-text-field
          v-model="searchPhrase"
          prepend-inner-icon="mdi-magnify"
          placeholder="Search user"
          class="mt-5"
          @update:model-value="onInputUpdate"
        />

        <template v-if="searchResults.length">
          <div class="bg-blue-grey-darken-4 pa-4 mt-3">
            <h3 class="mb-3">Search results:</h3>
            <card-component :list-of-users="searchResults" />
          </div>
        </template>

        <template v-if="usersToShow">
          <div class="p-home-cards-container mt-8">
            <card-component :list-of-users="usersToShow" />
          </div>
          <v-pagination
              v-model="pagination.page"
              :length="pagesCount"
          />
        </template>

        <template v-else>
          <v-card class="w-33 text-center mx-auto mt-10 py-3 px-5 d-flex flex-column align-center">
            <v-icon
              icon="mdi-sync-alert"
              :size="30"
              class="mb-3"
            />
            <p>
              No users fetched. Try to refresh the page
            </p>
          </v-card>
        </template>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { debounce } from 'perfect-debounce'

const { userStore } = useUser()
const { todoStore } = useTodo()

Promise.allSettled([
  userStore.getUsersAction(),
  todoStore.getTodosAction()
])

const {
  pagination,
  usersToShow,
  pagesCount
} = usePagination()

const {
  searchPhrase,
  searchResults,
  setSearchPhrase,
  setSearchResults,
  resetSearch
} = useSearch()

const onInputUpdate = debounce((input: string): void => {
  console.log(input, 'input')
  if (input.length === 0) {
    resetSearch()
  }
  if (input.length > 2) {
    setSearchPhrase(input)
    setSearchResults()
  }
}, 300)

onBeforeUnmount(() => resetSearch())

</script>

<style scoped lang="scss">
.p-home {
  max-width: 600px !important;
}
.p-home-cards-container {
  min-height: 420px;
}
</style>
