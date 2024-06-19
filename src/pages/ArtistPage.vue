<template>
  <Layout>
    <template #Main>
      <div class="flex flex-col" style="background-attachment: url('/public/con.jpeg');">
        <div class="flex flex-grow min-h-0">
          <div class="flex-grow flex-row bg-black relative">
            <div class="relative mt-20 p-6 w-full bg-black bg-opacity-90 overflow-hidden z-10">
              <div class="flex items-center mb-5">
                <img :src="imageUrl" alt="Artist Image"
                  class="rounded-full w-60 h-60 mr-4 object-cover border-4 border-red-800">
                <div>
                  <p class="text-white text-5xl font-bold mb-3">{{ artist.first_name }} {{ artist.last_name }}</p>
                  <p class="text-white">{{ artist.biography }}</p>
                </div>
              </div>

              <div class="bg-black bg-opacity-50 rounded-lg p-6 overflow-y-auto shadow-lg max-h-full">
                <h2 class="text-3xl font-bold text-white mb-4">All tracks</h2>
                <table class="min-w-full bg-transparent text-white">
                  <thead class="text-center border-b-2 border-b-darkgray text-lg ">
                    <tr >
                      <th class="py-2 px-4"><i class="fa-solid fa-compact-disc fa-2xl" style="color: #ffffff;"></i></th>
                      <th class="py-2 px-4 text-center">Title</th>
                      <th class="py-2 px-4 text-center">Duration</th>
                      <th class="py-2 px-4 text-center">Actions</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(track, index) in tracks" :key="index" class="text-center hover:bg-zinc-700">
                      <td class="py-2 px-4 flex items-center justify-center">
                        <img class=" object-cover w-16 h-16" :src="trackImageUrl(track.image)">
                      </td>
                      <td class="py-2 text-center">{{ track.title }}</td>
                      <td class="py-2 text-center">{{ track.duration }}</td>
                      <td class="py-2 text-center relative">

                        <div class="space-x-2">

                          <button class="text-white bg-black rounded-md shadow-md text-md"
                            @click="toggleTrackOptions(index)">
                            <i class="fas fa-ellipsis-v">...</i>
                          </button>

                          <div v-if="showTrackOptions[index]"
                            class="absolute bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0">


                            <button v-if="!showPlaylistOptions[index]" @click="reportedTrack(track.id)"
                              class="block w-full text-left px-4 py-2 hover:bg-zinc-700">Report</button>
                            <div @click="togglePlaylistOptions(index)">
                              <button v-if="!showPlaylistOptions[index]"
                                class="block w-full text-left px-4 py-2 hover:bg-zinc-700">Playlist</button>
                              <div v-if="showPlaylistOptions[index]"
                                class="bg-black text-white rounded-md shadow-md py-2 w-full mt-2 hover:bg-zinc-700">
                                <div v-for="playlist in playlists" :key="playlist.id">
                                  <button @click="addTrackToPlaylist(playlist.id, track.id)"
                                    class="block w-full text-left px-4 py-2">{{ playlist.title }}</button>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-opacity-0">
                <h2 class=" text-3xl font-bold text-white  ml-5 ">Tour details</h2>
                <ArtistTourCol :tours="tours" class="ml-5" />

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

import ArtistTour from '../components/Tour/TourCard.vue';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';


import { fetchArtist } from '../api/Artist';
import { fetchArtistTracks } from '../api/Track';
import { reportTrack } from '../api/Reports';
import { addRemoveTrackFromPlaylist, addTrackFromPlaylist } from '../api/Playlist';
import { fetchUserPlaylists } from '../api/Playlist'; 

import { useStore } from 'vuex'
import TourCard from '../components/Tour/TourCard.vue';
import { fetchArtistTour } from '../api/Tour';
import ArtistTourCol from '../components/Tour/ArtistTourCol.vue';

const store = useStore();
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});



const route = useRoute();
const artistId = ref(Number(route.params.id));

const user = store.getters.getUser;
const playlists = ref([]);
const artist = ref({});
const tracks = ref([]);
const showTrackOptions = ref({});
const showPlaylistOptions = ref({});
const tours=ref({})

const toggleTrackOptions = (index) => {
  showTrackOptions.value = { ...showTrackOptions.value, [index]: !showTrackOptions.value[index] };
  if (!showTrackOptions.value[index]) {
    showPlaylistOptions.value[index] = false;
  }
};


const reportedTrack = async (trackId) => {
  try {
    const response = await reportTrack(trackId, user.id);
    console.log(response)
    toast.success(response.message);
    
  }catch(error){
    console.log(error)
    toast.error(error.message);
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
    console.log("Error fetching artist tracks");
  }
};

fetchTracks();

const loadUserPlaylists = async () => {
  try {
    playlists.value = await fetchUserPlaylists(user.id);
  } catch (error) {
    console.log("Error fetching user playlists", playlists.value);
  }
};
const loadTourData = async () => {
  try{
    const loadArtistTour = await fetchArtistTour(artistId.value);
    tours.value= loadArtistTour;
    console.log("tour details", tours.value)
  } catch(error){
    console.log("Error in fetching tour details");
  }

}

const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${artist.value.image || ''}`;
});

const trackImageUrl = (image) => {
  return `${import.meta.env.VITE_API_BASE_URL}${image || ''}`;
};

const togglePlaylistOptions = (index) => {
  showPlaylistOptions.value = { ...showPlaylistOptions.value, [index]: !showPlaylistOptions.value[index] };
  if (showPlaylistOptions.value[index]) {
    showTrackOptions.value[index] = true;
  }
};
const addTrackToPlaylist = async (playlistId, trackId) => {
  try {
    const playlistData = { track: trackId };
    await addTrackFromPlaylist(playlistId, playlistData);
    toast.success('Track added to playlist successfully');
  } catch (error) {
    toast.error('Error adding track to playlist');
    console.error(`Error adding track ${trackId} to playlist ${playlistId}:`, error);
  }
};

onMounted(() => {

  loadUserPlaylists();
  loadTourData()
});


</script>
<style scoped>
.flex.items-center.relative {
  position: relative;
}

button {
  position: relative;
  z-index: 20;
}
</style>