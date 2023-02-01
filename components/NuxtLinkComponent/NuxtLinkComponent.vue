<template>
  <nuxt-link
    :to="directTo"
    class="nuxt-link-component d-flex align-center text-decoration-none my-3"
  >
    <v-icon
      v-if="icon"
      :icon="icon"
      :size="iconSize"
      class="mr-3"
    />
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">

interface Props {
  directTo: string
  icon?: string
  iconSize?: string | number
}

defineProps<Props>()

</script>

<style>
.nuxt-link-component {
  color: var(--primary)
}
</style>
