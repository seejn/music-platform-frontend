<template>
  <div class="sidebar1 bg-black text-white p-6 h-min">
    <nav>
      <ul class="space-y-4">
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path" class="flex items-center text-2xl leading-loose font-semibold hover:underline">
            <i class="fas fa-home mr-3"></i>{{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div class="bg-black text-white p-6 h-full">
    <nav>
      <ul class="space-y-8">
        <li class="flex items-center mb-4">
          <router-link to="#" class="flex items-center text-2xl leading-loose font-semibold hover:underline">
            <i class="fas fa-book mr-3 bg-slate-300"></i>Library
          </router-link>
          <i class="fas fa-plus ml-3"></i>

          <svg @click="handleCreatePlaylist" class="w-5 h-5 fill-current text-white ml-16 cursor-pointer" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z"/>
          </svg>
        </li>

        <li class="flex flex-col md:flex-col lg:flex-row items-center space-x-6">
          <button @click="fetchPlaylists" :class="{'bg-gray-700': showPlaylists}" class="rounded-full border border-gray-700 px-5 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Playlist
          </button>
          <button @click="fetchAlbums" :class="{'bg-gray-700': !showPlaylists}" class="rounded-full border border-gray-700 px-7 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Album
          </button>
        </li>
        
        <template v-if="showPlaylists">
          <li v-for="playlist in playlists" :key="playlist.id">
            <router-link :to="{name: 'SinglePlaylist', params: {id: playlist.id}}" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img :src="playlist.image" alt="Playlist" class="w-8 h-8 mr-3 rounded-full" />{{ playlist.title }} #{{ playlist.id }}
            </router-link>
          </li>
        </template>
        <template v-else>
          <li v-for="album in albums" :key="album.id">
            <router-link :to="{name: 'SingleAlbum', params: {id: album.id}}" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img :src="album.image" alt="Album" class="w-8 h-8 mr-3 rounded-full" />{{ album.title }}
            </router-link>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router' 
import { sidebarRoutes as routes } from '../../router.js'
import { createPlaylist, updatePlaylist, fetchAllPlaylists } from '../../api/Playlist.js'; 
import axios from 'axios'

const router = useRouter() 

const showPlaylists = ref(true)
const playlists = ref([])
const albums = ref([])
const createdPlaylist= ref({})

const fetchPlaylists = async () => {
  try {
    playlists.value = await fetchAllPlaylists()
    showPlaylists.value = true
  } catch (error) {
    console.error('Error fetching playlists:', error)
  }
}

const fetchAlbums = () => {
  axios.get('http://localhost:8000/album/get_all_albums/')
    .then(response => {
      albums.value = response.data.data
      showPlaylists.value = false
    })
    .catch(error => {
      console.error('Error fetching albums:', error)
    })
}

const handleCreatePlaylist = async () => {
  const playlistName = "My Playlist";  
  const newPlaylist = {
    title: playlistName,
  }

  try {
    const created = await createPlaylist(newPlaylist); 
    createdPlaylist.value = created; 
    fetchPlaylists()

  } catch (error) {
    console.error('Error creating playlist:', error)
  }
}

watch(() => createdPlaylist.value, (newVal) => {
  console.log("newval",newVal)
  router.push(`/single-playlist/${newVal.data.id}`);
});

onMounted(() => {
  fetchPlaylists()
})
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
