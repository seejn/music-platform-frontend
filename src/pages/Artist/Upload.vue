<template>
  <Layout>
    <template #Main>
      <div class="flex-grow bg-black overflow-hidden relative">
        <div class="relative opacity-80 z-0 min-w-screen h-full">
          <img src="/src/assets/pic/vin2.png" alt="Background Image" class="h-full w-full object-cover">
        </div>


        <div class=" w-full sm:w-3/5 md:w-2/5 absolute top-0 left-1/2 transform -translate-x-1/2 my-16 p-6 rounded-3xl bg-black bg-opacity-85 border-2 border-red-800 z-10 hover:shadow-red-800 hover:shadow-lg transition-shadow duration-700">
          <div class="flex justify-center my-6">
            <button @click="showSongForm = true" :class="{ 'bg-red-800': showSongForm, 'bg-gray-700': !showSongForm }"
              class="px-4 py-2 rounded-l text-white hover:bg-red-800 hover:text-white">Upload Song</button>
            <button @click="showSongForm = false" :class="{ 'bg-red-800': !showSongForm, 'bg-gray-700': showSongForm }"
              class="px-4 py-2 rounded-r text-white hover:bg-red-800 hover:text-white">Upload Album</button>
          </div>


          <div v-if="showSongForm" class="bg-black bg-opacity-50 rounded-lg p-3 w-full shadow-lg">
            <h2 class="text-2xl font-bold text-red-800 mb-4">Upload Song</h2>
            <form @submit.prevent="handleTrackUpload">

              <div class="mb-4">
                <label for="songTitle" class="block text-white mb-2">Title</label>
                <input type="text" id="songTitle" v-model="track.title" @input="clearError('track', 'title')"
                  class="w-full p-2 rounded outline-none bg-gray-700 text-black focus:border-red-800 focus:ring-4 focus:ring-red-800 caret-red-800">
                <span v-if="trackErrors.title" class="text-red-500">{{ trackErrors.title }}</span>
              </div>


              <div class="mb-4">
                <label for="songDuration" class="block text-white mb-2">Duration</label>
                <input type="text" id="songDuration" v-model="track.duration" @input="clearError('track', 'duration')"
                  class="w-full p-2 rounded outline-none bg-gray-700 text-black border border-gray-600 focus:border-red-800 focus:ring-4 focus:ring-red-800 caret-red-800">
                <span v-if="trackErrors.duration" class="text-red-500">{{ trackErrors.duration }}</span>
              </div>


              <div class="mb-4">
                <label for="songReleasedDate" class="block text-white mb-2">Released Date</label>
                <input type="date" id="songReleasedDate" v-model="track.released_date" @input="clearError('track', 'released_date')"
                  class="w-full p-2 rounded outline-none bg-gray-700 text-black border border-gray-600 focus:border-red-800 focus:ring-4 focus:ring-red-800 caret-red-800">
                <span v-if="trackErrors.released_date" class="text-red-500">{{ trackErrors.released_date }}</span>
                <span v-if="isFutureDate(track.released_date)" class="text-red-500">Select a date before today</span>
              </div>


              <div class="mb-4">
                <label for="songGenre" class="block text-white mb-2">Genre</label>
                <select v-model="track.genre" name="genre" id="genre" @input="clearError('track', 'genre')"
                  class="w-full p-2 rounded bg-gray-700 outline-none text-black border border-gray-600 focus:border-red-800 focus:ring-4 focus:ring-red-800 caret-red-800">
                  <option value="" disabled>Choose genre of track</option>
                  <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
                </select>
                <span v-if="trackErrors.genre" class="text-red-500">{{ trackErrors.genre }}</span>
              </div>


              <div class="mb-4">
                <label for="songFile" class="block text-white mb-2">Image</label>
                <input type="file" id="songFile" @change="handleTrackImageChange" @input="clearError('track', 'image')"
                  class="w-full p-2 rounded outline-none bg-white text-black border border-gray-600 focus:border-red-800 focus:ring-4 focus:ring-red-800 caret-red-800">
                <span v-if="trackErrors.image" class="text-red-500">{{ trackErrors.image }}</span>
              </div>


              <button type="submit"
                class="ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800 hover:text-white">Upload Song</button>
            </form>
          </div>


          <div v-else class="bg-black bg-opacity-50 rounded-lg p-6 w-full shadow-lg">
            <h2 class="text-2xl font-bold text-red-800 mb-4">Upload Album</h2>
            <form @submit.prevent="handleAlbumUpload">
              <div class="mb-4">
                <label for="albumTitle" class="block text-white mb-2">Title</label>
                <input type="text" id="albumTitle" v-model="album.title" @input="clearError('album', 'title')"
                  class="w-full p-2 rounded outline-none bg-gray-700 focus:border-red-800 focus:ring-4 focus:ring-red-800 text-black caret-red-800">
                <span v-if="albumErrors.title" class="text-red-500">{{ albumErrors.title }}</span>
              </div>


              <div class="mb-4">
                <label for="albumReleasedDate" class="block text-white mb-2">Released Date</label>
                <input type="date" id="albumReleasedDate" v-model="album.released_date" @input="clearError('album', 'released_date')"
                  class="w-full p-2 rounded outline-none bg-gray-700 border border-gray-600 focus:border-red-800 focus:ring-4 focus:ring-red-800 text-black caret-red-800">
                <span v-if="albumErrors.released_date" class="text-red-500">{{ albumErrors.released_date }}</span>
                <span v-if="isFutureDate(album.released_date)" class="text-red-500">Select a date before today</span>
              </div>


              <div class="mb-4">
                <label for="albumCover" class="block text-white mb-2">Album Cover</label>
                <input type="file" id="albumCover" @change="handleAlbumImageChange" @input="clearError('album', 'image')"
                  class="w-full p-2 rounded outline-none bg-white border border-red-800 focus:ring-4 focus:ring-red-800 text-black caret-red-800 ">
                <span v-if="albumErrors.image" class="text-red-500">{{ albumErrors.image }}</span>
              </div>


              <div class="mb-4">
                <label for="albumFile" class="block text-white mb-2">Album Track</label>
                <select v-model="album.tracks" multiple name="genre" id="genre" @input="clearError('album', 'tracks')"
                  class="w-full p-2 rounded bg-gray-700 outline-none text-black border border-gray-600 focus:border-red-800 focus:ring-4 focus:ring-red-800 caret-red-800">
                  <option value="" disabled>Choose tracks</option>
                  <option v-for="track in artistTracks" :key="track.id" :value="track.id">{{ track.title }}</option>
                </select>
                <span v-if="albumErrors.tracks" class="text-red-500">{{ albumErrors.tracks }}</span>
              </div>


              <button type="submit" class="ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800">Upload Album</button>
            </form>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import { createTrack } from '../../api/Track';
import { fetchArtistTracks } from '../../api/Track';
import { fetchGenres } from '../../api/Genre';
import { createAlbum } from '../../api/Album';


import { handleImageUpload } from '../../utils/imageUpload';

const store = useStore();
const user = computed(() => store.getters.getUser);

const showSongForm = ref(true);

const genres = ref([]);
const artistTracks = ref([]);

const loadGenres = async () => {
  try {
    genres.value = await fetchGenres();
  } catch (error) {
    toasr.error("Failed to fetch genres:");
  }
};

const loadArtistTracks = async () => {
  try {
    artistTracks.value = await fetchArtistTracks(user.value.id);
  } catch (error) {
    toast.error("Failed to fetch artistTracks:");
  }
};

const track = ref({
  title: "",
  duration: "",
  released_date: "",
  genre: "",
  artist: user.value.id
});

const trackErrors = ref({
  title: "",
  duration: "",
  released_date: "",
  genre: "",
  image: ""
});

const trackImageFile = ref(null);
const albumImageFile = ref(null);

const handleTrackImageChange = (event) => {
  trackImageFile.value = event.target.files[0];
};

const handleAlbumImageChange = (event) => {
  albumImageFile.value = event.target.files[0];
};

const album = ref({
  title: "",
  released_date: "",
  artist: user.value.id,
  tracks: []
});

const albumErrors = ref({
  title: "",
  released_date: "",
  image: "",
  tracks: ""
});

const clearFields = (fields) => {
  for (const key in fields.value) {
    if (key !== "artist") fields.value[key] = "";
  }
};

const clearError = (formType, field) => {
  if (formType === 'track') {
    trackErrors.value[field] = "";
  } else if (formType === 'album') {
    albumErrors.value[field] = "";
  }
};

const validateFields = (fields, errors) => {
  let isValid = true;
  for (const key in fields.value) {
    if (!fields.value[key] && key !== "artist") {
      errors.value[key] = "This field is required";
      isValid = false;
    } else {
      errors.value[key] = "";
    }
  }
  return isValid;
};

const isFutureDate = (date) => {
  const today = new Date();
  const selectedDate = new Date(date);
  return selectedDate > today;
};

const handleTrackUpload = async () => {
  if (!validateFields(track, trackErrors)) return;
  try {
    const formData = handleImageUpload(track.value, trackImageFile.value);
    const response = await createTrack(formData);
    toast.success(" created track");
  } catch (error) {
    toast.error("Error to create track");
  }
  clearFields(track);
};

const handleAlbumUpload = async () => {
  if (!validateFields(album, albumErrors)) return;
  try {
    const formData = handleImageUpload(album.value, albumImageFile.value);
    const response = await createAlbum(formData);
    toast.success(" created Album");
  } catch (error) {
    toast.error("Error to create Album");
  }
  clearFields(album);
};

onMounted(() => {
  loadGenres();
  loadArtistTracks();
});
</script>

<style>
.hover\:shadow-red-800:hover {
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
}

.transition-shadow {
  transition: box-shadow 0.3s ease-in-out;
}
</style>
