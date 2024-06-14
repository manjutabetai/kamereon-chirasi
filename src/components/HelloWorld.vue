<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="">{{ msg }}</h1>

  <div class="card flex flex-col items-center gap-5">
    <button
      type="button"
      @click="count++"
      class="bg-slate-600 p-3 rounded-2xl text-white shadow-lg shadow-orange-200 hover:border-2"
    >
      The count is {{ count }}
    </button>
    <img src="@/assets/kaishi.png" alt="" class="w-24" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
