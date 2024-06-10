<!-- <template>
    <div class="my-4 flex items-center space-x-4 w-full">
        <img class="song-cover" src="https://via.placeholder.com/150" alt="Album Cover" />
        <div class="flex-grow song-info">
            <h3 class="text-xl font-semibold">{{ track?.title || "TrackName" }}</h3>
            <p class="text-gray-600">{{ track?.artist?.id }}</p>
        </div>
        <audio controls class="media-player">
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Playlist
        </button>
    </div>
</template> -->
<template>
    <div class="track relative flex-shrink-0 mx-5 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-red-800 hover:border-red-800 transition-all duration-300">
      <img :src="imageUrl" alt="Cover Image" class="w-full h-full object-cover">
      <div class="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white">
        <h3 class="text-xl">{{ track?.title || "TrackName" }}</h3>
        <p>{{ track?.artist?.first_name }} {{ track?.artist?.last_name }}</p>
      </div>
    </div>
  </template>

<script setup>
import { computed } from 'vue';



const props = defineProps({
    track: {
        type: Object,
        required: true
    }
})

const imageUrl =  computed(() => {
    if(props.track.image) return `${import.meta.env.VITE_API_BASE_URL}${props.track.image}`;
    else return "/src/assets/placeholders/image.png"
});
</script>


<style scoped>
.track {
  width: 300px;  /* Set the desired fixed width */
  height: 300px; /* Set the desired fixed height */
}

.track img {
  object-fit: cover;
}

.track h3, .track p {
  margin: 0; /* Remove default margins for consistency */
}
</style>