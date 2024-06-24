<template>
  <div class="sidebar1 bg-black text-white p-6 h-min">
    <nav>
      <ul class="space-y-4">
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path" class="flex items-center text-2xl leading-loose font-semibold hover:text-red-800">
            <i :class="route.meta.iconClass"></i>{{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div class="bg-black text-white p-6 h-full">
    <nav>
      <ul class="space-y-8">
        <li class="flex items-center mb-4">
          <router-link to="#" class="flex items-center text-2xl leading-loose font-semibold hover:text-red-800">
            <i class="fas fa-book mr-3 bg-slate-300"></i>Library
          </router-link>

          <svg v-show="showPlaylists" @click="handleCreatePlaylist" class="w-5 h-5 fill-current text-white ml-16 cursor-pointer"
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z" />
          </svg>
        </li>

        <li class="flex flex-col md:flex-col lg:flex-row items-center space-x-6">
          <button @click="toggleShowPlaylists" :class="{ 'ring-4 ring-red-800': showPlaylists }"
            class="rounded-full border border-red-800 px-5 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Playlist
          </button>
          <button v-show="role === 2" @click="toggleShowPlaylists" :class="{ 'ring-4 ring-red-800 ': !showPlaylists }"
            class="rounded-full border border-red-800 px-7 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Album
          </button>
        </li>

        <template v-if="showPlaylists">
          <template v-if="!isPlaylistValid">
            <li class="flex items-center text-lg leading-loose font-semibold">No Playlists Available</li>
          </template>
          <template v-else>
            <li v-for="playlist in playlists" :key="playlist.id">
              <router-link :to="{ name: 'SinglePlaylist', params: { id: playlist.id } }"
                class="flex items-center text-lg leading-loose font-semibold hover:underline">
              {{ playlist.title }} 
              </router-link>
            </li>
          </template>
        </template>

        <template v-else-if="!showPlaylists">
          <template v-if="!isAlbumValid">
            <li class="flex items-center text-lg leading-loose font-semibold">No Albums Available</li>
          </template>
          <template v-else>
            <li v-for="album in albums" :key="album.id">
              <router-link :to="{ name: 'SingleAlbum', params: { id: album.id } }"
                class="flex items-center text-lg leading-loose font-semibold hover:underline">
              {{ album.title }}
              </router-link>
            </li>
          </template>

        </template>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router' 
import { sidebarRoutes as routes } from '../../router.js'
import { createPlaylist, updatePlaylist, fetchUserPlaylists } from '../../api/Playlist.js'; 
import { fetchArtistAlbums } from '../../api/Album.js';
import axios from 'axios'

import store from '../../store/store.js'


const user = store.getters.getUser
const role = store.getters.getRole
const playlists = ref([])

const router = useRouter() 

const isPlaylistValid = ref(true)
const isAlbumValid = ref(true)

const showPlaylists = ref(true)
const albums = ref([])
const createdPlaylist = ref({})


const toggleShowPlaylists = () => {
  showPlaylists.value = !showPlaylists.value
}

const loadUserPlaylists = async () => {
  
  const response = await fetchUserPlaylists(user.id)
  
  store.dispatch("setPlaylists", response)
  playlists.value = store.getters.getPlaylists
}



const loadUserAlbums = async () => {
  const response = await fetchArtistAlbums(user.id)
  if(!response.length) isAlbumValid.value = false
  
  albums.value = response
}



const handleCreatePlaylist = async () => {
  const playlistName = "My Playlist";  
  const newPlaylist = {
    title: playlistName,
  }

  try {
    const created = await createPlaylist(newPlaylist); 
    createdPlaylist.value = created;
    loadUserPlaylists()

  } catch (error) {
    console.error('Error creating playlist:', error)
  }

}

watch(() => store.getters.getPlaylists, (newVal)=>{
  playlists.value = newVal
})

watch(() => createdPlaylist.value, (newVal) => {
  console.log("newval", newVal)
  router.push(`/single-playlist/${newVal.data.id}`);
});

onMounted(() => {
  loadUserPlaylists()
  loadUserAlbums()
})
</script>

<style scoped>

</style>
