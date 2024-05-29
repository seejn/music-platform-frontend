<template>
    <div class="w-full bg-black text-white">
        <nav class="bg-black text-white  h-20 p-6 flex items-center justify-between">
            <div class="container mx-auto p-6 flex justify-between items-center">
          <div class="absolute left-0 p-6 text-3xl font-semibold">
            Artist Management System
          </div>
          <ul class="absolute right-0 flex space-x-4 p-6">
            <li>
              <router-link to="#" class="p-6 font-lg text-3xl hover:text-orange-800">Home</router-link>
            </li>
            <li>
              <router-link to="#" class="p-6 font-lg text-3xl hover:text-orange-800">Artists</router-link>
            </li>
            <li>
              <router-link to="#" class="p-6 font-lg text-3xl hover:text-orange-800">Search</router-link>
            </li>
            <li>
                <router-link to="#" class="p-6 font-lg text-3xl hover:text-orange-800">Logout</router-link>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  };
  </script>
  
  <style scoped>
  nav {
    box-shadow: 0 4px 2px -2px gray;
  }
  </style>
  