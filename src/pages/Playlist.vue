<template>
  <Layout>
    <template #Main>
     

      <header class="playlist-header text-white py-10">
        <div class="flex flex-row">
          <img :src="imageUrl" alt="" class=" w-60 h-60 border-4 border-red-800">
          <div class="ml-2 mt-[7vw]">
            <h1 class="text-4xl font-bold text-white">{{playlist.title}}</h1>
            <p class="mt-2 text-lg italic">{{playlist?.user?.first_name}}</p>
            <div class="mt-6 flex justify-center space-x-4">
              <!-- <div class="relative">
                <button @click="toggleOptions" class="text-white bg-black rounded-md shadow-md text-md">
                  <i class="fas fa-ellipsis-v">...</i>
                </button>
                <div v-if="showOptions" class="absolute top-10 right-0 bg-red rounded-md shadow-md py-2 w-40">
                  <button @click="editPlaylist" class="block w-full text-left px-4 py-2 hover:bg-gray-200">Edit</button>
                  <button @click="deletePlaylist" class="block w-full text-left px-4 py-2 hover:bg-gray-200">Delete</button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </header>

      <section class="py-4">
        <h2 class="text-2xl font-bold my-4">Tracks in this Playlist</h2>
        <table class="min-w-full bg-transparent text-white">
          <thead>
            <tr>
              <th class="py-2 px-4 text-left">Title</th>
              <th class="py-2 px-4 text-left">Artist</th>

              <th class="py-2 px-4 text-left">Duration</th>
              <th class="py-2 px-4 text-left"></th> 
            </tr>
          </thead>
          <tbody>
            <tr v-for="(track, index) in track" :key="index" class="relative">
              <td class="py-2 px-4 text-left border-b border-red-800 flex items-center">
                <img class=" mx-6 object-cover" :src="trackImageUrl(track.image) " width="50" height="50" >
                    <span>
                      {{ track.title }}
                    </span>
                </td>
              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.artist.first_name}}</td>

              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>

              <!-- <td class="py-2 px-4 text-left border-b border-red-800">
                <div class="relative" @mouseover="showPlaylists[index] = true" @mouseleave="showPlaylists[index] = false">
                  <button class="text-white bg-black rounded-md shadow-md text-md" @click="toggleOptions(index)">
                    <i class="fas fa-ellipsis-v">...</i>
                  </button>
                  <div v-if="showOptions[index]" class="absolute top-10 right-0 bg-black  text-white rounded-md shadow-md py-2 w-40">
                    <button @click="editTrack(track)" class="block w-full text-left px-4 py-2 ">Edit</button>
                    <button @click="deleteTrack(track.id)" class="block w-full text-left px-4 py-2 ">Delete</button>
                    <button @click="AddtoPlaylist(track.id)" class="block w-full text-left px-4 py-2 ">AddtoPlaylist

                    <div v-if="showPlaylists[index]" class="bg-black py-2 px-4 rounded-md shadow-md absolute top-0 right-0 mt-10">
                      <p class="text-white">My Playlists:</p>
                      <ul class="text-white">
                        <li v-for="(playlist, idx) in playlists" :key="idx">{{ playlist.name }}</li>
                      </ul>
                    </div>
                  </button>
                  </div>
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
      </section>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed, watch, onMounted} from 'vue';
import { fetchPlaylist } from '../api/Playlist';


const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const playlist=ref({})
const track=ref({})


// const track = ref([
//   { id: 1, title: "Track 1", artist:"artist_name", duration: "3:45" },
//   { id: 2, title: "Track 2", artist:"artist_name", duration: "4:15" },
//   { id: 3, title: "Track 3", artist:"artist_name", duration: "3:30" },
// ]);

const showOptions = ref({});
const showPlaylists = ref({});
// const playlists = ref([
//   { name: "Playlist 1" },
//   { name: "Playlist 2" },
//   { name: "Playlist 3" }
// ]);



const fetchPlaylistData = async (playlistId) => {
  try {
    playlist.value = await fetchPlaylist(playlistId);
    track.value = playlist.value.track || []
    console.log("playlist value", playlist.value);
    console.log("track value", track.value);


    
  } catch (error) {
    console.log("Error fetching playlist", error);
  }
};


const toggleOptions = (index) => {
  showOptions.value = { ...showOptions.value, [index]: !showOptions.value[index] };
};

const editTrack = (track) => {
  console.log('Editing track:', track.title);
};

const deleteTrack = async (trackId) => {
  console.log('Deleting track with ID:', trackId);
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/track/delete/${trackId}/`);
    console.log(response.data);
    track.value = track.value.filter(track => track.id !== trackId);
  } catch (error) {
    console.error(error);
  }
};
const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${playlist.value.image || ''}`;


  
});

const trackImageUrl = (image) => {
  return `${import.meta.env.VITE_API_BASE_URL}${image || ''}`;
};

watch(() => props.id, (newId) => {
  fetchPlaylistData(newId)
})

onMounted(() => {
  fetchPlaylistData(props.id);
})
</script>


<style scoped>
.playlist-header {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/src/assets/pic/album-cover-url.jpg') no-repeat center center;
  background-size: cover;
}

.hover\:bg-gray-700:hover {
  background-color: #4a4a4a;
}
</style>