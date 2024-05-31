<template>
  <div class="min-h-screen flex flex-col">
    <nav class="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="text-2xl font-bold hover:text-gray-400">Home</router-link>
        <router-link to="/about" class="ml-6 text-xl hover:text-gray-400">About</router-link>
      </div>
      <div>
        <button class="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Login</button>
      </div>
    </nav>

    <div class="flex flex-grow min-h-0">
      <sidebar class="bg-gray-800 w-2/5 min-h-full flex flex-col text-white">
        <div class="flex flex-col flex-grow px-6 py-4 items-center">
          <router-link to="/allartist" class="text-white text-xl mb-5 hover:text-blue-400">Artist</router-link>
          <router-link to="/allsongs" class="text-white text-xl mb-5 hover:text-blue-400">Songs</router-link>
          <router-link to="/admin-profile" class="text-white text-xl mb-5 hover:text-blue-400">My Profile</router-link>
        </div>
      </sidebar>

      <div class="flex-grow bg-black relative">
        <div class="fixed inset-0 opacity-20 z-0">
          <img src="/public/con.jpeg" alt="Background Image" class="w-full h-full object-cover">
        </div>
        <div class="relative z-10 p-6 bg-black bg-opacity-85 mt-56">
          <div class="flex items-center mb-5">
            <img src="/public/con.jpeg" alt="Conan Gray" class="rounded-full w-40 mr-4">
            <div>
              <p class="text-white text-5xl font-bold mb-3">Conan Gray</p>
              <p class="text-white">Conan Lee Gray is an American singer-songwriter and former YouTuber born on December 5, 1998, in Lemon Grove, California, and raised in Georgetown, Texas. He began uploading vlogs, covers, and original songs to YouTube as a teenager and gained popularity for his soulful voice and relatable lyrics.</p>
            </div>
          </div>

          <div class="bg-black bg-opacity-50 rounded-lg p-6 overflow-y-auto shadow-lg max-h-full">
            <h2 class="text-2xl font-bold text-white mb-4">Songs</h2>
            <table class="min-w-full bg-transparent text-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 text-left">Title</th>
                  <th class="py-2 px-4 text-left">Release Date</th>
                  <th class="py-2 px-4 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(song, index) in songs" :key="index">
                  <td class="py-2 px-4 text-left border-b border-white">{{ song.title }}</td>
                  <td class="py-2 px-4 text-left border-b border-white">{{ song.releaseDate }}</td>
                  <td class="py-2 px-4 text-left border-b border-white">{{ song.duration }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-opacity-0">
            <Album />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Album from '../Artist/Album.vue';

const songs = ref([
  { title: 'Song 1', releaseDate: '2023-01-01', duration: '3:45' },
  { title: 'Song 2', releaseDate: '2023-01-15', duration: '4:05' },
  { title: 'Song 3', releaseDate: '2023-02-01', duration: '2:30' },
  { title: 'Song 4', releaseDate: '2023-02-20', duration: '3:15' },
  { title: 'Song 5', releaseDate: '2023-03-10', duration: '4:00' },
]);
</script>

<style scoped>
div.overflow-auto {
  max-height: 100vh;
}
</style>
