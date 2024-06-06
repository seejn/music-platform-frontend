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
          <button @click="showPlaylists = true" class="rounded-full border border-gray-700 px-5 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Playlist
          </button>
          <button @click="showPlaylists = false" class="rounded-full border border-gray-700 px-7 py-1 text-1xl leading-loose font-semibold hover:bg-gray-700">
            Album
          </button>
        </li>
        
        <template v-if="showPlaylists">
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
            </router-link>
          </li>
        </template>
        <template v-else>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
            </router-link>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { sidebarRoutes as routes } from '../../router.js'


const showPlaylists = ref(true)
</script>

<style scoped>

</style>

