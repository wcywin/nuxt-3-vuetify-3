<template>
  <v-app-bar class="d-flex justify-space-between px-5">
    <nuxt-link-component direct-to="/" icon="mdi-access-point" icon-size="x-large">
      <h3 class="w-100 mx-auto">Point Data Collector</h3>
    </nuxt-link-component>
    <div class="d-flex flex-grow-1 justify-end">
      <div class="d-flex align-center">
        <v-switch
          v-model="$vuetify.theme"
          :label="theme.global.name.value === 'dark' ? 'Dark' : 'Light'"
          color="orange"
          value="true"
          inset
          hide-details
          @click="toggleTheme()"
        />
        <v-icon
          :icon="theme.global.name.value === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          class="ml-3"
        />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = (): string => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
</script>

