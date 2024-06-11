<template>
  <div class="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg max-h-full">
    <h2 class="text-4xl font-bold text-white mb-4">All Songs</h2>
    <table class="min-w-full bg-transparent text-white">
      <thead class="text-center">
        <tr>
          
          <th class="py-2 px-4">Title</th>
          <th class="py-2 px-4">Release Date</th>
          <th class="py-2 px-4">Artist</th>
          <th class="py-2 px-4">Duration</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(track, index) in tracks" :key="index" class="border-b border-red-800">
          <RouterLink :to="`/single-song/${track.id}`" class="w-full block">
            <td class="py-2 px-4 text-left flex items-center">
              <img class="mx-6 object-cover w-20 h-20" :src="trackImageUrl(track.image)" alt="Track Image">
              <span>{{ track.title }}</span>
            </td>
          </RouterLink>
          <td class="py-2 px-4 ">{{ track.released_date }}</td>
          <RouterLink :to="`/single-artist/${track.artist.id}`">
            <td class="py-2 px-4">{{ track.artist.first_name }} {{ track.artist.last_name }}</td>
          </RouterLink>
          <td class="py-2 px-4 ">{{ track.duration }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tracks: {
    type: Array,
    required: true
  }
});

const trackImageUrl = (image) => {
  if (image) return `${import.meta.env.VITE_API_BASE_URL}${image || ''}`;
  else return '/src/assets/placeholders/image.png';
};


</script>
