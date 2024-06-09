<template>
  <nav class="relative w-full">
    <div class="bg-black text-white h-20 p-6 flex items-center justify-between">
      <div>
        <!-- <button class="p-5 font-bold text-lg hover:text-orange-800">
          &lt;
        </button>
        <button class="p-5 font-bold text-lg hover:text-orange-800">
          &gt;
        </button> -->
      </div>
      <div class="relative flex items-center">

        <button id="dropdownHoverButton" @click="toggleDropdown" 
          class="relative p-6 text-white focus:outline-none font-medium rounded-full"
          type="button">
          <img :src="getProfileImageUrl(props.user.profile)" alt="Tay" class="w-10 h-10 rounded-full" />
        </button>
        <!-- Dropdown menu -->
        <div v-show="isDropdownVisible"
          class="absolute top-24 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <RouterLink :to="routes[0].path"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {{routes[0].name}}</RouterLink>
              <button @click="handleLogout"
                class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
  user: Object,
  required: true
});



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

const getImageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${props.user?.image}`;
});
</script>

<style scoped>
#dropdownHoverButton img {
  width: 4rem;
  /* Adjust the size as needed */
  height: 4rem;
  /* Adjust the size as needed */
  border-radius: 50%;
}
</style>