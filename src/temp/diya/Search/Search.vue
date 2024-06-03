<template>
    <div class="p-6">
      <input
        v-model="searchQuery"
        placeholder="Search for albums or artists..."
        class="w-full p-4 mb-6 rounded-lg  bg-black text-white"
      />
      <div v-if="filteredResults.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="result in filteredResults"
          :key="result"
          class="bg-black p-6 rounded-lg text-center text-white"
        >
          {{ result }}
        </div>
      </div>
      <div v-else class="text-center text-white">
        No results found.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        mockData: [
          'Billie',
          'Taylor',
          'No time to die',
          'Watermelon Sugar',
          'Sunflower',
          'Sunflower-post',
          'Daylight',
          'Dua Lipa'
        ]
      };
    },
    computed: {
      filteredResults() {
        if (this.searchQuery.trim() === '') {
          return [];
        }
        return this.mockData.filter(item =>
          item.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
  };
  </script>
  