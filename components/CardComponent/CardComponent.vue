<template>
  <v-card
    v-for="user in listOfUsers"
    :key="user.id"
    class="mx-auto mb-5"
    width="400"
    append-icon="mdi-calendar-today"
  >
    <template v-slot:title>
      {{ user.id }}. {{  user.name }} - "{{ user.username }}"
    </template>
    <v-card-text>
      <div>Email: {{ user.email }}</div>
      <div class="d-flex justify-space-between align-center">
        <div>Number of todos: {{ getTodosPerUser(user.id) }}</div>
        <nuxt-link :to="`/user/${user.id}`">
          See todos
        </nuxt-link>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { User } from '~/types/user'

interface CardProps {
  listOfUsers: Array<User>
}

defineProps<CardProps>()

const { getTodosPerUser } = useTodo()
</script>
