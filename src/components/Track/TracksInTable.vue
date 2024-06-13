<template>
  <div class="rounded-lg p-6 shadow-lg max-h-full">
    <h2 class="text-4xl font-bold text-white mb-4">All Songs</h2>
    <div class="table-container overflow-y-auto max-h-96">
      <table class="min-w-full rounded-lg text-white bg-zinc-800 bg-opacity-50">
        <thead class="text-center border-b-2 border-b-darkgray px-4 py-2">
          <tr>
            <th class="py-2 px-4"><i class="fa-solid fa-compact-disc fa-2xl" style="color: #ffffff;"></i></th>
            <th class="py-2 px-4">Title</th>
            <th class="py-2 px-4">Release Date</th>
            <th class="py-2 px-4">Artist</th>
            <th class="py-2 px-4">Duration</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(track, index) in tracks" :key="index" class="hover:bg-zinc-700">
            <td class="py-2 px-4">
              <RouterLink :to="`/single-song/${track.id}`" class="block hover:cursor-pointer w-full">
                <div class="flex justify-center">
                  <img class="object-cover w-20 h-20" :src="trackImageUrl(track.image)" alt="Track Image">
                </div>
              </RouterLink>
            </td>
            <td>
              <RouterLink :to="`/single-song/${track.id}`" class="block hover:cursor-pointer w-full">
                <div class="flex justify-center h-full w-full">
                  {{ track.title }}
                </div>
              </RouterLink>
            </td>
            <td class="py-2 px-4">{{ track.released_date }}</td>
            <td class="py-2 px-4">
              <RouterLink :to="`/single-artist/${track.artist.id}`" class="block">
                <p></p>
                {{ track.artist.first_name }} {{ track.artist.last_name }}
              </RouterLink>
            </td>
            <td class="py-2 px-4">{{ track.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  tracks: {
    type: Array,
    required: true
  },
  isTrackOwner: {
    type: Boolean,
    default: false
  },
  imageRequired: {
    type: Boolean,
    default: false
  }
});

const trackImageUrl = (image) => {
  if (image) return `${import.meta.env.VITE_API_BASE_URL}${image || ''}`;
  else return '/src/assets/placeholders/image.png';
};
</script>
<style>
.table td {
  height: 80px;
  /* Adjust based on desired row height */
}

.table th,
.table td,
.table img {
  vertical-align: middle;
}

.table td img {
  vertical-align: middle;
}

.table .router-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table .router-link span {
  display: inline-flex;
  vertical-align: middle;
}

.table-container {
  max-height: 24rem;
  /* Adjust this value as needed */
}

.table td {
  height: 80px;
  /* Adjust based on desired row height */
}
</style>
