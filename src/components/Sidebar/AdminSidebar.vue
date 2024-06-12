<template>
    <div class="bg-black text-white p-6 h-full">
      <nav>
        <ul class="flex flex-col space-y-4 p-6 text-center">
          <RouterLink to="/admin/dashboard" class="p-5 font-bold text-2xl  hover:text-red-800">
            Dashboard
          </RouterLink>
          <RouterLink to="/admin/artists" class="p-5 font-bold text-2xl  hover:text-orange-800">
            Artist
          </RouterLink>
          <RouterLink to="/admin/all-tours" class="p-5 font-bold text-2xl hover:text-orange-800">
            Tour
          </RouterLink>
          <RouterLink to="/admin/user-reports" class="p-5 font-bold text-2xl hover:text-orange-800">
            Report Songs
          </RouterLink>
          <RouterLink to="/admin/banned-songs" class="p-5 font-bold text-2xl hover:text-orange-800">
            Banned Songs
          </RouterLink>
        </ul>
      </nav>
    </div>
  </template>
  
  
  <script setup>
    import { adminSidebarRoutes } from '../../router';
  </script>
  
  <style scoped>
  nav ul {
    left: 0;
    top: 100px;
    height: 100%;
  }
  </style>
  