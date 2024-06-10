<template>
    <div class="playlist-container">
      <h2 class="text-4xl font-bold text-white my-5 ">Playlists</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="playlist in playlists" :key="playlist.id" class="playlist-item bg-gray-800 bg-opacity-50 rounded-lg p-4 glass-effect">
          <img :src="playlist.image" alt="Playlist Cover" class="w-full h-32 object-cover rounded-md mb-2">
          <h3 class="text-xl font-bold text-white">{{ playlist.title }}</h3>
          <p class="text-white">{{ playlist.songCount }} Songs</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const playlists = ref([
    {
      id: 1,
      title: 'Chill Vibes',
      songCount: 20,
      image: '/src/assets/pink.jpg',
    },
    {
      id: 2,
      title: 'Workout Hits',
      songCount: 15,
      image: '/src/assets/tay.jpg',
    },
    {
      id: 3,
      title: 'Top Hits 2023',
      songCount: 25,
      image: '/src/assets/lo.jpeg',
    },
  ]);
  </script>   