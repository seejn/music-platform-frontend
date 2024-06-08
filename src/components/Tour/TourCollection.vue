<template>
    <div>
      <h3 class="text-white text-2xl mb-10">Tour details</h3>
      <div class="flex flex-wrap justify-center">
        <ArtistTour v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
    </div>
  </template>
  
  <script setup>
import ArtistTour from './ArtistTour.vue'
  import { ref, watchEffect } from 'vue';
  import { fetchArtistTour } from '../../api/Tour';
  
  const props = defineProps({
    artistId: {
      type: Number,
      required: true
    }
  });
  
  const tours = ref([]);
  
  const fetchTours = async () => {
    try {
      if (props.artistId) {
        const fetchedTours = await fetchArtistTour(props.artistId);
        tours.value = fetchedTours;
      }
    } catch (error) {
      console.log("Error fetching artist tours:", error);
    }
  };
  
  watchEffect(() => {
    fetchTours();
  });
  </script>
  