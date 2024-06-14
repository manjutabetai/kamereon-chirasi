<template>
  <div class="box-border my-3">
    App Vue
    <!-- RouterLinkはページ全体を再読み込みしない <a>は再読み込みする -->
    <ul class="my-2">
      <RouterLink to="/">
        <li>Home</li>
      </RouterLink>
      <RouterLink to="/demo">
        <li>Demo</li>
      </RouterLink>
      <RouterLink to="/login">
        <li>Auth</li>
      </RouterLink>
    </ul>
  </div>
  <RouterView />
</template>

<script setup lang="ts"></script>

<style scoped>
ul li {
  @apply inline p-2 mx-2 bg-neutral-300 rounded-lg
  hover:bg-sky-400;
}
</style>
