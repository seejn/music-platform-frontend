
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
