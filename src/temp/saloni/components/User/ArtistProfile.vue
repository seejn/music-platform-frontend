<template>
  <div class="flex flex-col" style="background-attachment: url('/public/con.jpeg');">
 
    <div class="flex flex-grow min-h-0">
  
      <div class="flex-grow flex-row  bg-black relative">
        <!-- <div class=" inset-0 opacity-20 z-0">
          <img src="/public/con.jpeg" alt="Background Image" class="w-full object-cover">
        </div> -->
        <div class="relative mt-48 p-6 w-full bg-black bg-opacity-90 overflow-hidden z-10">
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
