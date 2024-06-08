<template>
<Layout>
    <template #Main>
        <section class="py-4">
            <h2 class="text-2xl font-bold my-4 text-white">Tours by Artists</h2>
            <div class="flex flex-row">
                        <button @click="showAddTour = true" class=" border-2 border-red-800 text-white hover:ring-2 hover:ring-red-800  hover:text-white py-3 px-3 rounded-lg  mb-4 flex felx-end block">Add Tour</button>
                    </div>
            <div class="flex-grow p-6">
                <div class=" rounded-lg p-6">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="tour in tours" :key="tour.id" class=" p-4 rounded-lg shadow-lg border-2 border-red-800">
                            <div class="mr-4 flex-shrink-0">
                                <img :src="tour.artist ? imageUrl(tour.artist) : ''" alt="Artist Image" class="w-25 h-24 rounded-lg">
                            </div>
                            <h5 class="text-white text-xl">{{ tour ? tour.title : 'Unknown Title' }}</h5>
                            <h3 class="text-white text-lg font-semibold">{{ tour.artist ? tour.artist.first_name + ' ' + tour.artist.last_name : 'Unknown Artist' }}</h3>
                            <p class="text-gray-400">Date: {{ tour.date }}</p>
                            <p class="text-gray-400">Location: {{ tour.location }}</p>
                            <p class="text-gray-400">Venue: {{ tour.venue }}</p>
                            <p class="text-gray-400">Time: {{ tour.time }}</p>
                            <div class="mt-4 flex justify-end ">
                                <button @click="updateSong(song.id)" class="border-2 border-red-800 hover:ring-2 hover:ring-red-800  hover:text-white text-white font-bold py-2 px-4 rounded mr-2">Update</button>
                                <button @click="deleteSong(song.id)" class="border-2 border-red-800 hover:ring-2 hover:ring-red-800  hover:text-white text-white font-bold py-2 px-4 rounded">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </template>
</Layout>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { fetchAllTours, createTour } from '../../api/Tour';
import { fetchAllArtists } from '../../api/Artist'; 
const tours = ref([]);
const artists = ref([]);



onMounted(async () => {
  try {
    tours.value = await fetchAllTours();
    artists.value = await fetchAllArtists();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const imageUrl = (artist) => {
    return `${import.meta.env.VITE_API_BASE_URL}${artist.image || "/src/assets/pic/ch.jpeg"}`;
};
</script>
