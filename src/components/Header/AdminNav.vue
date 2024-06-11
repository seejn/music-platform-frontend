<template>
  <div class="w-full h-full bg-black text-white">
    <nav class="bg-black text-white  h-20 p-6 flex items-center justify-between">
      <div class="container mx-auto p-6 flex justify-between items-center">
        <div class="absolute left-0 p-6 text-3xl font-semibold">
          Artist Management System
        </div>
      </div>
      <ul class="absolute right-0 flex space-x-4 p-6">
        <RouterLink to="/admin/dashboard" class="p-5 font-bold text-lg hover:text-red-800">
            Dashboard
          </RouterLink>
        <RouterLink to="/admin/artists" class="p-5 font-bold text-lg hover:text-orange-800">
          Artist
        </RouterLink>
        <RouterLink to="/admin/all-tours" class="p-5 font-bold text-lg hover:text-orange-800">
          Tour
        </RouterLink>
        <RouterLink to="/admin/user-reports" class="p-5 font-bold text-lg hover:text-orange-800">
          Report Songs
                </RouterLink>
        <RouterLink to="/admin/banned-songs" class="p-5 font-bold text-lg hover:text-orange-800">
          Banned Songs </RouterLink>
        <div class="relative flex items-center">

          <button id="dropdownHoverButton" @click="toggleDropdown"
            class="relative p-6 text-white focus:outline-none font-medium rounded-full" type="button">
            <img :src="getProfileImageUrl(props.user.image)" alt="Tay" class="w-10 h-10 rounded-full" />
          </button>
          <!-- Dropdown menu -->
          <div v-show="isDropdownVisible"
            class="absolute top-24 right-0 z-10 bg-zinc-700 text-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li>
                <button @click="handleLogout"
                  class="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white">
                  Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </ul>
  </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { adminNavRoutes as routes } from '../../router';
import { getProfileImageUrl } from '../../utils/imageUrl'
import { Logout } from '../../api/Auth';

import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

let isDropdownVisible = ref(false)

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
  return isDropdownVisible
}

const handleLogout = async () => {
  await Logout(store)
}
</script>

<style scoped>
nav {
  box-shadow: 0 4px 2px -2px gray;
}
</style>