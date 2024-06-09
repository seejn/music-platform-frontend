<template>
  <div>
    <h3 class="text-white text-2xl mb-10">Tour details</h3>
    <div class="flex flex-wrap">
      <div v-for="tour in tours" :key="tour.id" class="flex-grow max-w-md ml-4 mb-4">
        <div class="border-2 border-red-800 bg-black shadow-lg overflow-hidden">
          <div class="px-6 py-4">
            <div class="text-sm text-white">{{ tour.title }}</div>
            <div class="mt-4 text-white">
              <p><span class="font-semibold">Date</span> {{ tour.date }}</p>
              <p><span class="font-semibold">Location</span> {{ tour.location }}</p>
              <p><span class="font-semibold">Venue</span> {{ tour.venue }}</p>
              <p><span class="font-semibold">Time</span> {{ tour.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
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

onMounted(() => {
  fetchTours();
});
</script>

<style scoped>

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

.flex-grow {
  flex-grow: 1;
  flex-basis: 30%; 
  min-width: 250px; 
}

.max-w-md {
  max-width: 300px; 
}
</style>
