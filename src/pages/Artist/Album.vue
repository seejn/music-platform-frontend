<template>
  <Layout>
    <template #Main>
      <header class="album-header text-white py-10">
        <div class="flex flex-row">
          <img :src="imageUrl" alt="Cover Image" class="w-60 h-60 rounded-lg border-4 border-red-800">
          <div class="ml-2 mt-[7vw] relative">
            <h1 v-if="!editMode" class="text-4xl font-bold">{{ album.title }}</h1>
            <p class="mt-2 text-lg italic">{{ artist.first_name }} {{ artist.last_name }}</p>
            <div class="mt-6 flex space-x-4" v-if="isArtist">
              <div class="relative">
                <button @click="toggleOptions" class="text-white bg-black rounded-md shadow-md text-md">
                  <i class="fas fa-ellipsis-v">...</i>
                </button>
                <div v-if="showOptions" class="absolute top-10 right-0 bg-red-600 rounded-md shadow-md py-2 w-40 z-20">
                  <div v-show="isAlbumOwner">
                    <button @click="toggleEditMode" class="block w-full text-left px-4 py-2 hover:bg-red-400">
                      Edit
                    </button>
                  </div>
                  <button @click="favoriteAlbumHandler" class="block w-full text-left px-4 py-2 hover:bg-red-400">
                    Favorite Album
                  </button>
                </div>
              </div>
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
        <h2 class="text-2xl font-bold my-4">Tracks in this Album</h2>
        <table class="min-w-full bg-transparent text-white">
          <thead>
            <tr>
              <th class="py-2 px-4 text-left">Title</th>
              <th class="py-2 px-4 text-left">Release Date</th>
              <th class="py-2 px-4 text-left">Duration</th>
              <th class="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(track, index) in tracks" :key="index" class="relative">
              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.title }}</td>
              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.released_date }}</td>
              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
              <td class="py-2 px-4 text-left border-b border-red-800 relative">
                <div class="flex items-center space-x-2">
                  <button class="text-white bg-black rounded-md shadow-md text-md" @click="toggleTrackOptions(index)">
                    <i class="fas fa-ellipsis-v">...</i>
                  </button>
                  <div v-if="showTrackOptions[index]" class="absolute bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0 mt-8">
                    <div v-show="isAlbumOwner">
                      <button @click="editTrack(track)" class="block w-full text-left px-4 py-2">Edit</button>
                      <div v-if="showEditForm">
                        <EditTracks :track="track" :genres="genres" @save="saveTrack" @close="showEditForm = false" />
                      </div>

                      <button @click="deleteTrackData(track.id)" class="block w-full text-left px-4 py-2">Delete</button>
                    </div>
                    <button @click="reportedTrack(track.id)" class="block w-full text-left px-4 py-2">Report</button>

                    <button class="block w-full text-left px-4 py-2">Playlist</button>
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
import { ref, computed, watch, onMounted } from 'vue';

import { fetchAlbum, updateAlbum, createFavouriteAlbum } from '../../api/Album';

import { deleteTrack, reportTrack, updateTrack } from "../../api/Track";
import EditTracks from '../Artist/EditTracks.vue';
import { fetchGenres } from '../../api/Genre';
import { useStore } from 'vuex';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const albumId = ref(props.id)
const album = ref({})
const tracks = ref({})
const artist = ref({})
const genres = ref([]);



const store = useStore();

const showEditForm = ref(false);
const showOptions = ref(false);
const showTrackOptions = ref({});
const editMode = ref(false);
const isArtist = ref(true);


const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${album.value.image || ''}`;
});

const fetchAlbumData = async (albumId) => {
  try {
    album.value = await fetchAlbum(albumId);
    tracks.value = album.value.track || []
    artist.value = album.value.artist
    console.log("album value", album.value);
    console.log("tracks value", tracks.value);
    console.log("artist value", artist.value);
  }catch(error){
    console.log(error)
  }
}

const loadGenres = async () => {
  try {
    genres.value = await fetchGenres();
  } catch (error) {
    console.error("Failed to fetch genres:", error);
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
    console.error("Error updating track", error);
  }
};

const saveTrack = async (updatedTrack) => {
  try {
    await updateTrack(updatedTrack);
    fetchAlbumData(props.id);
    showEditForm.value = false;
  } catch (error) {
    console.error("Error updating track", error);
  }
};

const deleteTrackData = async (trackId) => {
  try {
    await deleteTrack(trackId);
    tracks.value = tracks.value.filter((track) => track.id !== trackId);
  } catch (error) {
    console.error("Error deleting track", error);
  }
};
const reportedTrack = async (trackId) => {
  try {
    await reportTrack(trackId);
    fetchAlbumData(albumId.value); 
    console.log("Track reported successfully!");
  } catch (error) {
    console.error("Error reporting track", error);
  }
};
const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};


const toggleTrackOptions = (index) => {
  showTrackOptions.value = { ...showTrackOptions.value, [index]: !showTrackOptions.value[index] };
};


const favoriteAlbumHandler = async () => {
  try {
    const userId = store.getters.getUser.id;
    await createFavouriteAlbum(userId, albumId.value);
    console.log("Album favorited successfully!");
  } catch (error) {
    console.error("Error favoriting album:", error);
  }
};

const handleAlbumEdit = async () => {
  try {
    const updateData = {
      title: album.value.title,
    };
    await updateAlbum(albumId.value, updateData);
    editMode.value = false; 
  } catch (error) {
    console.error('Error updating album:', error);
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
  fetchAlbumData(newId)
})

onMounted(() => {
  fetchAlbumData(albumId.value);
  loadGenres();
})

</script>
