<template>
  <Layout>
    <template #Main>
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Artists List</h1>
        <table class="w-full bg-black text-white">
          <thead class="w-full border-b">
            <tr>
              <th class="py-2 px-4 border-b">Image</th>
              <th class="py-2 px-4 border-b">Name</th>
              <th class="py-2 px-4 border-b">Date of Birth</th>
              <th class="py-2 px-4 border-b">Gender</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody class="text-white">
            <tr v-for="artist in artists" :key="artist.id">
              <td class="py-2 px-4 border-b">
                <img class="mx-6 object-cover rounded-full" :src="getImageUrl(artist.image)" alt="Artist Image" width="50" height="50">
              </td>
              <td class="py-2 px-4 border-b">{{ artist.first_name }} {{ artist.last_name }}</td>
              <td class="py-2 px-4 border-b">{{ artist.dob }}</td>
              <td class="py-2 px-4 border-b">{{ artist.gender }}</td>
              <td class="py-2 px-4 border-b">
                <RouterLink :to="{ name: 'artist-library', params: { id: artist.id } }">
                  <button class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded mr-2">Library</button>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchAllArtists } from '../../api/Artist';
import { RouterLink } from 'vue-router';

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
/* Add any additional styles here */
</style>
