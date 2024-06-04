<template>
    <Layout>
      <template #Main>
        <div class="flex-grow bg-black overflow-hidden relative">
          <div class="relative opacity-80 z-0 min-w-screen h-full">
            <img src="/src/assets/pic/vin2.png" alt="Background Image" class="h-full w-full object-cover">
          </div>
  
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 my-16 p-6 rounded-3xl bg-black w-2/5 h-5/6 bg-opacity-85 border-2 border-red-800 z-10 hover:shadow-red-800 hover:shadow-lg transition-shadow duration-700">
            <div class="flex justify-center my-6">
              <button @click="showSongForm = true" :class="{'bg-red-800': showSongForm, 'bg-gray-700': !showSongForm}" class="px-4 py-2 rounded-l text-white hover:bg-red-800 hover:text-white">Upload Song</button>
              <button @click="showSongForm = false" :class="{'bg-red-800': !showSongForm, 'bg-gray-700': showSongForm}" class="px-4 py-2 rounded-r text-white hover:bg-red-800 hover:text-white">Upload Album</button>
            </div>
  
            <div v-if="showSongForm" class="bg-black bg-opacity-50 rounded-lg p-3 w-full shadow-lg">
              <h2 class="text-2xl font-bold text-red-800 mb-4">Upload Song</h2>
              <form @submit.prevent="uploadSong">
                <div class="mb-4">
                  <label for="songTitle" class="block text-white mb-2">Title</label>
                  <input type="text" id="songTitle" v-model="songTitle" class="w-full p-2 rounded outline-none bg-gray-700 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songDuration" class="block text-white mb-2">Duration</label>
                  <input type="number" id="songDuration" v-model="songDuration" class="w-full p-2 rounded outline-none bg-gray-700 text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songReleasedDate" class="block text-white mb-2">Released Date</label>
                  <input type="date" id="songReleasedDate" v-model="songReleasedDate" class="w-full p-2 rounded outline-none bg-gray-700 text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songGenre" class="block text-white mb-2">Genre</label>
                  <input type="text" id="songGenre" v-model="songGenre" class="w-full p-2 rounded bg-gray-700 outline-none text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songFile" class="block text-white mb-2">Image</label>
                  <input type="file" id="songFile" @change="handleSongImageChange" class="w-full p-2 rounded outline-none bg-gray-700 text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800">
                </div>
                <button type="submit" class="ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800 hover:text-white">Upload Song</button>
              </form>
            </div>
  
            <div v-else class="bg-black bg-opacity-50 rounded-lg p-6 w-full shadow-lg">
              <h2 class="text-2xl font-bold text-red-800 mb-4">Upload Album</h2>
              <form @submit.prevent="uploadAlbum">
                <div class="mb-4">
                  <label for="albumTitle" class="block text-white mb-2">Title</label>
                  <input type="text" id="albumTitle" v-model="albumTitle" class="w-full p-2 rounded outline-none bg-gray-700 focus:border-red-800 focus:ring-2 focus:ring-red-800 text-white caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="albumReleasedDate" class="block text-white mb-2">Released Date</label>
                  <input type="date" id="albumReleasedDate" v-model="albumReleasedDate" class="w-full p-2 rounded outline-none bg-gray-700 border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 text-white caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="albumCover" class="block text-white mb-2">Album Cover</label>
                  <input type="file" id="albumCover" @change="handleAlbumCoverChange" class="w-full p-2 rounded outline-none bg-gray-700 focus:border-red-800 focus:ring-2 focus:ring-red-800 text-white caret-red-800 border border-gray-600">
                </div>
                <div class="mb-4">
                  <label for="albumFile" class="block text-white mb-2">Album Track</label>
                  <input type="file" id="albumFile" @change="handleAlbumFileChange" class="w-full p-2 rounded outline-none bg-gray-700 focus:border-red-800 focus:ring-2 focus:ring-red-800 text-white caret-red-800 border border-gray-600">
                </div>
                <button type="submit" class="ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800">Upload Album</button>
              </form>
            </div>
          </div>
        </div>
      </template>
    </Layout>
  </template>

<script setup >
import CreateAlbum from '../../components/Album/CreateAlbum.vue';
import UploadTrack from '../../components/Track/UploadTrack.vue';
import {
    ref
} from 'vue';

const showSongForm = ref(true);
</script>
<style>

.hover\:shadow-red-800:hover {
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
}

.transition-shadow {
  transition: box-shadow 0.3s ease-in-out;
}
</style>
