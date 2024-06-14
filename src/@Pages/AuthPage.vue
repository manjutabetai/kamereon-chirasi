<template>
  <div class="bg-green-200 w-full h-full">
    <input
      class="bg-blue-300 p-1 m-1 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
      type="button"
      value="Authorize Me"
      @click="authorize"
    />

    <span :class="auth.is_authorized ? 'text-green-600' : 'text-red-500'">{{
      auth.is_authorized
    }}</span>
  </div>
</template>

<script setup lang="ts">
import authStore from '@/@Stores/authStore'

const auth = authStore.useAuthStore()

function getRandomString(): string {
  return Math.random().toString(36).substring(2, 10)
}

function authorize() {
  let name = getRandomString()
  auth.authenticate(!auth.is_authorized, name)
}
</script>

<style scoped></style>
