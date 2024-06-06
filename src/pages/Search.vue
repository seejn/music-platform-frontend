<template>
  <Layout>
    <template #Main>

      <div class="p-6">
        <input
        v-model="searchQuery"
      placeholder="Search for albums, artists, or playlists..."
      class="w-full p-4 mb-6 rounded-lg bg-black text-white"
    />
    <div v-if="filteredResults.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(result, index) in filteredResults"
        :key="index"
        class="bg-black rounded-lg text-white"
        >
        <div class="p-4 border border-gray-800">
          <!-- Depending on the type of result (song, artist, playlist), customize the card component -->
          <h2 class="text-lg font-bold">{{ result.name }}</h2>
          <p class="text-sm">{{ result.type }}</p>
          <!-- You can add more details here -->
        </div>
      </div>
    </div>
    <div v-else class="text-center text-white">
      No results found.
    </div>
  </div>
</template>

</Layout>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      mockData: [
        { name: 'Billie Eilish', type: 'Artist' },
        { name: 'Taylor Swift', type: 'Artist' },
        { name: 'No Time to Die', type: 'Song' },
        { name: 'Watermelon Sugar', type: 'Song' },
        { name: 'Sunflower', type: 'Song' },
        { name: 'Sunflower (Post)', type: 'Song' },
        { name: 'Daylight', type: 'Song' },
        { name: 'Dua Lipa', type: 'Artist' },
        // Add more mock data for playlists if needed
      ]
    };
  },
  computed: {
    filteredResults() {
      if (this.searchQuery.trim() === '') {
        return [];
      }
      return this.mockData.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>
