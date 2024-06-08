<template>
  <Layout>
    <template #Main>
      <div class="p-6 pt-16 bg-black max-h-full flex-grow">
        <div class="flex flex-col items-center md:flex-row md:items-start">
          <img :src="imgUrl" alt="" class="rounded-lg border-2 border-red-800 w-60 h-60 mb-6 md:mb-0">
          <div class="ml-5 mt-40">
            <p class="font-bold text-white text-5xl align-text-bottom">
              {{ track.title }}
              <i @click="toggleEditForm" class="fa-regular fa-pen-to-square fa-2xs ml-5 cursor-pointer"></i>
            </p>
            <div class="flex flex-col space-y-2 mt-4 md:flex-row md:space-x-4 md:space-y-0">
              <div class="text-white">
                <p>{{ track?.artist?.first_name }}</p>
              </div>
              <div class="text-white">
                <p>{{ track?.album?.title }}</p>
              </div>
              <div class="text-white">
                <p>{{ track.duration }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 w-full">
          <div class="w-full pl-4">
            <h2 class="text-3xl font-bold mb-4 text-white">Songs</h2>
            <table class="min-w-full bg-transparent text-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 text-left">Title</th>
                  <th class="py-2 px-4 text-left">Release Date</th>
                  <th class="py-2 px-4 text-left">Artist</th>
                  <th class="py-2 px-4 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4 text-left border-b border-red-800">
                    <img :src="imgUrl" alt="" class="w-10 h-10 rounded-full">
                  </td>
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track.title }}</td>
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track.released_date }}</td>
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track?.artist?.first_name }}</td>
                
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchTracks } from '../../api/Track';

const route = useRoute();
const trackId = ref(route.params.id);
const track = ref({});
const lyricsLines = ref([]);

const fetchTrackData = async () => {
  try {
    track.value = await fetchTracks(trackId.value);
    console.log("track value", track.value);
  } catch (error) {
    console.error(error);
  }
};

const imgUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${track.value.image || ''}`;
});

onMounted(() => {
  fetchTrackData();

});

const toggleEditForm = () => {
};
</script>
