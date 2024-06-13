<template>
  <AdminLayout>
    <template #Main>
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4 text-white">Artists List</h1>
        <table class="w-full bg-black text-white text-center">
          <thead class="w-full border-b text-xl">
            <tr>
              <th class="py-2 px-4 border-b border-b-red-800">Image</th>
              <th class="py-2 px-4 border-b border-b-red-800">Name</th>
              <th class="py-2 px-4 border-b border-b-red-800">Date of Birth</th>
              <th class="py-2 px-4 border-b border-b-red-800">Gender</th>
              <th class="py-2 px-4 border-b border-b-red-800">Actions</th>
            </tr>
          </thead>
          <tbody class="text-white">
            <tr v-for="artist in artists" :key="artist.id" class="hover:bg-zinc-800">
              <td class="py-2 px-4 flex justify-center items-center">
                <img class="mx-6 object-cover rounded-full border-4 border-red-800 items-center w-28 h-28" :src="getImageUrl(artist.image)" alt="Artist Image">
              </td>
              <td class="py-2 px-4 ">{{ artist.first_name }} {{ artist.last_name }}</td>
              <td class="py-2 px-4 ">{{ artist.dob }}</td>
              <td class="py-2 px-4 ">{{ artist.gender }}</td>
              <td class="py-2 px-4 ">
                <RouterLink :to="{ name: 'ArtistStats', params: { id: artist.id } }">
                  <button class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded-lg mr-2">View Stats</button>
                </RouterLink>
                <RouterLink :to="{ name: 'artist-library', params: { id: artist.id } }">
                  <button class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded-lg  mr-2">Library</button>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </AdminLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchAllArtists } from '../../api/Artist';
import { RouterLink } from 'vue-router';
import AdminLayout from '../AdminLayout.vue';


const artists = ref([]);

const fetchArtist = async () => {
  try {
    artists.value = await fetchAllArtists();
  } catch (error) {
    console.error("Unable to fetch artists", error);
  }
};

const getImageUrl = (image) => {
  return `${import.meta.env.VITE_API_BASE_URL}${image}`;
};

onMounted(fetchArtist);
</script>

<style scoped>

</style>
