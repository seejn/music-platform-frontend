<template>
  <Layout>
    <template #Main>
      <header class="playlist-header text-white py-10">
        <div class="flex flex-row">
          <div class="relative group">

            <img :src="imageUrl" alt="Playlist Image" class="w-60 h-60 border-4 border-red-800">
            <div
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              @click="triggerFileInput">
              <span class="text-white" v-show="isPlaylistOwner">Choose Photo</span>
            </div>
            <input type="file" ref="fileInput" class="hidden" @change="onImageChange">
          </div>

          <div class="ml-4 mt-[3vw]">
            <template v-if="!editing">
              <p class="font-bold text-white text-5xl align-text-bottom">
                {{ playlist.title }} #{{ playlist.id }}
                <span v-show="isPlaylistOwner">
                <button @click="toggleEditForm">
                  <i class="fa-regular fa-pen-to-square fa-2xs ml-5 cursor-pointer"></i>
                </button>
              </span>
                <span v-show="isPlaylistOwner">
                <button @click="deletePlaylistConfirm">
                  <i class="fa fa-trash fa-2xs ml-5" aria-hidden="true"></i>
                </button>
              </span>
              </p>
            </template>

            <template v-else>
              <form @submit.prevent="saveChanges" class="flex items-center">
                <input id="editTitle" v-model="editedTitle" type="text"
                  class="bg-white text-black font-bold text-5xl align-text-bottom w-72" />
                <div class="flex items-center space-x-4 mt-2">
                  <button type="submit" class="rounded-full p-2 bg-black text-white" title="Save Changes">
                    <i class="far fa-check-circle fa-2xl ml-3 cursor-pointer"></i>
                  </button>
                  <button type="button" @click="cancelEdit" class="rounded-full p-2 bg-black text-white" title="Cancel">
                    <i class="far fa-times-circle fa-2xl ml-3 cursor-pointer"></i>
                  </button>
                </div>
              </form>
            </template>

            <p class="mt-4 italic flex items-center text-2xl">
              {{ playlist?.user?.first_name }} {{ playlist?.user?.last_name }} 
            </p>

            <div class="mt-4">
              <span v-if="!isPlaylistFavourite">
                <button @click="addToFavourite">
                  <i class="fa-regular fa-3x fa-heart ml-1"></i>
                </button>
              </span>

              <span v-else>
                <button @click="removeFromFavouritePlaylist">
                  <i class="fa-solid fa-3x fa-heart ml-1"></i>
                </button>
              </span>
              
              <span v-show="isPlaylistOwner">
              <button @click="showPrivacyPopup = true">
                <i class="fa fa-user fa-3x ml-11" aria-hidden="true"></i>
              </button>
            </span>
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
                class="py-2 px-4 bg-black text-white shadow-md mb-2 flex items-center justify-between">
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
          <div v-if="notification.visible" class="absolute top-10 right-10 bg-red-500 text-white p-3 rounded">
            {{ notification.message }}
          </div>
        </div>

        <transition name="fade">
          <div v-if="showImageForm"
            class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div class="bg-black p-8 rounded-lg">
              <h2 class="text-2xl font-bold mb-4 text-white">Save Image</h2>
              <img :src="imageUrl" alt="Selected Image" class="w-60 h-60 border-4 border-blood mb-4">
              <div class="flex justify-end space-x-4">
                <button @click="saveImage" class="px-4 py-2 bg-gray-300 text-black rounded-md">Save</button>
                <button @click="cancelImage" class="px-4 py-2 bg-gray-300 text-blood rounded-md">Cancel</button>
              </div>
            </div>
          </div>
        </transition>

        <PrivacyPopup v-if="showPrivacyPopup" :id="playlistId"/>

      </main>
    </template>
  </Layout>
</template>
<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Layout from './Layout.vue';
import PrivacyPopup from './PrivacyPopup.vue';
import {
  fetchPlaylist,
  createPlaylist,
  updatePlaylist,
  addRemoveTrackFromPlaylist,
  removePlaylistFromFavouritePlaylist,
  deletePlaylist as deletePlaylistApi
} from '../api/Playlist.js';
import { fetchAllTracks } from '../api/Track';
import defaultImageUrl from '../assets/placeholders/image.png';
import { createFavouritePlaylist, checkFavouritePlaylist } from '../api/Playlist.js';
import { useStore } from 'vuex';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const store = useStore();
const user = store.getters.getUser;
const playlistId = ref(props.id);
const searchTerm = ref('');
const playlist = ref({});
const tracks = ref([]);
const filteredTracks = ref([]);
const addedTracks = ref([]);
const notification = ref({
  message: '',
  visible: false,
});
const fileInput = ref(null);
const isPlaylistFavourite = ref(false);
const imageUrl = ref(defaultImageUrl);
const imageFile = ref(null);
const showImageForm = ref(false);
const showPrivacyPopup = ref(false);
const editing = ref(false);
const editedTitle = ref('');

const router = useRouter();

const isPlaylistOwner = computed(() => {
  const userId = store.getters.getUser.id;
  return userId === playlist.value?.user?.id;
});


const isFavouritePlaylistByUser = async (userId, playlistId) => {
  try {
    const response = await checkFavouritePlaylist(userId, playlistId);
    isPlaylistFavourite.value = response.is_favourite;
    console.log(response);
  } catch (error) {
    console.error('Error checking favourite playlist:', error);
  }
};

const fetchPlaylistData = async (playlistId) => {
  try {
    playlist.value = await fetchPlaylist(playlistId);
    console.log('Fetched playlist:', playlist.value);
    if (playlist.value.imageUrl) {
      imageUrl.value = playlist.value.imageUrl;
    } else {
      imageUrl.value = defaultImageUrl;
    }
    playlist.value.track.forEach((track) => {
      addedTracks.value.push(track.id);
    });
  } catch (error) {
    console.error('Error fetching playlist:', error);
  }
};

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
  fetchPlaylistData(newId);
  isFavouritePlaylistByUser(user.id, newId);
});

const savePlaylist = async () => {
  const formData = new FormData();
  formData.append('title', playlist.value.title);
  formData.append('user', playlist.value.user.id);
  if (imageFile.value) {
    formData.append('image', imageFile.value);
  }

  try {
    if (playlist.value.id) {
      await updatePlaylist(playlist.value.id, formData);
    } else {
      const response = await createPlaylist(formData);
      playlist.value.id = response.data.id;
    }

    console.log('Playlist saved successfully');
    notification.value.message = 'Playlist saved successfully';
    notification.value.visible = true;
  } catch (error) {
    console.error('Error saving playlist:', error);
    notification.value.message = 'Failed to save playlist';
    notification.value.visible = true;
  }
};

const addTrackToPlaylist = async (trackId) => {
  const track = tracks.value.find((item) => item.id === trackId);
  if (track) {
    if (addedTracks.value.includes(track.id)) {
      notification.value.message = 'Track already added';
      notification.value.visible = true;
    } else {
      try {
        playlist.value.track.push(track);
        addedTracks.value.push(track.id);

        const updatedData = {
          track: addedTracks.value,
        };

        const newPlaylist = await addRemoveTrackFromPlaylist(playlistId.value, updatedData);
        playlist.value = newPlaylist.data;

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

const removeTrack = async (trackId) => {
  try {
    const playlistData = playlist.value.track;
    const afterTrackRemoved = playlistData
      .filter((track) => track.id !== trackId)
      .map((track) => track.id);

    addedTracks.value = afterTrackRemoved;

    const updatedData = {
      track: addedTracks.value,
    };

    const newPlaylist = await addRemoveTrackFromPlaylist(playlistId.value, updatedData);
    playlist.value = newPlaylist.data;

    notification.value.message = 'Track removed from playlist';
    notification.value.visible = true;
  } catch (error) {
    console.error('Error removing track from playlist:', error);
    notification.value.message = 'Failed to remove track from playlist';
    notification.value.visible = true;
  }
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const triggerFileInput = () => {
  fileInput.value.click();  // Use fileInput.value instead of $refs.fileInput
};

const onImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    imageFile.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
    showImageForm.value = true;
  }
};

const saveImage = async () => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile.value);
    await saveImageToPlaylist(formData);

    showImageForm.value = false;
    notification.value.message = 'Image saved successfully';
    notification.value.visible = true;
  } catch (error) {
    console.error('Error saving image:', error);
    notification.value.message = 'Failed to save image';
    notification.value.visible = true;
  }
};

const saveImageToPlaylist = async (formData) => {
  try {
    await updatePlaylist(playlist.value.id, formData);
  } catch (error) {
    console.error('Error saving image to playlist:', error);
    throw new Error('Failed to save image to playlist');
  }
};

const cancelImage = () => {
  imageUrl.value = playlist.value.imageUrl ? playlist.value.imageUrl : defaultImageUrl;
  showImageForm.value = false;
};

const toggleEditForm = () => {
  editing.value = !editing.value;
  if (editing.value) {
    editedTitle.value = playlist.value.title;
  }
};

const saveChanges = async () => {
  playlist.value.title = editedTitle.value;
  await savePlaylist();
  editing.value = false;
};

const cancelEdit = () => {
  editing.value = false;
  editedTitle.value = playlist.value.title;
};

const addToFavourite = async () => {
  isPlaylistFavourite.value = true;
  try {
    const favouritePlaylistData = {
      user_id: user.id,
      playlist: playlist.value.id,
    };

    const response = await createFavouritePlaylist(favouritePlaylistData);
    console.log('Response from addToFavourite:', response);
    notification.value.message = 'Playlist added to favourites';
    notification.value.visible = true;
  } catch (error) {
    console.error('Error adding playlist to favourites:', error);
    notification.value.message = 'Failed to add playlist to favourites';
    notification.value.visible = true;
  }
};

const removeFromFavouritePlaylist = async () => {
  isPlaylistFavourite.value = false;
  try {
    const response = await removePlaylistFromFavouritePlaylist(user.id, playlistId.value);
    console.log('Response from removeFromFavouritePlaylist', response);
    notification.value.message = 'Playlist removed from favourites';
    notification.value.visible = true;
  } catch (error) {
    console.error('Error removing playlist from favourites:', error);
    notification.value.message = 'Failed to remove playlist from favourites';
    notification.value.visible = true;
  }
};

const deletePlaylistConfirm = async () => {
  try {
    const response = await deletePlaylistApi(playlistId.value);
    console.log('Response from deletePlaylist:', response);
    notification.value.message = 'Playlist deleted successfully';
    notification.value.visible = true;
    // Redirect to home page after successful deletion
    router.push('/Home');
  } catch (error) {
    console.error('Error deleting playlist:', error);
    notification.value.message = 'Failed to delete playlist';
    notification.value.visible = true;
  }
};

const filterTracks = () => {
  const trimmedSearchTerm = searchTerm.value.trim();

  if (trimmedSearchTerm === '') {
    filteredTracks.value = tracks.value;
  } else {
    const regex = new RegExp(trimmedSearchTerm, 'i'); // Corrected syntax
    filteredTracks.value = tracks.value?.filter((track) => regex.test(track.title));
  }
};

onMounted(() => {
  fetchPlaylistData(playlistId.value);
  fetchTracks();
  isFavouritePlaylistByUser(user.id, playlistId.value);
});

</script>



<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
