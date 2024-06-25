<template>
  <div class="guest w-full bg-black text-white">
      <nav class="bg-black text-white  h-20 p-6 flex items-center justify-between">
        
            <div>
              <RouterLink to="/" class="p-5 font-bold text-lg hover:text-red-800">
      <img src="/src/assets/pic/log.png" alt="" class="w-24 h-24">
      </RouterLink>
      </div>
        <ul class="absolute right-0 flex space-x-4 p-6">
          <li v-for="route in routes">
            <RouterLink  :to="route.path" class="p-6 font-lg text-lg hover:text-orange-800">{{ route.name }}</RouterLink>
          </li>
        </ul>
   
    </nav>
  </div>
</template>

<script setup>
  import { guestNavRoutes as routes } from '../../router';
</script>