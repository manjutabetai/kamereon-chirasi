<template>
  <div class="bg-pink-300 h-full w-full">
    this is Dash board vue <span>{{ auth.username }}</span>
  </div>
</template>

<script setup lang="ts">
import authStore from '@/@Stores/authStore'
const auth = authStore.useAuthStore()
</script>

<style scoped></style>
