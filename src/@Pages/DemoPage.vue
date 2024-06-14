<script setup lang="ts">
import authStore from '@/@Stores/authStore'
const auth = authStore.useAuthStore()
</script>

<template>
  <div class="bg-pink-200 h-full w-full">
    <div v-if="auth.is_authorized">
      Dashboard is authorized for use by <span>{{ auth.username }}</span>
    </div>
    <div class="mb-6" v-else>
      Dashboard is not yet authorized. Please authorize first.
    </div>
    This is DemoPage for user -
    <span>{{ auth.username }}</span>
  </div>
</template>

<style scoped>
.logo {
  @apply h-[10rem];
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
