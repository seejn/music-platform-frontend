<template>
    <div class="bg-black bg-opacity-50 rounded-lg p-6  shadow-lg max-h-full">
          <h2 class="text-4xl font-bold text-white mb-4"> Top Songs</h2>
          <table class="min-w-full bg-transparent text-white">
            <thead>
              <tr>
                <th class="py-2 px-4 text-left">Title</th>
                <th class="py-2 px-4 text-left">Release Date</th>
                <th class="py-2 px-4 text-left">Artist</th>
                <th class="py-2 px-4 text-left">Image</th>
                <th class="py-2 px-4 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(song, index) in songs" :key="index">
                <td class="py-2 px-4 text-left border-b border-red-800">{{ song.title }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ song.releaseDate }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ song.artist }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ song.image }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ song.duration }}</td>
              </tr>
            </tbody>
          </table>
        </div>
</template>
<script setup>
import { ref } from 'vue';


const songs = ref([
{ title: 'Song 1', releaseDate: '2023-01-01', duration: '3:45',artist:'Harry Style',image:'img.png' },
{ title: 'Song 2', releaseDate: '2023-01-15', duration: '4:05',artist:'Harry Style',image:'img.png' },
{ title: 'Song 3', releaseDate: '2023-02-01', duration: '2:30',artist:'Harry Style',image:'img.png' },
{ title: 'Song 4', releaseDate: '2023-02-20', duration: '3:15',artist:'Harry Style',image:'img.png' },
{ title: 'Song 5', releaseDate: '2023-03-10', duration: '4:00',artist:'Harry Style',image:'img.png' },
]);
</script>