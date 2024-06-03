<template>
  <header class="h-full bg-white shadow">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-2xl font-bold">MusicPlatform</div>
      <nav class="space-x-4">
        <RouterLink v-for="route in routes" :to="route.path" class="text-gray-700 hover:text-gray-900">{{ route.name }}</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { routes as routes } from '../../router';
</script>

<style>
  nav .router-link-active{
    color: rgb(17 24 39);
    padding-bottom: 0.5rem;
    border-bottom: 3px solid rgb(31 41 55);
  }
</style>