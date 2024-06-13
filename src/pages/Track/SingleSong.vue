<template>
  <Layout>
    <template #Main>
      <div class="p-6 pt-16 bg-black max-h-full flex-grow">
        <div class="flex flex-col items-center md:flex-row md:items-start">
          <img :src="imgUrl" alt="" class="rounded-lg border-2 border-red-800 w-60 h-60 mb-6 md:mb-0">
          <div class="ml-5 mt-20">
            <p class="font-bold text-white text-5xl align-text-bottom">
              {{ track.title }}
            </p>
            <div class="mt-4">
              <div class="mt-4 italic flex items-center text-2xl text-white">
                <p>{{ track?.artist?.first_name }} {{ track?.artist?.last_name }}</p>
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
                  <th class="py-2 px-4 text-left">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-zinc-700">
                  <td class="py-2 px-4 text-left border-b border-red-800">
                    <div class="flex items-center justify-center">
                      <img :src="imgUrl" alt="" class="w-10 h-10 rounded-full">
                    </div>
                  </td>
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track.title }}</td>
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track.released_date }}</td>
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track?.artist?.first_name }}</td>
                  <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
                  <td class="py-2 px-4 text-left border-b border-red-800 relative">
                    <div class="flex items-center justify-center">
                      <button class="text-white bg-black rounded-md shadow-md text-md" @click="toggleTrackOptions(0)">
                        <i class="fas fa-ellipsis-v">...</i>
                      </button>
                    </div>
                    <div v-if="showTrackOptions[0]"
                      class="absolute bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0 mt-8">
                      <button v-if="!showPlaylistOptions[0]" @click="reportedTrack(track.id)"
                        class="block w-full text-left px-4 py-2">Report</button>
                      <div @click="togglePlaylistOptions(0)">
                        <button v-if="!showPlaylistOptions[0]"
                          class="block w-full text-left px-4 py-2">Playlist</button>
                        <div v-if="showPlaylistOptions[0]"
                          class="bg-black text-white rounded-md shadow-md py-2 w-full mt-2">
                          <div v-for="playlist in playlists" :key="playlist.id">
                            <button @click="addTrackToPlaylist(playlist.id, track.id)"
                              class="block w-full text-left px-4 py-2">{{ playlist.title }}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchTracks } from '../../api/Track';
import { reportTrack } from '../../api/Reports';
import { fetchUserPlaylists, addTrackFromPlaylist } from '../../api/Playlist';

import { useStore } from 'vuex'

const store = useStore()

const user = store.getters.getUser

const route = useRoute();
const trackId = ref(route.params.id);
const playlists = ref([]);

const track = ref({});
const lyricsLines = ref([]);
const showTrackOptions = ref({});
const showPlaylistOptions = ref({});
const showEditForm = ref(false);
const showOptions = ref(false);





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
const fetchTrackData = async () => {
  try {
    track.value = await fetchTracks(trackId.value);
    console.log("track value", track.value);
  } catch (error) {
    toast.error("Error fetching track");
  }
};

const imgUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${track.value.image || ''}`;
});



const loadUserPlaylists = async () => {
  try {
    playlists.value = await fetchUserPlaylists(user.id);
  } catch (error) {
    toast.error("Error fetching user playlists");
  }
};
const reportedTrack = async (trackId) => {
  try {
    const response = await reportTrack(trackId, user.id);
    console.log(response)
    toast.success(response.message);

  } catch (error) {
    toast.error(error.message);
  }
};

const toggleTrackOptions = () => {
  showTrackOptions.value = { ...showTrackOptions.value, [0]: !showTrackOptions.value[0] };
  if (!showTrackOptions.value[0]) {
    showPlaylistOptions.value[0] = false;
  }
};

const togglePlaylistOptions = () => {
  showPlaylistOptions.value = { ...showPlaylistOptions.value, [0]: !showPlaylistOptions.value[0] };
  if (showPlaylistOptions.value[0]) {
    showTrackOptions.value[0] = true;
  }
};

onMounted(() => {
  fetchTrackData();
  loadUserPlaylists();


});

const toggleEditForm = () => {
};
</script>
<style>
.flex.items-center.relative {
  position: relative;
}

button {
  position: relative;
  z-index: 20;
}

td img {
  display: block;
  margin: 0 auto;
}

td {
  text-align: center;
}

/* Center button */
button {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hover effect */
tbody tr:hover {
  background-color: rgba(109, 114, 125, 0.7);
}
</style>
