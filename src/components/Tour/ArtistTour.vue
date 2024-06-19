<template>
  <div v-if="tour" class="tour-card bg-black w-[20rem] bg-opacity-80 p-4 rounded-lg mb-5 shadow-md border-2 text-center hover:shadow-xl hover:shadow-red-800 hover:border-red-800 transition-all duration-300 text-white border-red-800">
    <div class="flex flex-row h-full">
      <div class="mx-2 my-2 flex-grow text-center">
        <h5 class="text-white text-xl">{{ tour.title || 'Unknown Title' }}</h5>
        <p class="text-white text-lg">Date: {{ tour.date || 'Unknown Date' }}</p>
        <p class="text-white text-lg">Location: {{ tour.location || 'Unknown Location' }}</p>
        <p class="text-white text-lg">Venue: {{ tour.venue || 'Unknown Venue' }}</p>
        <p class="text-white text-lg">Time: {{ formattedTime || 'Unknown Time' }}</p>
      </div>
    </div>
  </div>
  <div v-else class="text-white text-center">Loading...</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tour: {
    type: Object,
    required: true
  }
});

const formattedTime = computed(() => {
  if (!props.tour.time) return 'Unknown Time';
  
  const time = props.tour.time;
  let [hours, minutes] = time.split(':').map(Number);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  
  return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
});
</script>

<style scoped>
.tour-card:last-child {
  margin-right: 0;
}
</style>
