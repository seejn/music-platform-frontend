<template>
  <Layout>
    <template #Main>
      <!-- <div class="text-white">
        {{ artist.first_name }}
      </div> -->
      <div class="flex flex-col" style="background-attachment: url('/public/con.jpeg');">
        <div class="flex flex-grow min-h-0">
          <div class="flex-grow flex-row bg-black relative">
            <div class="relative mt-48 p-6 w-full bg-black bg-opacity-90 overflow-hidden z-10">
              <div class="flex items-center mb-5">
                <img :src="imageUrl" alt="Artist Image" class="rounded-full w-40 mr-4">
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
                      <th class="py-2 px-4 text-left">Title</th>
                     
                      <th class="py-2 px-4 text-left">Duration</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(track, index) in tracks" :key="index">
                      <td class="py-2 px-4 text-left border-b border-red-800 flex items-center">
                        <img class=" mx-6 object-cover" :src="trackImageUrl(track.image) " width="50" height="50" >
                            <span>
                              {{ track.title }}
                            </span>
                        </td>
                    

                      <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-opacity-0">
                <Album />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchArtist } from '../api/Artist';
import { fetchArtistTrack } from '../api/Track';


const route = useRoute();
const artistId = ref(route.params.id);
const artist = ref({});
const tracks = ref([]);

const fetchArtistData = async () => {
  try {
    const fetchedArtist = await fetchArtist(artistId.value);
    artist.value = fetchedArtist;
   
    console.log("artist value", artist.value);

  } catch (error) {
    console.log("Error fetching artist data:", error);
  }
};

fetchArtistData();

const fetchTracks=async()=>{
  try{

    const fetchedArtistTrack=await  fetchArtistTrack(artistId.value);
    tracks.value=fetchedArtistTrack;
    console.log("tracks value",track.value);

    
    
  } catch (error) {
    console.log("Error fetching artist tracks:", error);
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
