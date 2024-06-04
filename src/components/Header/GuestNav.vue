<template>

  <div class="guest w-full bg-black text-white">
      <nav class="bg-black text-white  h-20 p-6 flex items-center justify-between">
          <div class="container mx-auto p-6 flex justify-between items-center">
        <div class="absolute left-0 p-6 text-lg font-semibold">
          Artist Management System
        </div>
        <ul class="absolute right-0 flex space-x-4 p-6">
          <li v-for="route in routes">
            <RouterLink  :to="route.path" class="p-6 font-lg text-lg hover:text-orange-800">{{ route.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import { guestNavRoutes as routes } from '../../router';
</script>