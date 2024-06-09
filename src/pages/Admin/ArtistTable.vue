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
                <button @click="handleTourAction(artist.id)" class="bg-blue-500 text-white px-4 py-2 rounded">Tour</button>
              </td>
              <td class="py-2 px-4 border-b">
                <button @click="Library(artist.id)" class="bg-blue-500 text-white px-4 py-2 rounded">Library</button>
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

const handleTourAction = (id) => {
  alert(`Action for artist with id: ${id}`);
  // Implement your action handler logic here
};

const Library = (id) => {
  alert(`Library action for artist with id: ${id}`);
  // Implement your library handler logic here
};

onMounted(fetchArtist);
</script>

<style scoped>
/* Add any additional styles here */
</style>
