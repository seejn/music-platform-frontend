<template>
  <Layout>
    <template #Main>
      <header class="playlist-header text-white py-10">
        <div class="flex flex-row">
          <img :src="imageUrl" alt="" class="w-60 h-60 border-4 border-red-800">
          <div class="ml-2 mt-[7vw]">
            <h1 class="text-4xl font-bold text-white">{{ playlist.title }} #{{ playlist.id }}</h1>
            <p class="mt-2 text-lg italic">{{ playlist?.user?.first_name }}</p>
            <div class="mt-6 flex justify-center space-x-4">
              <button @click="savePlaylist" class="mt-2 px-4 py-4 bg-red-700 text-white rounded"
                :disabled="playlist.tracks && playlist.tracks.length === 0">
                Save Playlist
              </button>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-grow bg-black p-8 flex flex-col space-y-4">
        <div v-if="playlist.track && playlist.track.length > 0">
          <div class="overflow-y-auto max-h-screen">
            <h2 class="text-2xl font-bold mb-4 text-white text-center">Playlist Tracks</h2>
            <table class="min-w-full bg-black text-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b-2 border-red-700">Title</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Release Date</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Duration</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Singer</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="playlist.track" v-for="track in playlist.track" :key="track.id" class="text-center">
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track.title }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ formatDate(track.released_date) || '' }}
                  </td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track.duration }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track?.artist?.first_name }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">
                    <button @click="removeTrack(track.id)"
                      class="text-white border-2 py-1 px-4 border-blood rounded-full">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Search Tracks</h2>
          <div class="p-1 mb-4">
            <input type="text" v-model="searchTerm" placeholder="Search..."
              class="w-full p-2 border border-gray-300 rounded-md bg-black text-white" @input="filterTracks">
          </div>

          <div class="overflow-y-auto max-h-screen" v-if="searchTerm && filteredTracks?.length > 0">
            <ul>
              <li v-for="track in filteredTracks" :key="track.id"
                class="py-2 px-4 bg-zinc-900 text-white shadow-md mb-2 flex items-center justify-between">
                <span>{{ track.title }}</span>
                <span v-if="addedTracks.includes(track.id)" class="text-red-500">Added</span>
                <button @click="addTrackToPlaylist(track.id)" :disabled="addedTracks.includes(track.id)"
                  class="text-white border-2 py-1 px-4 border-blood rounded-full">Add</button>
              </li>
            </ul>
          </div>

          <div v-else-if="searchTerm && filteredTracks?.length === 0" class="text-center text-white">No tracks found
          </div>
          <div v-else class="text-center text-white">Start searching to see results</div>

          <!-- Notification -->
          <div v-if="notification.visible" class="absolute top-10 right-10 bg-red-500 text-white p-3 rounded">
            {{ notification.message }}
          </div>
        </div>

      </main>
    </template>
  </Layout>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Layout from './Layout.vue';
import { fetchPlaylist, createPlaylist, updatePlaylist } from '../api/Playlist'; // Update playlist API to include update function
import { fetchAllTracks } from '../api/Track';

// Define reactive variables and functions
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const playlistId = ref(props.id)
const searchTerm = ref('');
const playlist = ref({});
const tracks = ref([]);

const filteredTracks = ref([]);
const addedTracks = ref([]);
const notification = ref({
  message: '',
  visible: false,
});

// Define imageUrl
const imageUrl = ref(''); // Replace with the actual image URL or a placeholder URL




// Fetch playlist data
const fetchPlaylistData = async (playlistId) => {
  try {
    playlist.value = await fetchPlaylist(playlistId);
    playlist.value.track.forEach(track => {
      addedTracks.value.push(track.id); // Add existing tracks to addedTracks Set
    });
  } catch (error) {
    console.error("Error fetching playlist", error);
  }
};

// Fetch all tracks
const fetchTracks = async () => {
  try {
    const response = await axios.get('http://localhost:8000/track/get_all_tracks/');
    tracks.value = response.data.data || [];
    console.log('Fetched tracks successfully:', tracks.value);
  } catch (error) {
    console.error('Error fetching tracks:', error);
  }
};

watch(() => props.id, (newId) => {
  fetchPlaylistData(newId)
})


// Save playlist
const savePlaylist = async () => {
  const formData = new FormData();
  formData.append('title', playlist.value.title);
  formData.append('user', playlist.value.user.id);


  try {
    if (playlist.value.id) {
      await updatePlaylist(playlist.value.id, formData); // Update existing playlist
    } else {
      const response = await createPlaylist(formData); // Create new playlist
      playlist.value.id = response.data.id;
    }

    console.log('Playlist saved successfully');


    notification.value.message = 'Playlist saved successfully';
  } catch (error) {
    console.error('Error saving playlist:', error);
    notification.value.message = 'Failed to save playlist';
  }
};

// Add track to playlist and update database
const addTrackToPlaylist = async (trackId) => {
  const track = tracks.value.find(item => item.id === trackId);
  if (track) {
    if (addedTracks.value.includes(track.id)) {
      notification.value.message = 'Track already added';
      notification.value.visible = true;
    } else {
      try {
        playlist.value.track.push(track.id); // Update playlist tracks
        addedTracks.value.push(track.id);
        // Add the track to the playlist and update the backend
        const updatedData = {
          track: addedTracks.value
        }

        // Assuming updatePlaylist function sends PUT or PATCH request

        const newPlaylist = await updatePlaylist(playlistId.value, updatedData);
        playlist.value = newPlaylist.data
        console.log("After track added: ", playlist)
        notification.value.message = 'Track added to playlist';
        notification.value.visible = true;
      } catch (error) {
        console.error('Error adding track to playlist:', error);
        notification.value.message = 'Failed to add track to playlist';
        notification.value.visible = true;
      }
    }
  }
};

// Remove track from playlist
const removeTrack = async (trackId) => {
  try {
    const playlistData = playlist.value.track
    const afterTrackRemoved = playlistData
      .filter(track => track.id !== trackId)
      .map(track => track.id);



    addedTracks.value = afterTrackRemoved

    const updatedData = {
      track: addedTracks.value
    }
    console.log("remove track : ", trackId)
    console.log("remove track : ", updatedData)

    const newPlaylist = await updatePlaylist(playlistId.value, updatedData);
    playlist.value = newPlaylist.data
    console.log("After track remove: ", playlist)
    notification.value.message = 'Track removed from playlist';
    notification.value.visible = true;

  } catch (error) {
    console.error('Error removing track from playlist:', error);
    notification.value.message = 'Failed to remove track from playlist';
    notification.value.visible = true;
  }
};

// Format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Filter tracks based on search term
const filterTracks = () => {
    console.log(tracks)
  const trimmedSearchTerm = searchTerm.value.trim();

  console.log(trimmedSearchTerm === '')

  if (trimmedSearchTerm === '') {
    filteredTracks.value = tracks.value;
  } else {
    const regex = new RegExp(trimmedSearchTerm, 'i');
    filteredTracks.value = tracks.value?.filter(track => regex.test(track.title));
  }
};


// Lifecycle hook: fetch data on component mount
onMounted(() => {
  fetchPlaylistData(playlistId.value);
  fetchTracks();
});
</script>
