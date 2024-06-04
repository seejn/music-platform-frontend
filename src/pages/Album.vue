<template>
    <div class="p-0 bg-black text-white">
      <h1 class="text-4xl font-bold mb-8">Taylor Swift</h1>
  
      <div v-for="album in albums" :key="album.id" class="mb-12">
        <div class="flex items-center mb-4">
          <img :src="album.image" alt="Album Cover" class="w-24 h-24 mr-4 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold">{{ album.name }}</h2>
          
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed">
            <thead class="bg-zinc-800">
              <tr>
                <th class="px-4 py-2 text-left w-3/5">Title</th>
                <th class="px-4 py-2 text-left w-1/5">Duration</th>
                <th class="px-4 py-2 text-left w-1/5"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="song in album.songs" :key="song.title" class="last:border-0">
                <td class="px-4 py-2">{{ song.title }}</td>
                <td class="px-4 py-2">{{ song.duration }}</td>
                <td class="px-4 py-2 flex space-x-2">
                  <button @click="likeSong(song)" class="text-gray-400 hover:text-gray-200">
                    <i class="fas fa-heart"></i>
                  </button>
                  <button @click="addToPlaylist(song)" class="text-gray-400 hover:text-gray-200">
                    <i class="fas fa-plus"></i>
                  </button>
                  <button @click="reportSong(song)" class="text-gray-400 hover:text-gray-200">
                    <i class="fas fa-ellipsis-h"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlbumList',
    data() {
      return {
        albums: [
          {
            id: 1,
            name: "Fearless (Taylor's Version)",
            image: '/src/assets/ha.jpeg',
            songs: [
              { title: "Love Story (Taylor's Version)", duration: "3:55" },
              { title: "You Belong With Me (Taylor's Version)", duration: "3:52" },
              { title: "Fifteen (Taylor's Version)", duration: "4:54" },
              // Add remaining songs here with durations
            ],
          },
          {
            id: 2,
            name: "Red (Taylor's Version)",
            image: '/src/assets/bil.jpeg',
            songs: [
              { title: "State of Grace (Taylor's Version)", duration: "4:55" },
              { title: "Red (Taylor's Version)", duration: "3:43" },
              { title: "Treacherous (Taylor's Version)", duration: "4:02" },
              // Add remaining songs here with durations
            ],
          },
          {
            id: 3,
            name: "1989 (Taylor's Version)",
            image: '/src/assets/1989.jpg',
            songs: [
              { title: "Welcome To New York (Taylor's Version)", duration: "3:32" },
              { title: "Blank Space (Taylor's Version)", duration: "3:51" },
              { title: "Style (Taylor's Version)", duration: "3:51" },
              // Add remaining songs here with durations
            ],
          },
          {
            id: 4,
            name: "Lover",
            image: '/src/assets/lover.jpg',
            songs: [
              { title: "I Forgot That You Existed", duration: "2:50" },
              { title: "Cruel Summer", duration: "2:58" },
              { title: "Lover", duration: "3:41" },
              // Add remaining songs here with durations
            ],
          },
        ],
      };
    },
    methods: {
      likeSong(song) {
        // Implement like song functionality
        console.log('Liked:', song.title);
      },
      addToPlaylist(song) {
        // Implement add to playlist functionality
        console.log('Added to playlist:', song.title);
      },
      reportSong(song) {
        // Implement report song functionality
        console.log('Reported:', song.title);
      },
    },
  };
  </script>
  