<template>
  <div v-if="tour" class="tour-card bg-black bg-opacity-80 p-4 rounded-lg mb-5 ml-3 shadow-md border-2 text-center hover:shadow-xl hover:shadow-red-800 hover:border-red-800 transition-all duration-300 text-white border-red-800">
    <div class="flex flex-row h-full">
      <div>
        <img :src="tour.artist ? imageUrl(tour.artist) : ''" alt="Artist Image" class="rounded-lg mt-2 border-2 border-white w-48 h-48 object-cover">
      </div>
      <div class="mx-2 my-2 flex-grow text-center">
        <h5 class="text-white text-xl">{{ tour.title || 'Unknown Title' }}</h5>
        <h3 class="text-white text-lg font-semibold">{{ tour.artist ? tour.artist.first_name + ' ' + tour.artist.last_name : 'Unknown Artist' }}</h3>
        <p class="text-white text-lg">Date: {{ tour.date || 'Unknown Date' }}</p>
        <p class="text-white text-lg">Location: {{ tour.location || 'Unknown Location' }}</p>
        <p class="text-white text-lg">Venue: {{ tour.venue || 'Unknown Venue' }}</p>
        <p class="text-white text-lg">Time: {{ tour.time || 'Unknown Time' }}</p>
      </div>
    </div>
  </div>
  <div v-else class="text-white text-center">Loading...</div>
</template>

<script setup>
const props = defineProps({
  tour: {
    type: Object,
    required: true
  }
});

const imageUrl = (artist) => {
  return `${import.meta.env.VITE_API_BASE_URL}${artist.image || "/src/assets/pic/ch.jpeg"}`;
};
</script>

<style scoped>
.tour-card {
  width: 900px;
  height: 250px;
}

.tour-card:last-child {
  margin-right: 0;
}
</style>
