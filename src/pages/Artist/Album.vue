<template>
  <Layout>
    <template #Main>
      <header class="album-header text-white py-10">
        <div class="flex flex-row">
          <img :src="imageUrl" alt="Cover Image" class="w-60 h-60 rounded-lg border-4 border-red-800">
          <div class="ml-4 mt-[3vw] relative">
            <h1 v-if="!editMode" class="text-4xl font-bold">{{ album.title }}</h1>
            <p class="mt-2 text-lg italic">{{ artist.first_name }} {{ artist.last_name }}</p>

            <div class="mt-4">
              <span v-if="!isAlbumFavourite">
                <button @click="addToFavourite">
                  <i class="fa-regular fa-3x fa-heart ml-1"></i>
                </button>
              </span>

              <span v-else>
                <button @click="removeFromFavouriteAlbum">
                  <i class="fa-solid fa-3x fa-heart ml-1"></i>
                </button>
              </span>
            </div>

            <div class="flex items-center justify-center w-full mt-6">
              <form v-if="editMode" @submit.prevent="handleAlbumEdit" class="w-full max-w-md bg-black p-6 rounded z-10">
                <div class="mb-4">
                  <label for="albumTitle" class="block text-white mb-2">Title</label>
                  <input type="text" id="albumTitle" v-model="album.title" @input="clearError('title')"
                         class="w-full p-2 rounded outline-none bg-gray-700 text-white focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                </div>
                <button type="submit" class="block w-full px-4 py-2 mt-4 bg-red-600 hover:bg-red-400 text-white">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <section class="py-4">
        <h2 class="text-2xl font-bold my-4 text-white">Tracks in this Album</h2>
        <table class="min-w-full bg-transparent text-white text-center">
          <thead>
            <tr>
              <th class="py-2 px-4 text-center">Title</th>
              <th class="py-2 px-4 text-center">Release Date</th>
              <th class="py-2 px-4 text-center">Duration</th>
              <th class="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(track, index) in tracks" :key="index" class="relative">
              <td class="py-2 px-4 text-center border-b border-red-800">{{ track.title }}</td>
              <td class="py-2 px-4 text-center border-b border-red-800">{{ track.released_date }}</td>
              <td class="py-2 px-4 text-center border-b border-red-800">{{ track.duration }}</td>
              <td class="py-2 px-4 text-center border-b border-red-800 relative">
                <div class="flex items-center space-x-2">
                  
                  <button class="text-white bg-black rounded-md shadow-md text-md" @click="toggleTrackOptions(index)">
                    <i class="fas fa-ellipsis-v">...</i>
                  </button>
                  
                  <div v-if="showTrackOptions[index]" class="absolute bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0 mt-8">

                    <div v-show="isAlbumOwner && !showPlaylistOptions[index]">

                      <button @click="editTrack(track)" class="block w-full text-left px-4 py-2">Edit</button>

                      <div v-if="showEditForm">
                        
                        <EditTracks :track="track" :genres="genres" @save="saveTrack" @close="showEditForm = false" />
                      </div>
                      <button @click="deleteTrackData(track.id)" class="block w-full text-left px-4 py-2">Delete</button>
                    </div>
                    <button v-if="!showPlaylistOptions[index]" @click="reportedTrack(track.id)" class="block w-full text-left px-4 py-2">Report</button>
                    <div @click="togglePlaylistOptions(index)">
                      <button v-if="!showPlaylistOptions[index]" class="block w-full text-left px-4 py-2">Playlist</button>
                      <div v-if="showPlaylistOptions[index]" class="bg-black text-white rounded-md shadow-md py-2 w-full mt-2">
                        <div v-for="playlist in playlists" :key="playlist.id">
                          <button @click="addTrackToPlaylist(playlist.id,track.id)" class="block w-full text-left px-4 py-2">{{ playlist.title }}</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </template>
  </Layout>
</template>


<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { ref, computed, watch, onMounted } from 'vue';
import { fetchAlbum, updateAlbum, createFavouriteAlbum } from '../../api/Album';
import { deleteTrack, updateTrack } from "../../api/Track";
import EditTracks from '../Artist/EditTracks.vue';
import { fetchGenres } from '../../api/Genre';
import { useStore } from 'vuex';
import { reportTrack } from '../../api/Reports';
import { removeAlbumFromFavouriteAlbum, checkFavouriteAlbum } from '../../api/Album';
import { fetchUserPlaylists, updatePlaylist } from '../../api/Playlist'; 
import { addRemoveTrackFromPlaylist } from '../../api/Playlist'; 

const store = useStore();
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const user = store.getters.getUser;
const isAlbumFavourite = ref(false);
const albumId = ref(props.id);
const album = ref({});
const tracks = ref({});
const artist = ref({});
const genres = ref([]);
const playlists = ref([]);
const showEditForm = ref(false);
const showOptions = ref(false);
const showTrackOptions = ref({});
const showPlaylistOptions = ref({});
const editMode = ref(false);
const isArtist = ref(true);

const isFavouriteAlbumByUser = async (userId, albumId) => {
  try {
    const response = await checkFavouriteAlbum(userId, albumId);
    isAlbumFavourite.value = response.is_favourite;
  } catch (error) {
    toast.error('Error checking favourite album:');
  }
};

const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${album.value.image || ''}`;
});

const fetchAlbumData = async (albumId) => {
  try {
    album.value = await fetchAlbum(albumId);
    tracks.value = album.value.track || [];
    artist.value = album.value.artist;
  } catch (error) {
    console.log(error);
  }
};

const loadGenres = async () => {
  try {
    genres.value = await fetchGenres();
  } catch (error) {
    toast.error("no genres found");
  }
};

const loadUserPlaylists = async () => {
  try {
    playlists.value = await fetchUserPlaylists(user.id);
  } catch (error) {
    toast.error("Error fetching user playlists");
  }
};

const editTrack = (track) => {
  showEditForm.value = true;
};

const isAlbumOwner = computed(() => {
  const userId = store.getters.getUser.id;
  return userId === artist.value.id;
});

const updateTrackData = async (updatedTrack) => {
  try {
    await updateTrack(updatedTrack.id, updatedTrack);
    fetchAlbumData(props.id);
    showEditForm.value = false;
  } catch (error) {
    toast.error("Error updating track");
  }
};

const saveTrack = async (updatedTrack) => {
  try {
    await updateTrack(updatedTrack);
    fetchAlbumData(props.id);
    showEditForm.value = false;
  } catch (error) {
    toast.error("Error updating track");
  }
};

const deleteTrackData = async (trackId) => {
  try {
    await deleteTrack(trackId);
    tracks.value = tracks.value.filter((track) => track.id !== trackId);
  } catch (error) {
    toast.error("Error deleting track");
  }
};

const reportedTrack = async (trackId) => {
  try {
    await reportTrack(trackId);
    fetchAlbumData(albumId.value);
    toast.success("Track reported successfully!");
  } catch (error) {
    toast.error("Error reporting track");
  }
};

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};

const toggleTrackOptions = (index) => {
  showTrackOptions.value = { ...showTrackOptions.value, [index]: !showTrackOptions.value[index] };
  if (!showTrackOptions.value[index]) {
    showPlaylistOptions.value[index] = false; 
  }
};

const togglePlaylistOptions = (index) => {
  showPlaylistOptions.value = { ...showPlaylistOptions.value, [index]: !showPlaylistOptions.value[index] };
  if (showPlaylistOptions.value[index]) {
    showTrackOptions.value[index] = true; 
  }
};

const addToFavourite = async () => {
  isAlbumFavourite.value = true;
  try {
    const favouriteAlbumData = {
      user_id: user.id,
      album: album.value.id,
    };
    const response = await createFavouriteAlbum(favouriteAlbumData);
    toast.success('Album added to favourites');
  } catch (error) {
    toast.error('Error adding Album to favourites:');
  }
};

const removeFromFavouriteAlbum = async () => {
  isAlbumFavourite.value = false;
  try {
    const response = await removeAlbumFromFavouriteAlbum(user.id, albumId.value);
    toast.success('Album removed from favourites');
  } catch (error) {
    toast.error('Failed to remove album from favourites');
  }
};

const addTrackToPlaylist = async (playlistId, trackId) => {
  try {
    const playlistData = { track: trackId };
    await addRemoveTrackFromPlaylist(playlistId, playlistData); 
    toast.success('Track added to playlist successfully');
  } catch (error) {
    toast.error('Error adding track to playlist');
    console.error(`Error adding track ${trackId} to playlist ${playlistId}:`, error);
  }
};


const handleAlbumEdit = async () => {
  try {
    const updateData = { title: album.value.title };
    await updateAlbum(albumId.value, updateData);
    editMode.value = false;
  } catch (error) {
    toast.error("Error updating album");
  }
};

const toggleEditMode = () => {
  editMode.value = !editMode.value;
  if (editMode.value) {
    showEditForm.value = true;
  }
};

const clearError = (field) => {
  console.log(`Clearing error for ${field}`);
};

watch(() => props.id, (newId) => {
  fetchAlbumData(newId);
  isFavouriteAlbumByUser(user.id, newId);
  loadUserPlaylists();
});

onMounted(() => {
  fetchAlbumData(albumId.value);
  loadGenres();
  isFavouriteAlbumByUser(user.id, albumId.value);
 
  loadUserPlaylists();
});




</script>

<style scoped>
/* Your component-specific styles */
</style>

