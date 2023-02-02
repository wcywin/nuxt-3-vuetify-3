<template>
  <v-container v-if="loadingPage" class="fill-height">
    <v-row>
      <v-col class="w-100 d-flex justify-center align-center">
        <loader-component />
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else class="p-user">
    <div class="w-100 d-flex justify-space-between align-baseline">
      <nuxt-link-component direct-to="/" class="d-block">
        <v-btn
          variant="tonal"
          prepend-icon="mdi-arrow-left"
        >
          Back
        </v-btn>
      </nuxt-link-component>
      <v-card-text
        v-if="user"
        class="d-flex flex-column align-end"
      >
        <h1>{{ user.name }}</h1>
        <h2>Company: {{ user.company.name }}</h2>
        <h2>Email: {{ user.email }}</h2>
      </v-card-text>
    </div>

    <div>
      <v-form @submit.prevent="addTodo">
        <v-text-field
            v-model="newTodoTitle"
            :counter="100"
            label="Add a new Todo"
            required
        ></v-text-field>
        <v-btn
          type="submit"
          :disabled="!newTodoTitle"
          :loading="todoBusyAddingTodoGetter"
        >
          Add Todo
        </v-btn>
      </v-form>
      <p class="text-red">{{ newTodoError }}</p>
    </div>

    <div v-if="todos" class="mt-12">
      <v-card
        v-for="(todo, index) in todos"
        :key="todo.id"
        class="mx-auto mb-5"
        width="500"
        :loading="selectedTodoIndex === index && (todoBusyUpdatingTodoTitleGetter || todoBusyUpdatingTodoStatusGetter || todoBusyDeletingTodoGetter)"
      >
        <v-text-field
          v-model="todo.title"
          :label="`Todo index: ${index}`"
          :disabled="selectedTodoIndex !== index"
          :loading="selectedTodoIndex === index && todoBusyUpdatingTodoTitleGetter"
          hide-details
        />
        <v-card-subtitle class="d-flex align-center">
          Todo completed:
          <v-checkbox-btn
            v-model="todo.completed"
            :label="String(todo.completed)"
            @click="toggleTodo(todo.id, { completed: !todo.completed})"
          />
        </v-card-subtitle>
        <v-card-text class="d-flex justify-space-between align-center">
          <div class="d-flex flex-grow-1 justify-end">
            <v-btn
              v-if="selectedTodoIndex === index"
              :color="$vuetify.theme.name === 'dark' ? 'red' : 'error'"
              class="mr-5"
              prepend-icon="mdi-close"
              @click="cancelEditTodo"
            >
              Cancel
            </v-btn>
            <v-btn
              v-else
              :color="$vuetify.theme.name === 'dark' ? 'green' : 'success'"
              class="mr-5"
              :prepend-icon="`mdi-${todo.completed ? 'history' : 'check'}`"
              @click="toggleTodo(todo.id, { completed: !todo.completed })"
              :loading="selectedTodoIndex === index && todoBusyUpdatingTodoStatusGetter"
            >
              {{ todo.completed ? 'Undo' : 'Done' }}
            </v-btn>
            <v-btn
              :color="$vuetify.theme.name === 'dark' ? 'primary' : 'warning'"
              class="mr-5"
              prepend-icon="mdi-pencil"
              @click="selectedTodoIndex === index
                ? saveTodo(index, todo.id, { title: todo.title })
                : editTodo(index)"
              :loading="selectedTodoIndex === index && todoBusyUpdatingTodoTitleGetter"

            >
              {{ selectedTodoIndex === index ? 'Save' : 'Edit' }}
            </v-btn>
            <v-btn
              :color="$vuetify.theme.name === 'dark' ? 'red' : 'error'"
              prepend-icon="mdi-delete"
              @click="deleteTodo(index, todo.id)"
              :loading="selectedTodoIndex === index && todoBusyDeletingTodoGetter"
            >
              Delete
            </v-btn>
          </div>
        </v-card-text>

      </v-card>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { toNumber } from '@vue/shared'

const route = useRoute()

const loadingPage = ref<boolean>(true)

const { user, users, userStore } = useUser()
const {
  todosByUserId: todos,
  todoStore,
  todoBusyAddingTodoGetter,
  todoBusyUpdatingTodoStatusGetter,
  todoBusyUpdatingTodoTitleGetter,
  todoBusyDeletingTodoGetter,
} = useTodo()

const setUser = (userId: number): void => {
  userStore.setUserAction(userId)
}

const setTodosByUserId = (userId: number): void => {
  todoStore.setTodosAction(userId)
}

const setData = (userId: number): void => {
  setUser(userId)
  setTodosByUserId(userId)
}

if (users && todos) {
  setData(toNumber(route.params.id))
}

if (!user.value) {
  userStore.getUserByIdAction(toNumber(route.params.id))
}

if (!todos.value || todos.value.length === 0) {
  todoStore.getTodosByUserIdAction(toNumber(route.params.id))
}

const newTodoTitle = ref<string>('')
const newTodoError = ref<string>('')
const selectedTodoIndex = ref<number | null>(null)

const resetAddTodoForm = () => newTodoTitle.value = ''

const addTodo = async (): Promise<void> => {
  try {
    if (newTodoTitle.value.length > 0) {
      await todoStore.addTodoAction({
        userId: toNumber(route.params.id),
        title: newTodoTitle.value,
        completed: false
      })

      resetAddTodoForm()
    }
  } catch (err) {
    console.log('addTodo error')
    newTodoError.value = 'Type something to add the todo'
  }

}
const toggleTodo = async (
  todoId: number,
  { completed }: { completed: boolean }
): Promise<void> => await todoStore.toggleTodoAction(todoId, { completed })

const saveTodo = async (
  index: number,
  todoId: number,
  { title }: { title: string }
): Promise<void> => {
  if(selectedTodoIndex.value === index) {
    await todoStore.updateTodoAction(todoId, { title })
    selectedTodoIndex.value = null
  }
}

const editTodo = (index: number): number => selectedTodoIndex.value = index

const cancelEditTodo = (): null => selectedTodoIndex.value = null

const deleteTodo = async (index: number, todoId: number): Promise<void> => {
  selectedTodoIndex.value = index
  await todoStore.deleteTodoAction(todoId)
  selectedTodoIndex.value = null
}

onMounted(() => {
  loadingPage.value = false
})
onUnmounted(() => resetAddTodoForm())
</script>

<style>
.p-user {
  max-width: 800px !important;
}
</style>
