<template>
    <div class="min-h-screen flex flex-col overflow-x-hidden">
      <nav class="w-full bg-gray-900 text-white p-4 flex justify-between fixed top-0 z-20">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold hover:text-gray-400">Home</router-link>
          <router-link to="/about" class="ml-6 text-xl hover:text-gray-400">About</router-link>
        </div>
        <div>
          <button class="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </div>
      </nav>
  
      <div class="flex flex-grow min-h-0 mt-16">
        <div class="bg-gray-800 w-1/5 min-h-full flex flex-col text-white fixed top-16 bottom-0 pt-4">
          <div class="flex flex-col flex-grow px-6 py-4 items-start">
            <router-link to="/allartist" class="text-white text-xl mb-5 hover:text-blue-400">Artist</router-link>
            <router-link to="/allsongs" class="text-white text-xl mb-5 hover:text-blue-400">Songs</router-link>
            <router-link to="/admin-profile" class="text-white text-xl mb-5 hover:text-blue-400">My Profile</router-link>
          </div>
        </div>
  
        <div class="flex-grow bg-black overflow-hidden">
          <div class="fixed h-full opacity-60 z-0 ml-[20%]">
            <img src="/src/assets/vin2.png" alt="Background Image" class=" h-full">
          </div>
  
         
          <div class="relative my-16 mx-[40%] overflow-hidden p-6 rounded-3xl bg-black w-2/5 h-5/6 bg-opacity-85 border-2 border-red-800">
           
            <div class="flex justify-center my-6">
              <button @click="showSongForm = true" :class="{'bg-red-800': showSongForm, 'bg-gray-700': !showSongForm}" class="px-4 py-2 rounded-l hover:bg-red-800 hover:text-white">Upload Song</button>
              <button @click="showSongForm = false" :class="{'bg-red-800': !showSongForm, 'bg-gray-700': showSongForm}" class="px-4 py-2 rounded-r hover:bg-red-800 hover:text-white">Upload Album</button>
            </div>
  
            <div v-if="showSongForm" class="bg-black bg-opacity-50 rounded-lg p-6 w-full shadow-lg">
              <h2 class="text-2xl font-bold text-red-800 mb-4">Upload Song</h2>
              <form @submit.prevent="uploadSong">
                <div class="mb-4">
                  <label for="songTitle" class="block text-white mb-2">Title</label>
                  <input type="text" id="songTitle" v-model="songTitle" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songTitle" class="block text-white mb-2">Duration</label>
                  <input type="number" id="songDuration" v-model="songDuration" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songTitle" class="block text-white mb-2">Released Date</label>
                  <input type="date" id="songReleasedDate" v-model="songReleasedDate" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songTitle" class="block text-white mb-2">Genre</label>
                  <input type="text" id="songGenre" v-model="songGenre" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="songFile" class="block text-white mb-2">Image</label>
                  <input type="file" id="songFile" @change="handleSongImageChange" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600">
                </div>
                <button type="submit" class=" ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800 hover:text-white">Upload Song</button>
              </form>
            </div>
  
            <div v-else class="bg-black bg-opacity-50 rounded-lg p-6 w-full shadow-lg">
              <h2 class="text-2xl font-bold text-red-800 mb-4">Upload Album</h2>
              <form @submit.prevent="uploadAlbum">
                <div class="mb-4">
                  <label for="albumTitle" class="block text-white mb-2">Title</label>
                  <input type="text" id="albumTitle" v-model="albumTitle" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600">
                </div>
                <div class="mb-4">
                  <label for="songTitle" class="block text-white mb-2">Released Date</label>
                  <input type="date" id="albumReleasedDate" v-model="albumReleasedDate" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-800 caret-red-800">
                </div>
                <div class="mb-4">
                  <label for="albumCover" class="block text-white mb-2">Album Cover</label>
                  <input type="file" id="albumCover" @change="handleAlbumCoverChange" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600">
                </div>
                <div class="mb-4">
                  <label for="albumFile" class="block text-white mb-2">Album Track</label>
                  <input type="file" id="albumFile" @change="handleAlbumFileChange" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600">
                </div>
                <button type="submit" class="ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800">Upload Album</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showSongForm = ref(true);
  const songTitle = ref('');
  const albumTitle = ref('');
  
  const uploadSong = () => {
    console.log('Uploading song:', songTitle.value);
  };
  
  const uploadAlbum = () => {
    console.log('Uploading album:', albumTitle.value);
  };
  
  const handleSongImageChange = (e) => {
    console.log('Selected song file:', e.target.files[0]);
  };
  
  const handleAlbumCoverChange = (e) => {
    console.log('Selected album cover:', e.target.files[0]);
  };
  
  const handleAlbumFileChange = (e) => {
    console.log('Selected album file:', e.target.files[0]);
  };
  </script>
  
  <style scoped>

  </style>
  