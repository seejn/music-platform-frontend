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
          <div class="mt-8 flex flex-col md:flex-row">
          
            <!-- <div class="w-full md:w-1/2 pr-4">
              <h2 class="text-3xl font-bold mb-4 text-white">Lyrics</h2>
              <div class="lyrics-box rounded-lg border-2 border-white p-4 bg-white bg-opacity-10 overflow-y-auto max-h-60">
                <p v-for="(line, index) in lyricsLines" :key="index" class="text-white whitespace-pre-line">{{ line }}</p>
              </div>
            </div> -->
      
            <div class="w-full md:w-1/2 pl-4">
              <h2 class="text-3xl font-bold mb-4 text-white">Songs</h2>
              <table class="min-w-full bg-transparent text-white">
                <thead>
                  <tr>
                    <th class="py-2 px-4 text-left">Title</th>
                    <th class="py-2 px-4 text-left">Release Date</th>
                    <th class="py-2 px-4 text-left">Artist</th>
                    <th class="py-2 px-4 text-left">Image</th>
                    <th class="py-2 px-4 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 text-left border-b border-red-800">Physical</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">2024-01-02</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">Dua</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">image.png</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">3:08</td>
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
import { ref, onMounted,computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchTracks } from '../../api/Track';

const route = useRoute();
const trackId=ref(null);
const track =ref({})
trackId.value=route.params.id;



const fetchTrackData=async()=>{
  try{
    track.value = await fetchTracks(trackId.value);
    console.log("track value",track.value)
  }catch(error)
{
  console.error(error);
}
}
const imgUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${track.value.image || ''}`;


  
});
fetchTrackData();
const lyricsLines = ref([]);

onMounted(() => {
  // console.log(lyrics.split('\n'));
  // lyricsLines.value = lyrics.split('\n');
});
</script>

  
  
<style scoped>
.lyrics-box {
    border-color: white;
    /* Set border color */
}
</style>
