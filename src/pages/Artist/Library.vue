<template>
  <Layout>
    <template #Main>
      <div class="p-0 bg-black text-white">
        <h1 class="text-4xl font-bold mb-8">{{ artistName }}</h1>

        <div v-for="(track, trackIndex) in tracks" :key="track.id" class="mb-12">
          <div class="flex items-center mb-4">
            <img :src="getImageUrl(track.image)" alt="Album Cover" class="w-24 h-24 mr-4 rounded-lg shadow-md">
            <div>
              <h2 class="text-2xl font-semibold">{{ track.title }}</h2>
              <h3>Singles</h3>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
              <thead class="bg-zinc-800">
                <tr>
                  <th class="py-2 px-4 text-center border-b border-red-800">Title</th>
                  <th class="py-2 px-4 text-center border-b border-red-800">Duration</th>
                  <th class="py-2 px-4 text-center border-b border-red-800">Released Date</th>
                  <th class="py-2 px-4 text-center border-b border-red-800"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="last:border-0">
                  <td class="py-4 px-4 text-center border-b border-red-800">{{ track.title }}</td>
                  <td class="py-4 px-4 text-center border-b border-red-800">{{ track.duration }}</td>
                  <td class="py-4 px-4 text-center border-b border-red-800">{{ track.released_date }}</td>
                  <td class="py-4 px-4 text-center border-b border-red-800  w-min">
                      <button class="bg-black text-white rounded-md shadow-md text-md" @click="toggleOptions(trackIndex)">
                        <i class="fas fa-ellipsis-v">...</i>
                      </button>
                      <div v-if="showOptions[trackIndex]" class="  bg-zinc-700 text-white rounded-md shadow-md py-2 w-40 z-10 right-64 ">
                      <button @click="editTrack(track)" class="block w-full text-left px-4 py-2 hover:bg-zinc-500">Edit</button>
                      <div v-if="showEditForm">
                        <EditSingleTrack :track="track" :genres="genres" @save="saveTrack" @close="showEditForm = false" />
                      </div>
                      <button @click="deleteTrackData(track.id)" class="block w-full text-left px-4 py-2  hover:bg-zinc-500">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>

        <div v-for="(album, albumIndex) in albums" :key="album.id" class="mb-12">
          <div class="flex items-center mb-4">
            <img :src="getImageUrl(album.image)" alt="Album Cover" class="w-24 h-24 mr-4 rounded-lg shadow-md">
            <div class="items-center relative">
              <h2 class="text-2xl font-semibold">{{ album.title }}</h2>
              <div class="flex">
                <h1>Album</h1>
                <button class="text-white bg-black rounded-md shadow-md text-md ml-4" @click="toggleOptions(`album-${albumIndex}`)">
                  <i class="fas fa-ellipsis-v">...</i>
                </button>
                <div v-if="showOptions[`album-${albumIndex}`]" class="absolute bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0 mt-8">
                  <button @click="deleteAlbum(album.id)" class="block w-full text-left px-4 py-2  hover:bg-zinc-500">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
              <thead class="bg-zinc-800">
                <tr>
                  <th class="py-2 px-4 text-center w-1/5">Title</th>
                  <th class="py-2 px-4 text-center w-1/5">Duration</th>
                  <th class="py-2 px-4 text-center w-1/5">Released Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(track, trackIndex) in album.track" :key="track.id" class=" hover:bg-zinc-600">
                  <td class="py-4 px-4 text-left">{{ track.title }}</td>
                  <td class="py-4 px-4 text-left">{{ track.duration }}</td>
                  <td class="py-4 px-4 text-left">{{ track.released_date }}</td>
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
import EditSingleTrack from './EditSingleTrack.vue';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { deleteTrack, updateTrack, fetchArtistTrack } from '../../api/Track';
import { fetchAllAlbums, deleteAlbum } from '../../api/Album';
import { fetchGenres } from '../../api/Genre';

const store = useStore();
const artistId = computed(() => store.getters.getUser?.id);
const artistName = computed(() => `${store.getters.getUser?.first_name} ${store.getters.getUser?.last_name}`);
const tracks = ref([]);
const albums = ref([]);
const showOptions = ref({});
const showEditForm = ref(false);
const genres = ref([]);

const fetchArtistSongs = async () => {
  try {
    tracks.value = await fetchArtistTrack(artistId.value);
    console.log("Artist tracks", tracks.value);
  } catch (error) {
    toast.error("Error fetching tracks");
  }
};

const fetchArtistAlbums = async () => {
  try {
    const allAlbums = await fetchAllAlbums();
    albums.value = allAlbums.filter(album => album.artist.id === artistId.value);
    console.log("Filtered Albums:", albums.value);
    albums.value.forEach(album => {
      console.log(`Tracks for album ${album.title}:`, album.track);
    });
  } catch (error) {
    toast.error('Error fetching artist albums');
  }
};

const loadGenres = async () => {
  try {
    genres.value = await fetchGenres();
  } catch (error) {
    toast.error("Failed to fetch genres");
  }
};

const editTrack = (track) => {
  showEditForm.value = true;
};

const saveTrack = async (updatedTrack) => {
  try {
    console.log("from save track", updatedTrack.id);
    await updateTrack(updatedTrack);
    toast.success("Updating track successful");
    fetchArtistSongs();
    showEditForm.value = false;
  } catch (error) {
    toast.error("Error updating track");
  }
};

const deleteTrackData = async (trackId) => {
  try {
    await deleteTrack(trackId);
    tracks.value = tracks.value.filter(track => track.id !== trackId);
  } catch (error) {
    toast.error("Error deleting track");
  }
};

onMounted(() => {
  fetchArtistSongs();
  fetchArtistAlbums();
  loadGenres();
});

const getImageUrl = (imagePath) => {
  return `${import.meta.env.VITE_API_BASE_URL}${imagePath}`;
};

const toggleOptions = (key) => {
  showOptions.value = {
    ...showOptions.value,
    [key]: !showOptions.value[key]
  };
};

const deleteArtistAlbum = async (albumId) => {
  try {
    await deleteAlbum(albumId);
    albums.value = albums.value.filter(album => album.id !== albumId);
  } catch (error) {
    toast.error("Error deleting album");
  }
};
</script>


<style scoped>
.flex.items-center.relative {
  position: relative;
}

.flex.items-center.relative .absolute{

}

td {
  text-align: center;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-options {
  right: 0;
}
</style>
