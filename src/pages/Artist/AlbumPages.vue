<template>
  <Layout>
    <template #Main>

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
  </Layout>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'AlbumList',
  setup() {
    const albums = ref([
      {
        id: 1,
        name: 'Album 1',
        image: '/path/to/album1.jpg',
        songs: [
          { title: 'Song 1', duration: '3:45' },
          { title: 'Song 2', duration: '4:15' },
          { title: 'Song 3', duration: '3:30' }
        ]
      },
      {
        id: 2,
        name: 'Album 2',
        image: '/path/to/album2.jpg',
        songs: [
          { title: 'Song 4', duration: '4:00' },
          { title: 'Song 5', duration: '3:20' },
          { title: 'Song 6', duration: '3:55' }
        ]
      }
    ]);

    const likeSong = (song) => {
      console.log('Liked:', song.title);
    };

    const addToPlaylist = (song) => {
      console.log('Added to playlist:', song.title);
    };

    const reportSong = (song) => {
      console.log('Reported:', song.title);
    };

    return { albums, likeSong, addToPlaylist, reportSong };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
