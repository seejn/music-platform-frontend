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
  <div class="bg-black text-white p-6 overflow-y-auto h-full">
    <nav>
      <ul class="space-y-8">
        <li class="flex items-center mb-4">
          <router-link to="#" class="flex items-center text-2xl leading-loose font-semibold hover:underline">
            <i class="fas fa-book mr-3 bg-slate-300"></i>Library
          </router-link>
          <i class="fas fa-plus ml-3"></i>
          <router-link :to="{ path: '/createplaylist' }">
            <svg class="w-5 h-5 fill-current text-white ml-16 cursor-pointer" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z"/>
            </svg>
          </router-link>
        </li>

        <li class="flex items-center space-x-6">
          <button @click="fetchPlaylists" :class="{'bg-gray-700': showPlaylists}" class="rounded-full border border-gray-700 px-5 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Playlist
          </button>
          <button @click="fetchAlbums" :class="{'bg-gray-700': !showPlaylists}" class="rounded-full border border-gray-700 px-7 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Album
          </button>
        </li>
        
        <template v-if="showPlaylists">
          <li v-for="playlist in playlists" :key="playlist.id">
            <router-link :to="'/single-playlist/' + playlist.id" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img :src="playlist.image" alt="Playlist" class="w-8 h-8 mr-3 rounded-full" />{{ playlist.title }}
            </router-link>
          </li>
        </template>
        <template v-else>
          <li v-for="album in albums" :key="album.id">
            <router-link :to="'/single-album/' + album.id" class="flex items-center text-lg leading-loose font-semibold hover:underline">
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
import { sidebarRoutes as routes } from '../../router.js'
import axios from 'axios'

const showPlaylists = ref(true)
const playlists = ref([])
const albums = ref([])

const fetchPlaylists = () => {
  axios.get('http://localhost:8000/track/get_all_playlist/')
    .then(response => {
      playlists.value = response.data.data
      showPlaylists.value = true
    })
    .catch(error => {
      console.error('Error fetching playlists:', error)
    })
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

onMounted(() => {
  fetchPlaylists() 
})

</script>

<style scoped>
</style>
