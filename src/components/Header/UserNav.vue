<template>
  <nav class="relative w-full">
    <div class="bg-black text-white h-20 p-6 flex items-center justify-between">
      <div>
        <RouterLink to="/home" class="p-5 font-bold text-lg hover:text-red-800">
      <img src="/src/assets/pic/log.png" alt="" class="w-24 h-24">
      </RouterLink>
      </div>
      <div class="relative flex items-center">
        <button id="dropdownHoverButton" @click="toggleDropdown" 
          class="relative p-6 text-white focus:outline-none font-medium rounded-full"
          type="button">
          <img :src="getProfileImageUrl(props.user.image)" alt="Tay" class="w-10 h-10 rounded-full" />
        </button>

        <div v-show="isDropdownVisible"
          class="absolute top-24 right-0 z-10 bg-zinc-500 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <RouterLink :to="{ name: 'Profile', params: { id: props.user.id } }"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-800">
                {{routes[0].name}}</RouterLink>
              <button @click="handleLogout"
                class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-800">
                Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref, computed } from 'vue';
import { Logout } from '../../api/Auth';
import { useStore } from 'vuex';
import { getProfileImageUrl } from '../../utils/imageUrl';

import { userNavRoutes as routes } from '../../router';



const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
const store = useStore()

let isDropdownVisible = ref(false)

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const handleLogout = async () => {
  await Logout(store);
};
</script>

<style scoped>
#dropdownHoverButton img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
</style>