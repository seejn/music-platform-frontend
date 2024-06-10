<template>
  <Layout>
    <template #Main>
      <div class="flex flex-col" style="background-attachment: url('/public/con.jpeg');">
        <div class="flex flex-grow min-h-0">
          <div class="flex-grow flex-row bg-black relative">
            <div class="relative mt-20 p-6 w-full bg-black bg-opacity-90 overflow-hidden z-10">
              <div class="flex items-center mb-5">
                <img :src="imageUrl" alt="Artist Image" class="rounded-full w-60 h-60 mr-4 object-cover border-4 border-red-800">
                <div>
                  <p class="text-white text-5xl font-bold mb-3">{{ artist.first_name }} {{ artist.last_name }}</p>
                  <p class="text-white">{{ artist.biography }}</p>
                </div>
              </div>

              <div class="bg-black bg-opacity-50 rounded-lg p-6 overflow-y-auto shadow-lg max-h-full">
                <h2 class="text-2xl font-bold text-white mb-4">All tracks</h2>
                <table class="min-w-full bg-transparent text-white">
                  <thead>
                    <tr>
                      <th class="py-2 px-4 text-left"></th>
                      <th class="py-2 px-4 text-left">Title</th>
                      <th class="py-2 px-4 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(track, index) in tracks" :key="index">
                      <td class="py-2 px-4 text-left border-b border-red-800 flex items-center">
                        <img class="mx-6 object-cover" :src="trackImageUrl(track.image)" width="40" height="40">
                        <span>{{ track.title }}</span>
                      </td>
                      <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
                      <td class="py-2 px-4 text-left border-b border-red-800 relative">
                        <div class="flex items-center space-x-2">
                          <button class="text-white bg-black rounded-md shadow-md text-md" @click="toggleTrackOptions(index)">
                            <i class="fas fa-ellipsis-v">...</i>
                          </button>
                          <div v-if="showTrackOptions[index]" class="absolute bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0 mt-8">
                      
                            <button @click="reportedTrack(track.id)" class="block w-full text-left px-4 py-2">Report</button>
        
                            <button class="block w-full text-left px-4 py-2">Playlist</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-opacity-0">
                <ArtistTour :artistId="Number(artistId)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import ArtistTour from '../components/Tour/ArtistTour.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchArtist } from '../api/Artist';
import { fetchArtistTracks } from '../api/Track';
import {reportTrack} from '../api/Reports';


const route = useRoute();
const artistId = ref(Number(route.params.id)); 
const artist = ref({});
const tracks = ref([]);
const showTrackOptions = ref({});

const toggleTrackOptions = (index) => {
  showTrackOptions.value = { ...showTrackOptions.value, [index]: !showTrackOptions.value[index] };
};

const reportedTrack= async(trackId)=>{
  try {
    await reportTrack(trackId);
  }catch(error){
    toast.error("Error reporting track");

  }
};


const fetchArtistData = async () => {
  try {
    const fetchedArtist = await fetchArtist(artistId.value);
    artist.value = fetchedArtist;
  } catch (error) {
    toast.error("Error fetching artist data");
  }
};

fetchArtistData();

const fetchTracks = async () => {
  try {
    const fetchedArtistTracks = await fetchArtistTracks(artistId.value);
    tracks.value = fetchedArtistTracks;
    console.log("tracks value", tracks.value);
  } catch (error) {
    toast.error("Error fetching artist tracks");
  }
};

fetchTracks();

const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${artist.value.image || ''}`;
});

const trackImageUrl = (image) => {
  return `${import.meta.env.VITE_API_BASE_URL}${image || ''}`;
};
</script>
